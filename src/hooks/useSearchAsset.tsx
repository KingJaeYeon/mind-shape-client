"use client";
import { useEffect, useState } from "react";
import { recommendAsset, searchAsset } from "@/service/asset-service";

export function useSearchAsset(search: string) {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [initList, setInitList] = useState<any[]>([]);
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

  useEffect(() => {
    recommendAsset().then((res) => setInitList([...res]));
  }, []);

  return { searchResult, isLoad, initList };
}
