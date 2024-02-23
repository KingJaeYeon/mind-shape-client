"use client";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Col from "@/components/layout/Col";
import Table, { TRow } from "@/components/share/Table";

import React, { useState } from "react";
import { format, parseISO } from "date-fns";
import { ShowOrHideAmount } from "@/components/share/button/ShowOrHideAmount";
import { Desktop, Mobile } from "@/components/layout/responsive";
import IconEdit from "../../../../../../assets/IconEdit";
import IconTrash from "@/assets/IconTrash";
import DialogBase from "@/components/share/radix/DialogBase";
import RemovePortfolio from "@/components/share/radix/dialog/main/RemovePortfolio";
import ButtonBase from "@/components/layout/ButtonBase";
import TypeEditPortfolio from "@/components/share/radix/dialog/main/TypeEditPortfolio";
import { useModalStore } from "@/store/modalStore";
import Button from "@/components/share/button/Button";
import { useDeleteTransaction } from "@/hooks/react-query/portfolio.query";

export default function Body({ data }: { data: any[] }) {
  const { t } = useTranslation("portfolio");

  return (
    <Col className={"w-full"}>
      <h3 className={"mb-[28px] mt-[8px] text-[20px] font-bold"}>
        {t("transactions")}
      </h3>
      <Table columns="repeat(auto-fit, minmax(100px, 1fr))">
        <Table.Header>
          <Table.Th
            className={"left-0 h-full items-center justify-start font-bold"}
          >
            {t("type")}
          </Table.Th>
          <Table.Th className={"font-bold"}>{t("total_price")}</Table.Th>
          <Table.Th className={"hidden font-bold sm:flex"}>
            {t("quantity")}
          </Table.Th>
          <Table.Th className={"hidden font-bold sm:flex"}>
            {t("asking_selling_price")}
          </Table.Th>
          <Table.Th className={"hidden font-bold sm:flex"}>
            {t("edit")}
          </Table.Th>
        </Table.Header>
        <Table.Body
          data={data}
          render={(item: any, index: number) => {
            return (
              <>
                <Desktop>
                  <DesktopRow item={item} t={t} key={`desktop_${index}`} />
                </Desktop>
                <Mobile>
                  <MobileRow item={item} t={t} key={`mobile_${index}`} />
                </Mobile>
              </>
            );
          }}
        />
      </Table>
    </Col>
  );
}

function MobileRow({ item, t }: { item: any; t: any }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const { setContentsValue } = useModalStore();
  const { mutate } = useDeleteTransaction({ setIsOpen });
  return (
    <DialogBase
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      contents={
        <>
          <TypeEditPortfolio setIsOpen={setIsOpen} item={item} />
          <Button
            secondary={true}
            disabled={isFetching}
            className={"mt-[6px] w-full"}
            onClick={() => {
              if (isFetching) return;
              setIsFetching(true);
              mutate({ index: item?.index });
              setIsFetching(false);
            }}
          >
            {t("remove")}
          </Button>
        </>
      }
      className={"sm:max-w-[496px]"}
    >
      <TRow
        className={"cursor-pointer hover:bg-paleGray"}
        onClick={() => {
          setContentsValue("quantity", item?.quantity);
          setContentsValue("price", item?.price);
          const formattedDate = parseISO(item?.transactionDate);
          setContentsValue("date", formattedDate);
        }}
      >
        <Table.Td className={"left-0 h-full flex-col justify-center"}>
          <div>{item?.transactionType}</div>
          <div className={"text-[12px] text-text-secondary"}>
            {format(item?.transactionDate, t("date_time_format"))}
          </div>
        </Table.Td>
        <Table.Td>
          <ShowOrHideAmount
            text={(item?.price * item?.quantity).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />
        </Table.Td>
      </TRow>
    </DialogBase>
  );
}

function DesktopRow({ item, t }: { item: any; t: any }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setContentsValue } = useModalStore();
  return (
    <TRow className={"cursor-pointer hover:bg-paleGray"}>
      <Table.Td className={"left-0 h-full flex-col justify-center"}>
        <div>{item?.transactionType}</div>
        <div className={"text-[12px] text-text-secondary"}>
          {format(item?.transactionDate, t("date_time_format"))}
        </div>
      </Table.Td>
      <Table.Td>
        <ShowOrHideAmount
          text={(item?.price * item?.quantity).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        />
      </Table.Td>
      <Table.Td className={"hidden sm:flex"}>
        <ShowOrHideAmount text={item?.quantity} />
      </Table.Td>
      <Table.Td>
        <ShowOrHideAmount
          className={"hidden sm:flex"}
          text={
            item?.price &&
            (item?.price).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
          }
        />
      </Table.Td>
      <Table.Td className={"hidden text-text-secondary sm:flex"}>
        <DialogBase
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          contents={<TypeEditPortfolio setIsOpen={setIsOpen} item={item} />}
          className={"sm:max-w-[496px]"}
        >
          <ButtonBase
            onClick={() => {
              setContentsValue("quantity", item?.quantity);
              setContentsValue("price", item?.price);
              const formattedDate = parseISO(item?.transactionDate);
              setContentsValue("date", formattedDate);
            }}
          >
            <IconEdit className={"mr-[16px] h-[16px] w-[16px]"} />
          </ButtonBase>
        </DialogBase>
        <DialogBase
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          contents={
            <RemovePortfolio index={item?.index} setIsOpen={setIsOpen} />
          }
          className={"sm:max-w-[496px]"}
        >
          <ButtonBase>
            <IconTrash className={"h-[16px] w-[16px]"} />
          </ButtonBase>
        </DialogBase>
      </Table.Td>
    </TRow>
  );
}
