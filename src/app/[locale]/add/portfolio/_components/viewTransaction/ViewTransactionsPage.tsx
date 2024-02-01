"use client";
import { usePortfolioStore } from "@/store/portfolioStore";

export default function ViewTransactionsPage() {
  const { getValue } = usePortfolioStore();

  const list = getValue("list")?.filter((item: any) => {
    return item.asset.symbol === getValue("symbol");
  });
  console.log(list);
  return (
    <div>
      {list?.map((item: any, index: number) => {
        return <div key={index}>{item.symbol}</div>;
      })}
    </div>
  );
}
