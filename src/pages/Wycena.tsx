
import React from 'react';
import Layout from '../components/layout/Layout';
import WycenaForm from '../components/wycena/WycenaForm';

const Wycena = () => {
  return (
    <Layout>
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-800">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80')] bg-cover bg-center"></div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-6xl font-bold mb-4 font-display">Wycena Online</h1>
          <p className="text-white text-xl">Wypełnij formularz, aby otrzymać bezpłatną wycenę</p>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <WycenaForm />
      </div>
    </Layout>
  );
};

export default Wycena;
