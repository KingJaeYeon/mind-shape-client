"use client";
import Contents from "@/components/layout/Contents";
import { useConvenienceStore } from "@/store/convenienceStore";
import { IS_SHOW_CHART } from "@/constant/portfolio";
import { ChartItemV1 } from "@/components/share/chart/ChartCard";
import { ChartOptionV1 } from "@/constant/chart";
import DoughnutChart from "@/components/share/chart/DoughnutChart";

export default function PortfolioViewChart() {
  const { getValue } = useConvenienceStore();

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
    <Contents className={"mt-[40px] flex flex-col gap-[20px] md:flex-row"}>
      <ChartItemV1 option={option1} chart={<DoughnutChart />} />
      <ChartItemV1 option={option2} chart={<DoughnutChart />} />
    </Contents>
  );
}
