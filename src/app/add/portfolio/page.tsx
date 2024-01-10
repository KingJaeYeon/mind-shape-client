import PageContainer from "@/components/layout/page/index/PageContainer";
import PageTitle from "@/components/share/PageTitle";
import PortfolioInterface from "@/components/ui/PortfolioInterface";

export default function page() {
  const data = {
    totalAmountCurrent: 1000000,
    totalAmountYesterday: 900000,
  };
  return (
    <PageContainer className={"gap-0"}>
      <PageTitle title={"My Portfolio"} emoji={"🚀"} />
      <PortfolioInterface data={data} />
    </PageContainer>
  );
}
