"use client";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import Contents from "@/components/layout/Contents";
import DropDown from "@/components/share/input/DropDown";

import { useSearchAsset } from "@/hooks/useSearchAsset";
import Col from "@/components/layout/Col";
import Row from "@/components/layout/Row";
import LabeledInput from "@/components/share/input/LabeledInput";
import LabeledDisplay from "@/components/share/input/LabeledDisplay";

export function TypeAddPortfolio() {
  const [search, setSearch] = useState("");
  // TODO: 현재 가격도 db에서 가져와야함
  const [chosen, setChosen] = useState<{
    index: number;
    name: string;
    symbol: string;
    exChange: string;
    category: {
      name: string;
    };
  }>({
    index: 0,
    name: "",
    symbol: "",
    exChange: "",
    category: {
      name: "",
    },
  });

  const { debouncedValue } = useDebounce(search);
  const { searchResult, isLoad, initList } = useSearchAsset(debouncedValue);
  const [amount, setAmount] = useState<number | string>("");
  const [price, setPrice] = useState<number | string>("");

  function priceHandler(e: any) {
    if (e.target.value === "") {
      setPrice("");
    } else if (Number(e.target.value) < 0) {
      setPrice(0);
    } else {
      setPrice(Number(e.target.value));
    }
  }
  function amountHandler(e: any) {
    if (e.target.value === "") {
      setAmount("");
    } else if (Number(e.target.value) < 0) {
      setAmount(0);
    } else {
      setAmount(Number(e.target.value));
    }
  }
  return (
    <Contents className={"mt-[10px] flex h-[500px] flex-col"}>
      <DropDown
        setSearch={setSearch}
        search={search}
        isLoad={isLoad}
        list={search ? searchResult : initList}
        chosen={chosen}
        setChosen={setChosen}
        placeholder={"Search Ticker..."}
      />

      <Col className={"mt-[16px] font-Inter"}>
        <LabeledDisplay
          label={"국가"}
          id={"country"}
          displayText={chosen.exChange}
        />
      </Col>
      <Col className={"mt-[16px] font-Inter"}>
        <LabeledDisplay
          label={"분류"}
          id={"category"}
          displayText={chosen.category.name}
        />
      </Col>

      <Row className={"w-full gap-[10px] font-Inter"}>
        <Col className={"mt-[16px] flex-1"}>
          <LabeledInput
            type={"number"}
            value={amount}
            valueHandler={amountHandler}
            id={"amount"}
            label={"수량"}
            placeholder={"0.00"}
          />
        </Col>
        <Col className={"mt-[16px] flex-1"}>
          <LabeledInput
            type={"number"}
            value={price}
            valueHandler={priceHandler}
            id={"price"}
            label={"매수가 ($달러)"}
            placeholder={"0.00"}
          />
        </Col>
      </Row>
      <Col></Col>
    </Contents>
  );
}
