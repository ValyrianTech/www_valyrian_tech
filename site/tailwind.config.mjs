/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#050505',
          900: '#0d0d0d',
          800: '#141414',
          700: '#1c1c1c',
          600: '#2a2a2a',
          500: '#3d3d3d',
          400: '#6b6b6b',
          300: '#999999',
          200: '#c4c4c4',
          100: '#e8e8e8',
          50: '#f5f5f5',
        },
        ember: {
          900: '#4a0e0e',
          800: '#7f1d1d',
          700: '#991b1b',
          600: '#b91c1c',
          500: '#c7393f',
          400: '#d4585e',
          300: '#e08888',
          200: '#f0b8b8',
          100: '#fde8e8',
        },
        gold: {
          900: '#5c3d0a',
          800: '#92610d',
          700: '#b8860b',
          600: '#d4a017',
          500: '#e6b422',
          400: '#f0c94c',
          300: '#f5d978',
          200: '#fae8a8',
          100: '#fdf5d8',
        },
        forge: {
          crimson: '#c7393f',
          scarlet: '#a02028',
          rust: '#8b3a2a',
          copper: '#b87333',
          bronze: '#cd7f32',
          ash: '#b0a89a',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'ember-glow': 'ember-glow 4s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'slide-right': 'slide-right 0.6s ease-out forwards',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        'ember-glow': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(199, 57, 63, 0.15)' },
          '50%': { boxShadow: '0 0 60px rgba(199, 57, 63, 0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(0.5deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-0.5deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      },
    },
  },
  plugins: [],
};
