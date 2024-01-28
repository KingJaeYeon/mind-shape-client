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
  type?: any;
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

export const tempData = [
  {
    id: "Category",
    parent: null,
    size: 0,
  },
  {
    id: "C1",
    parent: "Category",
    size: null,
  },
  {
    id: "C2",
    parent: "Category",
    size: null,
  },
  {
    id: "C3",
    parent: "Category",
    size: null,
  },
  {
    id: "C4",
    parent: "C3",
    size: null,
  },
  {
    id: "Adam",
    parent: "C4",
    size: 5,
  },
  {
    id: "Amiens",
    parent: "C4",
    size: 10,
  },
  {
    id: "Audrey",
    parent: "C4",
    size: 12,
  },
  {
    id: "Celia",
    parent: "C1",
    size: 108,
  },
  {
    id: "Charles",
    parent: "C4",
    size: 8,
  },
  {
    id: "Corin",
    parent: "C4",
    size: 24,
  },
  {
    id: "Dennis",
    parent: "C4",
    size: 2,
  },
  {
    id: "Duke",
    parent: "C4",
    size: 32,
  },
  {
    id: "Frederick",
    parent: "C4",
    size: 20,
  },
  {
    id: "Hymen",
    parent: "C4",
    size: 1,
  },
  {
    id: "Jaques (lord)",
    parent: "C4",
    size: 57,
  },
  {
    id: "Jaques (son)",
    parent: "C4",
    size: 2,
  },
  {
    id: "Le Beau",
    parent: "C4",
    size: 14,
  },
  {
    id: "Oliver",
    parent: "C4",
    size: 37,
  },
  {
    id: "Orlando",
    parent: "C4",
    size: 120,
  },
  {
    id: "Phebe",
    parent: "C4",
    size: 23,
  },
  {
    id: "Rosalind",
    parent: "C4",
    size: 201,
  },
  {
    id: "Silvius",
    parent: "C4",
    size: 24,
  },
  {
    id: "Sir Oliver Martext",
    parent: "C4",
    size: 3,
  },
  {
    id: "Touchstone",
    parent: "C4",
    size: 74,
  },
  {
    id: "William",
    parent: "C4",
    size: 11,
  },
  {
    id: "Adriana",
    parent: "C4",
    size: 79,
  },
  {
    id: "Aegeon",
    parent: "C4",
    size: 17,
  },
  {
    id: "Aemilia",
    parent: "C4",
    size: 16,
  },
];
