-- Fix RLS policies to allow anonymous inserts (for testing)
-- Run this in Supabase SQL Editor

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Allow authenticated insert on blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated update on blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated delete on blog_posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow authenticated insert on poems" ON poems;
DROP POLICY IF EXISTS "Allow authenticated update on poems" ON poems;
DROP POLICY IF EXISTS "Allow authenticated delete on poems" ON poems;

-- Create more permissive policies for testing (you can restrict later)
CREATE POLICY "Allow all operations on blog_posts" ON blog_posts
    FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Allow all operations on poems" ON poems
    FOR ALL USING (true) WITH CHECK (true);