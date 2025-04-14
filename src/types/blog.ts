export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  categories: string[];
  image: string;
  featuredImage: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
} 