import { create } from "zustand";

interface Props {
  isOpen: boolean;
  closeHandler: () => void;
  isSubContentsOpen: boolean;
  subContents: string;
  getValue: (key: string) => any;
  setValue: (key: string, value: any) => void;
}

export const useModalStore = create<Props>((set: any, get: any) => ({
  isOpen: false,
  isSubContentsOpen: false,
  subContents: "",
  closeHandler: () => {
    set({ isOpen: false });
  },
  getValue: (key: string) => {
    switch (key) {
      case "isOpen":
        return get().isOpen;
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
      case "subContents":
        set({ subContents: value });
        return;
      case "isSubContentsOpen":
        set({ isSubContentsOpen: value });
        return;
    }
  },
}));
