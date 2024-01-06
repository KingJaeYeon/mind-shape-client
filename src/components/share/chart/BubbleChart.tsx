"use client";
// pages/index.tsx 또는 적절한 파일
import React, { useRef } from "react";
import Contents from "@/components/layout/Contents";
import { Bubble } from "react-chartjs-2";
import {
  BubbleController,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

interface BubbleChartProps {
  data: ChartData<"bubble">;
  options?: ChartOptions<"bubble">;
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BubbleController,
  Tooltip,
  Legend,
);
export default function BubbleChart({ data, options }: BubbleChartProps) {
  return (
    <Contents className={"flex w-full max-w-full"}>
      <Bubble
        data={data}
        options={options}
        style={{ width: "100%" }}
        className={"flex w-full max-w-full"}
      />
    </Contents>
  );
}
