import React, { useState } from 'react';
import { Utensils, Flame, Sparkles, BookOpen } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import { MenuModal } from './MenuModal';

interface InteractiveMenuProps {
  onSelectItemForReservation?: (dishName: string) => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ onSelectItemForReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Starters');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter items by category & dietary
  const filteredItems = RESTAURANT_CONFIG.menuItems.filter((item) => {
    const matchesCategory = item.category === activeCategory;
    if (!matchesCategory) return false;
    if (dietaryFilter === 'all') return true;
    return item.dietary === dietaryFilter;
  });

  return (
    <section
      id="menu"
      className="py-24 bg-charcoal-950 relative border-t border-charcoal-850"
      aria-label="Interactive restaurant menu"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-400 text-xs uppercase tracking-widest font-semibold border border-saffron-500/20 mb-3">
            <Utensils className="w-3.5 h-3.5" />
            Gastronomy
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory-50 tracking-tight">
            The Seasonal Menu
          </h2>
          <div className="editorial-divider my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
          </div>
          <p className="text-ivory-300 font-light text-base sm:text-lg">
            A curated symphony of slow-cooked gravies, clay tandoor roasts, fragrant dum biryanis, and artisanal confection.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {RESTAURANT_CONFIG.menuCategories.map((category) => {
            const isActive = activeCategory === category;
            const count = RESTAURANT_CONFIG.menuItems.filter((i) => i.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-saffron-500 ${
                  isActive
                    ? 'bg-saffron-600 text-ivory-50 shadow-lg shadow-saffron-950/50 border border-saffron-400/40'
                    : 'bg-charcoal-900/90 text-ivory-300 hover:text-white border border-charcoal-800 hover:border-gold-subtle'
                }`}
                aria-pressed={isActive}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-saffron-700/60 text-ivory-100' : 'bg-charcoal-800 text-ivory-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dietary Sub-Filters */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="inline-flex items-center p-1 bg-charcoal-900/80 rounded-full border border-charcoal-800">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                dietaryFilter === 'all'
                  ? 'bg-charcoal-800 text-gold-300 shadow-sm'
                  : 'text-ivory-400 hover:text-ivory-200'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                dietaryFilter === 'veg'
                  ? 'bg-charcoal-800 text-emerald-400 shadow-sm'
                  : 'text-ivory-400 hover:text-ivory-200'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              Vegetarian
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                dietaryFilter === 'non-veg'
                  ? 'bg-charcoal-800 text-red-400 shadow-sm'
                  : 'text-ivory-400 hover:text-ivory-200'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-red-500" />
              Non-Vegetarian
            </button>
          </div>
        </div>

        {/* Menu Items Grid with Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-charcoal-900/80 border border-charcoal-800 hover:border-gold-subtle rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:bg-charcoal-900 hover:shadow-card-glow flex flex-col sm:flex-row gap-5 justify-between"
            >
              {/* Dish Thumbnail */}
              {item.image && (
                <div className="relative w-full sm:w-28 sm:h-28 aspect-[16/10] sm:aspect-square rounded-xl overflow-hidden bg-charcoal-950 shrink-0 border border-charcoal-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/dishes/butter-chicken.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent sm:hidden" />
                </div>
              )}

              {/* Dish Info & Actions */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Header: Name, Price, Badges */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Dietary Icon */}
                      {item.dietary === 'veg' ? (
                        <div
                          className="w-3.5 h-3.5 border border-emerald-500 rounded-sm flex items-center justify-center shrink-0"
                          title="Vegetarian"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                      ) : item.dietary === 'non-veg' ? (
                        <div
                          className="w-3.5 h-3.5 border border-red-500 rounded-sm flex items-center justify-center shrink-0"
                          title="Non-Vegetarian"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        </div>
                      ) : null}

                      <h3 className="font-serif text-base sm:text-lg font-medium text-ivory-50 group-hover:text-gold-300 transition-colors">
                        {item.name}
                      </h3>

                      {item.isSignature && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full text-[9px] font-semibold tracking-wider uppercase bg-saffron-500/20 text-saffron-300 border border-saffron-500/30">
                          <Sparkles className="w-2.5 h-2.5" />
                          Signature
                        </span>
                      )}

                      {item.spiceLevel === 'hot' && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] text-amber-500">
                          <Flame className="w-3 h-3 fill-amber-500" />
                          Spicy
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="shrink-0 text-right">
                      <span className="font-serif text-sm sm:text-base font-semibold text-saffron-400">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm text-ivory-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Quick Action */}
                <div className="mt-4 pt-3 border-t border-charcoal-800/60 flex items-center justify-between text-xs text-ivory-400">
                  <span className="text-[10px] font-mono text-ivory-500 uppercase tracking-wider">
                    {item.category}
                  </span>

                  <a
                    href="#reservations"
                    onClick={() => onSelectItemForReservation?.(item.name)}
                    className="text-xs text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-1 hover:underline underline-offset-4"
                  >
                    Reserve For This Dish &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filter yields zero */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-ivory-400">
            <p className="text-sm">No items found matching this filter in {activeCategory}.</p>
            <button
              onClick={() => setDietaryFilter('all')}
              className="mt-3 text-xs text-saffron-400 underline font-medium"
            >
              Reset to all dishes
            </button>
          </div>
        )}

        {/* View Full Menu CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-charcoal-900 hover:bg-charcoal-850 text-ivory-100 border border-gold-subtle hover:border-gold-400 shadow-lg shadow-black/40 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4 text-gold-400" />
            <span>View Full Menu Catalog (Print & PDF)</span>
          </button>
        </div>

      </div>

      {/* Full Menu Modal */}
      <MenuModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBookItem={onSelectItemForReservation}
      />
    </section>
  );
};
