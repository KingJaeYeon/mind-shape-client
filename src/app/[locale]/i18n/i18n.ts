import {createInstance} from "i18next";
import {initReactI18next} from 'react-i18next/initReactI18next'
import {getOptions} from "@/app/[locale]/i18n/i18-config";
import resourcesToBackend from "i18next-resources-to-backend";

const initI18next = async (lng: any, ns: any) => {
    const i18nInstance = createInstance();
    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                (language: string, namespace: string) =>
                    import(`./locales/${language}/${namespace}.json`),
            ),
        )
        .init(getOptions(lng, ns));
    return i18nInstance;
};

export async function useTranslation(
    lng: any,
    ns?: any,
    options?: { key: string },
) {
    const i18nextInstance = await initI18next(lng, ns);
    return {
        t: i18nextInstance.getFixedT(
            lng,
            Array.isArray(ns) ? ns[0] : ns,
            options?.key,
        ),
        i18n: i18nextInstance,
    };
}
