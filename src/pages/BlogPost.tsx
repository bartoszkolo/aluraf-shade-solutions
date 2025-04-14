import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getPostBySlug, formatPostDate, getAllPosts } from '@/lib/blog';
import { animations } from '@/lib/animations';
import { BackToTop } from '@/components/ui/back-to-top';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }
  
  // Get related posts (posts with at least one matching category)
  const relatedPosts = getAllPosts()
    .filter(p => 
      p.id !== post.id && 
      p.categories.some(cat => post.categories.includes(cat))
    )
    .slice(0, 3);

  return (
    <Layout>
      {/* Featured Image */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-end text-center px-4 pb-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {post.categories.map((category) => (
                <Link 
                  key={category}
                  to={`/blog?category=${category}`}
                  className="bg-white/20 backdrop-blur-sm text-white text-sm px-4 py-1 rounded-full hover:bg-white/30 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              {post.title}
            </h1>
            <p className="text-white/80 text-lg">
              {formatPostDate(post.date)} | {post.author}
            </p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <Link 
                      key={category}
                      to={`/blog?category=${category}`}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Powiązane artykuły</h3>
              
              {relatedPosts.length > 0 ? (
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className={`group ${animations.card}`}>
                      <Link to={`/blog/${relatedPost.slug}`} className="block">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-32 object-cover rounded-md mb-2"
                        />
                        <h4 className="font-semibold group-hover:text-aluraf-red transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {formatPostDate(relatedPost.date)}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">Brak powiązanych artykułów.</p>
              )}
              
              <div className="mt-8 pt-6 border-t">
                <Link 
                  to="/blog"
                  className="inline-flex items-center text-aluraf-red hover:underline"
                >
                  <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                  Wróć do listy artykułów
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </Layout>
  );
};

export default BlogPost;
