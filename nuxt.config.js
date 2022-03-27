export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s | NoriPro Website English Mirror",
    title: '【非公式翻訳】NoriPro Website English Mirror',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NoriPro is a VTuber agency runs by Tsukudani Norio.' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: '【非公式英訳】NoriPro Website Mirror'},
      { property: 'og:url', content: 'https://enghp.noripromatome.ml/'},
      { property: 'og:site_name', content: '【非公式英訳】NoriPro Website Mirror' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://enghp.noripromatome.ml/img/common/ogp.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/inj.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/*',
        name: 'notFound',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],

  // Nuxt Content Configuration
  content: {

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
