import { PieArcDatum, ProvidedProps } from "@visx/shape/lib/shapes/Pie";

export const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export type PieProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
  selected: string | null;
  setSelected: (symbol: string | null) => void;
  showPrice?: boolean;
  event?: boolean;
  data: any[];
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
