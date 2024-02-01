"use client";
import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";

function Popovers({ trigger, contents }: { trigger: any; contents: any }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Portal>{contents}</Popover.Portal>
    </Popover.Root>
  );
}

export default Popovers;
