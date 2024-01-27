import { create } from "zustand";

interface Props {
  isOpen: boolean;
  closeHandler: () => void;
  backHandler: () => void;
  isSubContentsOpen: boolean;
  subContents: any;
  mainContents: any;
  getValue: (key: string) => any;
  setValue: (key: string, value: any) => void;
}

export const useModalStore = create<Props>((set: any, get: any) => ({
  isOpen: false,
  isSubContentsOpen: false,
  subContents: undefined,
  mainContents: undefined,
  closeHandler: () => {
    set({
      isOpen: false,
      mainContents: undefined,
      subContents: undefined,
    });
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
      case "isSubContentsOpen":
        return get().isSubContentsOpen;
    }
  },
  setValue: (key: string, value: any) => {
    switch (key) {
      case "isOpen":
        set({ isOpen: value });
        return;
      case "mainTitle":
        set({ mainTitle: value });
        return;
      case "mainContents":
        set({ mainContents: value });
        return;
      case "subContents":
        set({ subContents: value });
        return;
      case "isSubContentsOpen":
        set({ isSubContentsOpen: value });
        return;
    }
  },
}));
