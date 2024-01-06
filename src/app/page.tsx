import Page from "@/components/layout/Page";
import CardSection from "@/components/layout/page/index/CardSection";
import ChartSection from "@/components/layout/page/index/ChartSection";

export default async function Home() {
  return (
    <Page
      className={
        "h-full w-full flex-col gap-[40px] overflow-hidden px-[30px] py-[10px]"
      }
    >
      <CardSection />
      <ChartSection />
    </Page>
  );
}
