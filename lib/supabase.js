import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo-key'

// Create a mock client if environment variables are not properly configured
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Schema for Supabase
/*
-- Users table (extends NextAuth users)
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  name VARCHAR(255),
  image TEXT,
  provider VARCHAR(50) DEFAULT 'email',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Classes table
CREATE TABLE classes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  short_description TEXT,
  price DECIMAL(10,2) NOT NULL,
  original_price DECIMAL(10,2),
  thumbnail_url TEXT,
  video_preview_url TEXT,
  category_id UUID REFERENCES categories(id),
  instructor_name VARCHAR(255),
  instructor_avatar TEXT,
  level VARCHAR(20) DEFAULT 'beginner', -- beginner, intermediate, advanced
  duration_minutes INTEGER,
  total_videos INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  total_reviews INTEGER DEFAULT 0,
  is_free BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Class sections table
CREATE TABLE class_sections (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Class videos table
CREATE TABLE class_videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  section_id UUID REFERENCES class_sections(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  video_url TEXT NOT NULL,
  duration_seconds INTEGER,
  order_index INTEGER NOT NULL,
  is_preview BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User enrollments table
CREATE TABLE user_enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  progress_percentage DECIMAL(5,2) DEFAULT 0,
  UNIQUE(user_id, class_id)
);

-- User video progress table
CREATE TABLE user_video_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  video_id UUID REFERENCES class_videos(id) ON DELETE CASCADE,
  watched_seconds INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  last_watched_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, video_id)
);

-- Payments table
CREATE TABLE payments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'IDR',
  payment_method VARCHAR(50),
  transaction_id VARCHAR(255) UNIQUE,
  midtrans_order_id VARCHAR(255) UNIQUE,
  status VARCHAR(20) DEFAULT 'pending', -- pending, success, failed, cancelled
  paid_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  class_id UUID REFERENCES classes(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, class_id)
);

-- Insert sample categories
INSERT INTO categories (name, slug, description) VALUES
('Gambar', 'gambar', 'Kelas menggambar dan ilustrasi'),
('Merangkai Bunga', 'merangkai-bunga', 'Kelas seni merangkai bunga'),
('Seni', 'seni', 'Kelas seni umum dan kreativitas'),
('Kerajinan', 'kerajinan', 'Kelas kerajinan tangan'),
('Fotografi', 'fotografi', 'Kelas fotografi dan editing');

-- Insert sample classes
INSERT INTO classes (title, slug, description, short_description, price, original_price, thumbnail_url, category_id, instructor_name, level, duration_minutes, total_videos, rating, total_reviews) 
SELECT 
  'Menggambar Sketsa untuk Pemula',
  'menggambar-sketsa-pemula',
  'Pelajari teknik dasar menggambar sketsa dari nol hingga mahir. Kelas ini cocok untuk pemula yang ingin belajar menggambar dengan pensil.',
  'Belajar menggambar sketsa dari dasar',
  150000,
  200000,
  'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg',
  id,
  'Sari Dewi',
  'beginner',
  180,
  12,
  4.8,
  156
FROM categories WHERE slug = 'gambar';
*/
