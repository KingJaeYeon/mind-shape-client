import { create } from "zustand";

interface State {
  totalAmountCurrent: number;
  totalAmountYesterday: number;
}

interface Action {
  initData: (data: any) => Promise<void>;
}

export const usePortfolioStore = create<State & Action>(
  (set: any, get: any) => ({
    totalAmountCurrent: 0,
    totalAmountYesterday: 0,
    initData: async (data: any) => {
      set({
        totalAmountCurrent: data.totalAmountCurrent,
        totalAmountYesterday: data.totalAmountYesterday,
      });
    },
  }),
);
