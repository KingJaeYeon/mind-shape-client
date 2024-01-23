import {create} from "zustand";


interface TextStoreState {
    lang: string,
    dictionaries: {},
    setLang: (lang: string) => void,

}

export const useTextStore = create<TextStoreState>((set: any, get: any) => ({
    lang: 'en',
}))