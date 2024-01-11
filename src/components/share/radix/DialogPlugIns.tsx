"use client";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import Contents from "@/components/layout/Contents";
import DropDown from "@/components/share/DropDown";

export function TypeAddPortfolio() {
  const [ticker, setTicker] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);
  const [chosen, setChosen] = useState<{ index: number; value: string }>({
    index: 0,
    value: "",
  });
  const debouncedValue = useDebounce(ticker);

  useEffect(() => {
    console.log(debouncedValue);
    setSearchResult([]);
  }, [debouncedValue]);

  return (
    <Contents className={"mt-[10px] flex flex-col"}>
      <DropDown
        setValue={setTicker}
        value={ticker}
        chosen={chosen}
        placeholder={"Ticker..."}
      />
    </Contents>
  );
}
