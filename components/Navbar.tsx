
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Segmentos', href: '#segmentos' },
    { name: 'Sobre Nós', href: '#sobre-nos' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-800' : 'bg-transparent py-4'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/logo.png" alt="FDR Consultoria" className="h-12 w-auto" />
            <span className="font-display font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              FDR <span className="text-primary font-extrabold">CONSULTORIA</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-semibold uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
            >
              Fale Conosco
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 dark:text-gray-300 hover:text-primary"
            >
              <span className="material-icons-outlined text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-primary text-white font-bold py-4 rounded-xl mt-4"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
