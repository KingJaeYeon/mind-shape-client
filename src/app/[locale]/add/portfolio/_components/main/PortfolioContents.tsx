"use client";
import Contents from "@/components/layout/Contents";
import PortfolioViewChart from "@/app/[locale]/add/portfolio/_components/main/PortfolioViewChart";
import Col from "@/components/layout/Col";
import { usePortfolioData } from "@/hooks/react-query/portfolio.query";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Text from "@/components/layout/Text";
import React, { useEffect } from "react";
import List from "@/app/[locale]/add/portfolio/_components/main/TableList";
import { usePortfolio } from "@/store/portfolioStore";

export default function PortfolioContents() {
  const { init } = usePortfolio();
  const { dailyPriceData, portfolio, isPending, prevPriceData, error } =
    usePortfolioData();

  useEffect(() => {
    if (!!portfolio) {
      init(portfolio, dailyPriceData, prevPriceData);
    }
  }, [portfolio, init, dailyPriceData, prevPriceData]);

  const { t } = useTranslation("portfolio");
  if (error) {
    return <div>network error...</div>;
  }

  if (isPending) {
    return <div>loading...</div>;
  }

  if (!portfolio || !dailyPriceData) {
    return <div>no data...</div>;
  }
  return (
    <Contents className={"flex w-full flex-col"}>
      <PortfolioViewChart />
      <Col className={"font-bold text-text"}>
        <Text className={"flex h-[75px] items-center text-[18px]"}>
          {t("assets")}
        </Text>
        <Contents
          className={"flex w-full max-w-full overflow-x-auto overflow-y-hidden"}
        >
          <List />
        </Contents>
      </Col>
    </Contents>
  );
}
