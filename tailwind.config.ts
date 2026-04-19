import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE6',
        'cream-dark': '#EADFCC',
        gold: '#C9A961',
        'gold-dark': '#B8935A',
        'gold-light': '#D9BE7E',
        jungle: '#2B3A2E',
        cocoa: '#6B4423',
        ink: '#2B2118',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        serif: ['var(--font-serif)', 'serif'],
        mark: ['var(--font-mark)', 'sans-serif'],
      },
      letterSpacing: {
        'maero': '0.35em',
      },
    },
  },
  plugins: [],
};
export default config;
