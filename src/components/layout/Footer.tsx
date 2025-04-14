
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="/lovable-uploads/0748ff93-80ad-4145-a425-eff5345ea9ac.png" 
              alt="Aluraf Logo" 
              className="h-20 w-auto mb-8" 
            />
            <p className="mt-4 text-gray-400">
              Nowoczesne Zadaszenia Tarasowe,<br />
              Pergole oraz Carporty
            </p>
            
            {/* Business Hours */}
            <div className="mt-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Clock className="w-5 h-5 text-aluraf-red" />
                <span>PON-PT</span>
                <span>8:00 - 16:30</span>
              </div>
              <div className="flex items-center space-x-2 mt-2 text-gray-400">
                <Clock className="w-5 h-5 text-aluraf-red" />
                <span>SOBOTA</span>
                <span>9:00 - 13:30</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="footer-section-title">Nawigacja</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/kontakt" className="footer-link">Kontakt</Link></li>
              <li><Link to="/o-nas" className="footer-link">O Nas</Link></li>
              <li><Link to="/pergole-lamelowe" className="footer-link">Pergole Lamelowe</Link></li>
              <li><Link to="/carporty" className="footer-link">Carporty</Link></li>
              <li><Link to="/polityka-prywatnosci" className="footer-link">Polityka Prywatności</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="footer-section-title">Informacje</h3>
            <div className="space-y-4">
              <p className="text-gray-400">TEL: <a href="tel:+48698368994" className="hover:text-aluraf-red">+48 698 368 994</a></p>
              <p className="text-gray-400">EMAIL: <a href="mailto:kontakt@aluraf.pl" className="hover:text-aluraf-red">kontakt@aluraf.pl</a></p>
              <p className="text-gray-400">Goślinowo, 62-200 Gniezno</p>
              <Link to="/jak-dojechac" className="inline-block text-gray-400 hover:text-aluraf-red">Jak dojechać</Link>
            </div>

            {/* Call-to-action */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-2">Chcesz zadać pytanie lub umówić realizację?</h4>
              <p className="text-gray-400 mb-4">NAPISZ LUB ZADZWOŃ JUŻ TERAZ!</p>
              <Link to="/rezerwacja" className="cta-button">
                REZERWACJA
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex space-x-4">
          <a href="https://www.facebook.com/aluminiowezadaszeniatarasow" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-aluraf-red">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
