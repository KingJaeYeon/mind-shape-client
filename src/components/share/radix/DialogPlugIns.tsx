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
import Button from "@/components/layout/Button";
import { ToggleGroupBaseSingle } from "@/components/share/radix/ToggleGroupBase";
import SelectBase from "@/components/share/radix/SelectBase";
import {
  CurrentDisplayPrice,
  SelectCurrent,
} from "@/components/share/input/SelectCurrent";

export function TypeAddPortfolio({
  buyAyStep,
  setBuyAyStep,
}: {
  buyAyStep: boolean;
  setBuyAyStep: any;
}) {
  const [search, setSearch] = useState("");
  // TODO: 현재 가격도 db에서 가져와야함
  const [chosen, setChosen] = useState<{
    index: number;
    name: string;
    symbol: string;
    category: {
      index: number;
      name: string;
    };
  }>({
    index: 0,
    name: "",
    symbol: "",
    category: {
      index: 0,
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
  function buyAtHandler() {
    setBuyAyStep(true);
  }

  const isSubmitDisable = !(
    typeof amount === "number" &&
    amount > 0 &&
    typeof price === "number" &&
    price > 0 &&
    !!chosen?.name
  );
  function submitHandler(e: any) {
    console.log("수량::", amount);
    console.log("가격::", price);
    console.log("티커::", chosen.symbol);
    console.log("주식::", chosen.name);
    console.log("index::", chosen.index);
    e.preventDefault();
  }
  if (buyAyStep) {
    return <TypeChosenBuyAt />;
  }

  return (
    <Contents className={"min-h-auto mt-[10px] flex flex-col"}>
      <DropDown
        setSearch={setSearch}
        search={search}
        isLoad={isLoad}
        list={search ? searchResult : initList}
        chosen={chosen}
        setChosen={setChosen}
        placeholder={"Search Ticker..."}
      />

      <Col className={"w-full gap-[5px] font-Inter sm:flex-row sm:gap-[10px]"}>
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
            label={"매수가 (USD)"}
            placeholder={"0.00"}
          />
        </Col>
      </Col>
      <Row className={"mt-[16px] w-full gap-[10px]"}>
        <LabeledDisplay
          id={"buyAt"}
          displayText={"2024년 01월 14일"}
          className={"px-[14px]"}
          onClickHandler={buyAtHandler}
        />
        <LabeledDisplay
          id={"dividendsDay"}
          className={"flex-1 justify-center"}
          displayText={!!chosen.category.name ? chosen.category.name : "분류"}
        />
      </Row>
      <Col
        className={
          "mt-[16px] gap-[5px] rounded-[10px] bg-weakGray px-[16px] pb-[5px] pt-[15px] text-gray"
        }
      >
        <Row className={"items-center justify-between"}>
          <Row className={"text-[14px]"}>사용된 총액</Row>
          <SelectCurrent />
        </Row>
        <Row className={"font-Inter text-[28px] font-bold"}>
          $ {(Number(amount) * Number(price)).toLocaleString()}
        </Row>
        <CurrentDisplayPrice
          price={Number(amount) * Number(price)}
          className={"text-[28px] font-bold"}
        />
      </Col>
      <Button
        disabled={isSubmitDisable}
        onClick={(e) => submitHandler(e)}
        className={
          "disabled:bg-primary-disable mt-[20px] flex min-h-[45px] items-center justify-center rounded-[10px] border bg-primary font-Inter text-white hover:bg-primary-light"
        }
      >
        거래 추가
      </Button>
    </Contents>
  );
}

export function TypeChosenDividends() {
  return <Contents className={"min-h-auto mt-[10px] flex flex-col"}></Contents>;
}

export function TypeChosenBuyAt() {
  return <Contents className={"min-h-auto mt-[10px] flex flex-col"}></Contents>;
}
