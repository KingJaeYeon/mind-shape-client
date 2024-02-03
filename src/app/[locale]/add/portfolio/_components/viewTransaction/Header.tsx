import Col from "@/components/layout/Col";
import Row from "@/components/layout/Row";
import {
  ShowOrHideAmount,
  ShowOrHideTrigger,
} from "@/components/share/button/ShowOrHideAmount";
import React from "react";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";

export default function Header({
  symbol,
  name,
  totalPrice,
  totalAmount,
}: {
  symbol: string;
  name: string;
  totalPrice: number;
  totalAmount: number;
}) {
  const avgPrice = totalPrice / totalAmount;
  const { t } = useTranslation("portfolio");
  return (
    <Col className={"w-full pb-[24px] pt-[28px]"}>
      <h3 className={"text-text-secondary"}>{`${name} (${symbol})`}</h3>
      <Row
        className={"items-center justify-between gap-[8px] sm:justify-start"}
      >
        <ShowOrHideAmount
          text={`₩ ${totalPrice?.toLocaleString()}`}
          className={"text-[32px] font-semibold text-text"}
        />
        <ShowOrHideTrigger className={"h-[20px] w-[24px]"} />
      </Row>
      <Col
        className={"mt-[24px] w-full text-[12px] sm:flex-row sm:items-center"}
      >
        <CardBox>
          <p className={"font-medium text-text-secondary"}>{t("quantity")}</p>
          <h3 className={"mt-[4px] text-[25px] font-bold text-black"}>
            <ShowOrHideAmount text={`${totalAmount} ${symbol}`} />
          </h3>
        </CardBox>
        <CardBox>
          <p className={"font-medium text-text-secondary"}>
            {t("avg_buy_price")}
          </p>
          <h3 className={"mt-[4px] text-[25px] font-bold text-black"}>
            <ShowOrHideAmount text={`₩ ${avgPrice.toFixed(2)}`} />
          </h3>
        </CardBox>
        <CardBox>
          <p className={"font-medium text-text-secondary"}>
            {t("total_holdings")}
          </p>
          <h3 className={"mt-[4px] text-[25px] font-bold text-black"}>
            <ShowOrHideAmount text={`₩ ${totalPrice}`} />
          </h3>
        </CardBox>
      </Col>
    </Col>
  );
}

function CardBox({ children }: { children: React.ReactNode }) {
  return (
    <Row
      className={
        "mb-[12px] h-[108px] items-center justify-between rounded-[12px] px-[24px] py-[16px] shadow-chart sm:mr-[24px] sm:h-auto sm:flex-col sm:items-start"
      }
    >
      {children}
    </Row>
  );
}
