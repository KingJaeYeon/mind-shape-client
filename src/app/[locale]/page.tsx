import CardSection from "@/components/layout/page/index/CardSection";
import ChartSection from "@/components/layout/page/index/ChartSection";
import React from "react";
import PageContainer from "@/components/layout/page/index/PageContainer";
import { PropsLocale } from "@/constant/type";

export default async function Page({ params: { locale } }: PropsLocale) {
  return (
    <PageContainer>
      <CardSection />
      <ChartSection />
    </PageContainer>
  );
}
