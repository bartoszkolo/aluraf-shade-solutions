import React from 'react';
import Layout from '../components/layout/Layout';
import WycenaForm from '../components/wycena/WycenaForm';
import { animations } from '@/lib/animations';

const Wycena = () => {
  return (
    <Layout>
      <div className="relative h-[500px]">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(/images/pergola-hero.jpg)', 
              backgroundPosition: 'center 40%' 
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 text-white ${animations.fadeIn}`}>
            Wycena Online
          </h1>
          <p className={`text-xl md:text-2xl text-white ${animations.slideUp}`}>
            Wypełnij formularz, aby otrzymać bezpłatną wycenę
          </p>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aluraf-red mb-4">
              Szybka i bezpłatna wycena
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wypełnij poniższy formularz, a nasz zespół przygotuje dla Ciebie indywidualną wycenę.
              Skontaktujemy się z Tobą najszybciej jak to możliwe.
            </p>
          </div>
          <WycenaForm />
        </div>
      </div>
    </Layout>
  );
};

export default Wycena;
