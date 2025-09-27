import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { supabase } from "../supabase";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  created_at: string;
  likes: number;
  shares: number;
}

export interface Poem {
  id: string;
  title: string;
  content: string;
  created_at: string;
  likes: number;
  shares: number;
}

interface ContentContextType {
  // Blog posts
  posts: BlogPost[];
  loading: boolean;
  addPost: (post: Omit<BlogPost, 'id' | 'created_at' | 'likes' | 'shares'>) => Promise<void>;
  editPost: (id: string, updates: Partial<Pick<BlogPost, 'title' | 'content'>>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  
  // Poems
  poems: Poem[];
  addPoem: (poem: Omit<Poem, 'id' | 'created_at' | 'likes' | 'shares'>) => Promise<void>;
  editPoem: (id: string, updates: Partial<Pick<Poem, 'title' | 'content'>>) => Promise<void>;
  deletePoem: (id: string) => Promise<void>;
}

const ContentContext = createContext<ContentContextType | null>(null);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [poems, setPoems] = useState<Poem[]>([]);
  const [loading, setLoading] = useState(true);

  // Load data from Supabase on mount
  useEffect(() => {
    loadPosts();
    loadPoems();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadPoems = async () => {
    try {
      const { data, error } = await supabase
        .from('poems')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPoems(data || []);
    } catch (error) {
      console.error('Error loading poems:', error);
    }
  };

  const addPost = async (postData: Omit<BlogPost, 'id' | 'created_at' | 'likes' | 'shares'>) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([postData])
        .select()
        .single();

      if (error) throw error;
      
      setPosts(prev => [data, ...prev]);
    } catch (error) {
      console.error('Error adding post:', error);
      throw error;
    }
  };

  const editPost = async (id: string, updates: Partial<Pick<BlogPost, 'title' | 'content'>>) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setPosts(prev => prev.map(post => 
        post.id === id ? data : post
      ));
    } catch (error) {
      console.error('Error editing post:', error);
      throw error;
    }
  };

  const deletePost = async (id: string) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setPosts(prev => prev.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  };

  const addPoem = async (poemData: Omit<Poem, 'id' | 'created_at' | 'likes' | 'shares'>) => {
    try {
      const { data, error } = await supabase
        .from('poems')
        .insert([poemData])
        .select()
        .single();

      if (error) throw error;
      
      setPoems(prev => [data, ...prev]);
    } catch (error) {
      console.error('Error adding poem:', error);
      throw error;
    }
  };

  const editPoem = async (id: string, updates: Partial<Pick<Poem, 'title' | 'content'>>) => {
    try {
      const { data, error } = await supabase
        .from('poems')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      setPoems(prev => prev.map(poem => 
        poem.id === id ? data : poem
      ));
    } catch (error) {
      console.error('Error editing poem:', error);
      throw error;
    }
  };

  const deletePoem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('poems')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setPoems(prev => prev.filter(poem => poem.id !== id));
    } catch (error) {
      console.error('Error deleting poem:', error);
      throw error;
    }
  };

  return (
    <ContentContext.Provider value={{
      posts,
      loading,
      addPost,
      editPost,
      deletePost,
      poems,
      addPoem,
      editPoem,
      deletePoem
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};