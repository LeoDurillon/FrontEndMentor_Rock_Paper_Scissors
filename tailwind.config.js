/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        triangle: "url('./src/assets/bg-triangle.svg')",
      },
    },
  },
  plugins: [],
};
