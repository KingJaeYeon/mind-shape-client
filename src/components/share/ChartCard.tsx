"use client";
import Card from "@/components/layout/Card";
import Row from "@/components/layout/Row";
import Grid from "@/components/layout/Grid";
import {
  BubbleController,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

import { ModalTriggerButtonTypeChart } from "@/components/share/ModalTriggerButton";
import { ChartBase, ChartCardTitle } from "@/components/share/ChartPlugIn";
import { TextToggleButton } from "@/components/share/TextToggleButton";
import { ChartOption } from "@/constant/chart";

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
        <ChartCardTitle title={option.title} />
        <Row className={"flex min-h-[24px] gap-[10px]"}>
          <TextToggleButton options={option?.toggleList} />
          <ModalTriggerButtonTypeChart isShow={option?.hasModal} />
        </Row>
      </Row>

      <ChartBase value={option.value} chartType={option.chartType} />
    </Card>
  );
}
