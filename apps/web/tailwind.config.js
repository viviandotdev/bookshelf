/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      screens: {
        '2xl': '1400px',
        '3xl': '1656px',
        'nav-lg': '1166px', // Add a custom 'mid-width' breakpoint at 900px
      },
      maxWidth: {
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        72: '18rem',
        76: '19rem',
        80: '20rem',
        92: '23rem',
      },
      minWidth: {
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        32: '8rem',
        28: '7rem',
        24: '6rem',
        20: '5rem',
        72: '18rem',
        92: '23rem',
        96: '24rem',
        100: '28rem',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        // background: "hsl(var(--background))",
        background: '#fdfcfb',
        beige: {
          DEFAULT: '#4e3b2c',
          50: '#fdfcfb',
          100: '#f7f2ee', //light
          200: '#f3ece8',
          300: '#eee4de',
          400: '#eaded7', // normal
          500: '#a49b97',
          600: '#6c5c50',
          700: '#4e3b2c', //dark
          800: '#30241b',
          900: '#221a22',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      // Animation
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    // require('@tailwindcss/forms'),
  ],
};
