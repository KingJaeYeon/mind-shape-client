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
