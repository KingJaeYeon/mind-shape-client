"use client";
import Card from "@/components/layout/Card";
import Row from "@/components/layout/Row";
import BubbleChart from "@/components/share/chart/BubbleChart";
import Grid from "@/components/layout/Grid";
import {
  BubbleController,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import Text from "@/components/layout/Text";
import ModalTriggerButton from "@/components/share/ModalTriggerButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BubbleController,
  Tooltip,
  Legend,
);

export function ChartList({ options }: { options: ChartOption[] }) {
  return (
    <Grid
      className={
        "h-auto w-full max-w-full grid-cols-1 gap-x-[30px] gap-y-[30px] xl:grid-cols-2 2xl:grid-cols-3"
      }
    >
      {options?.map((option, index) => (
        <ChartItem key={index} option={option} />
      ))}
    </Grid>
  );
}

export function ChartItem({ option }: { option: ChartOption }) {
  return (
    <Card className={"h-[400px] transition-all duration-700"}>
      <Row className={"items-center justify-between px-[30px] py-[20px]"}>
        <Text className={"text-[20px] text-white"}>{option?.title}</Text>
        <ModalTriggerButton isShow={option?.hasModal} />
      </Row>
      <ChartBase value={option.value} chartType={option.chartType} />
    </Card>
  );
}
function ChartBase({
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

const options = {
  responsive: true,
  maintainAspectRatio: false,
  // ... 기타 옵션
};
interface ChartOption {
  title: string;
  value: ChartData<any>;
  chartType: string;
  hasModal?: boolean;
  dropDown?: {
    showDropdown: boolean;
    options?: {
      label: string;
      value: number;
    }[];
  };
  tabs?: {
    showTabs: boolean;
    options?: {
      label: string;
      value: number;
    }[];
  };
}
