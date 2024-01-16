export type AddPortfolio = {
  amount: number;
  price: number;
  categoryId: number;
  assetId: number;
  buyAt: Date;
};

export const IS_SHOW_CHART = "portfolioIsShowChart";
