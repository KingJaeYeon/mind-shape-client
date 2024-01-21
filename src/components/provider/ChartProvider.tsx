"use client";

import ChartDataLabels from "chartjs-plugin-datalabels";
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
import React from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BubbleController,
  Tooltip,
  Legend,
  ArcElement,
  ChartDataLabels,
);

export default function ChartProvider({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  return <>{children}</>;
}
