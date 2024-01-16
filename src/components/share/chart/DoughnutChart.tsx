"use client";
import { Doughnut } from "react-chartjs-2";
import { ChartData } from "chart.js";
import { chartOptions } from "@/constant/chart";
import ChartDataLabels from 'chartjs-plugin-datalabels'
export default function DoughnutChart() {
  // const {} = data;data?: ChartData<"doughnut">
  const data1: ChartData<"doughnut"> = {
    labels: ["TSLA", "AAPL", "U"],
    datasets: [
      {
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        indexAxis: "y",
      },
    ],
  };

  return <Doughnut data={data1} options={chartOptions} />;
}
