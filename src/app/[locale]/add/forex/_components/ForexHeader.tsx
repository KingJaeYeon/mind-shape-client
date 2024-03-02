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
import { useModal } from "@/store/modalStore";

export default function ForexHeader() {
  const { t } = useTranslation("portfolio");
  const [isOpen, setIsOpen] = useState(false);

  const { setContentsValue } = useModal();
  return (
    <Contents className={"flex flex-col justify-between gap-[5px] md:flex-row"}>
      <PriceView />
      <DialogBase
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        contents={<TypeAddPortfolio setIsOpen={setIsOpen} />}
        className={"sm:max-w-[496px]"}
      >
        <Button
          size={"sm"}
          onClick={() => {
            setContentsValue("quantity", undefined);
            setContentsValue("price", undefined);
            setContentsValue("date", new Date());
          }}
        >
          + {t("transaction_add")}
        </Button>
      </DialogBase>
    </Contents>
  );
}
