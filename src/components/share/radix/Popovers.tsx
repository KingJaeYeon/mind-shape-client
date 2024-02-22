"use client";
import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import "./popovers.css";
function Popovers({
  trigger,
  contents,
  side,
  align,
}: {
  trigger: any;
  contents: any;
  side: "top" | "right" | "bottom" | "left" | undefined;
  align: "center" | "end" | "start" | undefined;
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side={side}
          align={align}
          className="rounded-[10px] bg-white p-[8px] shadow-popover"
          sideOffset={5}
        >
          {contents}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Popovers;
