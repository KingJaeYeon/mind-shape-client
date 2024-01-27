import { create } from "zustand";

interface Props {
  isOpen: boolean;
  subContents: any;
  mainContents: any;
  closeHandler: () => void;
  backHandler: () => void;
  getValue: (key: string) => any;
  setValue: (key: string, value: any) => void;
}

export const useModalStore = create<Props>((set: any, get: any) => ({
  isOpen: false,
  subContents: undefined,
  mainContents: undefined,
  config: {},
  closeHandler: () => {
    set({
      isOpen: false,
      mainContents: undefined,
      subContents: undefined,
    });
  },
  backHandler: () => {
    set({
      isContentsClose: true,
    });
  },

  getValue: (key: string) => {
    switch (key) {
      case "isOpen":
        return get().isOpen;
      case "mainContents":
        return get().mainContents;
      case "isContentsClose":
        return get().isContentsClose;
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
      case "isContentsClose":
        set({ isContentsClose: value });
        return;
    }
  },
}));
