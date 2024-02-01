"use client";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Contents from "@/components/layout/Contents";
import Table, { TRow } from "@/components/share/Table";
import Popovers from "@/components/share/radix/Popovers";
import { IconMore } from "@/assets";
import * as Popover from "@radix-ui/react-popover";
import Col from "@/components/layout/Col";
import React from "react";
import Text from "@/components/layout/Text";
import { cn } from "@/lib/utils";
import { IconFile } from "@/assets/IconFile";
import Row from "@/components/layout/Row";

export default function List({ data }: { data: any }) {
  const { t } = useTranslation("portfolio");
  return (
    <Contents className={"isolate flex w-full flex-col"}>
      <Table columns="minmax(115px, auto) minmax(80px, auto) minmax(80px, auto) minmax(100px, auto) minmax(80px, auto) minmax(120px, auto) minmax(80px, auto) minmax(80px, auto)">
        <Table.Header>
          <Th
            className={
              "z-4 sticky left-0 h-full items-center justify-start bg-bg"
            }
          >
            {t("ticker")}
          </Th>
          <Th>{t("price")}</Th>
          <Th>{t("assets_holdings")}</Th>
          <Th>{t("profit_loss")}</Th>
          <Th>{t("amount")}</Th>
          <Th>{t("avg_buy_price")}</Th>
          <Th>{t("country")}</Th>
          <Th>{t("edit")}</Th>
        </Table.Header>
        <Table.Body
          data={data}
          render={(item: any) => (
            <TRow
              key={item?.symbol}
              className={"cursor-pointer hover:bg-paleGray"}
            >
              <Td
                className={
                  "z-4 sticky left-0 h-full items-center justify-start bg-bg font-semibold"
                }
              >
                {item?.symbol}
              </Td>
              <Td>현재 주가</Td>
              <Td>{item?.price.toLocaleString()}</Td>
              <Td>이익/손실</Td>
              <Td>{item?.amount}</Td>
              <Td>
                {(item?.price / item?.amount).toFixed(2).toLocaleString()}
              </Td>
              <Td>{item?.exChange}</Td>
              <Td>
                <Popovers
                  trigger={
                    <button>
                      <IconMore />
                    </button>
                  }
                  contents={<PopoverContent />}
                />
              </Td>
            </TRow>
          )}
        />
      </Table>
    </Contents>
  );
}
function PopoverContent() {
  return (
    <Popover.Content
      side={"bottom"}
      align={"end"}
      className="shadow-popover rounded-[10px] bg-white p-[8px]"
      sideOffset={5}
    >
      <Row
        className={
          "w-[170px] cursor-pointer items-center rounded-[4px] px-[8px] py-[12px] text-[14px] hover:bg-weakGray"
        }
      >
        <IconFile className={"mr-[8px] h-[18px] w-[18px] text-[#808A9D]"} />
        View transactions
      </Row>
    </Popover.Content>
  );
}

function Th({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Text
      className={cn(
        "flex h-[48px] items-center justify-end border-y border-border px-[10px] py-[11px] text-[12px]",
        className,
      )}
    >
      {children}
    </Text>
  );
}

function Td({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Text
      className={cn(
        "flex justify-end px-[10px] text-[14px] font-medium",
        className,
      )}
    >
      {children}
    </Text>
  );
}
