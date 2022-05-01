export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Emisho - UI/UX Designer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'A UI/UX designer skilled in crafting clean and innovative design solutions for digital products & technologies' },
      { hid: 'keywords', name: 'keywords', content: 'Emisho, emisho, Emishio, Emisho portfolio, UI/UX, Designer, Product designer' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'Emisho Victor' },
      { hid: 'og:url', name: 'og:url', content: "https://emishovictor.com" },
      { hid: 'og:site_name', name: 'og:site_name', content: "Emisho Victor" },
      { hid: 'og:image', name: 'og:image', content: "https://res.cloudinary.com/eazzie/image/upload/v1647943871/emishio/Bg_Elements_1_cas8ej.png" },
      { hid: 'og:description', name: 'og:description', content: "A UI/UX designer skilled in crafting clean and innovative design solutions for digital products & technologies" },

      { hid: 'twitter:site', name: 'twitter:site', content: "@emishonowayi" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Emisho Victor' },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary_large_image" },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: "An image of the website" },
      { hid: 'twitter:image', name: 'twitter:image', content: "https://res.cloudinary.com/eazzie/image/upload/v1647943871/emishio/Bg_Elements_1_cas8ej.png" },
      { hid: 'twitter:description', name: 'twitter:description', content: "A UI/UX designer skilled in crafting clean and innovative design solutions for digital products & technologies" },

      { name: 'google-site-verification', content: 'UNP0R77T0lHsmbgXD8FHArpYew8WjXCsI8OWCoMpIlU' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    
    link: [
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon-16x16.png' },
      { rel: 'manifest', href: 'site.web</link>manifest' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/tailwind/tailwind.css',
    // '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: "~/plugins/locomotiveScroll.js", mode: "client" }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Nuxt-Image
    // '@nuxt/image',
    // Google fonts
    '@nuxtjs/google-fonts',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    // Font awesome
    // '@nuxtjs/fontawesome'
  ],

  googleFonts: {
    /* module options */
    families: {
      Montserrat: {
        wght: [100, 200, 400, 700 ],
        ital: [ 700 ]
      }
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],

    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
