import React from 'react';
import { Sparkles, Compass, Flame, Users } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-charcoal-900/40 relative overflow-hidden border-t border-charcoal-850"
      aria-label="The dining experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper-500/10 text-copper-400 text-xs uppercase tracking-widest font-semibold border border-copper-500/20 mb-3">
            <Compass className="w-3.5 h-3.5" />
            The Experience
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory-50 tracking-tight">
            More Than Just Dining
          </h2>
          <div className="editorial-divider my-4">
            <span className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
          </div>
          <p className="text-ivory-300 font-light text-base sm:text-lg">
            Every sense is awakened from the moment you step past our carved doorway.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Feature Hero Box (7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-charcoal-900 rounded-3xl p-8 sm:p-10 border border-charcoal-800 relative overflow-hidden flex flex-col justify-between group hover:border-gold-subtle transition-all duration-300">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-saffron-500/15 transition-all" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-charcoal-950 border border-charcoal-700 flex items-center justify-center text-saffron-400 mb-6">
                <Flame className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase tracking-widest text-saffron-400 font-semibold">
                Pillar I • Gastronomic Precision
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-ivory-50 mt-2 mb-4 leading-snug">
                Thoughtfully Crafted Flavours
              </h3>

              <p className="text-ivory-300 font-light text-base leading-relaxed max-w-xl">
                We believe spices should illuminate ingredients, never overwhelm them. From slow-ground Kashmiri saffron to sun-roasted coriander seeds and whole mace flowers, each recipe balances heat, acidity, sweetness, and smokiness into memorable culinary crescendos.
              </p>

              {/* Sub-features list */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-charcoal-800">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span className="text-xs text-ivory-200">Daily In-House Spice Milling</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span className="text-xs text-ivory-200">Wood-Fired Charcoal Heart</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span className="text-xs text-ivory-200">Single-Origin Desi Ghee</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span className="text-xs text-ivory-200">Heritage Clay Pot Stewing</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 flex items-center justify-between text-xs text-ivory-400 font-mono">
              <span>TRADITION &bull; INTEGRITY</span>
              <span className="text-gold-400">01 / 03</span>
            </div>
          </div>

          {/* Column 2: Stacked Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* Card 2: A Warm, Welcoming Space */}
            <div className="bg-charcoal-900/90 rounded-3xl p-8 border border-charcoal-800 relative overflow-hidden group hover:border-gold-subtle transition-all duration-300 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-charcoal-950 border border-charcoal-700 flex items-center justify-center text-gold-400 mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>

                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Pillar II • Sanctuary
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-ivory-50 mt-1 mb-3">
                  A Warm, Welcoming Space
                </h3>

                <p className="text-ivory-300 font-light text-sm leading-relaxed">
                  Low-lit copper sconces, textured charcoal stone, handcrafted Indian teak furniture, and gentle instrumental sitar & sarod soundscapes. Designed for lingering over conversation.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-800 flex items-center justify-between text-xs text-ivory-400 font-mono">
                <span>INTIMATE AMBIANCE</span>
                <span className="text-gold-400">02 / 03</span>
              </div>
            </div>

            {/* Card 3: Moments Worth Sharing */}
            <div className="bg-charcoal-900/90 rounded-3xl p-8 border border-charcoal-800 relative overflow-hidden group hover:border-gold-subtle transition-all duration-300 flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-charcoal-950 border border-charcoal-700 flex items-center justify-center text-copper-400 mb-4">
                  <Users className="w-5 h-5" />
                </div>

                <span className="text-xs uppercase tracking-widest text-copper-400 font-semibold">
                  Pillar III • Connection
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-ivory-50 mt-1 mb-3">
                  Moments Worth Sharing
                </h3>

                <p className="text-ivory-300 font-light text-sm leading-relaxed">
                  Food served family-style to ignite communal celebration. Whether an intimate dinner for two, a private anniversary room, or a banquet of forty, our hosts anticipate every need.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-800 flex items-center justify-between text-xs text-ivory-400 font-mono">
                <span>CELEBRATIONS</span>
                <span className="text-gold-400">03 / 03</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
