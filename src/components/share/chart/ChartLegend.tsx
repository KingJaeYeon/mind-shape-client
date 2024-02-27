"use client";
import { LegendItem, LegendLabel, LegendOrdinal } from "@visx/legend";
import { usePortfolio } from "@/store/portfolioStore";
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
  const { getValue, setValue } = usePortfolio();
  const selected = getValue("config", "portfolioSelected");

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
          {labels?.map((label, i) => {
            const symbol = label.text;
            const value = label.value;
            const price = object[symbol]?.dailyPrice * object[symbol]?.quantity;
            return (
              <LegendItem
                key={`legend-quantile-${i}`}
                margin="1px 0px"
                onClick={() => {
                  setValue(
                    "config",
                    "portfolioSelected",
                    selected && selected === symbol ? null : symbol,
                  );
                }}
              >
                <div
                  className={cn(
                    "flex flex-1 rounded-full px-[10px] py-[2px] text-[14px] text-[#0D1421] hover:bg-weakGray",
                    selected === symbol && "bg-weakGray",
                  )}
                >
                  <div className={"flex flex-1 items-center"}>
                    <svg width={legendGlyphSize} height={legendGlyphSize}>
                      <circle
                        fill={value}
                        r={legendGlyphSize / 2}
                        cx={legendGlyphSize / 2}
                        cy={legendGlyphSize / 2}
                      />
                    </svg>
                    <LegendLabel align="left" margin="0 0 0 4px">
                      {symbol}
                    </LegendLabel>
                  </div>
                  <div>
                    <p>{((price / totalPrice) * 100).toFixed(2) + "%"}</p>
                  </div>
                </div>
              </LegendItem>
            );
          })}
        </div>
      )}
    </LegendOrdinal>
  );
}
