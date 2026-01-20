
import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Pergole Bioklimatyczne",
      description: "Innowacyjne rozwiązanie z regulowanymi lamelami, zapewniające kontrolę nad nasłonecznieniem i wentylacją",
      image: "https://images.unsplash.com/photo-1605276374105-dee8ea155e8d?q=80",
      link: "/pergole"
    },
    {
      id: 2,
      title: "Zadaszenia Tarasowe",
      description: "Eleganckie i trwałe zadaszenia chroniące przed deszczem i słońcem, idealne na taras lub ogród",
      image: "https://images.unsplash.com/photo-1592839656073-80d2f16c7453?q=80", 
      link: "/zadaszenia"
    },
    {
      id: 3,
      title: "Carporty",
      description: "Nowoczesne wiaty garażowe chroniące pojazdy przed warunkami atmosferycznymi",
      image: "https://images.unsplash.com/photo-1605274280925-9dd1baacb97b?q=80",
      link: "/carporty"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Nasze Produkty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Oferujemy szeroki wybór zadaszeń aluminiowych dostosowanych do Twoich potrzeb</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="premium-card premium-card-glow overflow-hidden shadow-lg group">
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-card-image"
                  loading="lazy"
                />
                <div className="product-card-overlay"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link to={product.link} className="text-aluraf-red font-medium hover:text-aluraf-red/80">
                  Dowiedz się więcej →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
