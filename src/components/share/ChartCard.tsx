"use client";
import Card from "@/components/layout/Card";
import Row from "@/components/layout/Row";
import BubbleChart from "@/components/share/chart/BubbleChart";
import Grid from "@/components/layout/Grid";
import { ChartData } from "chart.js";
import Text from "@/components/layout/Text";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  // ... 기타 옵션
};
export function ChartList({
  options,
}: {
  options: { title: string; value: ChartData<any>; type: string }[];
}) {
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

export function ChartItem({
  option,
}: {
  option: { title: string; value: ChartData<any>; type: string };
}) {
  function chartType() {
    switch (option.type) {
      case "bubble":
        return <BubbleChart data={option.value} options={options} />;
    }
  }

  return (
    <Card className={"h-[400px] transition-all duration-700"}>
      <Row className={"justify-between px-[30px] py-[10px]"}>
        <Text className={"text-[20px] text-white"}>{option.title}</Text>
      </Row>
      {chartType()}
    </Card>
  );
}
