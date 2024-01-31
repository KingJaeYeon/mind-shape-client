"use client";
import { LegendItem, LegendLabel, LegendOrdinal } from "@visx/legend";
import { getTransformedData } from "@/components/share/chart/pieTypes";
import { usePortfolioStore } from "@/store/portfolioStore";
import { scaleOrdinal } from "@visx/scale";
import { doughnutColor } from "@/components/share/chart/colors";
import { cn } from "@/lib/utils";

export default function ChartLegend({
  data,
  object,
  totalPrice,
}: {
  data: any;
  object: any;
  totalPrice: number;
}) {
  const { getValue, setValue, priceAndSymbol } = usePortfolioStore();
  const selected = getValue("portfolioSelected");

  const transformedData = getTransformedData(priceAndSymbol);
  const legendGlyphSize = 12;

  const ordinalColorScale = scaleOrdinal({
    domain: data?.map((item: any) => item?.symbol),
    range: doughnutColor,
  });

  return (
    <LegendOrdinal scale={ordinalColorScale} labelFormat={(label) => label}>
      {(labels) => (
        <div
          className={
            "flex w-[200px] flex-col justify-center pl-[10px] font-medium"
          }
        >
          {labels.map((label, i) => (
            <LegendItem
              key={`legend-quantile-${i}`}
              margin="1px 0px"
              onClick={() => {
                setValue(
                  "portfolioSelected",
                  selected && selected === label.text ? null : label.text,
                );
              }}
            >
              <div
                className={cn(
                  "flex flex-1 rounded-full px-[10px] py-[2px] text-[14px] text-[#0D1421] hover:bg-weakGray",
                  selected === label.text && "bg-weakGray",
                )}
              >
                <div className={"flex flex-1 items-center"}>
                  <svg width={legendGlyphSize} height={legendGlyphSize}>
                    <circle
                      fill={label.value}
                      r={legendGlyphSize / 2}
                      cx={legendGlyphSize / 2}
                      cy={legendGlyphSize / 2}
                    />
                  </svg>
                  <LegendLabel align="left" margin="0 0 0 4px">
                    {labels[i]?.text}
                  </LegendLabel>
                </div>
                <div>
                  <p>
                    {}
                    {((object[labels[i]?.text]?.price / totalPrice) * 100)
                      .toFixed(2)
                      .toLocaleString() + "%"}
                  </p>
                </div>
              </div>
            </LegendItem>
          ))}
        </div>
      )}
    </LegendOrdinal>
  );
}
