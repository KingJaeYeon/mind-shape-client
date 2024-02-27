"use client";

import {
  useAddPortfolio,
  useUpdateTransaction,
} from "@/hooks/react-query/portfolio.query";
import Contents from "@/components/layout/Contents";
import Col from "@/components/layout/Col";
import LabeledInput from "@/components/share/input/LabeledInput";
import Row from "@/components/layout/Row";
import LabeledDisplay from "@/components/share/input/LabeledDisplay";
import { format } from "date-fns";
import { CurrentDisplayPrice } from "@/components/share/input/SelectCurrent";
import TypeChosenBuyAt from "@/components/share/radix/dialog/sub/TypeChosenBuyAt";
import { wait } from "@/components/share/radix/DialogBase";
import { useModal } from "@/store/modalStore";
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
export default function TypeEditPortfolio({
  item,
  setIsOpen,
}: {
  item: any;
  setIsOpen: any;
}) {
  const { setValue, getContentsValue, setContentsValue } = useModal();
  const { mutate, isPending } = useUpdateTransaction({ setIsOpen });
  const { t } = useTranslation("portfolio");
  const { t: t2 } = useTranslation("category");

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
      setContentsValue("quantity", "");
    } else if (Number(e.target.value) < 0) {
      setContentsValue("quantity", 0);
    } else {
      setContentsValue("quantity", Number(e.target.value));
    }
  }

  function buyAtOpenHandler() {
    setValue("subContents", <TypeChosenBuyAt />);
  }

  const isSubmitDisable = !(
    typeof getContentsValue("quantity") === "number" &&
    getContentsValue("quantity") > 0 &&
    typeof getContentsValue("price") === "number" &&
    getContentsValue("price") > 0
  );

  async function submitHandler(e: any) {
    mutate({
      price: Number(getContentsValue("price")),
      quantity: Number(getContentsValue("quantity")),
      index: item.index,
      transactionDate: getContentsValue("date"),
    });
    e.preventDefault();
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        wait().then(() => setIsOpen(false));
      }}
    >
      <MainModalHeader title={t("transaction_edit")} setIsOpen={setIsOpen} />
      <Contents className={"min-h-auto flex flex-col"}>
        <Col
          className={"w-full gap-[5px] font-Inter sm:flex-row sm:gap-[10px]"}
        >
          <Col className={"mt-[16px] flex-1 sm:mt-[0px]"}>
            <LabeledInput
              type={"number"}
              value={getContentsValue("quantity")}
              valueHandler={amountHandler}
              id={"quantity"}
              label={t("quantity")}
              placeholder={"0.00"}
            />
          </Col>
          <Col className={"mt-[10px] flex-1 sm:mt-[0px]"}>
            <LabeledInput
              type={"number"}
              value={getContentsValue("price")}
              valueHandler={priceHandler}
              id={"price"}
              label={`${t("price_per_assets")} (USD)`}
              placeholder={"0.00"}
            />
          </Col>
        </Col>
        <Row className={"mt-[16px] w-full gap-[10px]"}>
          <LabeledDisplay
            id={"transactionDate"}
            displayText={format(
              getContentsValue("date"),
              t("date_time_format"),
            )}
            className={"px-[14px]"}
            onClickHandler={buyAtOpenHandler}
          />
          <LabeledDisplay
            id={"dividendsDay"}
            className={"flex-1 justify-center"}
            displayText={t2(item.category?.name)}
          />
        </Row>
        <Col
          className={
            "mt-[16px] gap-[5px] rounded-[10px] bg-weakGray px-[16px] pb-[5px] pt-[15px] text-gray"
          }
        >
          <p className={"text-[14px] text-text-secondary"}>
            {item?.transactionType === "BUY"
              ? t("total_use_price")
              : t("total_sell_price")}
          </p>
          <CurrentDisplayPrice
            price={
              Number(getContentsValue("quantity") ?? 0) *
              Number(getContentsValue("price") ?? 0)
            }
            className={"text-[28px] font-bold"}
          />
        </Col>
        <Button
          disabled={isSubmitDisable || isPending}
          onClick={submitHandler}
          className={"mt-[20px] border-2"}
        >
          {t("transaction_edit")}
        </Button>
      </Contents>
    </form>
  );
}
