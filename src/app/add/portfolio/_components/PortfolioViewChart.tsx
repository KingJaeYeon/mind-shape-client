"use client";
import Contents from "@/components/layout/Contents";
import { useConvenienceStore } from "@/store/convenienceStore";
import { IS_SHOW_CHART } from "@/constant/portfolio";

import { ChartOptionV1 } from "@/constant/chart";
import DoughnutChart from "@/components/share/chart/DoughnutChart";
import { usePortfolioStore } from "@/store/portfolioStore";
import { ParentSize } from "@visx/responsive";
import ChartLabel from "@/components/share/chart/ChartLegend";

export default function PortfolioViewChart() {
  const { getValue } = useConvenienceStore();
  const { priceAndSymbol } = usePortfolioStore();


  if (!getValue(IS_SHOW_CHART)) {
    return null;
  }
  const option1: ChartOptionV1 = {
    title: "포트폴리오 비중 도넛 차트",
    duration: {
      isFixedDuration: true,
      options: {
        label: "현재",
        value: "",
      },
    },
  };
  const option2: ChartOptionV1 = {
    title: "포트폴리오 비중 트리맵 차트",
    duration: {
      isFixedDuration: true,
      options: {
        label: "현재",
        value: "",
      },
    },
  };

  return (
    <Contents
      className={"mt-[40px] flex flex-col gap-[20px] font-Inter md:flex-row"}
    >
      <Contents className={"flex flex-col max-w-[600px] bg-white"}>
        <ParentSize>
          {({ width }) => (
            <DoughnutChart height={366} width={width} data={priceAndSymbol} legend={  <ChartLabel />}/>
          )}
        </ParentSize>
      </Contents>
      <Contents className={"flex flex-1 flex-col"}>
        <ParentSize>
          {({ width }) => (
            <DoughnutChart height={366} width={width} data={priceAndSymbol} legend={  <ChartLabel />}/>
          )}
        </ParentSize>
      </Contents>
    </Contents>
  );
}
