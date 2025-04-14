import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getAllPosts, getAllCategories, formatPostDate } from '@/lib/blog';
import { BlogPost, BlogCategory } from '@/types/blog';
import { animations } from '@/lib/animations';

const Blog = () => {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allPosts);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryFilter = (category: string | null) => {
    setActiveCategory(category);
    if (category === null) {
      setFilteredPosts(allPosts);
    } else {
      const filtered = allPosts.filter(post => 
        post.categories.includes(category)
      );
      setFilteredPosts(filtered);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      handleCategoryFilter(activeCategory);
      return;
    }
    
    const searchTerm = query.toLowerCase();
    const results = allPosts.filter(post => {
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.categories.some(cat => cat.toLowerCase().includes(searchTerm))
      );
    });
    
    setFilteredPosts(results);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/images/blog-hero.jpg)', 
              backgroundPosition: 'center' 
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Blog
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl">
            Najnowsze informacje i artykuły o zadaszeniach aluminiowych, pergolach i carportach
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Wyszukaj</h3>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Szukaj artykułów..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aluraf-red"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>

              <h3 className="text-xl font-bold mb-4">Kategorie</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleCategoryFilter(null)} 
                    className={`${animations.menuItem} ${activeCategory === null ? 'text-aluraf-red font-medium' : ''}`}
                  >
                    Wszystkie artykuły ({allPosts.length})
                  </button>
                </li>
                {categories.map((category) => (
                  <li key={category.slug}>
                    <button 
                      onClick={() => handleCategoryFilter(category.name)} 
                      className={`${animations.menuItem} ${activeCategory === category.name ? 'text-aluraf-red font-medium' : ''}`}
                    >
                      {category.name} ({category.count})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className={`bg-white rounded-lg shadow-md overflow-hidden ${animations.card}`}>
                    <Link to={`/blog/${post.slug}`}>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((category) => (
                          <span 
                            key={`${post.id}-${category}`}
                            className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-bold mb-2 hover:text-aluraf-red transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-500 text-sm mb-3">
                        {formatPostDate(post.date)} | {post.author}
                      </p>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-aluraf-red hover:underline"
                      >
                        Czytaj więcej
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-medium mb-2">Brak wyników</h3>
                <p className="text-gray-600">Nie znaleziono artykułów pasujących do wybranych kryteriów.</p>
                <button 
                  onClick={() => {
                    setActiveCategory(null);
                    setSearchQuery('');
                    setFilteredPosts(allPosts);
                  }}
                  className="mt-4 px-4 py-2 bg-aluraf-red text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Wyczyść filtry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog; 