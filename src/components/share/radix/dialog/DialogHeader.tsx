"use client";
import Row from "@/components/layout/Row";
import Button from "@/components/layout/Button";
import { ModalCloseTriggerButton } from "@/components/share/button/ModalTriggerButton";
import React from "react";
import { useModalStore } from "@/store/modalStore";

export function MainModalHeader({ title }: { title?: string }) {
  const { setValue } = useModalStore();
  return (
    <Row className={"py-[10px] text-modalTitle"}>
      <h3
        className={
          "flex-1 justify-center text-[24px] font-bold sm:justify-start"
        }
      >
        {title}
      </h3>
      <Button
        tabIndex={-1}
        onClick={(e) => {
          e.preventDefault();
          setValue("isOpen", false);
        }}
      >
        <ModalCloseTriggerButton className={"h-[28px] w-[28px]"} />
      </Button>
    </Row>
  );
}

export function SubModalHeader({ title }: { title?: string }) {
  const { setValue } = useModalStore();
  return (
    <Row className={"py-[10px] text-modalTitle"}>
      <Row
        className={
          "flex-1 justify-center text-[24px] font-bold sm:justify-start"
        }
      >
        {title}
      </Row>
      <Button
        tabIndex={-1}
        onClick={(e) => {
          e.preventDefault();
          setValue("isOpen", false);
        }}
      >
        <ModalCloseTriggerButton className={"h-[28px] w-[28px]"} />
      </Button>
    </Row>
  );
}
