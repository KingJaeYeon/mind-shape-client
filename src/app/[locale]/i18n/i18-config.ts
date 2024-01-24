export const i18n = {
  locales: ["ko", "en", "ja"],
  defaultLocale: "ko",
};

export type I18Config = typeof i18n;
export type Locale = I18Config["locales"][number];
