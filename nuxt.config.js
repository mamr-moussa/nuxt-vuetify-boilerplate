import env from './env.js'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@plugins/core', '@plugins/localstorage'],
  /*
   ** Environment Variables
   */
  env,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        rootRedirect: 'en',
        vueI18nLoader: true,
        defaultLocale: 'en',
        strategy: 'prefix', // 'prefix_except_default',
        lazy: true,
        langDir: 'lang/',
        seo: true,
        // parsePages: false,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n',
          alwaysRedirect: false,
          fallbackLocale: 'en'
        },
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
            name: 'English',
            local: 'English',
            alignment: 'left'
          },
          {
            code: 'ar',
            iso: 'ar-EG',
            file: 'ar-EG.js',
            name: 'Arabic',
            local: 'العربية',
            alignment: 'right'
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: env.baseURL
  },
  // Server Port and Host
  server: {
    port: env.port || 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#ff1744',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#f44336'
        },
        dark: {
          primary: '#ff1744',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#f44336'
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
