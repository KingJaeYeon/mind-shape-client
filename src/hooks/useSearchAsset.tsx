"use client";
import { useEffect, useState } from "react";
import { searchAsset } from "@/service/stockService";

export function useSearchAsset(search: string) {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    if (!search) {
      return;
    }
    setIsLoad(true);
    searchAsset(search)
      .then((res) => {
        setSearchResult([...res]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setTimeout(() => setIsLoad(false), 500));
  }, [search]);

  return { searchResult, isLoad };
}
