import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
const translationEN = require('./locales/en/common/translation.json');

const resources = {
  en: {
    translation: translationEN,
  },
};
console.log(translationEN);
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    debug: true,
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available

    // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
