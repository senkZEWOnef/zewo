import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://bkxzmwjkdgrnvsrfkhsw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreHptd2prZGdybnZzcmZraHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MDE2MzQsImV4cCI6MjA2MTk3NzYzNH0.SZ5JzmvncXAzNm6QE9NEkG--kYtmIbBRWo3lcztFaWY"
);

async function testConnection() {
  console.log('Testing Supabase connection...');
  
  try {
    // Test blog_posts table
    console.log('\nTesting blog_posts table...');
    const { data: posts, error: postsError } = await supabase
      .from('blog_posts')
      .select('*');
    
    if (postsError) {
      console.error('❌ blog_posts error:', postsError.message);
    } else {
      console.log('✅ blog_posts table accessible, found', posts.length, 'posts');
    }
    
    // Test poems table
    console.log('\nTesting poems table...');
    const { data: poems, error: poemsError } = await supabase
      .from('poems')
      .select('*');
    
    if (poemsError) {
      console.error('❌ poems error:', poemsError.message);
    } else {
      console.log('✅ poems table accessible, found', poems.length, 'poems');
    }
    
    // Test insert (if tables exist)
    if (!postsError && !poemsError) {
      console.log('\n🧪 Testing insert functionality...');
      
      const { data: newPost, error: insertError } = await supabase
        .from('blog_posts')
        .insert([{
          title: 'Test Post',
          content: 'This is a test post to verify Supabase integration works!'
        }])
        .select()
        .single();
      
      if (insertError) {
        console.error('❌ Insert error:', insertError.message);
      } else {
        console.log('✅ Insert successful:', newPost.title);
        
        // Clean up test post
        await supabase.from('blog_posts').delete().eq('id', newPost.id);
        console.log('🧹 Test post cleaned up');
      }
    }
    
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  }
}

testConnection();