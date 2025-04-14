import { BlogPost, BlogCategory } from '@/types/blog';
import blogData from '@/data/blog/posts.json';

// Type assertion for imported JSON
const posts = blogData as BlogPost[];

/**
 * Get all blog posts
 */
export function getAllPosts(): BlogPost[] {
  return [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find(post => post.slug === slug);
}

/**
 * Get all categories with post counts
 */
export function getAllCategories(): BlogCategory[] {
  const categoriesMap = new Map<string, number>();
  
  posts.forEach(post => {
    post.categories.forEach(category => {
      const count = categoriesMap.get(category) || 0;
      categoriesMap.set(category, count + 1);
    });
  });
  
  return Array.from(categoriesMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
    count
  }));
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return [...posts]
    .filter(post => post.categories.includes(category))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Format date for display
 */
export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Search posts by query
 */
export function searchPosts(query: string): BlogPost[] {
  const searchTerm = query.toLowerCase();
  
  return [...posts]
    .filter(post => {
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.categories.some(category => category.toLowerCase().includes(searchTerm))
      );
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 