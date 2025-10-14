import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationVN from "./locales/vi/translation.json"; // Vietnam translations
import translationEN from "./locales/en/translation.json"; // English translations

const resources = {
  en: {
    translation: translationEN
  },
  vi: {
    translation: translationVN
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;
