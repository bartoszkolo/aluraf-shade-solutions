import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                src="/lovable-uploads/0748ff93-80ad-4145-a425-eff5345ea9ac.png"
                alt="Aluraf Logo"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={isActive('/') ? "navbar-link-active" : "navbar-link"}>
              Home
            </Link>
            <Link to="/o-nas" className={isActive('/o-nas') ? "navbar-link-active" : "navbar-link"}>
              O Nas
            </Link>
            
            {/* Oferta dropdown menu */}
            <div className="relative group">
              <button 
                className="navbar-link flex items-center"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Oferta <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div 
                className={`absolute ${dropdownOpen ? 'block' : 'hidden'} group-hover:block bg-black shadow-lg rounded-md mt-2 z-10 min-w-[250px]`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link to="/oferta/zadaszenia-tarasu" className="dropdown-link">Zadaszenia tarasu</Link>
                <Link to="/oferta/przeszklenia" className="dropdown-link">Przeszklenia</Link>
                <Link to="/oferta/carporty" className="dropdown-link">Wiaty samochodowe/Carporty</Link>
                <Link to="/oferta/wiatrolapy" className="dropdown-link">Wiatrołapy</Link>
                <Link to="/oferta/pergole-lamelowe" className="dropdown-link">Pergole lamelowe</Link>
                <Link to="/oferta/ruchome-lamele" className="dropdown-link">Ruchome lamele</Link>
                <Link to="/oferta/rolety-zip" className="dropdown-link">Rolety zip</Link>
                <Link to="/oferta/markizy" className="dropdown-link">Markizy</Link>
              </div>
            </div>
            
            <Link to="/porady" className={isActive('/porady') ? "navbar-link-active" : "navbar-link"}>
              Porady
            </Link>
            <Link to="/realizacje" className={isActive('/realizacje') ? "navbar-link-active" : "navbar-link"}>
              Realizacje
            </Link>
            <Link to="/kontakt" className={isActive('/kontakt') ? "navbar-link-active" : "navbar-link"}>
              Kontakt
            </Link>
            <Link to="/wycena" className="cta-button">
              Wycena online
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black pb-4 px-4">
          <div className="space-y-2 pt-2">
            <Link to="/" className={isActive('/') ? "navbar-link-active block" : "navbar-link block"}>
              Home
            </Link>
            <Link to="/o-nas" className={isActive('/o-nas') ? "navbar-link-active block" : "navbar-link block"}>
              O Nas
            </Link>
            <div className="py-2">
              <button 
                className="navbar-link w-full text-left flex items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Oferta <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {dropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/oferta/zadaszenia-tarasu" className="dropdown-link block">Zadaszenia tarasu</Link>
                  <Link to="/oferta/przeszklenia" className="dropdown-link block">Przeszklenia</Link>
                  <Link to="/oferta/carporty" className="dropdown-link block">Wiaty samochodowe/Carporty</Link>
                  <Link to="/oferta/wiatrolapy" className="dropdown-link block">Wiatrołapy</Link>
                  <Link to="/oferta/pergole-lamelowe" className="dropdown-link block">Pergole lamelowe</Link>
                  <Link to="/oferta/ruchome-lamele" className="dropdown-link block">Ruchome lamele</Link>
                  <Link to="/oferta/rolety-zip" className="dropdown-link block">Rolety zip</Link>
                  <Link to="/oferta/markizy" className="dropdown-link block">Markizy</Link>
                </div>
              )}
            </div>
            <Link to="/porady" className={isActive('/porady') ? "navbar-link-active block" : "navbar-link block"}>
              Porady
            </Link>
            <Link to="/realizacje" className={isActive('/realizacje') ? "navbar-link-active block" : "navbar-link block"}>
              Realizacje
            </Link>
            <Link to="/kontakt" className={isActive('/kontakt') ? "navbar-link-active block" : "navbar-link block"}>
              Kontakt
            </Link>
            <Link to="/wycena" className="cta-button block text-center mt-4">
              Wycena online
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
