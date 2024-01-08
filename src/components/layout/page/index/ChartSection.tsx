"use client";
import Contents from "@/components/layout/Contents";
import { ChartList } from "@/components/share/ChartCard";
import { getDurationDate, getYearAndUint } from "@/lib/utils";
import { subYears } from "date-fns";

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
            duration: {
              isFixedDuration: true,
              options: {
                label: "현재",
                value: getDurationDate("current"),
              },
            },
          },
          {
            title: "포트폴리오 비중 도넛 차트",
            value: bubbleData,
            chartType: "bubble",
            duration: {
              isFixedDuration: true,
              options: {
                label: "현재",
                value: getDurationDate("current"),
              },
            },
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
            duration: {
              isFixedDuration: true,
              options: {
                label: "현재",
                value: getDurationDate("current"),
              },
            },
          },
          {
            title: "업종별 비중 도넛 차트",
            value: bubbleData,
            chartType: "bubble",
            duration: {
              isFixedDuration: true,
              options: {
                label: "현재",
                value: getDurationDate("current"),
              },
            },
          },
          {
            title: "배당 비중 도넛 차트",
            value: bubbleData,
            chartType: "bubble",
            duration: {
              isFixedDuration: true,
              options: {
                label: "현재",
                value: getDurationDate("current"),
              },
            },
          },
          {
            title: "1년간 예상 배당금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: {
                label: getYearAndUint(new Date(), true),
                value: getDurationDate("current"),
              },
            },
          },
          {
            title: "올해 배당금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: false,
              defaultValue: {
                label: getYearAndUint(new Date(), true),
                value: getDurationDate("this-year"),
              },
              options: [
                {
                  label: getYearAndUint(new Date(), true),
                  value: getDurationDate("this-year"),
                },
                {
                  label: getYearAndUint(subYears(new Date(), 1), true),
                  value: getDurationDate("1year-start"),
                },
                {
                  label: getYearAndUint(subYears(new Date(), 2), true),
                  value: getDurationDate("2year-start"),
                },
                {
                  label: getYearAndUint(subYears(new Date(), 3), true),
                  value: getDurationDate("3year-start"),
                },
              ],
            },
          },
          {
            title: "년도별 배당금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: {
                label: "전체 기간",
                value: getDurationDate("all-duration"),
              },
            },
          },
          {
            title: "누적 배당금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: {
                label: "전체 기간",
                value: getDurationDate("all-duration"),
              },
            },
          },
          {
            title: "수익률,매수금액,평가금액,누적수익금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: false,
              defaultValue: {
                label: "전체 기간",
                value: getDurationDate("all-duration"),
              },
              options: [
                {
                  label: "6개월",
                  value: getDurationDate("half-month"),
                },
                {
                  label: "올해",
                  value: getDurationDate("this-year"),
                },
                {
                  label: "1년",
                  value: getDurationDate("1year-ago"),
                },
                {
                  label: "2년",
                  value: getDurationDate("2year-ago"),
                },
                {
                  label: "3년",
                  value: getDurationDate("3year-ago"),
                },
                {
                  label: "전체 기간",
                  value: getDurationDate("all-duration"),
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
              isFixedDuration: false,
              defaultValue: {
                label: "올해",
                value: getDurationDate("this-year"),
              },
              options: [
                {
                  label: "6개월",
                  value: getDurationDate("half-month"),
                },
                {
                  label: "올해",
                  value: getDurationDate("this-year"),
                },
                {
                  label: "1년",
                  value: getDurationDate("1year-ago"),
                },
                {
                  label: "2년",
                  value: getDurationDate("2year-ago"),
                },
                {
                  label: "3년",
                  value: getDurationDate("3year-ago"),
                },
                {
                  label: "전체 기간",
                  value: getDurationDate("all-duration"),
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
              isFixedDuration: false,
              defaultValue: {
                label: "전체 기간",
                value: getDurationDate("all-duration"),
              },
              options: [
                {
                  label: "6개월",
                  value: getDurationDate("half-month"),
                },
                {
                  label: "올해",
                  value: getDurationDate("this-year"),
                },
                {
                  label: "1년",
                  value: getDurationDate("1year-ago"),
                },
                {
                  label: "2년",
                  value: getDurationDate("2year-ago"),
                },
                {
                  label: "3년",
                  value: getDurationDate("3year-ago"),
                },
                {
                  label: "전체 기간",
                  value: getDurationDate("all-duration"),
                },
              ],
            },
          },
          {
            title: "수익률과 누적수입금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: false,
              defaultValue: {
                label: "전체 기간",
                value: getDurationDate("all-duration"),
              },
              options: [
                {
                  label: "6개월",
                  value: getDurationDate("half-month"),
                },
                {
                  label: "올해",
                  value: getDurationDate("this-year"),
                },
                {
                  label: "1년",
                  value: getDurationDate("1year-ago"),
                },
                {
                  label: "2년",
                  value: getDurationDate("2year-ago"),
                },
                {
                  label: "3년",
                  value: getDurationDate("3year-ago"),
                },
                {
                  label: "전체 기간",
                  value: getDurationDate("all-duration"),
                },
              ],
            },
          },
          {
            title: "연도별 수입금 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: {
                label: "전체 기간",
                value: getDurationDate("all-duration"),
              },
            },
          },
          {
            title: "연도별 수익률 차트",
            value: bubbleData,
            chartType: "bubble",
            hasModal: true,
            duration: {
              isFixedDuration: true,
              options: {
                label: "전체 기간",
                value: getDurationDate("all-duration"),
              },
            },
          },
        ]}
      />
    </Contents>
  );
}
