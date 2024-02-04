"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import {
  PriceView,
  ShowChartSwitch,
} from "@/app/[locale]/add/portfolio/_components";
import TypeAddPortfolio from "@/components/share/radix/dialog/main/TypeAddPortfolio";
import DialogBase from "@/components/share/radix/DialogBase";
import Button from "@/components/share/button/Button";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import { useState } from "react";

const data = {
  totalPriceCurrent: 1000000,
  totalPriceYesterday: 900000,
};
export default function PortfolioInterface() {
  const { t } = useTranslation("portfolio");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Contents className={"flex flex-col justify-between gap-[5px] md:flex-row"}>
      <PriceView />
      <Row className={"h-min items-center justify-between gap-[20px]"}>
        <ShowChartSwitch />
        <DialogBase
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          contents={<TypeAddPortfolio setIsOpen={setIsOpen} />}
          className={"px-[32px] pb-[32px] pt-[16px] sm:max-w-[496px]"}
        >
          <Button size={"sm"}>+ {t("add_transactions")}</Button>
        </DialogBase>
      </Row>
    </Contents>
  );
}