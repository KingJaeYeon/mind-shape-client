import { create } from "zustand";

interface ConvenienceStore {
  hideNavBar: boolean;
  isShowAmount: boolean;
  config: {
    portfolioIsShowChart: boolean;
  };
  getValue: (key: string) => any;
  setValue: (key: string, value: any) => void;
}

export const useConvenienceStore = create<ConvenienceStore>(
  (set: any, get: any) => ({
    hideNavBar: true,
    isShowAmount: true,
    config: {
      portfolioIsShowChart: true,
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
