/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        mono2: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'bg-primary': '#08090C',
        'bg-secondary': '#0C0E13',
        'bg-card': '#111319',
        'gold': '#E2A855',
        'gold-hover': '#F0B865',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'white-15': 'rgba(255, 255, 255, 0.15)',
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'white-25': 'rgba(255, 255, 255, 0.25)',
        'white-30': 'rgba(255, 255, 255, 0.3)',
      },
      fontSize: {
        '10px': '10px',
        '11px': '11px',
        '13vw': '13vw',
        '9rem': '9rem',
      },
      letterSpacing: {
        '0.2em': '0.2em',
        '0.25em': '0.25em',
        '0.3em': '0.3em',
        'widest': '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        'xl': '24px',
        'md': '12px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to top, #08090C, rgba(8, 9, 12, 0.4), transparent)',
      },
      boxShadow: {
        'gold-glow': '0 0 60px -10px rgba(226, 168, 85, 0.3)',
        'card-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
      },
      transitionDuration: {
        '400': '400ms',
        '700': '700ms',
      },
      transitionTimingFunction: {
        'ease-out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}