"use client";
import { usePortfolioStore } from "@/store/portfolioStore";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import {
  ShowOrHideAmount,
  ShowOrHideTrigger,
} from "@/components/share/button/ShowOrHideAmount";
import { cn } from "@/lib/utils";

export default function PriceView() {
  const { getValue } = usePortfolioStore();
  const totalPriceCurrent = getValue("totalPriceCurrent");
  const totalPriceYesterday = getValue("totalPriceYesterday");
  const isPlus = totalPriceCurrent - totalPriceYesterday > 0;
  const priceDifference = totalPriceCurrent - totalPriceYesterday;

  return (
    <Contents className={"flex flex-col"}>
      <Row className={"gap-[5px]"}>
        <ShowOrHideAmount
          text={`₩ ${totalPriceCurrent?.toLocaleString()}`}
          className={"text-[32px] text-white"}
        />
        <ShowOrHideTrigger className={"h-[24px] w-[24px]"} />
      </Row>
      <Row className={cn("text-[16px]", isPlus ? "text-green" : "text-red")}>
        <p> {isPlus ? "+" : "-"}</p>
        <ShowOrHideAmount
          length={4}
          text={`₩ ${priceDifference.toLocaleString()} (24시간)`}
          className={"text-[16px]"}
        />
      </Row>
    </Contents>
  );
}
