import React, { useState } from 'react';
import { Camera, X, Maximize2 } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';
import type { GalleryItem } from '../config/restaurantConfig';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Cuisine' | 'Ambiance' | 'Craft'>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = RESTAURANT_CONFIG.galleryItems.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section
      id="gallery"
      className="py-24 scroll-mt-20 bg-charcoal-950 relative border-t border-charcoal-850"
      aria-label="Restaurant photo gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs uppercase tracking-widest font-semibold border border-gold-500/20 mb-3">
            <Camera className="w-3.5 h-3.5" />
            Visual Diary
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory-50 tracking-tight">
            Glimpses of Saffron & Smoke
          </h2>
          <div className="editorial-divider my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
          </div>
          <p className="text-ivory-300 font-light text-base sm:text-lg">
            Atmosphere, culinary craft, and the art of modern Indian plating captured through the lens.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12">
          {(['All', 'Cuisine', 'Ambiance', 'Craft'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-saffron-500 ${
                selectedCategory === cat
                  ? 'bg-saffron-600 text-ivory-50 shadow-md shadow-saffron-950/40 border border-saffron-400/30'
                  : 'bg-charcoal-900 text-ivory-300 hover:text-white border border-charcoal-800 hover:border-gold-subtle'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-charcoal-900 border border-charcoal-800 hover:border-gold-subtle transition-all duration-300 shadow-lg hover:shadow-card-glow"
              role="button"
              tabIndex={0}
              aria-label={`View full image: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveItem(item);
                }
              }}
            >
              {/* Image */}
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80';
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content on hover / bottom */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-2 rounded-full bg-charcoal-950/80 text-gold-300 backdrop-blur-md border border-charcoal-700">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-saffron-400 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-ivory-50 mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-charcoal-950 rounded-2xl overflow-hidden border border-charcoal-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-charcoal-950/80 text-ivory-300 hover:text-white border border-charcoal-700 hover:border-gold-subtle transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src={activeItem.url}
                alt={activeItem.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </div>

            {/* Caption */}
            <div className="p-5 bg-charcoal-900 border-t border-charcoal-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-saffron-400">
                  {activeItem.category}
                </span>
                <h4 className="font-serif text-lg text-ivory-100">
                  {activeItem.title}
                </h4>
              </div>
              <span className="text-xs text-ivory-400">
                Saffron & Smoke Gallery
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
