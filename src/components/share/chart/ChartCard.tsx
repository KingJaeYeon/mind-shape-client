"use client";
import Card from "@/components/layout/Card";
import Row from "@/components/layout/Row";
import Grid from "@/components/layout/Grid";
import ChartDataLabels from 'chartjs-plugin-datalabels'
import {
  ArcElement,
  BubbleController,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import { ModalTriggerButtonTypeChart } from "@/components/share/button/ModalTriggerButton";
import {
  ChartBase,
  ChartCardTitle,
  ChartDuration,
  TextToggleButton,
} from "@/components/share/chart/ChartPlugIn";
import { ChartOption, ChartOptionV1 } from "@/constant/chart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BubbleController,
  Tooltip,
  Legend,
  ArcElement,
    ChartDataLabels
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
    <Card className={"min-h-[300px] px-[30px] transition-all duration-700"}>
      <Row className={"items-center justify-between pt-[20px]"}>
        <ChartCardTitle title={option.title} />
        <Row className={"flex min-h-[24px] gap-[10px]"}>
          <TextToggleButton options={option?.toggleList} />
          <ModalTriggerButtonTypeChart isShow={option?.hasModal} />
        </Row>
      </Row>
      <ChartDuration options={option.duration} />
      <ChartBase value={option.value} chartType={option.chartType} />
    </Card>
  );
}
export function ChartItemV1({
  option,
  chart,
}: {
  option: ChartOptionV1;
  chart: any;
}) {
  return (
    <Card className={"min-h-[300px] px-[30px] transition-all duration-700"}>
      <Row className={"items-center justify-between pt-[20px]"}>
        <ChartCardTitle title={option?.title} />
        <Row className={"flex min-h-[24px] gap-[10px]"}>
          <TextToggleButton options={option?.toggleList} />
          <ModalTriggerButtonTypeChart isShow={option?.hasModal} />
        </Row>
      </Row>
      <ChartDuration options={option?.duration} />
      {chart}
    </Card>
  );
}
