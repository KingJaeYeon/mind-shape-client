"use client";
import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend"; // 언어리소스를 동적으로 불러오기위한 플러그인
import LanguageDetector from "i18next-browser-languagedetector"; //브라우저 언어 감지 플러그인
import { getOptions, i18nLocales } from "./i18-config";
import { changeServerLang } from "@/service/axios";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      // 언어 감지 옵션을 설정
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? i18nLocales.locales : [],
  })
  .then(() => console.log("i18next load..."));

export function useTranslation(ns: string) {
  const ret = useTranslationOrg(ns);
  const { i18n } = ret;

  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    if (activeLng === i18n.resolvedLanguage) return;
    setActiveLng(i18n.resolvedLanguage);
  }, [activeLng, i18n.resolvedLanguage]);

  return ret;
}

export function changeLanguage(lang: string) {
  i18next.changeLanguage(lang).then((r) => {
    changeServerLang(lang);
  });
}
