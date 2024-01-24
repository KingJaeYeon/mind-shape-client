export const i18nLocales = {
  locales: ["ko", "en", "ja"],
  defaultLocale: "ko",
};
export const ns = ["account", "home"];

export type I18Config = typeof i18nLocales;
export type Locale = I18Config["locales"][number];

export const cookieName = "i18next";
export function getOptions(lng = i18nLocales.defaultLocale, nsInput = ns) {
  return {
    // debug: true,
    backend: {
      loadPath: "./src/app/[locale]/i18n/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: lng,
    lng,
    ns: nsInput,
  };
}
