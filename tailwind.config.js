/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cA: '#101010',
        cB: '#7F00FF',
        cC: 'white',
        cD: '#fcba03',
    }},
  },
  plugins: [],
}