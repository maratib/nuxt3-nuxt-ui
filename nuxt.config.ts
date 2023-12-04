// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV === 'development'
export default defineNuxtConfig({
  devtools: { enabled: isDev ? false : false },
  css: ['~/assets/tailwind.css'],
  modules: ['@nuxt/ui'],
  ui: {
    global: true,
    icons: ['mdi']
  },
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: isDev ? 'debug-screens' : ''
      },
      title: 'MyOme',
      meta: [
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: 'MySite - Awesome site' },
        { property: 'og:url', content: 'https://example.com/' },
        { name: 'description', content: 'site description in detail' },
        // { property: 'og:image', content: 'https://movies.nuxt.space/social-card.png' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:creator', content: '@nuxt_js' },
      ],
    }
  }
})
