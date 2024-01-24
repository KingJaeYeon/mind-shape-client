import "server-only";

const loadLocaleData = async (local: string, key: string) => {
  try {
    return await import(`./i18n/${local}/${key}.json`).then(
      (module) => module.default,
    );
  } catch (e) {
    return null;
  }
};

export const getDictionary = async (locale: string, key: string) => {
  const res = await loadLocaleData(locale, key);
  return {
    t: (key: string) => {
      return res[key];
    },
  };
};
