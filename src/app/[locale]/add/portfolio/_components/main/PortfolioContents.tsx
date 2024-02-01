"use client";
import Contents from "@/components/layout/Contents";
import PortfolioViewChart from "@/app/[locale]/add/portfolio/_components/main/PortfolioViewChart";
import Col from "@/components/layout/Col";
import { usePortfolio } from "@/hooks/react-query/portfolio.query";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Text from "@/components/layout/Text";
import React from "react";
import List from "@/app/[locale]/add/portfolio/_components/main/TableList";

export default function PortfolioContents() {
  const { data, isPending } = usePortfolio();
  const { t } = useTranslation("portfolio");
  if (isPending) {
    return null;
  }

  const list = data?.reduce((acc: any, cur: any) => {
    const price = cur?.transactionType === "BUY" ? cur?.price : cur?.price * -1;
    const amount =
      cur?.transactionType === "BUY" ? cur?.amount : cur?.amount * -1;

    acc[cur?.asset?.symbol] = {
      price: Number(acc[cur?.asset?.symbol]?.price ?? 0) + price,
      amount: Number(acc[cur?.asset?.symbol]?.amount ?? 0) + amount,
      symbol: cur?.asset?.symbol,
      exChange: cur?.asset?.exChange,
      name: cur?.category?.name,
    };
    return acc;
  }, {});

  const formattedData: any[] = Object.values(list).sort(
    (a: any, b: any) => b?.price - a?.price,
  );

  return (
    <Contents className={"flex w-full flex-col"}>
      <PortfolioViewChart formattedData={formattedData} data={list} />
      <Col className={"font-bold text-text"}>
        <Text className={"flex h-[75px] items-center text-[18px]"}>
          {t("assets")}
        </Text>
        <Contents
          className={"flex w-full max-w-full overflow-x-auto overflow-y-hidden"}
        >
          <List data={formattedData} />
        </Contents>
      </Col>
    </Contents>
  );
}
