"use client";
import { usePortfolioStore } from "@/store/portfolioStore";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import {
  ShowOrHideAmount,
  ShowOrHideTrigger,
} from "@/components/share/button/ShowOrHideAmount";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";

export default function PriceView() {
  const { getValue } = usePortfolioStore();
  const totalPriceCurrent = getValue("totalPriceCurrent");
  const totalPriceYesterday = getValue("totalPriceYesterday");
  const isPlus = totalPriceCurrent - totalPriceYesterday > 0;
  const priceDifference = totalPriceCurrent - totalPriceYesterday;
  const { t } = useTranslation("portfolio");
  return (
    <Contents className={"flex flex-col"}>
      <Row className={"gap-[8px]"}>
        <ShowOrHideAmount
          text={`₩${totalPriceCurrent?.toLocaleString() ?? 0}`}
          className={"text-[32px] font-bold text-text"}
        />
        <ShowOrHideTrigger className={"h-[20px] w-[24px]"} />
      </Row>
      <Row
        className={cn(
          "text-[16px] font-medium",
          isPlus ? "text-green" : "text-red",
        )}
      >
        <p> {isPlus ? "+" : "-"}</p>
        <ShowOrHideAmount
          length={4}
          text={`₩ ${priceDifference?.toLocaleString() ?? 0} (${t("24h")})`}
          className={"text-[16px]"}
        />
      </Row>
    </Contents>
  );
}
