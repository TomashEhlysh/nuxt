export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },

  nitro: {
    devProxy: {
      '/api/': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        prependPath: true
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || '/api'
    }
  },

  compatibilityDate: '2025-01-14'
});