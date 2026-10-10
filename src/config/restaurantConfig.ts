export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Main Course' | 'Biryani & Rice' | 'Breads' | 'Desserts' | 'Drinks';
  dietary?: 'veg' | 'non-veg' | 'vegan';
  spiceLevel?: 'mild' | 'medium' | 'hot';
  isSignature?: boolean;
  image?: string;
  pairingNote?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  guestName: string;
  title: string;
  rating: number;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Cuisine' | 'Ambiance' | 'Craft';
  url: string;
  alt: string;
  aspect?: string;
}

export const RESTAURANT_CONFIG = {
  name: "Saffron & Smoke",
  shortName: "S&S",
  tagline: "Tradition, Served With A Twist.",
  subheading: "An Indian Story, Told Through Flavour.",
  heroDescription: "Discover bold spices, soulful recipes and unforgettable dining experiences inspired by the heart of India.",
  establishedYear: "2024",
  
  // Announcement banner
  announcementText: "A little spice, a lot of soul — explore our seasonal menu.",
  announcementCta: "Reserve Early",

  // Contact and Location (clearly marked fictional demo)
  isDemoNotice: "Demo Presentation — Built for restaurant clients",
  email: "reservations@saffronandsmoke-demo.com",
  address: {
    line1: "42 Heritage Boulevard, 12th Main",
    neighborhood: "Indiranagar",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560038",
    country: "India",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9854483733235!2d77.6387!3d12.9719!2m3!1f0!2f0!3f0!3m2!1i1024!2f78!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE4LjgiTiA3N8KwMzgnMTkuMyJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
    mapDirectionsUrl: "https://maps.google.com/?q=Indiranagar+Bengaluru"
  },

  // Hours
  openingHours: [
    { days: "Tuesday – Friday", lunch: "12:00 PM – 3:30 PM", dinner: "7:00 PM – 11:30 PM" },
    { days: "Saturday & Sunday", lunch: "12:00 PM – 4:00 PM", dinner: "6:30 PM – 11:45 PM" },
    { days: "Monday", lunch: "Closed", dinner: "Special Private Events by Request" }
  ],

  // Social Links
  socialLinks: {
    instagram: "https://instagram.com/#demo",
    facebook: "https://facebook.com/#demo",
    tripadvisor: "https://tripadvisor.com/#demo"
  },

  // Signature Dishes
  signatureDishes: [
    {
      id: "sig-1",
      name: "Tandoori Paneer Tikka",
      price: 329,
      dietary: "veg" as const,
      spiceLevel: "medium" as const,
      description: "Charred Malai paneer marinated 18 hours in stone-ground Kashmiri chilies, hung curd, mustard oil & charred baby bell peppers.",
      image: "/images/dishes/paneer-tikka.jpg",
      pairingNote: "Pairs with Smoked Saffron Cooler",
      badge: "Chef's Signature"
    },
    {
      id: "sig-2",
      name: "Old Delhi Butter Chicken",
      price: 449,
      dietary: "non-veg" as const,
      spiceLevel: "mild" as const,
      description: "Charcoal-roasted succulent chicken steeped in a slow-simmered vine tomato & cashew gravy, churned white butter, and crushed Kasuri methi.",
      image: "/images/dishes/butter-chicken.jpg",
      pairingNote: "Best enjoyed with Truffle Garlic Naan",
      badge: "House Heritage"
    },
    {
      id: "sig-3",
      name: "Dum Biryani",
      price: 379,
      dietary: "non-veg" as const,
      spiceLevel: "medium" as const,
      description: "Fragrant aged basmati rice layered with caramelized shallots, saffron-infused milk, whole royal spices, and sealed under a dough purdah.",
      image: "/images/dishes/dum-biryani.jpg",
      pairingNote: "Accompanied by Burani Raita & Mirchi Salan",
      badge: "Slow Cooked 4 hrs"
    },
    {
      id: "sig-4",
      name: "Saffron Rasmalai",
      price: 199,
      dietary: "veg" as const,
      spiceLevel: "mild" as const,
      description: "Porous chenna medallions bathed in chilled Kashmiri saffron-infused clotted rabri, toasted pistachios, and hand-beaten silver vark.",
      image: "/images/dishes/saffron-rasmalai.jpg",
      pairingNote: "Served chilled with rose petal dust",
      badge: "Artisanal Dessert"
    }
  ],

  // Interactive Menu categories and items
  menuCategories: ['Starters', 'Main Course', 'Biryani & Rice', 'Breads', 'Desserts', 'Drinks'] as const,

  menuItems: [
    // Starters
    {
      id: "m-1",
      name: "Tandoori Paneer Tikka",
      category: "Starters",
      price: 329,
      dietary: "veg",
      spiceLevel: "medium",
      isSignature: true,
      description: "Charred Malai paneer marinated 18 hours in stone-ground Kashmiri chilies, hung curd, and mustard oil.",
      image: "/images/dishes/paneer-tikka.jpg"
    },
    {
      id: "m-2",
      name: "Galouti Kebab Sliders",
      category: "Starters",
      price: 419,
      dietary: "non-veg",
      spiceLevel: "medium",
      isSignature: true,
      description: "Melt-in-mouth smoked lamb patties infused with 28 Awadhi spices, placed on saffron ulte tawa paratha rounds.",
      image: "/images/dishes/galouti-kebab.jpg"
    },
    {
      id: "m-3",
      name: "Kurkuri Lotus Stem Chaat",
      category: "Starters",
      price: 289,
      dietary: "veg",
      spiceLevel: "mild",
      description: "Crispy lotus stem crisps tossed in tamarind reduction, spiced yogurt drizzle, and roasted pomegranate seeds.",
      image: "/images/dishes/lotus-chaat.jpg"
    },
    {
      id: "m-4",
      name: "Bhatti Da Murgh Tikka",
      category: "Starters",
      price: 389,
      dietary: "non-veg",
      spiceLevel: "hot",
      description: "Boneless chicken thigh bites charred in traditional clay oven with crushed coriander seeds and black cumin.",
      image: "/images/dishes/tandoori-chicken.jpg"
    },
    {
      id: "m-5",
      name: "Smoked Dahi Ke Kebab",
      category: "Starters",
      price: 299,
      dietary: "veg",
      spiceLevel: "mild",
      description: "Crispy golden shells encasing hung curd infused with green cardamom, ginger, and fresh mint.",
      image: "/images/dishes/dahi-kebab.jpg"
    },

    // Main Course
    {
      id: "m-6",
      name: "Old Delhi Butter Chicken",
      category: "Main Course",
      price: 449,
      dietary: "non-veg",
      spiceLevel: "mild",
      isSignature: true,
      description: "Charcoal-roasted succulent chicken in velvety slow-simmered tomato-cashew reduction, churned butter & methi.",
      image: "/images/dishes/butter-chicken.jpg"
    },
    {
      id: "m-7",
      name: "Dal Saffron (24-Hour Bukhara Style)",
      category: "Main Course",
      price: 349,
      dietary: "veg",
      spiceLevel: "mild",
      isSignature: true,
      description: "Black lentils slow-cooked overnight on dying wood charcoal with sun-dried tomatoes, cream, and smoked butter.",
      image: "/images/dishes/dal-saffron.jpg"
    },
    {
      id: "m-8",
      name: "Nalli Rogan Josh",
      category: "Main Course",
      price: 529,
      dietary: "non-veg",
      spiceLevel: "medium",
      description: "Kashmiri slow-braised lamb shanks infused with mawal flowers, ratanjot bark, and Kashmiri whole chilies.",
      image: "/images/dishes/nalli-rogan-josh.jpg"
    },
    {
      id: "m-9",
      name: "Paneer Lababdar Angara",
      category: "Main Course",
      price: 369,
      dietary: "veg",
      spiceLevel: "medium",
      description: "Charred cottage cheese cubes cooked in spiced onion-tomato masala topped with smoked charcoal butter infusion.",
      image: "/images/dishes/paneer-lababdar.jpg"
    },

    // Biryani & Rice
    {
      id: "m-10",
      name: "Dum Biryani",
      category: "Biryani & Rice",
      price: 379,
      dietary: "non-veg",
      spiceLevel: "medium",
      isSignature: true,
      description: "Fragrant aged basmati rice layered with marinated spiced cuts, golden fried onions, saffron milk, sealed in clay pot.",
      image: "/images/dishes/dum-biryani.jpg"
    },
    {
      id: "m-11",
      name: "Subz Tarkari Dum Biryani",
      category: "Biryani & Rice",
      price: 319,
      dietary: "veg",
      spiceLevel: "medium",
      description: "Farm-fresh florets, baby carrots, paneer, and long basmati grains steamed with mint, saffron, and Kewra water.",
      image: "/images/dishes/veg-biryani.jpg"
    },
    {
      id: "m-12",
      name: "Awadhi Gosht Dum Biryani",
      category: "Biryani & Rice",
      price: 479,
      dietary: "non-veg",
      spiceLevel: "medium",
      isSignature: true,
      description: "Lucknowi yakhni-infused basmati rice with succulent boneless mutton pieces, cardamom, and ittar aromatics.",
      image: "/images/dishes/mutton-biryani.jpg"
    },

    // Breads
    {
      id: "m-13",
      name: "Truffle Garlic Butter Naan",
      category: "Breads",
      price: 149,
      dietary: "veg",
      description: "Clay-oven baked leavened flatbread brushed with black truffle butter, toasted garlic crisps, and fresh coriander.",
      image: "/images/dishes/garlic-naan.jpg"
    },
    {
      id: "m-14",
      name: "Royal Saffron Sheermal",
      category: "Breads",
      price: 169,
      dietary: "veg",
      description: "Traditional slightly sweet, milk-baked bread scented with warm saffron threads and cardamom ghee.",
      image: "/images/dishes/sheermal.jpg"
    },
    {
      id: "m-15",
      name: "Smoked Laccha Paratha",
      category: "Breads",
      price: 119,
      dietary: "veg",
      description: "Multi-layered flaky whole wheat bread baked over charcoal embers with ajwain seeds and pure desi ghee.",
      image: "/images/dishes/laccha-paratha.jpg"
    },

    // Desserts
    {
      id: "m-16",
      name: "Saffron Rasmalai",
      category: "Desserts",
      price: 199,
      dietary: "veg",
      isSignature: true,
      description: "Delicate chenna dumplings steeped in chilled saffron-infused clotted milk, Iranian pistachios, and silver vark.",
      image: "/images/dishes/saffron-rasmalai.jpg"
    },
    {
      id: "m-17",
      name: "Smoked Shahi Tukda Brioche",
      category: "Desserts",
      price: 249,
      dietary: "veg",
      description: "Ghee-crisped French brioche soaked in saffron cardamom reduction, topped with reduced rabri and almond praline.",
      image: "/images/dishes/shahi-tukda.jpg"
    },
    {
      id: "m-18",
      name: "Smoked Charcoal Gulab Jamun Flambé",
      category: "Desserts",
      price: 219,
      dietary: "veg",
      description: "Warm stuffed khoya dumplings flambéed tableside with aromatic spice liqueur and roasted almond slivers.",
      image: "/images/dishes/gulab-jamun.jpg"
    },

    // Drinks
    {
      id: "m-19",
      name: "Smoked Saffron Old Fashioned",
      category: "Drinks",
      price: 269,
      dietary: "vegan",
      description: "Signature mocktail with demerara syrup, roasted orange zest, saffron elixir, smoked with applewood woodchip smoke.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-20",
      name: "Kashmir Pink Chai Cooler",
      category: "Drinks",
      price: 219,
      dietary: "veg",
      description: "Traditional Noon Chai brewed cold with crushed pistachio milk, green cardamom, and pink rock salt foam.",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m-21",
      name: "Roasted Cumin & Mint Chaas",
      category: "Drinks",
      price: 179,
      dietary: "veg",
      description: "Velvety spiced buttermilk infused with dry-roasted cumin, fresh garden mint, black salt, and ginger vapor.",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
    }
  ] as MenuItem[],

  // Experience benefits
  experiencePillars: [
    {
      id: "craft",
      title: "Thoughtfully Crafted Flavours",
      description: "Over 36 slow-ground regional spices, age-old recipes, and wood-fired charcoal hearths reinterpreted through contemporary culinary craft.",
      highlight: "Handcrafted Spice Blends"
    },
    {
      id: "space",
      title: "A Warm, Welcoming Space",
      description: "Intimate low-lit amber glow, custom dark teak wood, brass details, and soft acoustic Indian strings designed for unhurried evenings.",
      highlight: "Curated Dining Ambiance"
    },
    {
      id: "memories",
      title: "Moments Worth Sharing",
      description: "From intimate anniversary dinners to joyous family reunions, our attentive team treats every guest with royal Indian warmth.",
      highlight: "Bespoke Hospitality"
    }
  ],

  // Gallery items
  galleryItems: [
    {
      id: "g-1",
      title: "Charcoal Clay Oven Grilling",
      category: "Craft",
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
      alt: "Chef preparing tandoori specialties in traditional clay oven"
    },
    {
      id: "g-2",
      title: "Heritage Dining Hall",
      category: "Ambiance",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      alt: "Warm ambient lit luxury restaurant interior with teak tables"
    },
    {
      id: "g-3",
      title: "Royal Culinary Presentation",
      category: "Cuisine",
      url: "/images/dishes/indian-thali.jpg",
      alt: "Royal handcrafted Indian dining feast with assortment of curries and bread"
    },
    {
      id: "g-4",
      title: "Smoked Cocktail Crafting",
      category: "Craft",
      url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=900&q=80",
      alt: "Bar mixologist crafting smoked saffron cocktail with citrus peel"
    },
    {
      id: "g-5",
      title: "Signature Artisanal Curry Spread",
      category: "Cuisine",
      url: "/images/dishes/royal-curry-spread.jpg",
      alt: "Authentic copper karahi spread of rich slow-simmered Indian curries"
    },
    {
      id: "g-6",
      title: "Private Alcove Seating",
      category: "Ambiance",
      url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80",
      alt: "Intimate candle-lit restaurant corner booth"
    }
  ] as GalleryItem[],

  // Fictional sample testimonials
  testimonials: [
    {
      id: "t-1",
      quote: "The Old Delhi Butter Chicken took me straight back to the lanes of Daryaganj, but with a refined balance and smokiness that is truly world-class. An absolute triumph of modern Indian cuisine.",
      guestName: "Vikram & Ananya Sen",
      title: "Anniversary Dinner Guests",
      rating: 5,
      highlight: "Sublime Flavor Harmony"
    },
    {
      id: "t-2",
      quote: "The Dum Biryani arrives sealed in purdah and when broken open, the intoxicating aroma of saffron and cardamom fills the entire table. The ambiance matches the culinary artistry perfectly.",
      guestName: "Devika Rao",
      title: "Food & Lifestyle Enthusiast",
      rating: 5,
      highlight: "Unmatched Dum Aroma"
    },
    {
      id: "t-3",
      quote: "Rarely does a restaurant combine deep culinary authenticity with such effortless, warm hospitality. From the welcome tea to the Saffron Rasmalai, every moment felt unforgettable.",
      guestName: "Arjun Mehta",
      title: "Executive Host",
      rating: 5,
      highlight: "Royal Hospitality"
    }
  ] as Testimonial[]
};
