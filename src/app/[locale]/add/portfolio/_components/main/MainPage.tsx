"use client";
import PageTitle from "@/app/[locale]/add/portfolio/_components/main/PageTitle";
import PortfolioInterface from "@/app/[locale]/add/portfolio/_components/main/PortfolioInterface";
import PortfolioContents from "@/app/[locale]/add/portfolio/_components/main/PortfolioContents";
import Contents from "@/components/layout/Contents";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";

export default function MainPage() {
  const { t } = useTranslation("portfolio");

  return (
    <Contents className={"w-full max-w-[1230px]"}>
      <PageTitle title={t("title")} emoji={"🚀"} />
      <PortfolioInterface />
      <PortfolioContents />
    </Contents>
  );
}
