// nuxt.config.ts
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: [
    '@/assets/style/main.css'
  ],
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/i18n'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      }
    }
  },
  i18n: {
    vueI18n: './i18n.config.ts', // Вказуємо на вашу кастомну конфігурацію i18n
    strategy: 'prefix_and_default', // Стратегія префікса
    defaultLocale: 'ua', // Мова за замовчуванням
    locales: [
      { code: 'ua', iso: 'uk-UA', name: 'Українська' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский' },
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'pl', iso: 'pl-PL', name: 'Polski' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch' },
    ],
  },
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
