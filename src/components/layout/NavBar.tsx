
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/0748ff93-80ad-4145-a425-eff5345ea9ac.png" 
                alt="Aluraf Logo" 
                className="h-16 w-auto"
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
            
            {/* Dropdown menu */}
            <div className="relative group">
              <button 
                className="navbar-link flex items-center"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Zadaszenia Tarasowe
              </button>
              <div 
                className={`absolute ${dropdownOpen ? 'block' : 'hidden'} group-hover:block bg-black shadow-lg rounded-md mt-2 z-10 min-w-[200px]`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link to="/pergole-lamelowe" className="dropdown-link">Pergole Lamelowe</Link>
                <Link to="/zadaszenia" className="dropdown-link">Nowoczesne Zadaszenia</Link>
              </div>
            </div>
            
            <Link to="/carporty" className={isActive('/carporty') ? "navbar-link-active" : "navbar-link"}>
              Carporty
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
                className="navbar-link w-full text-left"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Zadaszenia Tarasowe
              </button>
              {dropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link to="/pergole-lamelowe" className="dropdown-link block">Pergole Lamelowe</Link>
                  <Link to="/zadaszenia" className="dropdown-link block">Nowoczesne Zadaszenia</Link>
                </div>
              )}
            </div>
            <Link to="/carporty" className={isActive('/carporty') ? "navbar-link-active block" : "navbar-link block"}>
              Carporty
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
