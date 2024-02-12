export type AddPortfolio = {
  quantity: number;
  price: number;
  categoryId: number;
  assetId: number;
  transactionDate: Date;
  transactionType: string;
};
export type UpdatePortfolio = {
  price: number;
  quantity: number;
  index: number;
  transactionDate: Date;
};

export const IS_SHOW_CHART = "portfolioIsShowChart";

export type Asset = {
  assetId: string;
  price: number;
  quantity: number;
  transactionType: "BUY" | "SELL";
  asset: {
    symbol: string;
  };
  category: {
    name: string;
  };
};

export type PortfolioItem = {
  price: number;
  quantity: number;
  symbol: string;
  name: string;
  dailyPrice: number;
  updatedAt: Date | null;
};
