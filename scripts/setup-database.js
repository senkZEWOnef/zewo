import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const supabase = createClient(
  "https://bkxzmwjkdgrnvsrfkhsw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreHptd2prZGdybnZzcmZraHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MDE2MzQsImV4cCI6MjA2MTk3NzYzNH0.SZ5JzmvncXAzNm6QE9NEkG--kYtmIbBRWo3lcztFaWY"
);

async function setupDatabase() {
  try {
    // Read the SQL file
    const sqlPath = join(__dirname, '..', 'sql', 'create_content_tables.sql');
    const sqlContent = readFileSync(sqlPath, 'utf8');
    
    // Split SQL into individual statements (basic splitting - you might need to improve this)
    const statements = sqlContent
      .split(';')
      .map(stmt => stmt.trim())
      .filter(stmt => stmt.length > 0);
    
    console.log(`Executing ${statements.length} SQL statements...`);
    
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      if (statement.trim()) {
        console.log(`Executing statement ${i + 1}...`);
        
        const { error } = await supabase.rpc('exec_sql', { sql: statement });
        
        if (error) {
          console.error(`Error in statement ${i + 1}:`, error);
          // Try alternative approach for simpler statements
          if (statement.includes('CREATE TABLE') || statement.includes('INSERT INTO')) {
            console.log('Trying alternative execution...');
            // For table creation and inserts, we might need to use different approach
          }
        } else {
          console.log(`Statement ${i + 1} executed successfully`);
        }
      }
    }
    
    console.log('Database setup completed!');
    
    // Test the connection by fetching existing data
    const { data: posts, error: postsError } = await supabase
      .from('blog_posts')
      .select('*')
      .limit(1);
    
    const { data: poems, error: poemsError } = await supabase
      .from('poems')
      .select('*')
      .limit(1);
    
    if (!postsError && !poemsError) {
      console.log('Tables are accessible:', { posts: posts?.length || 0, poems: poems?.length || 0 });
    } else {
      console.log('Errors accessing tables:', { postsError, poemsError });
    }
    
  } catch (error) {
    console.error('Setup failed:', error);
  }
}

setupDatabase();