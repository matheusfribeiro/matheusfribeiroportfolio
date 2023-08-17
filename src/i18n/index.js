import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./en.json";
import ptJson from "./pt.json";

i18n
  .use(initReactI18next)
  .init({
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    pt: { translation: ptJson },
    en: { translation: enJson },
  },
});

export default i18n;
