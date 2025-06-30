/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
      colors: {
        gold: '#FFD700',
      },
    },
  },
  plugins: [],
};
