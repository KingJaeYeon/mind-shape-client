import CardSection from "@/components/layout/page/index/CardSection";
import ChartSection from "@/components/layout/page/index/ChartSection";
import React from "react";
import PageContainer from "@/components/layout/page/index/PageContainer";

export default async function Home() {
  return (
    <PageContainer>
      <CardSection />
      <ChartSection />
    </PageContainer>
  );
}
