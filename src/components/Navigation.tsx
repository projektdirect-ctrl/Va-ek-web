import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'Značky', href: '#znacky' },
  { label: 'Jak to funguje', href: '#jak-to-funguje' },
  { label: 'Galerie', href: '#galerie' },
  { label: 'Kontakt', href: '#kontakt' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-black/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/WhatsApp_Image_2026-03-29_at_09.29.11-removebg-preview.png"
              alt="Mobilní Servis Vozidel"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 transition-colors duration-300 text-sm font-medium tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+420735237360"
              className="gold-gradient text-black font-semibold px-5 py-2.5 rounded text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              +420 735 237 360
            </a>
          </div>

          <button
            className="lg:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center -mr-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Otevřít menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-white/10 h-[calc(100vh-4rem)] flex flex-col">
          <div className="flex flex-col px-5 py-6 gap-1 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-gold-400 transition-colors py-4 text-lg tracking-widest uppercase font-medium border-b border-white/8 last:border-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="px-5 pb-8">
            <a
              href="tel:+420735237360"
              className="gold-gradient text-black font-bold py-4 rounded flex items-center justify-center text-lg tracking-wide w-full"
              onClick={() => setMenuOpen(false)}
            >
              +420 735 237 360
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
