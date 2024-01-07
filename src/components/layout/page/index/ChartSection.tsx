"use client";
import Contents from "@/components/layout/Contents";
import { ChartList } from "@/components/share/ChartCard";

const bubbleData = {
  datasets: [
    {
      label: "Bubble Dataset",
      data: [
        { x: 20, y: 30, r: 15 },
        { x: 40, y: 10, r: 10 },
      ],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
export default function ChartSection() {
  return (
    <Contents className={"h-auto w-full"}>
      <ChartList
        options={[
          {
            title: "비중과 수익률 버블 차트",
            value: bubbleData,
            chartType: "bubble",
            toggleList: {
              showToggleList: true,
              options: [
                { label: "누적수익률", value: "누적수익률" },
                { label: "당일수익률", value: "당일수익률" },
                { label: "누적수익금", value: "누적수익금" },
              ],
            },
          },
          {
            title: "포트폴리오 비중 도넛 차트",
            value: bubbleData,
            chartType: "bubble",
          },
          {
            title: "포트폴리오 비중 트리맵 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            toggleList: {
              showToggleList: true,
              options: [
                { label: "종목만", value: "종목만" },
                { label: "업종과 종목", value: "업종과 종목" },
              ],
            },
          },
          {
            title: "업종별 비중 도넛 차트",
            value: bubbleData,
            chartType: "bubble",
          },
          {
            title: "배당 비중 도넛 차트",
            value: bubbleData,
            chartType: "bubble",
          },
          {
            title: "1년간 예상 배당금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: [
                {
                  label: "2022년",
                  value: 2022,
                },
              ],
            },
          },
          {
            title: "올해 배당금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: [
                {
                  label: "2022년",
                  value: 2022,
                },
              ],
            },
          },
          {
            title: "년도별 배당금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
          },
          {
            title: "누적 배당금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
          },
          {
            title: "수익률,매수금액,평가금액,누적수익금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: [
                {
                  label: "전체 기간",
                  value: 0,
                },
              ],
            },
          },
          {
            title: "내수익률과 지수수익률 비교 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: [
                {
                  label: "올해",
                  value: new Date().getFullYear(),
                },
              ],
            },
          },
          {
            title: "월별 수익금, 누적수입금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: [
                {
                  label: "전체기간",
                  value: 0,
                },
              ],
            },
          },
        ]}
      />
    </Contents>
  );
}
