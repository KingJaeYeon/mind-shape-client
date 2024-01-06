import Page from "@/components/layout/Page";
import CardSection from "@/components/layout/page/index/CardSection";
import ChartSection from "@/components/layout/page/index/ChartSection";
import Footer from "@/components/share/Footer";
import React from "react";
import PageContainer from "@/components/layout/page/index/PageContainer";

export default async function Home() {
  return (
    <PageContainer>
      <CardSection />
      <ChartSection />
      <Footer />
    </PageContainer>
  );
}
