import Page from "@/components/layout/Page";
import CardSection from "@/components/layout/page/index/CardSection";

export default async function Home() {
  return (
    <Page className={"w-full px-[20px] py-[10px]"}>
      <CardSection />
    </Page>
  );
}
