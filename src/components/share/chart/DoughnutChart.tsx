"use client";
import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { Text } from "@visx/text";
import { PieArcDatum } from "@visx/shape/lib/shapes/Pie";
import {
  AnimatedPieProps,
  AnimatedStyles,
  defaultMargin,
  getTransformedData,
  PiePortfolioData,
  PieProps,
} from "@/components/share/chart/pieTypes";
import { animated, to, useTransition } from "@react-spring/web";
import { usePortfolioStore } from "@/store/portfolioStore";
import { useEffect } from "react";
import { scaleOrdinal } from "@visx/scale";
import { doughnutColor } from "@/components/share/chart/colors";

const getTotalPrice = (data: PiePortfolioData[]) =>
  data.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0,
  );

const symbols = (data: PiePortfolioData[]) => data.map((item) => item?.symbol);
const getSymbol = (symbol: PiePortfolioData) => symbol.symbol;
const getPrice = (price: PiePortfolioData) => price.price;

export default function DoughnutChart({
  width,
  height,
  margin = defaultMargin,
  animate = true,
  event = true,
  showPrice = true,
  data,
  legend,
}: PieProps) {
  const { getValue, setValue } = usePortfolioStore();
  const selected = getValue("portfolioSelected");

  const innerWidth = width - margin.left - margin.right - 120;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = 80; // 반지름길이
  const donutThickness = 20; // 도넛 두께

  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;
  const transformedData = getTransformedData(data);

  const totalPrice = getTotalPrice(data);

  useEffect(() => {
    setValue("totalPrice", totalPrice);
  }, [totalPrice]);

  const displayPrice = selected
    ? transformedData[selected]?.toLocaleString()
    : totalPrice.toLocaleString();

  if (data?.length === 0 || !data) {
    return null;
  }
  const ordinalColorScale = scaleOrdinal({
    domain: data.map((item) => item.symbol),
    range: doughnutColor,
  });
  return (
    <div className={"flex"}>
      <svg width={width} height={height}>
        <rect rx={14} width={width} height={height} fill="white" />
        <Group top={centerY + margin?.top} left={centerX}>
          <Pie
            data={
              selected ? data.filter(({ symbol }) => symbol === selected) : data
            }
            pieValue={getPrice}
            outerRadius={radius}
            innerRadius={radius - donutThickness}
          >
            {(pie) => (
              <AnimatedPie
                {...pie}
                animate={animate}
                getKey={(arc) => arc.data.symbol}
                getColor={(arc) => ordinalColorScale(arc.data.symbol)}
                onClickDatum={({ data: { symbol } }) => {
                  if (event) {
                    animate &&
                      setValue(
                        "portfolioSelected",
                        selected && selected === symbol ? null : symbol,
                      );
                  }
                }}
              />
            )}
          </Pie>
          <DisplayPrice showPrice={showPrice} displayPrice={displayPrice} />
        </Group>
      </svg>
      {legend}
    </div>
  );
}

function DisplayPrice({
  showPrice,
  displayPrice,
}: {
  showPrice: boolean;
  displayPrice?: string | undefined;
}) {
  if (!showPrice) {
    return null;
  }
  return (
    <Text
      verticalAnchor="start"
      textAnchor="middle"
      className={"break-all text-[12px]"}
      width={200}
    >
      {displayPrice}
    </Text>
  );
}

function AnimatedPie<Datum>({
  animate,
  arcs,
  path,
  getKey,
  getColor,
  onClickDatum,
}: AnimatedPieProps<Datum>) {
  const transitions = useTransition<PieArcDatum<Datum>, AnimatedStyles>(arcs, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
    keys: getKey,
  });
  return transitions((props, arc, { key }) => {
    const [centroidX, centroidY] = path.centroid(arc);
    const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

    return (
      <g key={key}>
        <animated.path
          d={to([props.startAngle, props.endAngle], (startAngle, endAngle) =>
            path({
              ...arc,
              startAngle,
              endAngle,
            }),
          )}
          fill={getColor(arc)}
          onClick={() => onClickDatum(arc)}
        />
        {hasSpaceForLabel && (
          <animated.g style={{ opacity: props.opacity }}>
            <text
              fill="black"
              x={centroidX}
              y={centroidY}
              dy=".33em"
              fontSize={9}
              textAnchor="middle"
              pointerEvents="none"
            >
              {getKey(arc)}
            </text>
          </animated.g>
        )}
      </g>
    );
  });
}

const fromLeaveTransition = ({ endAngle }: PieArcDatum<any>) => ({
  // enter from 360° if end angle is > 180°
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
});

const enterUpdateTransition = ({ startAngle, endAngle }: PieArcDatum<any>) => ({
  startAngle,
  endAngle,
  opacity: 1,
});
