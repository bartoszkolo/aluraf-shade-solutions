
import React from 'react';
import { BookOpen, Paintbrush, Settings } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Dlaczego Zadaszenia Aluminiowe?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Poznaj zalety naszych systemów zadaszeń, które łączą w sobie trwałość, funkcjonalność i nowoczesny design</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="feature-icon">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Trwałość i Wytrzymałość</h3>
            <p className="text-gray-600">Aluminium jest odporne na korozję, działanie warunków atmosferycznych i nie wymaga konserwacji przez wiele lat</p>
          </div>

          <div className="text-center">
            <div className="feature-icon">
              <Paintbrush className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Nowoczesny Design</h3>
            <p className="text-gray-600">Eleganckie i minimalistyczne wzornictwo dopasowane do współczesnej architektury</p>
          </div>

          <div className="text-center">
            <div className="feature-icon">
              <Settings className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Inteligentne Sterowanie</h3>
            <p className="text-gray-600">Automatyczne systemy sterowania pozwalające na pełną kontrolę nad zadaszeniem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
