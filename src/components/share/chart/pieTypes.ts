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
    id: "Assets",
    parent: null,
    size: 0,
  },

  {
    id: "List1",
    parent: "Assets",
    size: null,
  },
  {
    id: "List2",
    parent: "Assets",
    size: null,
  },
  {
    id: "List3",
    parent: "Assets",
    size: null,
  },
  {
    id: "List4",
    parent: "Assets",
    size: null,
  },
  {
    id: "List5",
    parent: "Assets",
    size: null,
  },
  {
    id: "List6",
    parent: "Assets",
    size: null,
  },
  {
    id: "List7",
    parent: "Assets",
    size: null,
  },
  {
    id: "List8",
    parent: "Assets",
    size: null,
  },
  {
    id: "List9",
    parent: "Assets",
    size: null,
  },
  {
    id: "information_technology",
    parent: "List1",
    size: null,
  },
  {
    id: "financials",
    parent: "List2",
    size: null,
  },
  {
    id: "energy",
    parent: "List3",
    size: null,
  },
  {
    id: "materials",
    parent: "List4",
    size: null,
  },
  {
    id: "industrials",
    parent: "List5",
    size: null,
  },
  {
    id: "consumer_discretionary",
    parent: "List6",
    size: null,
  },
  {
    id: "consumer_staples",
    parent: "List7",
    size: null,
  },
  {
    id: "health_care",
    parent: "List8",
    size: null,
  },
  {
    id: "telecommunication_services",
    parent: "List9",
    size: null,
  },
  { id: "YUYR", parent: "information_technology", size: 10 },
  { id: "XJLP", parent: "information_technology", size: 10 },
  { id: "MATK", parent: "information_technology", size: 10 },
  { id: "YPLP", parent: "information_technology", size: 10 },
  { id: "MSNT", parent: "information_technology", size: 10 },
  { id: "CJWS", parent: "financials", size: 10 },
  { id: "SIFV", parent: "financials", size: 10 },
  { id: "SSIM", parent: "financials", size: 10 },
  { id: "WNAF", parent: "financials", size: 10 },
  { id: "RBAS", parent: "financials", size: 10 },
  { id: "RRFR", parent: "financials", size: 10 },
  { id: "MHQH", parent: "financials", size: 10 },
  { id: "EGIU", parent: "energy", size: 10 },
  { id: "YTJN", parent: "energy", size: 10 },
  { id: "ARZH", parent: "energy", size: 10 },
  { id: "JRPP", parent: "energy", size: 10 },
  { id: "PGHW", parent: "energy", size: 10 },
  { id: "MFFL", parent: "energy", size: 10 },
  { id: "VPJG", parent: "materials", size: 10 },
  { id: "JJQZ", parent: "materials", size: 10 },
  { id: "XHMU", parent: "materials", size: 10 },
  { id: "DHUJ", parent: "materials", size: 10 },
  { id: "ORKX", parent: "materials", size: 10 },
  { id: "ZUBJ", parent: "industrials", size: 10 },
  { id: "QJFQ", parent: "industrials", size: 10 },
  { id: "KRWV", parent: "industrials", size: 10 },
  { id: "DIGM", parent: "industrials", size: 10 },
  { id: "HEMA", parent: "consumer_discretionary", size: 10 },
  { id: "VJAN", parent: "consumer_discretionary", size: 10 },
  { id: "YBVY", parent: "consumer_discretionary", size: 10 },
  { id: "BHUA", parent: "consumer_discretionary", size: 10 },
  { id: "IUXW", parent: "consumer_discretionary", size: 10 },
  { id: "UPIN", parent: "consumer_staples", size: 10 },
  { id: "JKKC", parent: "consumer_staples", size: 10 },
  { id: "JOEX", parent: "consumer_staples", size: 10 },
  { id: "UILW", parent: "consumer_staples", size: 10 },
  { id: "TGRA", parent: "consumer_staples", size: 10 },
  { id: "ZGXR", parent: "consumer_staples", size: 10 },
  { id: "AXBP", parent: "health_care", size: 10 },
  { id: "FGCF", parent: "health_care", size: 10 },
  { id: "NLIC", parent: "health_care", size: 5 },
];
