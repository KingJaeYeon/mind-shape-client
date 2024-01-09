import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-fs-backend";

const detectionOptions = {
  order: ["navigator", "querystring", "cookie", "localStorage", "htmlTag"],
  caches: ["cookie"],
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: detectionOptions,
    fallbackLng: "ko",
    lng: "ko",
    backend: {
      loadPath: "./src/lib/{{lng}}/{{ns}}.json",
    },
    ns: ["home", "account"],
  })
  .then(() => console.log("i18n initialized"));

export default i18n;
