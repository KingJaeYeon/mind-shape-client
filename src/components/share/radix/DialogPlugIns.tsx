"use client";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import Contents from "@/components/layout/Contents";
import DropDown, { DropDownView } from "@/components/share/DropDown";

import { useSearchAsset } from "@/hooks/useSearchAsset";

export function TypeAddPortfolio() {
  const [search, setSearch] = useState("");
  const [chosen, setChosen] = useState<{
    index: number;
    name: string;
    symbol: string;
  }>({
    index: 0,
    name: "",
    symbol: "",
  });
  const { debouncedValue } = useDebounce(search);
  const { searchResult, isLoad, initList } = useSearchAsset(debouncedValue);

  return (
    <Contents className={"mt-[10px] flex h-[500px] flex-col"}>
      <DropDown
        setSearch={setSearch}
        search={search}
        isLoad={isLoad}
        list={search ? searchResult : initList}
        chosen={chosen}
        setChosen={setChosen}
        placeholder={"Ticker..."}
      />
    </Contents>
  );
}
