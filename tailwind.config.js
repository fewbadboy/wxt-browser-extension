/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './entrypoints/**/*.{js,vue,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}

