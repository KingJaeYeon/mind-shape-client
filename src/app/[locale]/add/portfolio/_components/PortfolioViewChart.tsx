"use client";
import Contents from "@/components/layout/Contents";
import { useConvenienceStore } from "@/store/convenienceStore";
import { IS_SHOW_CHART } from "@/constant/portfolio";

import DoughnutChart from "@/components/share/chart/DoughnutChart";
import ChartLabel from "@/components/share/chart/ChartLegend";
import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "@/hooks/react-query/portfolio.query";
import { DesktopTypeTM, TabletAndMobile } from "@/components/layout/responsive";
import Row from "@/components/layout/Row";

export default function PortfolioViewChart() {
  const { getValue } = useConvenienceStore();
  const { data, isPending } = usePortfolio();

  const ref = useRef();
  const [width, setWidth] = useState<number>(0);
  const isShow = getValue(IS_SHOW_CHART);
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        setWidth(newWidth);
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref?.current);
      }
    };
  }, [isShow]);

  if (!getValue(IS_SHOW_CHART)) {
    return null;
  }
  const option1: any = {
    title: "포트폴리오 비중 도넛 차트",
    duration: {
      isFixedDuration: true,
      options: {
        label: "현재",
        value: "",
      },
    },
  };
  const option2: any = {
    title: "포트폴리오 비중 트리맵 차트",
    duration: {
      isFixedDuration: true,
      options: {
        label: "현재",
        value: "",
      },
    },
  };
  if (isPending) {
    return null;
  }

  const list = data?.myList.reduce((acc: any, cur: any) => {
    acc[cur?.asset?.symbol] = {
      price: Number(acc[cur?.asset?.symbol]?.price ?? 0) + Number(cur?.price),
      amount:
        Number(acc[cur?.asset?.symbol]?.amount ?? 0) + Number(cur?.amount),
      symbol: cur?.asset?.symbol,
    };
    return acc;
  }, {});
  const array: any[] = Object.values(list).sort(
    (a: any, b: any) => b.price - a.price,
  );
  const totalPrice = array?.reduce((acc: any, cur: any) => {
    acc += cur?.price;
    return acc;
  }, 0);

  return (
    <Contents
      className={
        "flex w-full max-w-full flex-col gap-[20px] font-Inter md:flex-row"
      }
      ref={ref as any}
    >
      <DesktopTypeTM>
        <Contents
          className={
            "shadow-chart flex w-full flex-col rounded-[10px] bg-white p-[20px]"
          }
          style={{ maxWidth: `${width / 2 - 10}px` }}
        >
          <DoughnutChart
            height={330}
            width={width / 2 - 210}
            data={array}
            legend={
              <ChartLabel
                data={array}
                object={list}
                totalPrice={Number(totalPrice)}
              />
            }
          />
        </Contents>
        <Contents
          className={
            "shadow-chart flex w-full flex-col rounded-[10px] bg-white p-[20px]"
          }
          style={{ maxWidth: `${width / 2 - 10}px` }}
        >
          <DoughnutChart
            height={330}
            width={width / 2 - 210}
            data={array}
            legend={
              <ChartLabel
                data={array}
                object={list}
                totalPrice={Number(totalPrice)}
              />
            }
          />
        </Contents>
      </DesktopTypeTM>
      <TabletAndMobile>
        <Contents
          className={"flex w-full flex-col rounded-[10px] bg-white p-[20px]"}
          style={{ maxWidth: `${width}px` }}
        >
          <Row>
            <h3 className={"text-[18px] font-bold"}>Allocation</h3>
          </Row>
          <DoughnutChart
            height={300}
            width={width}
            data={array}
            type={"mobile"}
            legend={
              <ChartLabel
                data={array}
                object={list}
                totalPrice={Number(totalPrice)}
              />
            }
          />
        </Contents>
      </TabletAndMobile>
    </Contents>
  );
}
