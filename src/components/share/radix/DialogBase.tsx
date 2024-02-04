"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useModalStore } from "@/store/modalStore";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
  setOpen?: any;
};
export const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function DialogBase({
  children,
  contents,
  isOpen,
  setIsOpen,
  className,
}: {
  children: React.ReactNode;
  contents: any;
  isOpen: boolean;
  setIsOpen: any;
  className?: string;
}) {
  const { getValue, setValue, closeHandler } = useModalStore();

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          if (confirm("정말 닫으시겠습니다?")) {
            setIsOpen(false);
          }
        } else {
          setIsOpen(open);
        }
      }}
    >
      <Dialog.Trigger
        asChild
        onClick={() => {
          setValue("mainContents", contents);
        }}
      >
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          data-state={isOpen ? "open" : "closed"}
          className={
            "fixed inset-0 z-[999] bg-dialogOverlay backdrop-blur-[4px] data-[state=open]:animate-overlayShow"
          }
        />
        <Dialog.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-[1000] min-h-[100dvh] w-full max-w-[100dvw] translate-x-[-50%] translate-y-[-50%] rounded-[0px] bg-modalBg p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] duration-150 focus:outline-none data-[state=open]:animate-contentShow sm:min-h-[auto] sm:max-w-[450px] sm:rounded-[16px]",
            className,
          )}
        >
          <DisPlayContents />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function DisPlayContents() {
  const { getValue } = useModalStore();

  if (!!getValue("subContents")) {
    return getValue("subContents");
  }
  return getValue("mainContents");
}
