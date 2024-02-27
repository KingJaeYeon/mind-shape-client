import { create } from "zustand";

interface Props {
  isOpen: boolean;
  subContents: any;
  mainContents: any;
  contentsValue: any;

  getContentsValue: (key: string) => any;
  setContentsValue: (key: string, value: any) => void;
  backHandler: () => void;
  getValue: (key: string) => any;
  setValue: (key: string, value: any) => void;
}

export const useModalStore = create<Props>((set: any, get: any) => ({
  isOpen: false,
  subContents: undefined,
  mainContents: undefined,
  contentsValue: {
    buyOrSell: "BUY",
    date: new Date(),
  },
  getContentsValue: (key: string) => {
    const contentsValue = get().contentsValue;
    return contentsValue[key];
  },
  setContentsValue: (key: string, value: any) => {
    const contentsValue = get().contentsValue;
    contentsValue[key] = value;
    set({ contentsValue });
  },
  backHandler: () => {
    set({
      subContents: undefined,
    });
  },
  getValue: (key: string) => {
    switch (key) {
      case "isOpen":
        return get().isOpen;
      case "mainContents":
        return get().mainContents;
      case "subContents":
        return get().subContents;
    }
  },
  setValue: (key: string, value: any) => {
    switch (key) {
      case "isOpen":
        set({ isOpen: value });
        return;
      case "mainContents":
        set({ mainContents: value });
        return;
      case "subContents":
        set({ subContents: value });
        return;
    }
  },
}));

export const useModal = () => useModalStore();

export const toggleOptions = [
  { value: "BUY", label: "BUY" },
  { value: "SELL", label: "SELL" },
];
