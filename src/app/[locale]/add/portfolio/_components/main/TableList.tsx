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
import { usePortfolio, usePortfolioStore } from "@/store/portfolioStore";
import { format } from "date-fns";
import { ShowOrHideAmount } from "@/components/share/button/ShowOrHideAmount";

export default function List() {
  const { t } = useTranslation("portfolio");
  const { data, getValue } = usePortfolio();
  return (
    <Contents className={"isolate flex w-full flex-col"}>
      <Table columns="minmax(80px, auto) minmax(90px, auto) minmax(110px, auto) minmax(110px, auto) minmax(60px, auto) minmax(100px, auto) minmax(180px, 160px) minmax(60px, auto)">
        <Table.Header>
          <Table.Th
            className={
              "z-4 sticky left-0 h-full items-center justify-start bg-bg"
            }
          >
            {t("ticker")}
          </Table.Th>
          <Table.Th>{t("current_price")}</Table.Th>
          <Table.Th>{t("assets_holdings")}</Table.Th>
          <Table.Th>{t("profit_loss")}</Table.Th>
          <Table.Th>{t("quantity")}</Table.Th>
          <Table.Th>{t("avg_buy_price")}</Table.Th>
          <Table.Th>{t("updated_at")}</Table.Th>
          <Table.Th>{t("edit")}</Table.Th>
        </Table.Header>
        <Table.Body
          data={data?.formattedData}
          render={(item: any) => {
            const dailyPrice = item?.dailyPrice;
            const quantity = item?.quantity;
            const avg_buy_price = item?.price / quantity;
            const symbol = item?.symbol;
            const price = (item?.dailyPrice * quantity).toLocaleString(
              undefined,
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              },
            );
            const profit_loss = (dailyPrice - avg_buy_price) * quantity;
            const profit_loss_percent =
              ((dailyPrice - avg_buy_price) / avg_buy_price) * 100;
            const updatedAt = format(item?.updatedAt, t("date_format"));
            const isPlus =
              profit_loss === 0 ? "black" : profit_loss > 0 ? "green" : "red";

            return (
              <TRow key={symbol} className={"cursor-pointer hover:bg-paleGray"}>
                <Table.Td
                  className={
                    "z-4 sticky left-0 h-full items-center justify-start bg-bg font-semibold"
                  }
                >
                  {symbol}
                </Table.Td>
                <Table.Td>{dailyPrice}</Table.Td>
                <Table.Td>
                  <ShowOrHideAmount text={price} />
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
                        ? profit_loss.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        : isPlus === "green"
                          ? `+ ${Math.abs(profit_loss).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              },
                            )}`
                          : `- ${Math.abs(profit_loss).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              },
                            )}`
                    }
                  />
                  <ShowOrHideAmount
                    text={`${Math.abs(profit_loss_percent).toFixed(2)} %`}
                    length={4}
                  />
                </Table.Td>
                <Table.Td>
                  <ShowOrHideAmount text={quantity} length={4} />
                </Table.Td>
                <Table.Td>
                  <ShowOrHideAmount text={avg_buy_price.toFixed(2)} />
                </Table.Td>
                <Table.Td>{updatedAt}</Table.Td>
                <Table.Td>
                  <Popovers
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
  const { setValue } = usePortfolioStore();
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
