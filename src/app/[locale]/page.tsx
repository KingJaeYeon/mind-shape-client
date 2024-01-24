import CardSection from "@/components/layout/page/index/CardSection";
import ChartSection from "@/components/layout/page/index/ChartSection";
import React from "react";
import PageContainer from "@/components/layout/page/index/PageContainer";
import { getDictionary } from "@/app/[locale]/dictionaries";
import { Translation } from "@/app/[locale]/i18n/i18n";

type Props = {
  params: {
    locale: string;
  };
};

export default async function page({ params: { locale } }: Props) {
  // console.log(lang);
  const { t } = await Translation(locale, "home");
  console.log(t("test"));
  return (
    <PageContainer>
      <CardSection />
      <ChartSection />
    </PageContainer>
  );
}
