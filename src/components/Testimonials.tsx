import React from 'react';
import { Star, Quote, Info } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-charcoal-900/60 relative border-t border-charcoal-850"
      aria-label="Sample guest experiences"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs uppercase tracking-widest font-semibold border border-saffron-500/20 mb-3">
            <Quote className="w-3.5 h-3.5" />
            Guest Reflections
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory-50 tracking-tight">
            Words From Our Tables
          </h2>
          <div className="editorial-divider my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
          </div>
          <p className="text-ivory-300 font-light text-base sm:text-lg">
            How our diners describe the warmth, aromatics, and dining ambiance of Saffron & Smoke.
          </p>

          {/* Fictional demo disclaimer */}
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-ivory-400/80 bg-charcoal-900/60 px-3 py-1 rounded-md border border-charcoal-800">
            <Info className="w-3.5 h-3.5 text-gold-500" />
            <span>Fictional sample testimonials illustrative of the guest experience for this demo website</span>
          </div>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESTAURANT_CONFIG.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-charcoal-900/90 rounded-2xl p-8 border border-charcoal-800 hover:border-gold-subtle transition-all duration-300 flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-gold-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                  <span className="ml-2 text-xs text-ivory-400 font-mono tracking-wider">
                    {item.highlight}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-serif text-base sm:text-lg text-ivory-100 font-normal leading-relaxed italic relative">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Occasion */}
              <div className="mt-8 pt-6 border-t border-charcoal-800 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-sm text-ivory-50">
                    {item.guestName}
                  </h4>
                  <p className="text-xs text-saffron-400 font-light mt-0.5">
                    {item.title}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-charcoal-800 border border-charcoal-700 flex items-center justify-center text-ivory-400 text-xs font-serif">
                  {item.guestName.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hospitality Guarantee Banner */}
        <div className="mt-16 bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 border border-gold-subtle/40 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-serif text-lg sm:text-xl font-medium text-ivory-100">
              Planning a Private Gathering or Celebration?
            </h3>
            <p className="text-xs sm:text-sm text-ivory-400 font-light mt-1">
              Our private dining enclave accommodates parties from 8 to 40 with bespoke chef tasting menus.
            </p>
          </div>
          <a
            href="#reservations"
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 border border-gold-500/30 transition-colors"
          >
            Inquire for Private Events
          </a>
        </div>

      </div>
    </section>
  );
};
