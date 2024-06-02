/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {},
    theme: {
      screens: {
        'xs': [{'min': '320px', 'max': '375px'}],
        'sm': [{'min':'376px', 'max':'425px'}],
        'md': [
          // Sidebar appears at 768px, so revert to `sm:` styles between 768px
          // and 868px, after which the main content area is wide enough again to
          // apply the `md:` styles.
          {'min': '426px', 'max': '768px'},
        ],
        'lg': [{'min': '769px', 'max': '1024'}],
        'xl': '1400px',
      }
    }
  },
  plugins: [require('flowbite/plugin')],
}

