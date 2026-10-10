import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Calendar, Mail, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close drawer on desktop screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70; // offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleBookTable = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.body.style.overflow = '';

    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('reservations');
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-charcoal-800 shadow-xl py-3.5'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className="flex items-center gap-3 group focus:outline-none"
              aria-label={`${RESTAURANT_CONFIG.name} Home`}
            >
              <div className="w-9 h-9 rounded-full bg-charcoal-900 border border-gold-subtle flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-gold-400">
                <span className="text-saffron-500 font-serif font-bold text-lg leading-none">S</span>
                <span className="text-gold-400 text-xs font-serif leading-none -ml-0.5">&</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-ivory-50 group-hover:text-gold-300 transition-colors">
                  {RESTAURANT_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-ivory-400 font-sans -mt-1">
                  Modern Indian Cuisine
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-medium tracking-wide text-ivory-300 hover:text-gold-400 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-saffron-500 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#reservations"
                onClick={handleBookTable}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-saffron-600 to-copper-500 hover:from-saffron-500 hover:to-copper-400 text-ivory-50 shadow-md shadow-saffron-950/40 border border-saffron-400/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book a Table
              </a>
            </div>

            {/* Mobile Actions: Quick Book & Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="#reservations"
                onClick={handleBookTable}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-saffron-600/90 hover:bg-saffron-500 text-ivory-50 border border-saffron-500/40 transition-colors sm:hidden"
              >
                Book
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-ivory-200 hover:text-white bg-charcoal-900 border border-charcoal-700 hover:border-gold-subtle focus:outline-none focus:ring-2 focus:ring-saffron-500 transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer rendered in Portal to prevent backdrop-filter containment */}
      {mobileMenuOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer content */}
            <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-charcoal-950 border-l border-charcoal-800 p-6 flex flex-col justify-between shadow-2xl animate-drawer-in overflow-y-auto z-10">
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-charcoal-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-charcoal-900 border border-gold-subtle flex items-center justify-center">
                      <span className="text-saffron-500 font-serif font-bold text-sm">S</span>
                      <span className="text-gold-400 text-xs font-serif -ml-0.5">&</span>
                    </div>
                    <span className="font-serif text-lg font-semibold text-ivory-50">
                      {RESTAURANT_CONFIG.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-ivory-400 hover:text-white hover:bg-charcoal-900 border border-transparent hover:border-charcoal-700 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation list */}
                <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile Navigation Links">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-ivory-200 hover:text-gold-300 hover:bg-charcoal-900 border border-transparent hover:border-charcoal-800 transition-all"
                    >
                      <span>{link.label}</span>
                      <span className="text-charcoal-500 text-sm">&rarr;</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom Actions in drawer - Phone completely removed */}
              <div className="pt-6 border-t border-charcoal-800 space-y-4">
                <a
                  href="#reservations"
                  onClick={handleBookTable}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-saffron-600 to-copper-500 hover:from-saffron-500 hover:to-copper-400 text-ivory-50 shadow-md transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Table
                </a>

                <div className="space-y-2 text-center text-xs text-ivory-400">
                  <div className="flex items-center justify-center gap-1.5 text-ivory-400">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>Indiranagar, Bengaluru</span>
                  </div>
                  <a
                    href={`mailto:${RESTAURANT_CONFIG.email}`}
                    className="inline-flex items-center justify-center gap-1.5 text-ivory-300 hover:text-gold-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                    <span className="truncate">{RESTAURANT_CONFIG.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
