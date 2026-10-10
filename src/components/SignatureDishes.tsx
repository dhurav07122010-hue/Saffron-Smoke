import React from 'react';
import { Sparkles, Utensils, Flame, Info } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

interface SignatureDishesProps {
  onSelectDishForReservation?: (dishName: string) => void;
}

export const SignatureDishes: React.FC<SignatureDishesProps> = ({ onSelectDishForReservation }) => {
  return (
    <section
      id="signature-dishes"
      className="py-24 scroll-mt-20 bg-charcoal-950 relative border-t border-charcoal-850"
      aria-label="Signature dishes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs uppercase tracking-widest font-semibold border border-saffron-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Culinary Signatures
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory-50 tracking-tight">
            Crafted for the Connoisseur
          </h2>
          <div className="editorial-divider my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
          </div>
          <p className="text-ivory-300 font-light text-base sm:text-lg">
            Time-honoured recipes, charcoal embers, and house-ground spices brought to life with contemporary poise.
          </p>

          {/* Fictional demo notice */}
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-ivory-400/80 bg-charcoal-900/60 px-3 py-1 rounded-md border border-charcoal-800">
            <Info className="w-3.5 h-3.5 text-gold-500" />
            <span>Sample presentation items & fictional pricing for demonstration purposes</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {RESTAURANT_CONFIG.signatureDishes.map((dish) => (
            <article
              key={dish.id}
              className="group relative bg-charcoal-900/90 rounded-2xl overflow-hidden border border-charcoal-800 hover:border-gold-subtle transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-card-glow"
            >
              {/* Image Container with aspect ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-950">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                  loading="lazy"
                  onError={(e) => {
                    // Safe local fallback
                    (e.target as HTMLImageElement).src = '/images/dishes/butter-chicken.jpg';
                  }}
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent" />

                {/* Badge (Chef's Signature / House Heritage) */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-charcoal-950/80 text-gold-300 backdrop-blur-md border border-gold-subtle">
                    {dish.badge}
                  </span>
                </div>

                {/* Dietary Tag (Veg / Non-Veg Icon) */}
                <div className="absolute top-3 right-3 bg-charcoal-950/80 backdrop-blur-md p-1.5 rounded-md border border-charcoal-700">
                  {dish.dietary === 'veg' ? (
                    <div
                      className="w-4 h-4 border-2 border-emerald-500 rounded-sm flex items-center justify-center"
                      title="Vegetarian"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  ) : (
                    <div
                      className="w-4 h-4 border-2 border-red-500 rounded-sm flex items-center justify-center"
                      title="Non-Vegetarian"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                  )}
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-3 right-3 bg-charcoal-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-saffron-500/40">
                  <span className="font-serif text-sm font-semibold text-saffron-400">
                    ₹{dish.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] uppercase tracking-wider text-ivory-400 font-medium">
                      {dish.dietary === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                    </span>
                    {dish.spiceLevel === 'medium' && (
                      <span className="flex items-center text-[10px] text-amber-500">
                        <Flame className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span className="ml-0.5">Spiced</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-medium text-ivory-50 group-hover:text-gold-300 transition-colors">
                    {dish.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-ivory-300 font-light leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Pairing Note & Action */}
                <div className="mt-6 pt-4 border-t border-charcoal-800">
                  <p className="text-[11px] text-gold-400/90 italic font-serif mb-4">
                    {dish.pairingNote}
                  </p>

                  <a
                    href="#reservations"
                    onClick={() => onSelectDishForReservation?.(dish.name)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-ivory-200 bg-charcoal-800 hover:bg-saffron-600 hover:text-white border border-charcoal-700 hover:border-saffron-500 transition-all duration-200"
                  >
                    <Utensils className="w-3 h-3" />
                    Reserve For This Dish
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu CTA Bar */}
        <div className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-charcoal-900 text-ivory-200 border border-charcoal-700 hover:border-gold-subtle hover:text-gold-300 transition-all duration-300"
          >
            <span>Explore All 20+ Menu Offerings</span>
            <span className="font-mono text-saffron-500">&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
