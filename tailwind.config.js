/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FFFFFF',
          subtle: '#F5F5F7',
          dark: '#0A0A0A',
        },
        obsidian: {
          DEFAULT: '#0A0A0A',
          pure: '#000000',
          hover: '#171717',
          surface: '#121212',
        },
        emerald: {
          dot: '#22C55E',
          status: '#16A34A',
        },
        border: {
          subtle: '#E5E7EB',
          hairline: 'rgba(0, 0, 0, 0.08)',
          darkSubtle: 'rgba(255, 255, 255, 0.12)',
        },
        text: {
          primary: '#0A0A0A',
          secondary: '#52525B',
          muted: '#71717A',
          faint: '#A1A1AA',
        }
      },
      fontFamily: {
        display: ['"Easy Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Continental', '"Instrument Sans"', 'Satoshi', 'Inter', 'sans-serif'],
        serifItalic: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        'pill': '9999px',
        'card': '20px',
        'hero': '24px',
      },
      boxShadow: {
        'subtle': '0 2px 8px -2px rgba(0, 0, 0, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'elevated': '0 12px 32px -8px rgba(0, 0, 0, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'nav': '0 8px 24px -4px rgba(0, 0, 0, 0.25)',
        'card-dark': '0 16px 40px -12px rgba(0, 0, 0, 0.45)',
      }
    },
  },
  plugins: [],
}

