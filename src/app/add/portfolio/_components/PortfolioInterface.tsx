"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import { useEffect, useState } from "react";
import { usePortfolioStore } from "@/store/portfolioStore";
import DialogBase from "@/components/share/radix/DialogBase";
import Button from "@/components/layout/Button";
import { TypeAddPortfolio } from "@/components/share/radix/DialogPlugIns";
import {
  PriceView,
  ShowChartSwitch,
} from "@/app/add/portfolio/_components/index";

const data = {
  totalPriceCurrent: 1000000,
  totalPriceYesterday: 900000,
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
