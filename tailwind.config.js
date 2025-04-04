/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: '#007bff',  
        anotherColor: '#abcdef',  // Another example hex color
      },
    },
  },
  plugins: [],
};
