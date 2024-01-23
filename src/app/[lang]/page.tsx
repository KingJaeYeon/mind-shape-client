import CardSection from "@/components/layout/page/index/CardSection";
import ChartSection from "@/components/layout/page/index/ChartSection";
import React from "react";
import PageContainer from "@/components/layout/page/index/PageContainer";
import { getDictionary } from "@/app/[lang]/dictionaries";

type Props = {
  params: {
    lang: string;
  };
};

export default async function page({ params: { lang } }: Props) {
  console.log(lang);
  const { t } = await getDictionary(lang, "home");
  console.log(t("test"));
  return (
    <PageContainer>
      <CardSection />
      <ChartSection />
    </PageContainer>
  );
}
