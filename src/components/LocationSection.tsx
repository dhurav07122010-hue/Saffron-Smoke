import React from 'react';
import { MapPin, Clock, Calendar, Mail, Navigation, Car, AlertTriangle, ShieldCheck } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurantConfig';

export const LocationSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 scroll-mt-20 bg-charcoal-900/60 relative border-t border-charcoal-850"
      aria-label="Location and opening hours"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs uppercase tracking-widest font-semibold border border-gold-500/20 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Find Us
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory-50 tracking-tight">
            Hours & Location
          </h2>
          <div className="editorial-divider my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
          </div>
          <p className="text-ivory-300 font-light text-base sm:text-lg">
            Nestled in the heritage heart of Indiranagar, welcoming you for lunch and dinner.
          </p>

          {/* Explicit demo disclosure badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-charcoal-950/80 border border-charcoal-800 text-xs text-ivory-400">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Fictional sample address and contact info for website demonstration purposes</span>
          </div>
        </div>

        {/* 2-Column Layout: Details + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="bg-charcoal-950/80 rounded-2xl p-6 border border-charcoal-800">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-charcoal-900 border border-charcoal-700 text-saffron-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-ivory-50">Address</h3>
                  <p className="text-xs text-gold-400 font-mono mt-0.5">(Demo Location)</p>
                  <p className="mt-2 text-sm text-ivory-300 font-light leading-relaxed">
                    {RESTAURANT_CONFIG.address.line1}<br />
                    {RESTAURANT_CONFIG.address.neighborhood}, {RESTAURANT_CONFIG.address.city}<br />
                    {RESTAURANT_CONFIG.address.state} — {RESTAURANT_CONFIG.address.postalCode}
                  </p>
                  
                  <div className="mt-3 flex items-center gap-2 text-xs text-ivory-400">
                    <Car className="w-3.5 h-3.5 text-gold-400" />
                    <span>Complimentary Valet Parking Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-charcoal-950/80 rounded-2xl p-6 border border-charcoal-800">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-charcoal-900 border border-charcoal-700 text-gold-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-medium text-ivory-50">Dining Hours</h3>
                  <div className="mt-3 space-y-3">
                    {RESTAURANT_CONFIG.openingHours.map((schedule) => (
                      <div key={schedule.days} className="text-xs border-b border-charcoal-850 pb-2.5 last:border-0 last:pb-0">
                        <div className="flex justify-between font-medium text-ivory-100">
                          <span>{schedule.days}</span>
                          <span className="text-saffron-400 font-mono">{schedule.lunch}</span>
                        </div>
                        <div className="flex justify-between text-ivory-400 mt-1">
                          <span>Dinner Service</span>
                          <span className="text-ivory-300 font-mono">{schedule.dinner}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-charcoal-950/80 rounded-2xl p-6 border border-charcoal-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-ivory-400 block mb-1">
                    Table Reservations
                  </span>
                  <a
                    href="#reservations"
                    className="inline-flex items-center gap-2 text-sm text-ivory-100 hover:text-gold-300 font-medium transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-saffron-400" />
                    <span>Reserve a Table &rarr;</span>
                  </a>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-ivory-400 block mb-1">
                    Email Desk
                  </span>
                  <a
                    href={`mailto:${RESTAURANT_CONFIG.email}`}
                    className="inline-flex items-center gap-2 text-sm text-ivory-100 hover:text-gold-300 transition-colors truncate max-w-full"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="truncate">{RESTAURANT_CONFIG.email}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Map Column (7 cols) */}
          <div className="lg:col-span-7 bg-charcoal-950 rounded-3xl overflow-hidden border border-charcoal-800 shadow-2xl flex flex-col relative min-h-[420px]">
            {/* Interactive map preview container */}
            <div className="relative flex-1 w-full min-h-[360px] bg-charcoal-950">
              <iframe
                title="Saffron and Smoke Location Map (Demo)"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.987747761895!2d77.63212876977539!3d12.97194!2m3!1f0!2f0!3f0!3m2!1i1024!2f78!4f13.1!3m3!1m2!1s0x3bae16a70e7e17cf%3A0xb30491a6d713182!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[110%] opacity-85"
                loading="lazy"
                allowFullScreen={false}
              />

              {/* Floating Map Pin Badge */}
              <div className="absolute top-4 left-4 bg-charcoal-950/95 border border-gold-subtle p-3 rounded-xl shadow-xl backdrop-blur-md max-w-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-saffron-500 animate-ping" />
                  <span className="font-serif text-sm font-semibold text-ivory-100">
                    {RESTAURANT_CONFIG.name}
                  </span>
                </div>
                <p className="text-[11px] text-ivory-400 mt-1">
                  Indiranagar 100ft Road Corridor &bull; Valet at Front Porch
                </p>
              </div>
            </div>

            {/* Map Action Bar */}
            <div className="p-4 bg-charcoal-900 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-ivory-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Smart Dress Code: Smart Casual &bull; No beachwear</span>
              </div>

              <a
                href={RESTAURANT_CONFIG.address.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-800 hover:bg-gold-500/20 text-gold-300 border border-charcoal-700 hover:border-gold-subtle transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
