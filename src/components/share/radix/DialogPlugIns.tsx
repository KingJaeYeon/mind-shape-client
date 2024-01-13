"use client";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import Contents from "@/components/layout/Contents";
import DropDown from "@/components/share/input/DropDown";

import { useSearchAsset } from "@/hooks/useSearchAsset";
import { Input, Label } from "@/components/layout/Input";
import Col from "@/components/layout/Col";
import Row from "@/components/layout/Row";
import { type } from "os";

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
        <Label
          className={"mb-[8px] ml-[5px] text-[14px] font-bold text-black"}
          id={"country"}
          text={"국가"}
        />

        <Row
          className={
            "min-h-[40px] items-center break-all rounded-[10px] border border-lightGray bg-paleGray px-[10px] text-[14px] font-bold"
          }
          id={"country"}
        >
          {chosen.exChange}
        </Row>
      </Col>
      <Col className={"mt-[16px] font-Inter"}>
        <Label
          className={"mb-[8px] ml-[5px] text-[14px] font-bold text-black"}
          id={"category"}
          text={"분류"}
        />
        <Row
          className={
            "min-h-[40px] items-center break-all rounded-[10px] border border-lightGray bg-paleGray px-[10px] text-[14px] font-bold"
          }
          id={"category"}
        >
          {chosen.category.name}
        </Row>
      </Col>

      <Row className={"w-full gap-[10px] font-Inter"}>
        <Col className={"mt-[16px] flex-1"}>
          <Label
            className={"mb-[8px] ml-[5px] text-[14px] font-bold text-black"}
            id={"amount"}
            text={"수량"}
          />
          <Input
            className={
              "min-h-[40px] break-all bg-transparent px-[10px] text-[14px]"
            }
            id={"amount"}
            placeholder={"0.00"}
            type={"number"}
            value={amount ?? ""}
            onChange={(e) => {
              if (e.target.value === "") {
                setAmount("");
              } else if (Number(e.target.value) < 0) {
                setAmount(0);
              } else {
                setAmount(Number(e.target.value));
              }
            }}
          />
        </Col>
        <Col className={"mt-[16px] flex-1"}>
          <Label
            className={"mb-[8px] ml-[5px] text-[14px] font-bold text-black"}
            id={"price"}
            text={"매수가($달러)"}
          />
          <Input
            className={
              "min-h-[40px] break-all bg-transparent px-[10px] text-[14px]"
            }
            id={"price"}
            placeholder={"0.00"}
            type={"number"}
            value={price ?? ""}
            onChange={(e) => {
              if (e.target.value === "") {
                setPrice("");
              } else if (Number(e.target.value) < 0) {
                setPrice(0);
              } else {
                setPrice(Number(e.target.value));
              }
            }}
          />
        </Col>
      </Row>
      <Col></Col>
    </Contents>
  );
}
