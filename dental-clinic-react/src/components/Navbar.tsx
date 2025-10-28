import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 shadow-2xl backdrop-blur-xl border-b border-primary-100' 
        : 'bg-white/90 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <div className="relative">
              <img 
                src="/images/logoConsultorio.png" 
                alt="Logo A&D" 
                className="w-12 h-12 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black font-display bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                A&D
              </span>
              <span className="text-xs text-gray-600 font-bold -mt-1">Consultorio Dental</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-primary-600 font-medium relative group transition-colors duration-200"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-primary-600 font-medium relative group transition-colors duration-200"
            >
              Servicios
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('profesionales')}
              className="text-gray-700 hover:text-primary-600 font-medium relative group transition-colors duration-200"
            >
              Profesionales
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-primary-600 font-medium relative group transition-colors duration-200"
            >
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Reservar Turno
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              className="text-gray-700 text-xl"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 space-y-2">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('profesionales')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              Profesionales
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              Contacto
            </button>
            <div className="px-4 pt-2">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-full font-semibold"
              >
                Reservar Turno
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
