import Row from "@/components/layout/Row";
import {
  ShowOrHideAmount,
  ShowOrHideTrigger,
} from "@/components/share/button/ShowOrHideAmount";
import Col from "@/components/layout/Col";
import CardBox from "@/components/share/CardBox";
import React from "react";
import { usePortfolio } from "@/store/portfolioStore";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";

export default function Header() {
  const amount = 2140;
  const {
    data: { realizedData },
  } = usePortfolio();
  const { t } = useTranslation("portfolio");
  if (!realizedData) return null;

  const assetIds: any = Object?.keys(realizedData?.total);
  const realizedLength: any = realizedData?.realized?.length;
  const length = Math.max(realizedLength ?? 0, assetIds?.length ?? 0);

  const result = Array.from({ length }, (_, i) => i).reduce(
    (acc, cur, i) => {
      if (i < realizedLength) {
        acc["profitLossAmount"] += realizedData["realized"][i].plPrice;
      }
      if (i < assetIds.length) {
        acc["totalHoldings"] += realizedData["total"][assetIds[i]].totalPrice;
      }
      return acc;
    },
    { totalHoldings: 0, profitLossAmount: 0 },
  );
  return (
    <>
      <Row
        className={"items-center justify-between gap-[8px] sm:justify-start"}
      >
        <ShowOrHideAmount
          text={`$${(
            result.totalHoldings + result.profitLossAmount
          ).toLocaleString(undefined, {
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
          <p className={"font-medium text-text-secondary"}>{t("principal")}</p>
          <h3 className={"mt-[4px] text-[25px] font-semibold text-black"}>
            <ShowOrHideAmount
              text={`$${result.totalHoldings.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`}
            />
          </h3>
        </CardBox>
        <CardBox>
          <p className={"font-medium text-text-secondary"}>
            {t("profit_and_loss_amount")}
          </p>
          <h3 className={"mt-[4px] text-[25px] font-semibold text-black"}>
            <ShowOrHideAmount
              text={`$${result.profitLossAmount.toLocaleString(undefined, {
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
