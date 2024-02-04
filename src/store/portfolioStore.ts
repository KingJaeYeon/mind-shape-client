import { create } from "zustand";

interface State {
  config: {
    isShowChart: boolean;
    portfolioSelected: string | null;
    totalPrice: number;
  };
  data: {};
}

interface Action {
  getValue: (key: string) => any;
  setValue: (key: string, value: any) => void;
}

export const usePortfolioStore = create<State & Action>(
  (set: any, get: any) => ({
    config: {
      isShowChart: true,
      portfolioSelected: null,
      totalPrice: 0,
    },
    data: {},
    getValue: (key: string) => {
      switch (key) {
        case "symbol":
          return get().data["symbol"];
        case "list":
          return get().data["list"];
        default:
          let config = get().config;
          return config[key];
      }
    },
    setValue: (key: string, value: any) => {
      switch (key) {
        case "symbol":
          let dataList = get().data;
          dataList["symbol"] = value;
          set({ data: dataList });
          return;
        default:
          let config = get().config;
          config[key] = value;
          set({ config });
          return;
      }
    },
  }),
);
