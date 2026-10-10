import React from 'react';
import { Utensils, Calendar, Sparkles, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20 scroll-mt-20"
      aria-label="Welcome to Saffron & Smoke"
    >
      {/* Background Cinematic Food Imagery & Overlays */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Warm ambient dining atmosphere at Saffron and Smoke"
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000 opacity-45 filter contrast-110 brightness-95"
          loading="eager"
          onError={(e) => {
            // High reliability fallback
            (e.target as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85';
          }}
        />
        {/* Deep Charcoal Gradients to blend smoothly with dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-charcoal-950/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-charcoal-950/60 to-charcoal-950" />
      </div>

      {/* Decorative Gold & Saffron Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-900/90 border border-gold-subtle/50 text-xs text-ivory-300 mb-8 backdrop-blur-md shadow-lg shadow-black/40">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="font-medium tracking-wide">Tradition, Served With A Twist</span>
          <span className="w-1 h-1 rounded-full bg-saffron-500" />
          <span className="text-ivory-400">Indiranagar, Bengaluru</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-ivory-50 leading-[1.08] max-w-4xl">
          An Indian Story,
          <span className="block italic font-light text-transparent bg-clip-text bg-gradient-to-r from-saffron-300 via-gold-400 to-copper-300">
            Told Through Flavour.
          </span>
        </h1>

        {/* Editorial Subtitle */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-ivory-300 font-light max-w-2xl leading-relaxed">
          {RESTAURANT_CONFIG.heroDescription}
        </p>

        {/* Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-saffron-600 via-saffron-500 to-copper-500 hover:from-saffron-500 hover:to-copper-400 text-ivory-50 shadow-xl shadow-saffron-950/50 border border-saffron-400/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Utensils className="w-4 h-4 text-ivory-100" />
            Explore Our Menu
          </a>

          <a
            href="#reservations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase bg-charcoal-900/80 hover:bg-charcoal-850 text-ivory-100 border border-charcoal-700 hover:border-gold-subtle transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            Reserve Your Table
          </a>
        </div>

        {/* Curated Highlights strip */}
        <div className="mt-14 pt-8 border-t border-charcoal-800/80 w-full max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-saffron-400 shrink-0">
              <span className="text-xs font-serif font-bold">36+</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ivory-400 font-medium">Stone-Ground</p>
              <p className="text-sm font-medium text-ivory-100">Regional Spices</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-gold-400 shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ivory-400 font-medium">Dinner Service</p>
              <p className="text-sm font-medium text-ivory-100">7:00 PM – 11:30 PM</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-start gap-3">
            <div className="w-8 h-8 rounded-full bg-charcoal-900 border border-charcoal-700 flex items-center justify-center text-copper-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ivory-400 font-medium">Heritage Space</p>
              <p className="text-sm font-medium text-ivory-100">Indiranagar, BLR</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#signature-dishes"
          className="mt-12 inline-flex flex-col items-center gap-2 text-ivory-400 hover:text-gold-400 transition-colors group focus:outline-none"
          aria-label="Scroll to signature dishes"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium opacity-70 group-hover:opacity-100">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 rounded-full border border-charcoal-700 group-hover:border-gold-subtle flex items-start justify-center p-1.5 transition-colors">
            <span className="w-1.5 h-2 bg-saffron-500 rounded-full animate-bounce" />
          </div>
        </a>

      </div>
    </section>
  );
};
