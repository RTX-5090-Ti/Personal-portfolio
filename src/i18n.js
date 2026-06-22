import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./locales/resources";

const savedLanguage =
  typeof window !== "undefined"
    ? window.localStorage.getItem("portfolio-language")
    : null;

const browserLanguage =
  typeof navigator !== "undefined" ? navigator.language : "en";

const initialLanguage =
  savedLanguage || (browserLanguage?.toLowerCase().startsWith("vi") ? "vi" : "en");

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
