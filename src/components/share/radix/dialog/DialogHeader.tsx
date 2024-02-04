"use client";
import Row from "@/components/layout/Row";
import ButtonBase from "@/components/layout/ButtonBase";
import { ModalCloseTriggerButton } from "@/components/share/button/ModalTriggerButton";
import React from "react";
import { useModalStore } from "@/store/modalStore";
import { IconChevronLeft } from "@/assets";

export function MainModalHeader({
  title,
  setIsOpen,
}: {
  title?: string;
  setIsOpen: any;
}) {
  return (
    <Row className={"py-[10px] text-modalTitle"}>
      <h3
        className={
          "flex-1 justify-center text-[24px] font-bold sm:justify-start"
        }
      >
        {title}
      </h3>
      <ButtonBase
        tabIndex={-1}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(false);
        }}
      >
        <ModalCloseTriggerButton className={"h-[28px] w-[28px]"} />
      </ButtonBase>
    </Row>
  );
}

export function SubModalHeader({ title }: { title?: string }) {
  const { backHandler } = useModalStore();
  return (
    <Row
      className={"ml-[-8px] items-center gap-[8px] py-[10px] text-modalTitle"}
    >
      <ButtonBase
        tabIndex={-1}
        onClick={(e) => {
          e.preventDefault();
          backHandler();
        }}
      >
        <IconChevronLeft className={"h-[28px] w-[28px]"} />
      </ButtonBase>
      <Row
        className={
          "flex-1 justify-center text-[24px] font-bold sm:justify-start"
        }
      >
        {title}
      </Row>
    </Row>
  );
}
