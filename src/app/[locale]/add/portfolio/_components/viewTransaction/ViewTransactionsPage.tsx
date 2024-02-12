"use client";
import { usePortfolio } from "@/store/portfolioStore";
import Col from "@/components/layout/Col";
import Contents from "@/components/layout/Contents";
import BackButton from "@/app/[locale]/add/portfolio/_components/viewTransaction/BackButton";
import Header from "@/app/[locale]/add/portfolio/_components/viewTransaction/Header";
import Body from "@/app/[locale]/add/portfolio/_components/viewTransaction/Body";
import { usePortfolioData } from "@/hooks/react-query/portfolio.query";
import React from "react";

export default function ViewTransactionsPage() {
  const { getValue, setValue } = usePortfolio();
  const { dailyPriceData, portfolio, isPending, prevPriceData } =
    usePortfolioData();

  if (isPending || !portfolio || !dailyPriceData) {
    return <div>network error...</div>;
  }
  const list = portfolio?.filter((item: any) => {
    return item?.asset?.symbol === getValue("symbol");
  });

  const detail = list?.reduce((acc: any, cur: any) => {
    const price = cur?.transactionType === "BUY" ? cur?.price : cur?.price * -1;
    const quantity =
      cur?.transactionType === "BUY" ? cur?.quantity : cur?.quantity * -1;
    const symbol = cur?.asset?.symbol;
    const name = cur?.category?.name;
    const resultPrice =
      cur.transactionType === "BUY" ? price * quantity : price * quantity * -1;
    acc[cur?.asset?.symbol] = {
      price: Number(acc[symbol]?.price ?? 0) + resultPrice,
      quantity: Number(acc[symbol]?.quantity ?? 0) + quantity,
      symbol: symbol,
      name: name,
    };
    return acc;
  }, {});

  if (!detail[getValue("symbol")].symbol) {
    setValue("symbol", undefined);
  }

  return (
    <Contents className={"w-full max-w-[1230px]"}>
      <Col className={"w-full items-start"}>
        <BackButton />
        <Header
          symbol={detail[getValue("symbol")]?.symbol}
          name={detail[getValue("symbol")]?.name}
          totalPrice={detail[getValue("symbol")]?.price}
          totalQuantity={detail[getValue("symbol")]?.quantity}
        />
        <Body data={list} />
      </Col>
    </Contents>
  );
}
