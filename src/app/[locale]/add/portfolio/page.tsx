import PageContainer from "@/components/layout/page/index/PageContainer";
import PageTitle from "@/components/share/PageTitle";
import PortfolioInterface from "@/app/[locale]/add/portfolio/_components/PortfolioInterface";
import PortfolioContents from "@/app/[locale]/add/portfolio/_components/PortfolioContents";

export default function page() {
  return (
    <PageContainer className={"gap-0"}>
      <PageTitle title={"My Portfolio"} emoji={"🚀"} />
      <PortfolioInterface />
      <PortfolioContents />
    </PageContainer>
  );
}
