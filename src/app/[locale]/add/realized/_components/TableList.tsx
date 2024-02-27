"use client";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Contents from "@/components/layout/Contents";
import Table, { TRow } from "@/components/share/Table";
import Popovers from "@/components/share/radix/Popovers";
import { IconMore } from "@/assets";
import React from "react";
import { cn } from "@/lib/utils";
import { IconFile } from "@/assets/IconFile";
import ButtonBase from "@/components/layout/ButtonBase";
import { usePortfolio } from "@/store/portfolioStore";
import { format } from "date-fns";
import { ShowOrHideAmount } from "@/components/share/button/ShowOrHideAmount";
import { usePortfolioData } from "@/hooks/react-query/portfolio.query";

export default function List() {
  const { t } = useTranslation("portfolio");
  const {
    data: { realizedData },
  } = usePortfolio();
  const { portfolio, error, closePriceData, isPending } = usePortfolioData();

  if (isPending) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>network error...</div>;
  }
  if (!portfolio || !closePriceData) {
    return <div>no data...</div>;
  }

  return (
    <Contents className={"isolate flex w-full flex-col"}>
      <Table columns="minmax(200px, auto) minmax(80px, auto) minmax(60px, auto) minmax(110px, auto) minmax(100px, auto) minmax(100px, auto) minmax(60px, auto)">
        <Table.Header>
          <Table.Th
            className={
              "z-4 sticky left-0 h-full items-center justify-start bg-bg"
            }
          >
            {t("selling_day")}
          </Table.Th>
          <Table.Th>{t("ticker")}</Table.Th>
          <Table.Th>{t("sales_volume")}</Table.Th>
          <Table.Th>{t("asking _price")}</Table.Th>
          <Table.Th>{t("profit_and_loss_amount")}</Table.Th>
          <Table.Th>{t("selling_price")}</Table.Th>
          <Table.Th>{t("edit")}</Table.Th>
        </Table.Header>
        <Table.Body
          data={realizedData?.realized}
          render={(item: any, i: number) => {
            const sellingDay = format(item.sellingDay, t("date_time_format"));
            const symbol = item.symbol;
            const quantity = item.sellingQuantity;
            const askingPrice =
              item.preSaleTotalPrice / item.preSaleTotalQuantity;
            const sellingPrice = item.sellingPrice;
            const profitLossAmount = item.plPrice;

            const isPlus =
              profitLossAmount === 0
                ? "black"
                : profitLossAmount > 0
                  ? "green"
                  : "red";

            return (
              <TRow key={i} className={"cursor-pointer hover:bg-paleGray"}>
                <Table.Td
                  className={
                    "z-4 sticky left-0 h-full items-center justify-start bg-bg font-semibold"
                  }
                >
                  {sellingDay}
                </Table.Td>
                <Table.Td>{symbol}</Table.Td>
                <Table.Td>
                  <ShowOrHideAmount text={quantity} length={4} />
                </Table.Td>
                <Table.Td>
                  <ShowOrHideAmount
                    text={askingPrice.toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    })}
                    length={4}
                  />
                </Table.Td>
                <Table.Td
                  className={cn(
                    "flex-col items-end",
                    isPlus === "red" && "text-red",
                    isPlus === "green" && "text-primary",
                  )}
                >
                  <ShowOrHideAmount
                    text={
                      isPlus === "black"
                        ? profitLossAmount.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        : isPlus === "green"
                          ? `+ ${Math.abs(profitLossAmount).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              },
                            )}`
                          : `- ${Math.abs(profitLossAmount).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              },
                            )}`
                    }
                  />
                </Table.Td>
                <Table.Td>
                  <ShowOrHideAmount text={sellingPrice} />
                </Table.Td>
                <Table.Td>
                  <Popovers
                    align={"end"}
                    side={"bottom"}
                    trigger={
                      <button>
                        <IconMore />
                      </button>
                    }
                    contents={<PopoverContent symbol={symbol} />}
                  />
                </Table.Td>
              </TRow>
            );
          }}
        />
      </Table>
    </Contents>
  );
}

function PopoverContent({ symbol }: { symbol: string }) {
  const { setValue } = usePortfolio();
  return (
    <ButtonBase
      onClick={() => {
        setValue("data", "detailSymbol", symbol);
      }}
      className={
        "w-[170px] cursor-pointer items-center rounded-[4px] px-[8px] py-[12px] text-[14px] hover:bg-weakGray"
      }
    >
      <IconFile className={"mr-[8px] h-[18px] w-[18px] text-[#808A9D]"} />
      View transactions
    </ButtonBase>
  );
}
