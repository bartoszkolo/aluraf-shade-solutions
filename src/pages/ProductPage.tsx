import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { productPagesData } from '@/data/productPages';
import { GALLERY_ITEMS, GalleryItem, CATEGORIES } from '@/data/gallery';
import { animations } from '@/lib/animations';
import { BackToTop } from '@/components/ui/back-to-top';
import { ArrowRight } from 'lucide-react';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const productData = productPagesData.find(p => p.id === slug);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!productData) {
    // Redirect to a generic Oferta page or 404 if the slug doesn't match any product
    return <Navigate to="/" replace />; // Consider creating an /oferta index page later
  }

  // Get relevant gallery items for this product
  const relatedProjects = GALLERY_ITEMS
    .filter(item => item.category === productData.id)
    .slice(0, 4); // Show up to 4 projects

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

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <img 
            src={productData.heroImage} 
            alt={productData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <p className={`text-lg font-medium text-aluraf-red mb-3 ${animations.slideUp}`}>Oferta</p>
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 text-white ${animations.fadeIn}`}>
            {productData.title}
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: productData.description }}
              />
            </div>
          </div>

          {/* Right Column: CTA & Quick Info */}
          <div className="lg:col-span-1">
            <div className={`bg-gray-50 rounded-lg shadow-md p-8 sticky top-24 ${animations.card}`}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Zainteresowany tym produktem?</h3>
              <p className="text-gray-600 mb-6">
                Skontaktuj się z nami, aby uzyskać bezpłatną wycenę i dowiedzieć się więcej.
              </p>
              <Link 
                to="/wycena"
                className={`block w-full text-center cta-button mb-4 ${animations.button}`}
              >
                Poproś o Wycenę
              </Link>
              <Link 
                to="/kontakt"
                className={`block w-full text-center secondary-button border-aluraf-red text-aluraf-red hover:bg-aluraf-red hover:text-white ${animations.button}`}
              >
                Zadaj Pytanie
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Wybrane Realizacje Section */}
      {relatedProjects.length > 0 && (
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-2">Wybrane Realizacje</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Zobacz przykłady naszych projektów w kategorii: {productData.name}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProjects.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${animations.card}`}
                  onClick={() => openModal(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-1 truncate">{item.title}</h4>
                    {item.location && (
                      <p className="text-sm text-gray-500">{item.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to={`/realizacje?category=${productData.id}`}
                className={`inline-flex items-center gap-2 text-aluraf-red font-medium hover:underline ${animations.button}`}
              >
                Zobacz wszystkie realizacje w tej kategorii
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
      
      {/* Project Detail Modal (Same as in Realizacje page) */}
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

export default ProductPage; 