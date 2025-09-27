-- Simple table creation for blog posts and poems
-- Copy and paste this into Supabase SQL Editor

CREATE TABLE blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    likes INTEGER DEFAULT 0,
    shares INTEGER DEFAULT 0
);

CREATE TABLE poems (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    likes INTEGER DEFAULT 0,
    shares INTEGER DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE poems ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access on blog_posts" ON blog_posts
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access on poems" ON poems
    FOR SELECT USING (true);

-- Allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated insert on blog_posts" ON blog_posts
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on blog_posts" ON blog_posts
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on blog_posts" ON blog_posts
    FOR DELETE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated insert on poems" ON poems
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update on poems" ON poems
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete on poems" ON poems
    FOR DELETE USING (auth.role() = 'authenticated');

-- Add some initial data
INSERT INTO blog_posts (title, content, created_at, likes, shares) VALUES
('Building the Future', 'Just finished working on a new React project with some amazing features. The intersection of engineering and creativity never ceases to amaze me. 🚀', NOW(), 12, 3),
('Puerto Rico Tech Scene', 'The tech ecosystem in Puerto Rico is growing rapidly. Seeing more developers and entrepreneurs building innovative solutions for local and global markets. Exciting times ahead! 🌴💻', NOW() - INTERVAL '1 day', 8, 5);

INSERT INTO poems (title, content, created_at, likes, shares) VALUES
('Morning Coffee', E'Steam rises like prayers\nfrom the cup between my palms—\nmorning''s first communion.\n\nThe world awakens slow,\nbut here in this quiet moment,\nI am already whole.', NOW(), 24, 8),
('City Rain', E'The city wears rain\nlike a well-loved coat—\nfamiliar, comfortable,\ntransforming.\n\nEach drop a story,\neach puddle a mirror\nreflecting what we\nchoose to see.', NOW() - INTERVAL '1 day', 31, 12),
('Heritage', E'I carry my grandmother''s hands,\nmy father''s stubborn hope,\nmy mother''s quiet strength.\n\nIn this new country,\nI am both the seed\nand the harvest.', NOW() - INTERVAL '2 days', 45, 18),
('Builder''s Prayer', E'Let my hands know wood\nlike old friends know silence—\nintimate, reverent.\n\nLet each cut be clean,\neach joint true,\neach piece a small act\nof faith.', NOW() - INTERVAL '3 days', 19, 7);