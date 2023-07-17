/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Hero-section": "url('/src/assets/pexels-photo-9832700.jpeg')"
       }
    },
  },
  plugins: [],
}

