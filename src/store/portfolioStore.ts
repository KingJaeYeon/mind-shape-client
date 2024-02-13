import { create } from "zustand";
import { Asset, PortfolioItem } from "@/constant/portfolio";

interface State {
  config: {
    isShowChart: boolean;
    portfolioSelected: string | null;
  };
  data: {
    list: any;
    formattedData: any;
    dailyTotalPrice: number;
    prevTotalPrice: number;
    detailSymbol: any;
  };
}

interface Action {
  init: (portfolio: any[], dailyPriceData: any[], prevPriceData: any[]) => any;
  getValue: (key: string, ns: string) => any;
  setValue: (key: string, ns: string, value: any) => void;
}

const initData = {
  list: null,
  formattedData: null,
  dailyTotalPrice: -1,
  prevTotalPrice: -1,
  detailSymbol: null,
};

export const usePortfolioStore = create<State & Action>(
  (set: any, get: any) => ({
    config: {
      isShowChart: true,
      portfolioSelected: null,
    },
    data: {
      list: null,
      formattedData: null,
      dailyTotalPrice: -1,
      prevTotalPrice: -1,
      detailSymbol: null,
    },
    init: (portfolio: any, dailyPriceData: any, prevPriceData: any) => {
      set({ data: initData });
      const list: Record<string, PortfolioItem> = portfolio.reduce(
        (acc: any, cur: Asset) => {
          const { assetId, transactionType, price, quantity, asset, category } =
            cur;
          const symbol = asset.symbol;
          const name = category.name;
          const symbolName = asset.name;
          const adjustedPrice =
            transactionType === "BUY"
              ? price * quantity
              : price * quantity * -1;

          // 기존 항목 업데이트 또는 새 항목 생성
          const existingItem = acc[symbol] || {
            price: 0,
            quantity: 0,
            symbol,
            name,
            symbolName,
            dailyPrice: -1,
            prevPrice: -1,
            updatedAt: null,
          };

          existingItem.price += adjustedPrice;
          existingItem.quantity +=
            transactionType === "BUY" ? quantity : -quantity;

          // 일일 가격 데이터 업데이트
          if (dailyPriceData[assetId] && existingItem.dailyPrice === -1) {
            existingItem.dailyPrice = dailyPriceData[assetId].closePrice;
            existingItem.updatedAt = dailyPriceData[assetId].createdAt;
          }

          if (prevPriceData[assetId] && existingItem.prevPrice === -1) {
            existingItem.prevPrice = prevPriceData[assetId].closePrice;
          }

          acc[symbol] = existingItem;
          return acc;
        },
        {},
      );

      const formattedData: PortfolioItem[] = Object.values(list)
        .filter((item) => item.quantity !== 0)
        .sort(
          (a, b) => b?.dailyPrice * b?.quantity - a?.dailyPrice * a?.quantity,
        );

      const dailyTotalPrice = formattedData?.reduce((acc: any, cur: any) => {
        acc += cur?.dailyPrice * cur?.quantity;
        return acc;
      }, 0.0);
      const prevTotalPrice = formattedData?.reduce((acc: any, cur: any) => {
        acc += cur?.prevPrice * cur?.quantity;
        return acc;
      }, 0.0);

      set({
        data: { list, formattedData, dailyTotalPrice, prevTotalPrice },
      });
    },
    getValue: (key: string, ns: string) => {
      switch (key) {
        case "data":
          const data = get().data;
          return data[ns];
        case "config":
          const config = get().config;
          return config[ns];
      }
    },
    setValue: (key: string, ns: string, value: any) => {
      switch (key) {
        case "data":
          const data = get().data;
          data[ns] = value;
          set({ data });
          return;
        case "config":
          const config = get().config;
          config[ns] = value;
          set({ config });
          return;
      }
    },
  }),
);

export const usePortfolio = () => usePortfolioStore((state) => state);
