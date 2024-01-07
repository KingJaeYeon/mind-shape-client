"use client";
import React from "react";
import Contents from "@/components/layout/Contents";
import { Bubble } from "react-chartjs-2";
import { ChartData, ChartOptions } from "chart.js";

interface BubbleChartProps {
  data: ChartData<"bubble">;
  options?: ChartOptions<"bubble">;
}

export default function BubbleChart({ data, options }: BubbleChartProps) {
  return (
    <Contents className={"flex w-full max-w-full"}>
      <Bubble
        data={data}
        options={options}
        style={{ width: "100%", height: "100%" }}
        className={"flex w-full max-w-full"}
      />
    </Contents>
  );
}
