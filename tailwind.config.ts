import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fbf8f2',
          100: '#f4ecdc',
          200: '#e8d6b3',
        },
        deep: {
          900: '#02131f',
          800: '#04243a',
          700: '#063a5c',
          600: '#0a5683',
        },
        sea: {
          400: '#3fb6c4',
          500: '#1d8a9b',
          600: '#0f6a7d',
        },
        coral: {
          400: '#ff8a65',
          500: '#ff6a3d',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'gradient-x': 'gradient-x 12s ease infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-x': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
