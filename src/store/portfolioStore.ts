import { create } from "zustand";

interface State {
  config: {
    isShowChart: boolean;
  };
}

interface Value {
  totalAmountCurrent: number;
  totalAmountYesterday: number;
}

interface Action {
  initData: (data: any) => Promise<void>;
  getValue: (key: string) => any;
  setValue: (key: string, value: any) => void;
}

export const usePortfolioStore = create<State & Action & Value>(
  (set: any, get: any) => ({
    config: {
      isShowChart: true,
    },
    totalAmountCurrent: 0,
    totalAmountYesterday: 0,
    initData: async (data: any) => {
      set({
        totalAmountCurrent: data.totalAmountCurrent,
        totalAmountYesterday: data.totalAmountYesterday,
      });
    },
    getValue: (key: string) => {
      let config = get().config;
      return config[key];
    },
    setValue: (key: string, value: any) => {
      let config = get().config;
      config[key] = value;
      set({ config });
    },
  }),
);
