import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationDE from "./locales/de/translation.json";
import translationPL from "./locales/pl/translation.json";
import translationUA from "./locales/ua/translation.json";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "pl",
  fallbackLng: "pl",
  returnObjects: true,
  resources: {
    en: {
      translation: translationEN,
    },
    pl: {
      translation: translationPL,
    },
    de: {
      translation: translationDE,
    },
    ua: {
      translation: translationUA,
    },
  },
});
