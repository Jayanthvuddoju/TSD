/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#1DBFA0',
        'brand-blue': '#2875D4',
        'brand-purple': '#7435CE',
        'dark-bg': '#FFFFFF',
        'dark-surface': '#F8FAFC',
        'card-dark': '#FFFFFF',
        'light-bg': '#F4F7FB',
        'text-primary-dark': '#0D1B3E',
        'text-primary-light': '#FFFFFF',
        'text-secondary': '#475569',
        'text-muted': '#64748B',
        'border-dark': '#E2E8F0',
        success: '#1DBFA0',
        error: '#E04C6A',
      },
      fontFamily: {
        sans: ['DM Sans', 'Inter', 'sans-serif'],
        heading: ['Syne', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1DBFA0, #2875D4, #7435CE)',
        'gradient-brand-x': 'linear-gradient(90deg, #1DBFA0, #2875D4, #7435CE)',
        'gradient-hero': 'linear-gradient(135deg, #0D1B3E 0%, #0F2456 50%, #1A1050 100%)',
        'gradient-light': 'linear-gradient(135deg, #EAF6F3 0%, #EAF0FB 50%, #F0EAF8 100%)',
      },
      boxShadow: {
        'card': '0 8px 32px rgba(43, 117, 212, 0.15)',
        'glow': '0 0 15px rgba(29, 191, 160, 0.5)',
      },
    },
  },
  plugins: [],
}
