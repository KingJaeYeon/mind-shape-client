import PageContainer from "@/components/layout/page/index/PageContainer";
import { PropsLocale } from "@/constant/type";
import Route from "@/app/[locale]/add/portfolio/Route";

export default async function Page({ params: { locale } }: PropsLocale) {
  return (
    <PageContainer className={"gap-0"}>
      <Route />
    </PageContainer>
  );
}
