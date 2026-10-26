/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0b1f3a',
        accent: '#16a5a3',
        ink: '#0f172a',
        slate: '#e2e8f0'
      },
      boxShadow: {
        soft: '0 12px 30px rgba(11,31,58,0.08)'
      }
    },
  },
  plugins: [],
};
