"use client";
import { usePortfolio } from "@/store/portfolioStore";
import Col from "@/components/layout/Col";
import Contents from "@/components/layout/Contents";
import BackButton from "@/app/[locale]/add/portfolio/_components/viewTransaction/BackButton";
import Header from "@/app/[locale]/add/portfolio/_components/viewTransaction/Header";
import Body from "@/app/[locale]/add/portfolio/_components/viewTransaction/Body";
import { usePortfolioData } from "@/hooks/react-query/portfolio.query";
import React from "react";
import { Asset, PortfolioItem } from "@/constant/portfolio";

export default function ViewTransactionsPage() {
  const { getValue, setValue, transformPortfolio } = usePortfolio();
  const { portfolio, isPending, closePriceData } = usePortfolioData();

  const detailSymbol = getValue("data", "detailSymbol");

  if (isPending || !portfolio || !closePriceData) {
    return <div>network error...</div>;
  }

  const list = portfolio?.filter((item: any) => {
    return item?.asset?.symbol === getValue("data", "detailSymbol");
  });

  const detail: Record<string, PortfolioItem> = transformPortfolio(
    list,
    closePriceData,
  )[getValue("data", "detailSymbol")];

  if (!detailSymbol) {
    setValue("data", "detailSymbol", null);
  }

  return (
    <Contents className={"w-full max-w-[1230px]"}>
      <Col className={"w-full items-start"}>
        <BackButton />
        <Header data={detail} />
        <Body data={list} />
      </Col>
    </Contents>
  );
}
