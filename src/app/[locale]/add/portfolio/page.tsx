import PageContainer from "@/components/layout/page/index/PageContainer";
import PageTitle from "@/app/[locale]/add/portfolio/_components/PageTitle";
import PortfolioInterface from "@/app/[locale]/add/portfolio/_components/PortfolioInterface";
import PortfolioContents from "@/app/[locale]/add/portfolio/_components/PortfolioContents";
import { PropsLocale } from "@/constant/type";
import { useTranslation } from "@/app/[locale]/i18n/i18n";

export default async function Page({ params: { locale } }: PropsLocale) {
  const { t } = await useTranslation(locale, "portfolio");
  return (
    <PageContainer className={"gap-0"}>
      <PageTitle title={t("title")} emoji={"🚀"} />
      <PortfolioInterface />
      <PortfolioContents />
    </PageContainer>
  );
}
