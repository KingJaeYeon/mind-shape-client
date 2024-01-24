"use client";
import Contents from "@/components/layout/Contents";
import dynamic from "next/dynamic";
import Row from "@/components/layout/Row";
import { useEffect, useState } from "react";
import { usePortfolioStore } from "@/store/portfolioStore";
import {
  PriceView,
  ShowChartSwitch,
} from "@/app/[lang]/add/portfolio/_components/index";
import Button from "@/components/layout/Button";
import { usePortfolio } from "@/hooks/react-query/portfolio.query";

const TypeAddPortfolio = dynamic(
  () => import("@/components/share/radix/dialog/TypeAddPortfolio"),
  { ssr: false },
);

const DialogBase = dynamic(
  () => import("@/components/share/radix/DialogBase"),
  { ssr: false },
);

const data = {
  totalPriceCurrent: 1000000,
  totalPriceYesterday: 900000,
};
export default function PortfolioInterface() {
  const { initData } = usePortfolioStore();
  const { data, isPending } = usePortfolio();
  const [buyAyStep, setBuyAyStep] = useState<boolean>(false);

  useEffect(() => {
    if (isPending) return;
    initData(data).then(() => console.log("initData load..."));
  }, [data]);

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
