"use client";
import Contents from "@/components/layout/Contents";
import PortfolioViewChart from "@/app/[locale]/add/portfolio/_components/PortfolioViewChart";
import Col from "@/components/layout/Col";
import { usePortfolio } from "@/hooks/react-query/portfolio.query";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Table, { TRow } from "@/components/share/Table";
import Text from "@/components/layout/Text";
import React from "react";
import { cn } from "@/lib/utils";

export default function PortfolioContents() {
  const { myList, isPending } = usePortfolio();
  const { t } = useTranslation("portfolio");
  if (isPending) {
    return null;
  }

  const list = myList?.reduce((acc: any, cur: any) => {
    acc[cur?.asset?.symbol] = {
      price: Number(acc[cur?.asset?.symbol]?.price ?? 0) + Number(cur?.price),
      amount:
        Number(acc[cur?.asset?.symbol]?.amount ?? 0) + Number(cur?.amount),
      symbol: cur?.asset?.symbol,
      exChange: cur?.asset?.exChange,
    };
    return acc;
  }, {});

  const array: any[] = Object.values(list).sort(
    (a: any, b: any) => b.price - a.price,
  );

  return (
    <Contents className={"flex w-full flex-col"}>
      <PortfolioViewChart />
      <Col className={"font-bold text-text"}>
        <Text className={"flex h-[75px] items-center text-[18px]"}>
          {t("assets")}
        </Text>
        <Contents
          className={"flex w-full max-w-full overflow-x-auto overflow-y-hidden"}
        >
          <List data={array} />
        </Contents>
      </Col>
    </Contents>
  );
}

function List({ data }: { data: any }) {
  const { t } = useTranslation("portfolio");
  return (
    <Contents className={"isolate flex w-full flex-col"}>
      <Table columns="minmax(115px, auto) minmax(80px, auto) minmax(80px, auto) minmax(80px, auto) minmax(80px, auto) minmax(80px, auto) minmax(80px, auto) minmax(80px, auto)">
        <Table.Header>
          <Th className={"z-4 sticky left-0 justify-start"}>{t("ticker")}</Th>
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
                  "z-4 sticky left-0 justify-start bg-white font-semibold"
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
              <Td>수정</Td>
            </TRow>
          )}
        />
      </Table>
    </Contents>
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
        "flex h-[48px] justify-end border-y border-border px-[10px] py-[11px] text-[12px]",
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
