import PageContainer from "@/components/layout/page/index/PageContainer";
import PageTitle from "@/components/share/PageTitle";
import PortfolioInterface from "@/components/ui/PortfolioInterface";

export default function page() {
  return (
    <PageContainer className={"gap-0"}>
      <PageTitle title={"My Portfolio"} emoji={"🚀"} />
      <PortfolioInterface />
    </PageContainer>
  );
}
