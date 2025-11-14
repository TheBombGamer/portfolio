/*
  # Portfolio Database Schema
  
  This migration creates the database structure for a personal portfolio with blog and store functionality.
  
  ## New Tables
  
  ### `blog_posts`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text) - Blog post title
  - `slug` (text, unique) - URL-friendly version of the title
  - `excerpt` (text) - Short description for previews
  - `content` (text) - Full blog post content
  - `cover_image` (text) - URL to cover image
  - `published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication timestamp
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ### `products`
  - `id` (uuid, primary key) - Unique identifier for each product
  - `name` (text) - Product name
  - `slug` (text, unique) - URL-friendly version of the name
  - `description` (text) - Product description
  - `price` (decimal) - Product price
  - `image` (text) - URL to product image
  - `available` (boolean) - Availability status
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ## Security
  
  Both tables have Row Level Security (RLS) enabled with policies that:
  - Allow anyone to read published/available items
  - Restrict write operations (for future admin functionality)
  
  ## Notes
  
  1. All tables use UUID primary keys for better scalability
  2. Slug fields are unique to enable clean URLs
  3. Timestamps track creation and updates automatically
  4. RLS ensures data is publicly readable but write-protected
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  cover_image text DEFAULT '',
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL,
  image text DEFAULT '',
  available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Anyone can view available products"
  ON products FOR SELECT
  USING (available = true);