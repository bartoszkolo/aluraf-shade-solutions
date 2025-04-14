import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Facebook, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { animations } from '@/lib/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Re-using Oferta links from NavBar data could be even better, but for now:
  const ofertaLinks = [
    { name: 'Zadaszenia tarasu', path: '/oferta/zadaszenia-tarasu' },
    { name: 'Przeszklenia', path: '/oferta/przeszklenia' },
    { name: 'Wiaty samochodowe/Carporty', path: '/oferta/carporty' },
    { name: 'Wiatrołapy', path: '/oferta/wiatrolapy' },
    { name: 'Pergole lamelowe', path: '/oferta/pergole-lamelowe' },
    { name: 'Ruchome lamele', path: '/oferta/ruchome-lamele' },
    { name: 'Rolety zip', path: '/oferta/rolety-zip' },
    { name: 'Markizy', path: '/oferta/markizy' },
  ];
  
  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'O Nas', path: '/o-nas' },
    { name: 'Realizacje', path: '/realizacje' },
    { name: 'Porady / Blog', path: '/blog' }, // Assuming /porady redirects or is replaced by /blog
    { name: 'Kontakt', path: '/kontakt' },
    { name: 'Wycena Online', path: '/wycena' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/0748ff93-80ad-4145-a425-eff5345ea9ac.png" 
                alt="Aluraf Logo" 
                className="h-16 w-auto" // Slightly smaller logo in footer
              />
            </Link>
            <p className="text-sm">
              Producent nowoczesnych pergoli, zadaszeń tarasowych i carportów aluminiowych. Kompleksowa realizacja i montaż na terenie całej Polski.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/aluminiowezadaszeniatarasow"
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-400 hover:text-aluraf-red ${animations.button}`}
                aria-label="Aluraf on Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              {/* Add other social media links here */}
            </div>
          </div>

          {/* Column 2: Oferta Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Oferta</h3>
            <ul className="space-y-2 text-sm">
              {ofertaLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={`hover:text-aluraf-red transition-colors ${animations.menuItem}`}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Szybkie Linki</h3>
            <ul className="space-y-2 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={`hover:text-aluraf-red transition-colors ${animations.menuItem}`}>{link.name}</Link>
                </li>
              ))}
               <li>
                 <Link to="/polityka-prywatnosci" className={`hover:text-aluraf-red transition-colors ${animations.menuItem}`}>Polityka Prywatności</Link>
               </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <div className="space-y-4 text-sm">
              <a href="tel:+48698368994" className={`flex items-start gap-3 group ${animations.menuItem}`}>
                <Phone className="w-5 h-5 text-aluraf-red mt-0.5 flex-shrink-0" />
                <span className="group-hover:text-aluraf-red transition-colors">+48 698 368 994</span>
              </a>
              <a href="mailto:kontakt@aluraf.pl" className={`flex items-start gap-3 group ${animations.menuItem}`}>
                <Mail className="w-5 h-5 text-aluraf-red mt-0.5 flex-shrink-0" />
                <span className="group-hover:text-aluraf-red transition-colors">kontakt@aluraf.pl</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-aluraf-red mt-0.5 flex-shrink-0" />
                <span>Goślinowo,<br />62-200 Gniezno<br />woj. wielkopolskie</span>
              </div>
              <div className="flex items-start gap-3">
                 <Clock className="w-5 h-5 text-aluraf-red mt-0.5 flex-shrink-0" />
                 <div>
                   <span>Pon-Pt: 8:00 - 16:30</span><br />
                   <span>Sob: 9:00 - 13:30</span>
                 </div>
               </div>
               <Link 
                 to="/kontakt"
                 className={`inline-flex items-center gap-1.5 text-aluraf-red font-medium hover:underline ${animations.button}`}
               >
                 Formularz kontaktowy
                 <ExternalLink className="w-4 h-4" />
               </Link>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Aluraf. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
