"use client";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function DialogBase({
  children,
  contents,
  submitButton,
}: {
  children: React.ReactNode;
  contents: any;
  submitButton: any;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={
            "data-[state=open]:animate-overlayShow bg-dialogOverlay fixed inset-0 z-[999] backdrop-blur-[4px]"
          }
        />
        <Dialog.Content
          className={
            "data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[1000] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none"
          }
        >
          <form
            onSubmit={(event) => {
              wait().then(() => setOpen(false));
              event.preventDefault();
            }}
          >
            {contents}
            {submitButton}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
