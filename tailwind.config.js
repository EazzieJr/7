module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./animations/**/*.js",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },

      backgroundImage: {
        'big-hero': "url('/svg/big-hero-bg.svg')",
        'small-hero': "url('/svg/small-hero-bg.svg')",
      },

      screens: {
        '3xl': '1920px'
      }
    },
  },
  plugins: [],
}
