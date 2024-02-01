export type AddPortfolio = {
  amount: number;
  price: number;
  categoryId: number;
  assetId: number;
  transactionDate: Date;
  transactionType: string;
};

export const IS_SHOW_CHART = "portfolioIsShowChart";
