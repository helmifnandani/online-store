/** @type {import('tailwindcss').Config} */
export default {
  mode: ['jit'],
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#202225",
          400: "#484848",
        },
        secondary: '#5865f2',
        gray: {
          900: '#202225',
          800: '#2f3136'
        }
      }
    },
  },
  plugins: [],
}