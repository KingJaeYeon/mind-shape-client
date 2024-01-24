import CardSection from "@/components/layout/page/index/CardSection";
import ChartSection from "@/components/layout/page/index/ChartSection";
import React from "react";
import PageContainer from "@/components/layout/page/index/PageContainer";
import { useTranslation } from "@/app/[locale]/i18n/i18n";

type Props = {
  params: {
    locale: string;
  };
};

export default async function Page({ params: { locale } }: Props) {
  const { t } = await useTranslation(locale, "home");

  return (
    <PageContainer>
        <div className={'flex text-white'}>{t("test", {data:'text'})}</div>
      <CardSection />
      <ChartSection />
    </PageContainer>
  );
}
