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
  data?.reduce<{ [key: string]: number }>((acc, item) => {
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
    id: "information_technology",
    parent: "Assets",
    size: null,
  },
  {
    id: "financials",
    parent: "Assets",
    size: null,
  },
  {
    id: "energy",
    parent: "Assets",
    size: null,
  },
  {
    id: "materials",
    parent: "Assets",
    size: null,
  },
  {
    id: "industrials",
    parent: "Assets",
    size: null,
  },
  {
    id: "consumer_discretionary",
    parent: "Assets",
    size: null,
  },
  {
    id: "consumer_staples",
    parent: "Assets",
    size: null,
  },
  {
    id: "health_care",
    parent: "Assets",
    size: null,
  },

  {
    id: "list1",
    parent: "information_technology",
    size: null,
  },
  {
    id: "list2",
    parent: "financials",
    size: null,
  },
  {
    id: "list3",
    parent: "energy",
    size: null,
  },
  {
    id: "list4",
    parent: "materials",
    size: null,
  },
  {
    id: "list5",
    parent: "industrials",
    size: null,
  },
  {
    id: "list6",
    parent: "consumer_discretionary",
    size: null,
  },
  {
    id: "list7",
    parent: "consumer_staples",
    size: null,
  },
  {
    id: "list8",
    parent: "health_care",
    size: null,
  },

  { id: "YUYR", parent: "list1", size: 40 },
  { id: "XJLP", parent: "list1", size: 10 },
  { id: "MATK", parent: "list1", size: 10 },
  { id: "YPLP", parent: "list1", size: 10 },
  { id: "MSNT", parent: "list1", size: 10 },
  { id: "CJWS", parent: "list2", size: 10 },
  { id: "SIFV", parent: "list2", size: 10 },
  { id: "SSIM", parent: "list2", size: 10 },
  { id: "WNAF", parent: "list2", size: 10 },
  { id: "RBAS", parent: "list2", size: 10 },
  { id: "RRFR", parent: "list2", size: 10 },
  { id: "MHQH", parent: "list2", size: 10 },
  { id: "EGIU", parent: "list3", size: 10 },
  { id: "YTJN", parent: "list3", size: 10 },
  { id: "ARZH", parent: "list3", size: 10 },
  { id: "JRPP", parent: "list3", size: 10 },
  { id: "PGHW", parent: "list3", size: 10 },
  { id: "MFFL", parent: "list3", size: 10 },
  { id: "VPJG", parent: "list4", size: 10 },
  { id: "JJQZ", parent: "list4", size: 10 },
  { id: "XHMU", parent: "list4", size: 10 },
  { id: "DHUJ", parent: "list4", size: 10 },
  { id: "ORKX", parent: "list4", size: 10 },
  { id: "ZUBJ", parent: "list5", size: 10 },
  { id: "QJFQ", parent: "list5", size: 10 },
  { id: "KRWV", parent: "list5", size: 10 },
  { id: "DIGM", parent: "list5", size: 10 },
  { id: "HEMA", parent: "list6", size: 10 },
  { id: "VJAN", parent: "list6", size: 10 },
  { id: "YBVY", parent: "list6", size: 10 },
  { id: "BHUA", parent: "list6", size: 10 },
  { id: "IUXW", parent: "list6", size: 10 },
  { id: "UPIN", parent: "list7", size: 10 },
  { id: "JKKC", parent: "list7", size: 10 },
  { id: "JOEX", parent: "list7", size: 10 },
  { id: "UILW", parent: "list7", size: 10 },
  { id: "TGRA", parent: "list7", size: 10 },
  { id: "ZGXR", parent: "list7", size: 10 },
  { id: "AXBP", parent: "list8", size: 10 },
  { id: "FGCF", parent: "list8", size: 10 },
  { id: "NLIC", parent: "list8", size: 5 },
];
