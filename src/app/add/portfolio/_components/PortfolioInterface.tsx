"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import { useEffect, useState } from "react";
import { usePortfolioStore } from "@/store/portfolioStore";
import {
  ShowOrHideAmount,
  ShowOrHideTrigger,
} from "@/components/share/button/ShowOrHideAmount";
import { cn } from "@/lib/utils";
import SwitchBase from "@/components/share/radix/SwitchBase";
import DialogBase from "@/components/share/radix/DialogBase";
import Button from "@/components/layout/Button";
import { TypeAddPortfolio } from "@/components/share/radix/DialogPlugIns";
import { IS_SHOW_CHART } from "@/constant/portfolio";
const data = {
  totalAmountCurrent: 1000000,
  totalAmountYesterday: 900000,
};
export default function PortfolioInterface() {
  const { initData } = usePortfolioStore();
  const [buyAyStep, setBuyAyStep] = useState<boolean>(false);

  useEffect(() => {
    initData(data).then(() => console.log("initData load..."));
  }, []);

  function resetHandler() {
    setBuyAyStep(false);
  }
  const title = buyAyStep ? "날짜 & 시간" : "거래추가";
  return (
    <Contents
      className={
        "flex flex-col justify-between gap-[20px] md:flex-row md:gap-[0px]"
      }
    >
      <PriceView />
      <Row className={"h-min items-center justify-between gap-[20px]"}>
        <ShowChartSwitch />
        <DialogBase
          resetHandler={resetHandler}
          contents={
            <TypeAddPortfolio
              buyAyStep={buyAyStep}
              setBuyAyStep={setBuyAyStep}
            />
          }
          title={title}
          className={"px-[32px] pb-[32px] pt-[16px] sm:max-w-[496px]"}
        >
          <Button styleType={"addPortfolioButton"}>+ 거래 추가</Button>
        </DialogBase>
      </Row>
    </Contents>
  );
}

function ShowChartSwitch() {
  return (
    <form>
      <Row className={"items-center text-white"}>
        <label htmlFor="portfolio-chart" className={"break-all pr-[15px]"}>
          Show charts
        </label>
        <SwitchBase id={"portfolio-chart"} switchKey={IS_SHOW_CHART} />
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
