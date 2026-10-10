import React from 'react';
import { Utensils, ArrowUp, Mail, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 text-ivory-300 border-t border-charcoal-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-charcoal-850">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-charcoal-900 border border-gold-subtle flex items-center justify-center">
                <span className="text-saffron-500 font-serif font-bold text-xl leading-none">S</span>
                <span className="text-gold-400 text-xs font-serif leading-none -ml-0.5">&</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-medium tracking-tight text-ivory-50 block">
                  {RESTAURANT_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-ivory-400 font-sans block -mt-1">
                  Modern Indian Restaurant
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory-400 font-light leading-relaxed max-w-sm">
              "{RESTAURANT_CONFIG.tagline}" An uncompromising dedication to slow-ground spices, clay charcoal hearths, and warm heritage hospitality.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-900 border border-charcoal-700 hover:border-gold-subtle hover:text-gold-300 flex items-center justify-center transition-colors text-ivory-300"
                aria-label="Instagram profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={RESTAURANT_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-900 border border-charcoal-700 hover:border-gold-subtle hover:text-gold-300 flex items-center justify-center transition-colors text-ivory-300"
                aria-label="Facebook page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href={RESTAURANT_CONFIG.socialLinks.tripadvisor}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-charcoal-900 border border-charcoal-700 hover:border-gold-subtle hover:text-gold-300 flex items-center justify-center transition-colors text-ivory-300"
                aria-label="TripAdvisor reviews"
              >
                <Utensils className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-ivory-100">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-gold-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#story" className="hover:text-gold-300 transition-colors">Our Story & Heritage</a>
              </li>
              <li>
                <a href="#signature-dishes" className="hover:text-gold-300 transition-colors">Signature Dishes</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-300 transition-colors">Seasonal Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-300 transition-colors">Restaurant Gallery</a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-gold-300 transition-colors">Table Bookings</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-ivory-100">
              Hours
            </h4>
            <div className="space-y-2 text-xs text-ivory-400 font-light">
              <div>
                <p className="text-ivory-200 font-medium">Tue – Fri</p>
                <p>12:00 PM – 3:30 PM</p>
                <p>7:00 PM – 11:30 PM</p>
              </div>
              <div className="pt-1">
                <p className="text-ivory-200 font-medium">Sat – Sun</p>
                <p>12:00 PM – 4:00 PM</p>
                <p>6:30 PM – 11:45 PM</p>
              </div>
              <div className="pt-1">
                <p className="text-saffron-400 font-medium">Monday</p>
                <p>Closed (Private Events only)</p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-ivory-100">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-ivory-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>Indiranagar, Bengaluru, Karnataka</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-saffron-400 shrink-0" />
                <a href={`mailto:${RESTAURANT_CONFIG.email}`} className="hover:text-ivory-200">
                  {RESTAURANT_CONFIG.email}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#reservations"
                className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-saffron-600/90 hover:bg-saffron-500 text-ivory-50 transition-colors"
              >
                Book a Table
              </a>
            </div>
          </div>

        </div>

        {/* Demo Disclaimer & Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ivory-500">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center md:text-left">
            <span>&copy; {CURRENT_YEAR} {RESTAURANT_CONFIG.name}. Fictional Demo Website.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="text-gold-500/80">
              Ready for client demonstration and full restaurant customization.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-ivory-400 hover:text-gold-300 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
