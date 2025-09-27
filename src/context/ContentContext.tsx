import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  shares: number;
}

export interface Poem {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  shares: number;
}

interface ContentContextType {
  // Blog posts
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'createdAt' | 'likes' | 'shares'>) => void;
  editPost: (id: string, updates: Partial<Pick<BlogPost, 'title' | 'content'>>) => void;
  deletePost: (id: string) => void;
  
  // Poems
  poems: Poem[];
  addPoem: (poem: Omit<Poem, 'id' | 'createdAt' | 'likes' | 'shares'>) => void;
  editPoem: (id: string, updates: Partial<Pick<Poem, 'title' | 'content'>>) => void;
  deletePoem: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | null>(null);

const initialPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building the Future",
    content: "Just finished working on a new React project with some amazing features. The intersection of engineering and creativity never ceases to amaze me. 🚀",
    createdAt: new Date().toISOString(),
    likes: 12,
    shares: 3
  },
  {
    id: "2", 
    title: "Puerto Rico Tech Scene",
    content: "The tech ecosystem in Puerto Rico is growing rapidly. Seeing more developers and entrepreneurs building innovative solutions for local and global markets. Exciting times ahead! 🌴💻",
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    likes: 8,
    shares: 5
  }
];

const initialPoems: Poem[] = [
  {
    id: "1",
    title: "Morning Coffee",
    content: `Steam rises like prayers
from the cup between my palms—
morning's first communion.

The world awakens slow,
but here in this quiet moment,
I am already whole.`,
    createdAt: new Date().toISOString(),
    likes: 24,
    shares: 8
  },
  {
    id: "2", 
    title: "City Rain",
    content: `The city wears rain
like a well-loved coat—
familiar, comfortable,
transforming.

Each drop a story,
each puddle a mirror
reflecting what we
choose to see.`,
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    likes: 31,
    shares: 12
  },
  {
    id: "3",
    title: "Heritage",
    content: `I carry my grandmother's hands,
my father's stubborn hope,
my mother's quiet strength.

In this new country,
I am both the seed
and the harvest.`,
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    likes: 45,
    shares: 18
  },
  {
    id: "4",
    title: "Builder's Prayer",
    content: `Let my hands know wood
like old friends know silence—
intimate, reverent.

Let each cut be clean,
each joint true,
each piece a small act
of faith.`,
    createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
    likes: 19,
    shares: 7
  }
];

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [poems, setPoems] = useState<Poem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedPosts = localStorage.getItem('zewo-blog-posts');
    const storedPoems = localStorage.getItem('zewo-poems');

    if (storedPosts) {
      try {
        setPosts(JSON.parse(storedPosts));
      } catch (error) {
        console.error('Error loading posts from localStorage:', error);
        setPosts(initialPosts);
      }
    } else {
      setPosts(initialPosts);
    }

    if (storedPoems) {
      try {
        setPoems(JSON.parse(storedPoems));
      } catch (error) {
        console.error('Error loading poems from localStorage:', error);
        setPoems(initialPoems);
      }
    } else {
      setPoems(initialPoems);
    }
    
    setIsInitialized(true);
  }, []);

  // Save posts to localStorage whenever posts change (but not on initial load)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('zewo-blog-posts', JSON.stringify(posts));
    }
  }, [posts, isInitialized]);

  // Save poems to localStorage whenever poems change (but not on initial load)
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('zewo-poems', JSON.stringify(poems));
    }
  }, [poems, isInitialized]);

  const addPost = (postData: Omit<BlogPost, 'id' | 'createdAt' | 'likes' | 'shares'>) => {
    const newPost: BlogPost = {
      ...postData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      likes: 0,
      shares: 0
    };
    setPosts(prev => [newPost, ...prev]);
  };

  const editPost = (id: string, updates: Partial<Pick<BlogPost, 'title' | 'content'>>) => {
    setPosts(prev => prev.map(post => 
      post.id === id ? { ...post, ...updates } : post
    ));
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  const addPoem = (poemData: Omit<Poem, 'id' | 'createdAt' | 'likes' | 'shares'>) => {
    const newPoem: Poem = {
      ...poemData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      likes: 0,
      shares: 0
    };
    setPoems(prev => [newPoem, ...prev]);
  };

  const editPoem = (id: string, updates: Partial<Pick<Poem, 'title' | 'content'>>) => {
    setPoems(prev => prev.map(poem => 
      poem.id === id ? { ...poem, ...updates } : poem
    ));
  };

  const deletePoem = (id: string) => {
    setPoems(prev => prev.filter(poem => poem.id !== id));
  };

  return (
    <ContentContext.Provider value={{
      posts,
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