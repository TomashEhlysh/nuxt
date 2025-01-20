// i18n.config.ts
import ua from '~/locales/ua.json';
import en from '~/locales/en.json';
import ru from '~/locales/ru.json';
import pl from '~/locales/pl.json';
import de from '~/locales/de.json';

export default defineI18nConfig(() => ({
  strategy: 'prefix_and_default', // Стратегія префікса для мови
  legacy: false,
  locale: 'ua', // Мова за замовчуванням
  messages: {
    en,
    ua,
    ru,
    pl,
    de,
  },
  locales: [
    { code: 'ua', iso: 'uk-UA', name: 'Українська' },
    { code: 'ru', iso: 'ru-RU', name: 'Русский' },
    { code: 'en', iso: 'en-US', name: 'English' },
    { code: 'pl', iso: 'pl-PL', name: 'Polski' },
    { code: 'de', iso: 'de-DE', name: 'Deutsch' },
  ],
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root', // Перенаправлення на корінь сайту
  },
}));
