import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { CATEGORIES, GALLERY_ITEMS, GalleryItem } from '@/data/gallery';
import { animations } from '@/lib/animations';
import { BackToTop } from '@/components/ui/back-to-top';
import { motion } from 'framer-motion';

const Realizacje = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(GALLERY_ITEMS);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter items when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(GALLERY_ITEMS);
    } else {
      const filtered = GALLERY_ITEMS.filter(item => item.category === activeCategory);
      setFilteredItems(filtered);
    }
  }, [activeCategory]);

  // Handle category filter click
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSearchParams(categoryId === 'all' ? {} : { category: categoryId });
  };

  // Open modal with selected item
  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Get featured items
  const featuredItems = GALLERY_ITEMS.filter(item => item.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/images/realizacje-hero.jpg)', 
              backgroundPosition: 'center' 
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 text-white ${animations.fadeIn}`}>
            Nasze Realizacje
          </h1>
          <p className={`text-xl md:text-2xl text-white max-w-2xl ${animations.slideUp}`}>
            Odkryj nasze najlepsze projekty i zrealizowane inwestycje
          </p>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-2">Wyróżnione Projekty</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Prezentujemy nasze najlepsze realizacje, które łączą nowoczesny design z funkcjonalnością.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.slice(0, 3).map((item) => (
              <div 
                key={item.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${animations.card}`}
                onClick={() => openModal(item)}
              >
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-aluraf-red text-white px-3 py-1 rounded-full text-sm">
                    Wyróżniony
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{item.location}</span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {CATEGORIES.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter and Gallery */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Filter Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Nasza Galeria</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-aluraf-red text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                } ${animations.button}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${animations.card}`}
                onClick={() => openModal(item)}
              >
                <div className="relative h-64">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-aluraf-red text-white px-3 py-1 rounded-full text-sm">
                      Wyróżniony
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{item.location}</span>
                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                      {CATEGORIES.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-2xl font-semibold mb-2">Brak realizacji w tej kategorii</h3>
              <p className="text-gray-600 mb-6">Nie znaleziono żadnych projektów w wybranej kategorii.</p>
              <button
                onClick={() => handleCategoryClick('all')}
                className="px-6 py-3 bg-aluraf-red text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Zobacz wszystkie realizacje
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Project Detail Modal */}
      {isModalOpen && selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-[40vh] md:h-[50vh] object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-75 transition-colors"
              >
                ✕
              </button>
              {selectedItem.featured && (
                <div className="absolute top-4 left-4 bg-aluraf-red text-white px-3 py-1 rounded-full text-sm">
                  Wyróżniony
                </div>
              )}
            </div>
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl md:text-3xl font-bold">{selectedItem.title}</h2>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                  {CATEGORIES.find(cat => cat.id === selectedItem.category)?.name}
                </span>
              </div>
              <p className="text-gray-700 mb-6">{selectedItem.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div>
                  <span className="text-gray-500">Data realizacji:</span>
                  <p>{new Date(selectedItem.date).toLocaleDateString('pl-PL', {
                    year: 'numeric',
                    month: 'long',
                  })}</p>
                </div>
                {selectedItem.location && (
                  <div>
                    <span className="text-gray-500">Lokalizacja:</span>
                    <p>{selectedItem.location}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <button 
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <BackToTop />
    </Layout>
  );
};

export default Realizacje; 