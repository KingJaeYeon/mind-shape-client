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
  const { getValue, setValue } = usePortfolio();
  const { portfolio, isPending, closePriceData } = usePortfolioData();

  const detailSymbol = getValue("data", "detailSymbol");

  if (isPending || !portfolio || !closePriceData) {
    return <div>network error...</div>;
  }

  const list = portfolio?.filter((item: any) => {
    return item?.asset?.symbol === getValue("data", "detailSymbol");
  });

  const detail: Record<string, PortfolioItem> = list.reduce(
    (acc: any, cur: Asset) => {
      const { assetId, transactionType, price, quantity, asset, category } =
        cur;
      const symbol = asset.symbol;
      const name = category.name;
      const symbolName = asset.name;
      const adjustedPrice =
        transactionType === "BUY" ? price * quantity : price * quantity * -1;

      // 기존 항목 업데이트 또는 새 항목 생성
      const existingItem = acc[symbol] || {
        price: 0,
        quantity: 0,
        symbol,
        name,
        symbolName,
        dailyPrice: -1,
        prevPrice: -1,
        updatedAt: null,
      };

      existingItem.price += adjustedPrice;
      existingItem.quantity += transactionType === "BUY" ? quantity : -quantity;

      // 일일 가격 데이터 업데이트
      existingItem.dailyPrice = closePriceData[assetId].dailyClosePrice;
      existingItem.prevPrice = closePriceData[assetId].prevClosePrice;
      existingItem.updatedAt = closePriceData[assetId].createdAtDaily;

      acc[symbol] = existingItem;
      return acc;
    },
    {},
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
