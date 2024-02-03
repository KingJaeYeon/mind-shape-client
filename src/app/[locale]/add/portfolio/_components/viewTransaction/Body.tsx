"use client";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Col from "@/components/layout/Col";
import Table, { TRow } from "@/components/share/Table";

import React from "react";
import Text from "@/components/layout/Text";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ShowOrHideAmount } from "@/components/share/button/ShowOrHideAmount";
import { Desktop, Mobile } from "@/components/layout/responsive";
import IconEdit from "../../../../../../assets/IconEdit";
import IconTrash from "@/assets/IconTrash";
import DialogBase from "@/components/share/radix/DialogBase";
import RemovePortfolio from "@/components/share/radix/dialog/main/RemovePortfolio";
import ButtonBase from "@/components/layout/ButtonBase";

export default function Body({ data }: { data: any[] }) {
  const { t } = useTranslation("portfolio");

  return (
    <Col className={"w-full"}>
      <h3 className={"mb-[28px] mt-[8px] text-[20px] font-bold"}>
        {t("transactions")}
      </h3>
      <Table columns="repeat(auto-fit, minmax(100px, 1fr))">
        <Table.Header>
          <Th className={"left-0 h-full items-center justify-start"}>
            {t("type")}
          </Th>
          <Th className={"hidden sm:flex"}>{t("price")}</Th>
          <Th className={"hidden sm:flex"}>{t("quantity")}</Th>
          <Th>{t("total_price")}</Th>
          <Th className={"hidden sm:flex"}>{t("edit")}</Th>
        </Table.Header>
        <Table.Body
          data={data}
          render={(item: any, index: number) => {
            return (
              <>
                <DesktopRow
                  item={item}
                  t={t}
                  key={`desktop_${item?.transactionDate}_${index}_${item?.symbol}`}
                />
                <MobileRow
                  item={item}
                  t={t}
                  key={`mobile_${item?.transactionDate}_${index}_${item?.symbol}`}
                />
              </>
            );
          }}
        />
      </Table>
    </Col>
  );
}

function MobileRow({ item, t }: { item: any; t: any }) {
  return (
    <Mobile>
      <TRow key={item?.symbol} className={"cursor-pointer hover:bg-paleGray"}>
        <Td className={"left-0 h-full flex-col justify-center"}>
          <div>{item?.transactionType}</div>
          <div className={"text-[12px] text-text-secondary"}>
            {format(item?.transactionDate, t("date_format"))}
          </div>
        </Td>
        <Td>
          <ShowOrHideAmount
            text={item?.price && item?.price.toLocaleString()}
          />
        </Td>
      </TRow>
    </Mobile>
  );
}

function DesktopRow({ item, t }: { item: any; t: any }) {
  return (
    <Desktop>
      <TRow key={item?.symbol} className={"cursor-pointer hover:bg-paleGray"}>
        <Td className={"left-0 h-full flex-col justify-center"}>
          <div>{item?.transactionType}</div>
          <div className={"text-[12px] text-text-secondary"}>
            {format(item?.transactionDate, t("date_format"))}
          </div>
        </Td>
        <Td className={"hidden sm:flex"}>
          <ShowOrHideAmount
            text={(item?.price / item?.amount).toFixed(2).toLocaleString()}
          />
        </Td>
        <Td className={"hidden sm:flex"}>
          <ShowOrHideAmount text={item?.amount} />
        </Td>
        <Td>
          <ShowOrHideAmount
            text={item?.price && item?.price.toLocaleString()}
          />
        </Td>
        <Td className={"hidden text-text-secondary sm:flex"}>
          <IconEdit className={"mr-[16px] h-[16px] w-[16px]"} />
          <DialogBase
            contents={<RemovePortfolio index={item?.index} />}
            className={"px-[32px] pb-[32px] pt-[16px] sm:max-w-[496px]"}
          >
            <ButtonBase>
              <IconTrash className={"h-[16px] w-[16px]"} />
            </ButtonBase>
          </DialogBase>
        </Td>
      </TRow>
    </Desktop>
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
    <div
      className={cn(
        "flex justify-end px-[10px] text-[14px] font-medium",
        className,
      )}
    >
      {children}
    </div>
  );
}
