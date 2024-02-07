/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#f7f4e1',
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /bg-beige/,
  }],
}

