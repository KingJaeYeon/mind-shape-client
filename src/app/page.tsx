import Page from "@/components/layout/Page";
import CardSection from "@/components/layout/page/index/CardSection";
import ChartSection from "@/components/layout/page/index/ChartSection";

export default async function Home() {
  return (
    <Page
      className={
        "mt-[75px] h-[calc(100dvh-75px)] w-full flex-col gap-[40px] overflow-auto px-[30px] py-[10px]"
      }
    >
      <CardSection />
      <ChartSection />
    </Page>
  );
}
