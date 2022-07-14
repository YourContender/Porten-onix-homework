import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translateEN from './locales/translateEN.json';
import translateUA from './locales/translateUA.json';

const resources = {
  en: {
    translation: translateEN
  },
  ua: {
    translation: translateUA
  }
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
