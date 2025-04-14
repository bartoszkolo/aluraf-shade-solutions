
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gray-800">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80')] bg-cover bg-center"></div>
        </div>
        <div className="hero-overlay"></div>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <span className="text-sm uppercase tracking-wider mb-4 animate-fade-in font-medium">LIDER W BRANŻY ZADASZEŃ ALUMINIOWYCH</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-5xl font-display animate-slide-in">
          Nowoczesne Zadaszenia<br />
          Aluminiowe
        </h1>
        <p className="text-xl mb-8 max-w-2xl animate-fade-in">Tworzymy eleganckie i funkcjonalne przestrzenie, łącząc innowacyjne technologie z ponadczasowym designem</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
          <Link to="/wycena" className="cta-button">
            BEZPŁATNA WYCENA
          </Link>
          <Link to="/realizacje" className="secondary-button">
            NASZE REALIZACJE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
