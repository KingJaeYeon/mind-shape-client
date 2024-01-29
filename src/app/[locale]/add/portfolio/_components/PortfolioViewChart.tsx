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
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import TreeMapChart from "@/components/share/chart/TreeMapChart";
type MyList = {
  amount: number;
  asset: { symbol: string; exChange: string };
  assetId: number;
  category: { assetType: string; name: string };
  index: 1;
  price: 100;
}[];

export default function PortfolioViewChart() {
  const { getValue } = useConvenienceStore();
  const { myList, isPending }: { myList: MyList; isPending: boolean } =
    usePortfolio();
  const { t } = useTranslation("portfolio");
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

  if (isPending || !myList) {
    return null;
  }

  const donutChartData = myList?.reduce((acc: any, cur: any) => {
    acc[cur?.asset?.symbol] = {
      price: Number(acc[cur?.asset?.symbol]?.price ?? 0) + Number(cur?.price),
      amount:
        Number(acc[cur?.asset?.symbol]?.amount ?? 0) + Number(cur?.amount),
      symbol: cur?.asset?.symbol,
    };
    return acc;
  }, {});
  let donut = [];
  let treeMap = [
    {
      id: "Assets",
      parent: null,
      size: 0,
    },
  ];
  for (let i = 0; i < myList.length; i++) {}

  console.log(myList);
  const sortToPrice: any[] = Object?.values(donutChartData)?.sort(
    (a: any, b: any) => b?.price - a?.price,
  );

  const totalPrice = sortToPrice?.reduce((acc: any, cur: any) => {
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
            "mt-[40px] flex w-full flex-col rounded-[10px] bg-white p-[20px] shadow-chart"
          }
          style={{ maxWidth: `${width / 2 - 10}px` }}
        >
          <DoughnutChart
            height={330}
            width={width / 2 - 210}
            data={sortToPrice}
            legend={
              <ChartLabel
                data={sortToPrice}
                object={donutChartData}
                totalPrice={Number(totalPrice)}
              />
            }
          />
        </Contents>
        <Contents
          className={
            "mt-[40px] flex w-full flex-col rounded-[10px] bg-white p-[20px] shadow-chart"
          }
          style={{ maxWidth: `${width / 2 - 10}px` }}
        >
          <TreeMapChart height={330} width={width / 2 - 40} />
        </Contents>
      </DesktopTypeTM>
      <TabletAndMobile>
        <Contents
          className={"flex w-full flex-col rounded-[10px] bg-white py-[20px]"}
          style={{ maxWidth: `${width}px` }}
        >
          <Row>
            <h3 className={"text-[18px] font-bold"}>{t("allocation")}</h3>
          </Row>
          <DoughnutChart
            height={300}
            width={width}
            data={sortToPrice}
            type={"mobile"}
            legend={
              <ChartLabel
                data={sortToPrice}
                object={donutChartData}
                totalPrice={Number(totalPrice)}
              />
            }
          />
        </Contents>
      </TabletAndMobile>
    </Contents>
  );
}
