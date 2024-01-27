import PageContainer from "@/components/layout/page/index/PageContainer";
import PageTitle from "@/app/[locale]/add/portfolio/_components/PageTitle";
import PortfolioInterface from "@/app/[locale]/add/portfolio/_components/PortfolioInterface";
import PortfolioContents from "@/app/[locale]/add/portfolio/_components/PortfolioContents";
import { PropsLocale } from "@/constant/type";
import { useTranslation } from "@/app/[locale]/i18n/i18n";
import Contents from "@/components/layout/Contents";

export default async function Page({ params: { locale } }: PropsLocale) {
  const { t } = await useTranslation(locale, "portfolio");
  return (
    <PageContainer className={"gap-0"}>
      <Contents className={"w-full max-w-[1230px]"}>
        <PageTitle title={t("title")} emoji={"🚀"} />
        <PortfolioInterface />
        <PortfolioContents />
      </Contents>
    </PageContainer>
  );
}
