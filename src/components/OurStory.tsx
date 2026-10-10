import React from 'react';
import { Flame, Clock, Award, HeartHandshake } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section
      id="story"
      className="py-24 scroll-mt-20 bg-charcoal-900/60 relative overflow-hidden border-t border-charcoal-850"
      aria-label="Our culinary philosophy and story"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side (Images Composition) - 5 cols */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="relative rounded-2xl overflow-hidden border border-charcoal-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                  alt="Culinary chef hand-crafting spices at Saffron and Smoke"
                  className="w-full h-[460px] object-cover object-center filter brightness-90 contrast-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] uppercase tracking-widest text-gold-400 font-medium">
                    The Culinary Hearth
                  </span>
                  <p className="font-serif text-lg text-ivory-50 mt-1">
                    "Every pinch of spice carries centuries of storytelling."
                  </p>
                </div>
              </div>

              {/* Overlapping Floating Element */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-charcoal-950/95 border border-gold-subtle p-5 rounded-xl shadow-2xl backdrop-blur-md max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center text-saffron-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xl font-serif font-bold text-ivory-50 block leading-tight">
                      Charcoal & Clay
                    </span>
                    <span className="text-[11px] text-ivory-400 font-sans">
                      Authentic Tandoor Technique
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Border */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-gold-subtle/50 rounded-tl-xl pointer-events-none" />
            </div>
          </div>

          {/* Editorial Content Side - 7 cols */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 text-xs uppercase tracking-widest font-semibold border border-gold-500/20 mb-4">
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory-50 tracking-tight leading-tight">
              Rooted in Tradition. <br />
              <span className="italic font-light text-saffron-400">
                Made for Today.
              </span>
            </h2>

            <div className="w-16 h-[2px] bg-gradient-to-r from-saffron-500 to-transparent my-6" />

            <div className="space-y-4 text-ivory-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                Indian cooking is not merely an assemblage of ingredients; it is an ancient science of equilibrium. At <strong className="text-ivory-100 font-medium">Saffron & Smoke</strong>, we began with a simple reverence: honour the soulful depth of India’s culinary heritage while paring away the heavy oils and artificial shortcuts that often mask it.
              </p>
              <p>
                Every morning begins with stone-mortar grinding. Whole black cardamom from Kerala, fragrant saffron filaments from the valleys of Pampore, and sun-dried Kashmiri chilies are roasted to awaken essential oils before meeting the pan.
              </p>
              <p>
                Our slow-cooked stews and biryanis follow the classic <em>Dum Pukht</em> method — sealed under slow dough barriers so steam and fragrant botanicals circulate within their own juices. The result is food that feels remarkably rich yet light, vibrant, and unmistakably authentic.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-charcoal-800">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-charcoal-900 border border-charcoal-700 text-gold-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-ivory-100">Zero Shortcuts</h4>
                  <p className="text-xs text-ivory-400 font-light mt-0.5">No artificial coloring or pre-made bulk bases.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-charcoal-900 border border-charcoal-700 text-saffron-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-ivory-100">Slow Dum Cooking</h4>
                  <p className="text-xs text-ivory-400 font-light mt-0.5">Up to 24-hour simmering on charcoal embers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-charcoal-900 border border-charcoal-700 text-copper-400 shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-ivory-100">Atithi Devo Bhava</h4>
                  <p className="text-xs text-ivory-400 font-light mt-0.5">Warmth and hospitality that makes you feel family.</p>
                </div>
              </div>
            </div>

            {/* Quote attribution */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-subtle">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=200&q=80"
                  alt="Executive Chef"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80';
                  }}
                />
              </div>
              <div>
                <p className="font-serif text-sm font-medium text-ivory-100">Chef Kabir Varma</p>
                <p className="text-xs text-ivory-400">Culinary Director & Co-Founder</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
