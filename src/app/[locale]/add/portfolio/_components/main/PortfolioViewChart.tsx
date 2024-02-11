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
import TreeMapChart from "@/components/share/chart/TreeMapChart";
import { ToggleGroupBaseSingle } from "@/components/share/radix/ToggleGroupBase";

type MyList = {
  quantity: number;
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

  const toggleOptions = [
    { value: "allocation", label: t("allocation") },
    { value: "industry", label: t("industry") },
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

  const treeMapData = formattedData?.reduce(
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
  console.log(formattedData);
  const totalPrice = formattedData?.reduce((acc: any, cur: any) => {
    acc += cur?.dailyPrice * cur?.quantity;
    return acc;
  }, 0.0);
  console.log(totalPrice);
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
            <h3 className={"text-[18px] font-bold"}>{t("industry")}</h3>
          </Row>
          <TreeMapChart
            height={330}
            width={width / 2 - 40}
            formattedData={treeMapData}
          />
        </Contents>
      </DesktopTypeTM>
      <TabletAndMobile>
        <Contents
          className={"flex w-full flex-col rounded-[10px] bg-white py-[20px]"}
          style={{ maxWidth: `${width}px` }}
        >
          <Row className={"items-center justify-between"}>
            <h3 className={"text-[18px] font-bold"}>
              {toggle === "allocation" ? t("allocation") : t("industry")}
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
          ) : (
            <TreeMapChart
              height={300}
              width={width}
              type={"mobile"}
              formattedData={treeMapData}
            />
          )}
        </Contents>
      </TabletAndMobile>
    </Contents>
  );
}
