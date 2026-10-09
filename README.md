# Saffron & Smoke — Premium Modern Indian Restaurant Website Demo

> **"Tradition, Served With A Twist."**  
> A high-conversion, editorial-grade restaurant website designed for modern Indian dining brands, fine-dining establishments, and culinary creators.

Built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🌟 Overview & Purpose

This project is an award-winning style sales demo created to present to restaurant owners, chefs, and hospitality groups. It demonstrates:

- **Bespoke Luxury Aesthetics:** Deep charcoal/near-black canvas (`#09090B`), warm ivory typography (`#FAF8F5`), and warm saffron, copper, and gold accents.
- **Cinematic Photography:** Real, high-resolution imagery curated specifically for Indian gastronomy (Tandoori Paneer Tikka, Old Delhi Butter Chicken, Dum Biryani, Saffron Rasmalai).
- **Interactive Menu Experience:** Filterable categories (Starters, Main Course, Biryani & Rice, Breads, Desserts, Drinks) and dietary tags (Vegetarian, Non-Vegetarian) with a print/PDF catalog viewer.
- **Conversion-Optimized Reservations:** Interactive booking form with input validation, demo confirmation state, and seamless WhatsApp inquiry integration.
- **Client Customization in Minutes:** Every detail (branding, phone, WhatsApp, opening hours, menu items, prices in ₹ INR, and social links) is centralized in a single configuration file.

---

## 🛠️ Quick Start

### 1. Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Production Build
Verify TypeScript compilation and generate the production bundle in `dist/`:
```bash
npm run build
```

### 3. Production Preview
Preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ How to Customize for a Real Restaurant Client

All client-specific content is maintained in [`src/config/restaurantConfig.ts`](src/config/restaurantConfig.ts).

To customize for another restaurant, simply edit:

1. **Restaurant Details:**
   - `name`: Restaurant brand name (e.g. "Saffron & Smoke")
   - `tagline`: Brand slogan (e.g. "Tradition, Served With A Twist.")
   - `phone`: Contact telephone number
   - `whatsappNumber`: International WhatsApp number without symbols (e.g. `919876543210`)
   - `email`: Reservations email address
   - `address`: Street, area, city, and map coordinates

2. **Operating Hours:**
   - Customize lunch & dinner service timings per day or week block.

3. **Signature Dishes & Menu Items:**
   - Edit, add, or remove dishes with name, INR price, description, dietary category (`veg` / `non-veg`), and spice indicators.

4. **Gallery & Photography:**
   - Swap image URLs with professional photography of the restaurant's actual kitchen, food, and interiors.

---

## 📐 Project Architecture

```
Demo web/
├── public/
│   └── favicon.svg              # Saffron flame & smoke SVG icon
├── src/
│   ├── config/
│   │   └── restaurantConfig.ts  # Centralized configuration & demo data
│   ├── components/
│   │   ├── AnnouncementBar.tsx  # Seasonal tasting announcement banner
│   │   ├── Navbar.tsx           # Sticky nav with mobile slide drawer
│   │   ├── Hero.tsx             # Cinematic hero section with CTA buttons
│   │   ├── SignatureDishes.tsx  # 4 curated signature dishes with ₹ pricing
│   │   ├── OurStory.tsx         # Editorial heritage & spice philosophy
│   │   ├── InteractiveMenu.tsx  # Category tabs, dietary filters, item list
│   │   ├── MenuModal.tsx        # Complete printable / PDF menu catalog
│   │   ├── ExperienceSection.tsx# 3 core pillars in asymmetrical layout
│   │   ├── Gallery.tsx          # Responsive photo grid with lightbox modal
│   │   ├── Testimonials.tsx     # Fictional sample guest quotes
│   │   ├── ReservationForm.tsx  # Interactive table booking form with validation
│   │   ├── LocationSection.tsx  # Google Maps embed, address, hours
│   │   ├── Footer.tsx           # Brand story, links, hours, demo notice
│   │   └── WhatsAppButton.tsx   # Floating concierge chat button
│   ├── App.tsx                  # Root layout composing sections
│   ├── index.css                # Tailwind base + luxury dark theme styles
│   └── main.tsx                 # React entrypoint
├── index.html                   # SEO tags, Google Fonts, JSON-LD schema
├── tailwind.config.js           # Charcoal, Ivory, Saffron & Gold palette
└── package.json
```

---

## 📱 Responsive Breakpoints Tested

- **Desktop (1440px):** Expansive editorial layouts, floating accent badges, multi-column grids.
- **Laptop (1280px):** Balanced typography and whitespace.
- **Tablet (768px):** Adaptive 2-column cards, touch-friendly tab filters.
- **Mobile (390px & 320px):** High-precision mobile navigation drawer, fluid typography, full touch targets, zero horizontal overflow.

---

## 🔒 Demo Notice
This application includes explicit disclaimers designating it as a sales and presentation demo. Fictional sample pricing, reservations, and contact information are clearly indicated.
