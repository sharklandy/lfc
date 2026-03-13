'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/services', label: 'Nos savoir-faire' },
  { href: '/realisations', label: 'Réalisations' },
  { href: '/equipe', label: 'Équipe' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+33123456789" className="flex items-center gap-2 hover:text-accent-light transition-colors">
              <Phone size={14} />
              <span>01 23 45 67 89</span>
            </a>
            <a href="mailto:contact@lfc-cloison.fr" className="flex items-center gap-2 hover:text-accent-light transition-colors">
              <Mail size={14} />
              <span>contact@lfc-cloison.fr</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Lun - Ven : 7h30 - 18h00</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">LFC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary leading-tight">LFC Cloison</span>
                <span className="text-xs text-gray-500 leading-tight">Expert en aménagement intérieur</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/devis"
                className="ml-4 bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Demander un devis
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
            isOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-1 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/devis"
              className="block text-center mt-4 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
            >
              Demander un devis
            </Link>
            <div className="pt-4 border-t border-gray-100 mt-4 space-y-2">
              <a href="tel:+33123456789" className="flex items-center gap-2 text-sm text-gray-600 px-4 py-2">
                <Phone size={14} />
                <span>01 23 45 67 89</span>
              </a>
              <a href="mailto:contact@lfc-cloison.fr" className="flex items-center gap-2 text-sm text-gray-600 px-4 py-2">
                <Mail size={14} />
                <span>contact@lfc-cloison.fr</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
