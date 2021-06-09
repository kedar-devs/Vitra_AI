module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'lg':'1024px',
      'tablet':'768px',
      'mobile':'420px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
