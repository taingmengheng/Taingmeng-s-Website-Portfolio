import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
import en from "./Locales/en.json";
import kh from "./Locales/kh.json";

const resources = { 
  
  en: {
    translation: en,
  },
  kh: {
    translation: kh,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    // lng: "en", // initial language
    detection: {
      order: [ 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
