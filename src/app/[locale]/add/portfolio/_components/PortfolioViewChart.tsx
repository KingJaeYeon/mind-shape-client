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

export default function PortfolioViewChart({
  formattedData,
  data,
}: {
  formattedData: any;
  data: any;
}) {
  const { getValue } = useConvenienceStore();

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
  console.log(formattedData);

  const treeMapData = formattedData?.reduce(
    (acc: any, cur: any) => {
      acc.push({
        id: cur?.symbol,
        parent: "Assets",
        size: cur?.price,
      });
      return acc;
    },
    [
      {
        id: "Assets",
        parent: null,
        size: 0,
      },
    ],
  );

  const totalPrice = formattedData?.reduce((acc: any, cur: any) => {
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
          <Row>
            <h3 className={"text-[18px] font-bold"}>{t("allocation")}</h3>
          </Row>
          <DoughnutChart
            height={330}
            width={width / 2 - 210}
            data={formattedData}
            legend={
              <ChartLabel
                data={formattedData}
                object={data}
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
          <Row>
            <h3 className={"text-[18px] font-bold"}>
              포트폴리오 비중 트리맵 차트
            </h3>
          </Row>
          <TreeMapChart
            height={330}
            width={width / 2 - 40}
            formattedData={formattedData}
          />
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
            data={formattedData}
            type={"mobile"}
            legend={
              <ChartLabel
                data={formattedData}
                object={data}
                totalPrice={Number(totalPrice)}
              />
            }
          />
        </Contents>
        <Contents
          className={"flex w-full flex-col rounded-[10px] bg-white py-[20px]"}
          style={{ maxWidth: `${width}px` }}
        >
          <Row>
            <h3 className={"text-[18px] font-bold"}>
              포트폴리오 비중 트리맵 차트
            </h3>
          </Row>
          <TreeMapChart height={500} width={width} type={"mobile"} />
        </Contents>
      </TabletAndMobile>
    </Contents>
  );
}
