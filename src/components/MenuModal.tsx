import React from 'react';
import { X, Utensils, Download } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookItem?: (dishName: string) => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, onBookItem }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const categories = RESTAURANT_CONFIG.menuCategories;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="menu-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-charcoal-950 border border-charcoal-750 rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-charcoal-800 bg-charcoal-900/90">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <h2 id="menu-modal-title" className="font-serif text-lg sm:text-xl font-medium text-ivory-50">
                The Complete Culinary Collection
              </h2>
              <p className="text-xs text-ivory-400">
                {RESTAURANT_CONFIG.name} — Dine-in Menu (Demo Sample Pricing)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-charcoal-800 hover:bg-charcoal-700 text-ivory-200 border border-charcoal-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-ivory-400 hover:text-white hover:bg-charcoal-800 transition-colors"
              aria-label="Close menu modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Menu Body */}
        <div className="overflow-y-auto px-6 py-8 space-y-12">
          {categories.map((category) => {
            const items = RESTAURANT_CONFIG.menuItems.filter((i) => i.category === category);
            if (items.length === 0) return null;

            return (
              <section key={category} className="space-y-4">
                <div className="flex items-center gap-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-gold-400 border-b border-gold-subtle pb-1">
                    {category}
                  </h3>
                  <div className="flex-1 h-[1px] bg-charcoal-800" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group flex justify-between gap-4 p-3 rounded-xl hover:bg-charcoal-900/50 transition-colors border border-transparent hover:border-charcoal-800"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          {/* Veg/Non-veg mark */}
                          {item.dietary === 'veg' ? (
                            <div className="w-3.5 h-3.5 border border-emerald-500 rounded-sm flex items-center justify-center shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            </div>
                          ) : item.dietary === 'non-veg' ? (
                            <div className="w-3.5 h-3.5 border border-red-500 rounded-sm flex items-center justify-center shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            </div>
                          ) : null}

                          <h4 className="font-serif text-base font-medium text-ivory-100 group-hover:text-gold-300 transition-colors">
                            {item.name}
                          </h4>

                          {item.isSignature && (
                            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-saffron-500/20 text-saffron-300 font-semibold">
                              Signature
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-xs text-ivory-400 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-serif text-sm font-semibold text-saffron-400">
                          ₹{item.price}
                        </span>
                        {onBookItem && (
                          <button
                            onClick={() => {
                              onBookItem(item.name);
                              onClose();
                            }}
                            className="block mt-1 text-[10px] text-ivory-500 hover:text-gold-300 underline"
                          >
                            Reserve
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-charcoal-800 bg-charcoal-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory-400">
          <span>* Taxes and discretionary service charges extra. Prices shown in INR for demo.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 font-medium transition-colors"
          >
            Close Menu View
          </button>
        </div>

      </div>
    </div>
  );
};
