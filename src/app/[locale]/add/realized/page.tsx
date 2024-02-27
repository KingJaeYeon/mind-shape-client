import PageContainer from "@/components/layout/page/index/PageContainer";
import PageTitle from "@/app/[locale]/add/portfolio/_components/main/PageTitle";
import MainPage from "@/app/[locale]/add/realized/_components/MainPage";
import Route from "@/app/[locale]/add/realized/Route";

export default function page() {
  return (
    <PageContainer>
      <Route />
    </PageContainer>
  );
}
