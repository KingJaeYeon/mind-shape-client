import React from "react";
import { Group } from "@visx/group";
import { Bar } from "@visx/shape";

import { scaleLinear, scaleBand } from "@visx/scale";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { GridRows, GridColumns } from "@visx/grid";
import { defaultStyles, useTooltip, useTooltipInPortal } from "@visx/tooltip";
import { localPoint } from "@visx/event";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import { cn } from "@/lib/utils";
export const background = "#fff";

// accessors
const defaultMargin = { top: 40, right: 30, bottom: 50, left: 40 };
const getXScaleKey = (d: any) => d.xScaleKey;
const getYScaleValue = (d: any) => d.yScaleValue;

export type BarProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  data: any;
  type?: string;
};
type TooltipData = {
  bar: any;
  xScaleKey: string;
  yScaleValue: number;
  index: number;
  height: number;
  width: number;
  x: number;
  y: number;
};
let tooltipTimeout: number;
export default function BarsChart({
  width,
  height,
  margin = defaultMargin,
  data,
  type,
}: BarProps) {
  const {
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  } = useTooltip<TooltipData>();

  const { containerRef, TooltipInPortal } = useTooltipInPortal({
    scroll: true,
  });
  const { t } = useTranslation("portfolio");
  if (width < 10) return null;

  const tooltipStyles = {
    ...defaultStyles,
    minWidth: 60,
    backgroundColor: "rgba(0,0,0,0.9)",
    color: "white",
  };
  const isPlus =
    data[1].yScaleValue - data[0].yScaleValue === 0
      ? "black"
      : data[1].yScaleValue - data[0].yScaleValue > 0
        ? "green"
        : "red";
  // bounds
  const xMax = type === "mobile" ? width : width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = scaleBand<string>({
    domain: [...data.map((item: any) => item.xScaleKey)],
    range: [0, xMax],
    padding: 0.5,
  });
  const yScale = scaleLinear<number>({
    domain: [0, Math.max(...data.map((item: any) => item.yScaleValue))],
    nice: true,
  });

  xScale.range([0, xMax]);
  yScale.range([yMax, 0]);

  return (
    <div className={"relative"}>
      <svg width={width} height={height}>
        <rect
          ref={containerRef}
          x={0}
          y={0}
          width={width}
          height={height}
          fill={background}
          rx={14}
        />
        <Group left={margin.left} top={margin.top}>
          <GridRows
            scale={yScale}
            width={xMax}
            height={yMax}
            stroke="#e0e0e0"
          />
          <GridColumns
            scale={xScale}
            width={xMax}
            height={yMax}
            stroke="#e0e0e0"
          />
          <line x1={xMax} x2={xMax} y1={0} y2={yMax} stroke="#e0e0e0" />
          <AxisBottom
            top={yMax}
            scale={xScale}
            axisClassName={"font-bold text-[14px]"}
            numTicks={width > 520 ? 10 : 5}
          />
          <AxisLeft scale={yScale} />
          <text x="-50" y="15" transform="rotate(-90)" fontSize={12}>
            Price ($)
          </text>
          {data?.map((d: any) => {
            const xScaleKey = getXScaleKey(d);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(getYScaleValue(d)) ?? 0);
            const barX = xScale(xScaleKey) ?? 0;
            const barY = yMax - barHeight;
            return (
              <Bar
                key={`bar-${xScaleKey}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="rgba(23, 233, 217, .5)"
                onMouseLeave={() => {
                  tooltipTimeout = window.setTimeout(() => {
                    hideTooltip();
                  }, 300);
                }}
                onMouseMove={(event) => {
                  if (tooltipTimeout) clearTimeout(tooltipTimeout);
                  const eventSvgCoords = localPoint(event);
                  const left = barX + barWidth / 2;
                  showTooltip({
                    tooltipData: d,
                    tooltipTop: eventSvgCoords?.y,
                    tooltipLeft: left,
                  });
                }}
              />
            );
          })}
        </Group>
      </svg>
      {tooltipOpen && tooltipData && (
        <TooltipInPortal
          top={tooltipTop}
          left={tooltipLeft}
          style={tooltipStyles}
        >
          <div className={"mb-[10px]"}>
            <strong>{tooltipData.xScaleKey}</strong>
          </div>
          <div>
            <p className={"font-medium"}>
              {tooltipData.yScaleValue.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          {tooltipData.xScaleKey === data[1].xScaleKey && (
            <div
              className={cn(
                "mt-[10px] font-medium",
                isPlus === "green" && "text-primary",
                isPlus === "red" && "text-red",
              )}
            >{`${t("profit_loss")} : ${(
              data[1].yScaleValue - data[0].yScaleValue
            ).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}</div>
          )}
        </TooltipInPortal>
      )}
    </div>
  );
}
