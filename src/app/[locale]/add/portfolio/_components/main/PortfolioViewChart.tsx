"use client";
import Contents from "@/components/layout/Contents";
import { useConvenienceStore } from "@/store/convenienceStore";
import { IS_SHOW_CHART } from "@/constant/portfolio";

import DoughnutChart from "@/components/share/chart/DoughnutChart";
import ChartLabel from "@/components/share/chart/ChartLegend";
import { useEffect, useRef, useState } from "react";
import { DesktopTypeTM, TabletAndMobile } from "@/components/layout/responsive";
import Row from "@/components/layout/Row";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import { ToggleGroupBaseSingle } from "@/components/share/radix/ToggleGroupBase";
import { usePortfolio } from "@/store/portfolioStore";
import BarsChart from "@/components/share/chart/BarsChart";

export default function PortfolioViewChart() {
  const { getValue } = useConvenienceStore();
  const { getValue: getPortfolio } = usePortfolio();
  const { t } = useTranslation("portfolio");
  const ref = useRef();

  const toggleOptions = [
    { value: "allocation", label: t("allocation") },
    {
      value: "active_portfolio_overview",
      label: t("active_portfolio_overview"),
    },
  ];
  const [width, setWidth] = useState<number>(0);
  const [toggle, setToggle] = useState(toggleOptions[0].value);
  const isShow = getValue(IS_SHOW_CHART);
  const toggleGroupItemClasses =
    "border-b border-r border-t border-line px-[10px] text-[14px] text-white first:rounded-tl-[5px] first:rounded-bl-[5px] last:rounded-tr-[5px] last:rounded-br-[5px] hover:bg-primary-light focus:outline-none data-[state=on]:bg-primary-light bg-primary";

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

  const treeMapData = getPortfolio("data", "formattedData")?.reduce(
    (acc: any, cur: any) => {
      const isExistCategory = acc.find((item: any) => item.id === cur.name);
      if (!isExistCategory) {
        acc.push({ id: cur.name, parent: "Assets", size: null });
        acc.push({ id: `list_${cur.name}`, parent: cur.name, size: 0 });
      }
      acc.push({ id: cur.symbol, parent: `list_${cur.name}`, size: cur.price });
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
  const barData = [
    {
      xScaleKey: "Total Original Investment",
      yScaleValue: getPortfolio("data", "originTotalPrice"),
    },
    {
      xScaleKey: "Total Current Value",
      yScaleValue: getPortfolio("data", "dailyTotalPrice"),
    },
  ];
  if (getPortfolio("data", "formattedData")?.length === 0) {
    return null;
  }
  return (
    <Contents
      className={"flex w-full max-w-full gap-[20px] font-Inter"}
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
            data={getPortfolio("data", "formattedData")}
            totalPrice={getPortfolio("data", "dailyTotalPrice")}
            legend={
              <ChartLabel
                data={getPortfolio("data", "formattedData")}
                object={getPortfolio("data", "list")}
                totalPrice={Number(getPortfolio("data", "dailyTotalPrice"))}
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
              {t("active_portfolio_overview")}
            </h3>
          </Row>
          <BarsChart height={330} width={width / 2 - 40} data={barData} />
        </Contents>
      </DesktopTypeTM>
      <TabletAndMobile>
        <Contents
          className={"flex w-full flex-col rounded-[10px] bg-white py-[20px]"}
          style={{ maxWidth: `${width}px` }}
        >
          <Row className={"items-center justify-between"}>
            <h3 className={"text-[18px] font-bold"}>
              {toggle === "allocation"
                ? t("allocation")
                : t("active_portfolio_overview")}
            </h3>
            <ToggleGroupBaseSingle
              value={toggle}
              setValue={setToggle}
              options={toggleOptions}
              className={toggleGroupItemClasses}
            />
          </Row>
          {toggle === "allocation" ? (
            <DoughnutChart
              height={300}
              width={width}
              data={getPortfolio("data", "formattedData")}
              totalPrice={getPortfolio("data", "dailyTotalPrice")}
              type={"mobile"}
              legend={
                <ChartLabel
                  data={getPortfolio("data", "formattedData")}
                  object={getPortfolio("data", "list")}
                  totalPrice={Number(getPortfolio("data", "dailyTotalPrice"))}
                />
              }
            />
          ) : (
            <BarsChart
              height={300}
              width={width}
              data={barData}
              type={"mobile"}
            />
          )}
        </Contents>
      </TabletAndMobile>
    </Contents>
  );
}
