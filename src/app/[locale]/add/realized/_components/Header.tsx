import Row from "@/components/layout/Row";
import {
  ShowOrHideAmount,
  ShowOrHideTrigger,
} from "@/components/share/button/ShowOrHideAmount";
import Col from "@/components/layout/Col";
import CardBox from "@/components/share/CardBox";
import React from "react";

export default function Header() {
  const amount = 2140;
  return (
    <>
      <Row
        className={"items-center justify-between gap-[8px] sm:justify-start"}
      >
        <ShowOrHideAmount
          text={`$${amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`}
          className={"text-[32px] font-semibold text-text"}
        />
        <ShowOrHideTrigger className={"h-[20px] w-[24px]"} />
      </Row>
      <Col
        className={"mt-[24px] w-full text-[12px] sm:flex-row sm:items-center"}
      >
        <CardBox>
          <p className={"font-medium text-text-secondary"}>{"원금"}</p>
          <h3 className={"mt-[4px] text-[25px] font-semibold text-black"}>
            <ShowOrHideAmount
              text={`$${amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
            />
          </h3>
        </CardBox>
        <CardBox>
          <p className={"font-medium text-text-secondary"}>{"손익금액"}</p>
          <h3 className={"mt-[4px] text-[25px] font-semibold text-black"}>
            <ShowOrHideAmount
              text={`$${amount.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
            />
          </h3>
        </CardBox>
      </Col>
    </>
  );
}
