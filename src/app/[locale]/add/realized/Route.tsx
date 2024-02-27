"use client";
import { usePortfolio } from "@/store/portfolioStore";
import ViewTransactionsPage from "@/app/[locale]/add/portfolio/_components/viewTransaction/ViewTransactionsPage";
import { useEffect } from "react";
import MainPage from "@/app/[locale]/add/realized/_components/MainPage";

export default function Route() {
  const { getValue, setValue } = usePortfolio();

  useEffect(() => {
    return () => {
      setValue("data", "detailSymbol", null);
    };
  }, [setValue]);

  if (!!getValue("data", "detailSymbol")) {
    return <ViewTransactionsPage />;
  }
  return <MainPage />;
}
