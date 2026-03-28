export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    { path: '~/components', pathPrefix: false },
  ],
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/main.css',
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000/api',
      uploadsBase: process.env.UPLOADS_BASE || 'http://localhost:3000',
    },
  },
  devServer: {
    port: 3002,
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})
