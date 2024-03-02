import { create } from "zustand";
import { Asset, PortfolioItem } from "@/constant/portfolio";

interface Props {
  data: {};
  init: (forex: any[]) => any;
  getValue: (key: string) => any;
  setValue: (key: string, value: any) => void;
}

const initData = {};

export const useForexStore = create<Props>((set: any, get: any) => ({
  data: {},
  init: (forex: any) => {},
  getValue: (key: string) => {
    const data = get().data;
    return data[key];
  },
  setValue: (key: string, value: any) => {
    const data = get().data;
    data[key] = value;
    set({ data });
    return;
  },
}));

export const useForex = () => useForexStore();
