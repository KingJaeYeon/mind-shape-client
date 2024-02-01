"use client";
import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import ButtonBase from "@/components/layout/ButtonBase";
import { IconFile } from "@/assets/IconFile";

function Popovers({ trigger, contents }: { trigger: any; contents: any }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side={"bottom"}
          align={"end"}
          className="shadow-popover rounded-[10px] bg-white p-[8px]"
          sideOffset={5}
        >
          {" "}
          {contents}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Popovers;
