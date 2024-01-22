import { PieArcDatum, ProvidedProps } from "@visx/shape/lib/shapes/Pie";
import { scaleOrdinal } from "@visx/scale";
import { usePortfolioStore } from "@/store/portfolioStore";
import { doughnutColor } from "@/components/share/chart/colors";

export const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export type PieProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
  showPrice?: boolean;
  event?: boolean;
  data: any[];
  legend?: any;
};

export type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
  animate?: boolean;
  getKey: (d: PieArcDatum<Datum>) => string;
  getColor: (d: PieArcDatum<Datum>) => string;
  onClickDatum: (d: PieArcDatum<Datum>) => void;
  delay?: number;
};

export type AnimatedStyles = {
  startAngle: number;
  endAngle: number;
  opacity: number;
};

export interface PiePortfolioData {
  [key: string]: any;

  symbol: string;
  price: number;
}
const getPortfolioSymbol = (symbol: PiePortfolioData) => symbol.symbol;
const getPortfolioPrice = (price: PiePortfolioData) => price.price;

export const getTransformedData = (data: PiePortfolioData[]) =>
  data.reduce<{ [key: string]: number }>((acc, item) => {
    acc[item?.symbol] = item?.price;
    return acc;
  }, {});
