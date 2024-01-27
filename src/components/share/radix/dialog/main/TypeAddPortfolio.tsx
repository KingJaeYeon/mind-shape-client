"use client";

import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { useSearchAsset } from "@/hooks/useSearchAsset";
import { useAddPortfolio } from "@/hooks/react-query/portfolio.query";
import Contents from "@/components/layout/Contents";
import DropDown from "@/components/share/input/DropDown";
import Col from "@/components/layout/Col";
import LabeledInput from "@/components/share/input/LabeledInput";
import Row from "@/components/layout/Row";
import LabeledDisplay from "@/components/share/input/LabeledDisplay";
import { format } from "date-fns";
import { CurrentDisplayPrice } from "@/components/share/input/SelectCurrent";
import TypeChosenBuyAt from "@/components/share/radix/dialog/sub/TypeChosenBuyAt";
import { wait } from "@/components/share/radix/DialogBase";
import { useModalStore } from "@/store/modalStore";
import { MainModalHeader } from "@/components/share/radix/dialog/DialogHeader";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Button from "@/components/share/button/Button";

type Chosen = {
  index: number;
  name: string;
  symbol: string;
  category: {
    index: number;
    name: string;
  };
};
export default function TypeAddPortfolio() {
  const { setValue, getContentsValue, setContentsValue } = useModalStore();
  const { debouncedValue } = useDebounce(getContentsValue("search"));
  const { searchResult, isLoad, initList } = useSearchAsset(debouncedValue);
  const { savePortfolio, isPending, data } = useAddPortfolio();
  const { t } = useTranslation("portfolio");

  function priceHandler(e: any) {
    if (e.target.value === "") {
      setContentsValue("price", "");
    } else if (Number(e.target.value) < 0) {
      setContentsValue("price", 0);
    } else {
      setContentsValue("price", Number(e.target.value));
    }
  }

  function amountHandler(e: any) {
    if (e.target.value === "") {
      setContentsValue("amount", "");
    } else if (Number(e.target.value) < 0) {
      setContentsValue("amount", 0);
    } else {
      setContentsValue("amount", Number(e.target.value));
    }
  }

  function buyAtOpenHandler() {
    setValue("subContents", <TypeChosenBuyAt />);
  }

  const isSubmitDisable = !(
    typeof getContentsValue("amount") === "number" &&
    getContentsValue("amount") > 0 &&
    typeof getContentsValue("price") === "number" &&
    getContentsValue("price") > 0 &&
    !!getContentsValue("chosen")?.name
  );

  async function submitHandler(e: any) {
    savePortfolio({
      price: Number(getContentsValue("price")),
      amount: Number(getContentsValue("amount")),
      categoryId: getContentsValue("chosen")?.category?.index,
      assetId: getContentsValue("chosen")?.index,
      buyAt: getContentsValue("date"),
    });
    e.preventDefault();
  }

  function searchHandler(value: string) {
    setContentsValue("search", value);
  }

  function chosenHandler(value: string) {
    setContentsValue("chosen", value);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        wait().then(() => setValue("isOpen", false));
      }}
    >
      <MainModalHeader title={t("modal_add_portfolio")} />
      <Contents className={"min-h-auto mt-[10px] flex flex-col"}>
        <DropDown
          setSearch={searchHandler}
          search={getContentsValue("search")}
          isLoad={isLoad}
          list={getContentsValue("search") ? searchResult : initList}
          chosen={getContentsValue("chosen")}
          setChosen={chosenHandler}
          placeholder={"Search Ticker..."}
        />

        <Col
          className={"w-full gap-[5px] font-Inter sm:flex-row sm:gap-[10px]"}
        >
          <Col className={"mt-[16px] flex-1"}>
            <LabeledInput
              type={"number"}
              value={getContentsValue("amount")}
              valueHandler={amountHandler}
              id={"amount"}
              label={t("amount")}
              placeholder={"0.00"}
            />
          </Col>
          <Col className={"mt-[16px] flex-1"}>
            <LabeledInput
              type={"number"}
              value={getContentsValue("price")}
              valueHandler={priceHandler}
              id={"price"}
              label={`${t("buy_price")} (USD)`}
              placeholder={"0.00"}
            />
          </Col>
        </Col>
        <Row className={"mt-[16px] w-full gap-[10px]"}>
          <LabeledDisplay
            id={"buyAt"}
            displayText={format(getContentsValue("date"), t("date_format"))}
            className={"px-[14px]"}
            onClickHandler={buyAtOpenHandler}
          />
          <LabeledDisplay
            id={"dividendsDay"}
            className={"flex-1 justify-center"}
            displayText={
              !!getContentsValue("chosen")?.category?.name
                ? getContentsValue("chosen")?.category?.name
                : t("asset_type")
            }
          />
        </Row>
        <Col
          className={
            "mt-[16px] gap-[5px] rounded-[10px] bg-weakGray px-[16px] pb-[5px] pt-[15px] text-gray"
          }
        >
          <p className={"text-text-secondary text-[14px]"}>사용된 총액</p>
          <CurrentDisplayPrice
            price={
              Number(getContentsValue("amount") ?? 0) *
              Number(getContentsValue("price") ?? 0)
            }
            className={"text-[28px] font-bold"}
          />
        </Col>
        <Button
          disabled={isSubmitDisable || isPending}
          onClick={submitHandler}
          className={"mt-[20px] border-2 text-[16px]"}
        >
          {t("modal_add_portfolio")}
        </Button>
      </Contents>
    </form>
  );
}
