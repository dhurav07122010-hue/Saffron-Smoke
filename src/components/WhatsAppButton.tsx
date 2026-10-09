import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = encodeURIComponent(RESTAURANT_CONFIG.whatsappDefaultMessage);
    const url = `https://wa.me/${RESTAURANT_CONFIG.whatsappNumber}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-charcoal-900/95 border border-gold-subtle px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-right duration-500">
          <div className="text-left">
            <p className="text-xs font-semibold text-ivory-100 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Chat with Concierge
            </p>
            <p className="text-[10px] text-ivory-400">
              Instant table inquiry & menu questions
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-ivory-400 hover:text-ivory-100 p-0.5 ml-1 transition-colors"
            aria-label="Close WhatsApp tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 border border-emerald-400/40 transition-all duration-300 transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Chat with restaurant on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border border-charcoal-950" />
        </span>
        <MessageCircle className="w-7 h-7 text-white transition-transform group-hover:rotate-6" />
      </button>
    </div>
  );
};
