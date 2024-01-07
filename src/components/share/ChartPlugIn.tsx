"use client";
import { ChartData } from "chart.js";
import BubbleChart from "@/components/share/chart/BubbleChart";
import Text from "@/components/layout/Text";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  // ... 기타 옵션
};

export function ChartBase({
  value,
  chartType,
}: {
  value: ChartData<any>;
  chartType: string;
}) {
  switch (chartType) {
    case "bubble":
      return <BubbleChart data={value} options={options} />;
  }
}

export function ChartCardTitle({ title }: { title: string }) {
  return <Text className={"text-[20px] text-white"}>{title}</Text>;
}
