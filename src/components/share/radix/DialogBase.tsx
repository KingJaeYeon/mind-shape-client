"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React, { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Row from "@/components/layout/Row";
import { ModalCloseTriggerButton } from "@/components/share/button/ModalTriggerButton";
import Button from "@/components/layout/Button";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
  setOpen?: any;
};
const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function DialogBase({
  children,
  title,
  contents,
  className,
  resetHandler,
}: {
  children: React.ReactNode;
  title?: string;
  contents: any;
  className?: string;
  resetHandler?: any;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open && !!resetHandler) {
      resetHandler();
    }
  }, [open]);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(open) => {
        if (!open) {
          if (confirm("정말 닫으시겠습니다?")) {
            setOpen(open);
          }
        } else {
          setOpen(open);
        }
      }}
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          data-state={open ? "open" : "closed"}
          className={
            "fixed inset-0 z-[999] bg-dialogOverlay backdrop-blur-[4px] data-[state=open]:animate-overlayShow"
          }
        />
        <ModalContainer setOpen={setOpen} className={className} title={title}>
          {contents}
        </ModalContainer>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const ModalContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, title, className, setOpen }, ref) => {
    return (
      <Dialog.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-[1000] min-h-[100dvh] w-full max-w-[100dvw] translate-x-[-50%] translate-y-[-50%] rounded-[0px] bg-modalBg p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow sm:min-h-[auto] sm:max-w-[450px] sm:rounded-[16px]",
          className,
        )}
      >
        <form
          onSubmit={(event) => {
            wait().then(() => setOpen(false));
            event.preventDefault();
          }}
        >
          <Row className={"py-[10px] text-modalTitle"}>
            <Row
              className={
                "flex-1 justify-center text-[24px] font-bold sm:justify-start"
              }
            >
              {title}
            </Row>
            <Button onClick={() => setOpen(false)}>
              <ModalCloseTriggerButton className={"h-[28px] w-[28px]"} />
            </Button>
          </Row>
          {children}
        </form>
      </Dialog.Content>
    );
  },
);

ModalContainer.displayName = "ModalContainer";
