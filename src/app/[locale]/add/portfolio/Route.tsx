"use client";
import { usePortfolioStore } from "@/store/portfolioStore";
import MainPage from "@/app/[locale]/add/portfolio/_components/main/MainPage";
import ViewTransactionsPage from "@/app/[locale]/add/portfolio/_components/viewTransaction/ViewTransactionsPage";
import { useEffect } from "react";

export default function Route() {
  const { getValue, setValue } = usePortfolioStore();

  useEffect(() => {
    return () => {
      setValue("symbol", undefined);
    };
  }, [setValue]);

  if (!!getValue("data", "detailSymbol")) {
    return <ViewTransactionsPage />;
  }
  return <MainPage />;
}
