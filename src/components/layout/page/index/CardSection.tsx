import { CardList } from "@/components/share/Card";
import {
  IconChart,
  IconChartInsights,
  IconMoney,
  IconMoney2,
  IconMoney3,
  IconTrading,
} from "@/assets";
import Grid from "@/components/layout/Grid";

export default function CardSection() {
  return (
    <Grid
      className={
        "grid-col w-full max-w-full grid-cols-1 gap-x-[20px] gap-y-[20px] xl:grid-cols-2 2xl:grid-cols-4"
      }
    >
      <CardList
        options={[
          {
            title: "평균환전 활율",
            icon: <IconMoney2 className={"h-[20px] w-[20px] text-white"} />,
            value: 1189.06,
          },
          {
            title: "환차익 수익률",
            icon: (
              <IconChartInsights className={"h-[24px] w-[24px] text-white"} />
            ),
            value: 1.61,
            unit: "%",
          },
          {
            title: "이번달 예상 배당금",
            icon: <IconMoney3 className={"h-[24px] w-[24px] text-white"} />,
            value: 162878,
            unit: "원",
          },
          {
            title: "총실수익금(환차익제외/배당금제외)",
            icon: <IconTrading className={"text-white"} />,
            value: 56558698,
            unit: "원",
          },
          {
            title: "총실수익금(환차익포함/배당금제외)",
            icon: <IconChart className={"text-white"} />,
            value: 58378388,
            unit: "원",
          },
        ]}
      />
      <CardList
        color={"red"}
        options={[
          {
            title: "환전총액",
            icon: <IconMoney className={"h-[18px] w-[18px] text-white"} />,
            value: 104340.06,
            unit: "$",
          },
          {
            title: "배당금 누적손익",
            icon: (
              <IconChartInsights className={"h-[24px] w-[24px] text-white"} />
            ),
            value: 2290106,
            unit: "원",
          },
          {
            title: "연간 예상 배당금",
            icon: <IconMoney3 className={"h-[24px] w-[24px] text-white"} />,
            value: 2834744,
            unit: "원",
          },
          {
            title: "총실수익률(환차익제외/배당금제외)",
            icon: <IconTrading className={"text-white"} />,
            value: 49.89,
            unit: "%",
          },
          {
            title: "총실수익률(환차익포함/배당금제외)",
            icon: <IconChart className={"text-white"} />,
            value: 51.49,
            unit: "%",
          },
        ]}
      />
      <CardList
        color={"orange"}
        options={[
          {
            title: "총 투자 원금",
            icon: <IconMoney2 className={"h-[20px] w-[20px] text-white"} />,
            value: 113367255,
            unit: "원",
          },
          {
            title: "배당금 누적 수익률",
            icon: (
              <IconChartInsights className={"h-[24px] w-[24px] text-white"} />
            ),
            value: 2.02,
            unit: "%",
          },
          {
            title: "연간 예상 배당률",
            icon: <IconMoney3 className={"h-[24px] w-[24px] text-white"} />,
            value: 2.5,
            unit: "%",
          },
          {
            title: "총실수입금(환차익제외/배당금포함)",
            icon: <IconTrading className={"text-white"} />,
            value: 58848804,
            unit: "원",
          },
          {
            title: "총실수입금(환차익포함/배당금포함)",
            icon: <IconChart className={"text-white"} />,
            value: 50668494,
            unit: "원",
          },
        ]}
      />
      <CardList
        color={"gold"}
        options={[
          {
            title: "환차익",
            icon: <IconMoney className={"h-[18px] w-[18px] text-white"} />,
            value: 1819690,
            unit: "원",
          },
          {
            title: "실현손익",
            icon: (
              <IconChartInsights className={"h-[24px] w-[24px] text-white"} />
            ),
            value: 4089570,
            unit: "원",
          },
          {
            title: "총 주식 자산",
            icon: <IconMoney3 className={"h-[24px] w-[24px] text-white"} />,
            value: 174035754,
            unit: "원",
          },
          {
            title: "총실수익률(환차익제외/배당금포함)",
            icon: <IconTrading className={"text-white"} />,
            value: 51.91,
            unit: "%",
          },
          {
            title: "총실수입금(환차익포함/배당금포함)",
            icon: <IconChart className={"text-white"} />,
            value: 53.52,
            unit: "%",
          },
        ]}
      />
    </Grid>
  );
}
