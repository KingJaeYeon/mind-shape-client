"use client";
import Contents from "@/components/layout/Contents";
import PortfolioViewChart from "@/app/[locale]/add/portfolio/_components/main/PortfolioViewChart";
import Col from "@/components/layout/Col";
import { usePortfolio } from "@/hooks/react-query/portfolio.query";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Text from "@/components/layout/Text";
import React from "react";
import List from "@/app/[locale]/add/portfolio/_components/main/TableList";
// 필요한 타입 정의
type Asset = {
  assetId: string;
  price: number;
  quantity: number;
  transactionType: "BUY" | "SELL";
  asset: {
    symbol: string;
  };
  category: {
    name: string;
  };
};

type PortfolioItem = {
  price: number;
  quantity: number;
  symbol: string;
  name: string;
  dailyPrice: number;
  updatedAt: Date | null;
};

export default function PortfolioContents() {
  const { portfolio, dailyPriceData, isPending } = usePortfolio();
  const { t } = useTranslation("portfolio");
  if (isPending || !portfolio || !dailyPriceData) {
    return <div>network error...</div>;
  }

  const list: Record<string, PortfolioItem> = portfolio.reduce(
    (acc: any, cur: Asset) => {
      const { assetId, transactionType, price, quantity, asset, category } =
        cur;
      const symbol = asset.symbol;
      const name = category.name;
      const adjustedPrice =
        transactionType === "BUY" ? price * quantity : price * quantity * -1;

      // 기존 항목 업데이트 또는 새 항목 생성
      const existingItem = acc[symbol] || {
        price: 0,
        quantity: 0,
        symbol,
        name,
        dailyPrice: -1,
        updatedAt: null,
      };

      existingItem.price += adjustedPrice;
      existingItem.quantity += transactionType === "BUY" ? quantity : -quantity;

      // 일일 가격 데이터 업데이트
      if (dailyPriceData[assetId] && existingItem.dailyPrice === -1) {
        existingItem.dailyPrice = dailyPriceData[assetId].closePrice;
        existingItem.updatedAt = dailyPriceData[assetId].createdAt;
      }

      acc[symbol] = existingItem;
      return acc;
    },
    {},
  );

  const formattedData: PortfolioItem[] = Object.values(list).sort(
    (a, b) => b?.dailyPrice * b?.quantity - a?.dailyPrice * a?.quantity,
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
