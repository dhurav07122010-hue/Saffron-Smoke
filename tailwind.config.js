/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        charcoal: {
          950: '#09090B', // deepest dark canvas
          900: '#111114', // elevated card/nav dark
          850: '#17171C', // surface hover
          800: '#1F1F26', // borders & dividers
          700: '#2A2A33', // muted borders
          600: '#3D3D48',
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F5EFE6',
          200: '#EBE2D5',
          300: '#D6C8B4',
          400: '#BDB09D',
          500: '#948877',
        },
        saffron: {
          300: '#FDBA74',
          400: '#FB923C',
          500: '#E07A2A',
          600: '#C65F17',
          700: '#9A450E',
        },
        gold: {
          300: '#F3E5AB',
          400: '#E5C769',
          500: '#D4AF37',
          600: '#B89225',
        },
        copper: {
          400: '#DE8A5C',
          500: '#C26A3B',
          600: '#9F4F24',
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))',
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'subtle-gold': '0 4px 20px -2px rgba(212, 175, 55, 0.12)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}
