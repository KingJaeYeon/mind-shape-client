"use client";
import { useEffect, useState } from "react";
import { searchAsset } from "@/service/stockService";

export function useSearchAsset(search: string) {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    if (!search) {
      setIsLoad(true);
      setSearchResult([]);
      return;
    }
    setIsLoad(true);
    searchAsset(search)
      .then((res) => {
        setSearchResult([...res]);
      })
      .finally(() => setIsLoad(false));
  }, [search]);

  return { searchResult, isLoad };
}
