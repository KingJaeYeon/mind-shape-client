"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import { useEffect } from "react";
import { usePortfolioStore } from "@/store/portfolioStore";
import {
  ShowOrHideAmount,
  ShowOrHideTrigger,
} from "@/components/share/ShowOrHideAmount";
import { cn } from "@/lib/utils";
import SwitchBase from "@/components/share/radix/SwitchBase";

export default function PortfolioInterface({ data }: { data: any }) {
  const { initData } = usePortfolioStore();

  useEffect(() => {
    initData(data).then(() => console.log("initData load..."));
  }, []);

  return (
    <Contents className={"flex justify-between"}>
      <PriceView />
      <Row>
        <ShowChartSwitch />
      </Row>
    </Contents>
  );
}

function ShowChartSwitch() {
  return (
    <form>
      <Row className={"items-center text-white"}>
        <label htmlFor="portfolio-chart" className={"pr-[15px]"}>
          Show charts
        </label>
        <SwitchBase id={"portfolio-chart"} switchKey={"portfolioIsShowChart"} />
      </Row>
    </form>
  );
}

function PriceView() {
  const { totalAmountCurrent, totalAmountYesterday } = usePortfolioStore();
  const isPlus = totalAmountCurrent - totalAmountYesterday > 0;
  return (
    <Contents className={"flex flex-col"}>
      <Row className={"gap-[5px]"}>
        <Row className={"break-all text-[32px] text-white"}>
          <ShowOrHideAmount text={`₩ ${totalAmountCurrent.toLocaleString()}`} />
        </Row>
        <ShowOrHideTrigger className={"h-[24px] w-[24px]"} />
      </Row>
      <Row
        className={cn(
          "break-all text-[16px]",
          isPlus ? "text-green" : "text-red",
        )}
      >
        <Row> {isPlus ? "+" : "-"}</Row>
        <Row>
          <ShowOrHideAmount
            text={`₩ ${(
              totalAmountCurrent - totalAmountYesterday
            ).toLocaleString()} (24시간)`}
            length={4}
          />
        </Row>
      </Row>
    </Contents>
  );
}
