import React, { useState } from 'react';
import { Sparkles, X, ArrowRight } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

export const AnnouncementBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="relative bg-gradient-to-r from-charcoal-900 via-charcoal-850 to-charcoal-900 border-b border-gold-subtle/40 px-4 py-2.5 text-xs text-ivory-200 transition-all z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex-1 flex items-center justify-center gap-2.5 text-center">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-medium bg-saffron-500/15 text-saffron-400 border border-saffron-500/30">
            <Sparkles className="w-3 h-3 text-saffron-400" />
            Seasonal Tasting
          </span>
          <span className="font-light tracking-wide text-ivory-100 hidden sm:inline">
            {RESTAURANT_CONFIG.announcementText}
          </span>
          <a
            href="#reservations"
            className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-medium underline underline-offset-4 transition-colors"
          >
            {RESTAURANT_CONFIG.announcementCta}
            <ArrowRight className="w-3 h-3 ml-0.5" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="text-ivory-400 hover:text-ivory-100 p-1 rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-saffron-500"
          aria-label="Dismiss announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
