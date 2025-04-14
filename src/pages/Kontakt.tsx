
import React from 'react';
import Layout from '../components/layout/Layout';
import { Phone, Mail, MapPin } from 'lucide-react';

const Kontakt = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-800">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1609349093648-53df455ea814?q=80')] bg-cover bg-center"></div>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-6xl font-bold mb-4 font-display">Kontakt</h1>
          <p className="text-white text-xl">Poproś o wycenę już dziś!</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <h2 className="text-3xl font-bold text-aluraf-red mb-8 font-display">Zaprojektuj Swoją Wymarzoną Pergolę – Umów Się Na Bezpłatną Konsultację!</h2>
            <p className="text-gray-600 mb-8">Chcesz dowiedzieć się więcej o naszych pergolach i zobaczyć, które rozwiązanie najlepiej pasuje do Twojej przestrzeni? Umów się na spotkanie z naszym specjalistą!</p>
            
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Imię" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aluraf-red" />
              </div>
              <div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aluraf-red" />
              </div>
              <div>
                <textarea placeholder="Wiadomość" rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-aluraf-red"></textarea>
              </div>
              <button type="submit" className="w-full bg-aluraf-red text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors">
                Wyślij Wiadomość
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Dane Kontaktowe</h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3">
                  <Phone className="text-aluraf-red h-5 w-5" />
                  <a href="tel:+48698368994" className="hover:text-aluraf-red">+48 698 368 994</a>
                </p>
                <p className="flex items-center space-x-3">
                  <Mail className="text-aluraf-red h-5 w-5" />
                  <a href="mailto:kontakt@aluraf.pl" className="hover:text-aluraf-red">kontakt@aluraf.pl</a>
                </p>
                <p className="flex items-center space-x-3">
                  <MapPin className="text-aluraf-red h-5 w-5" />
                  <span>Goślinowo, 62-200 Gniezno</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Godziny Otwarcia</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Poniedziałek - Piątek:</span>
                  <span>8:00 - 16:30</span>
                </p>
                <p className="flex justify-between">
                  <span>Sobota:</span>
                  <span>9:00 - 13:30</span>
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.337644797461!2d17.645931676871787!3d52.51824997205923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47037ffa89c52b6d%3A0x5dca93e1e9e9874f!2zR2_Fm2xpbm93bywgNjItMjAwIEdvc2xpbm93bw!5e0!3m2!1spl!2spl!4v1709932450790!5m2!1spl!2spl"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontakt;
