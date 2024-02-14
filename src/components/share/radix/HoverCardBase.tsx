"use client";
import React, { useState } from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";

export default function HoverCardBase({
  trigger,
  contents,
}: {
  trigger: any;
  contents: any;
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <HoverCard.Root
      openDelay={0}
      open={open}
      onOpenChange={(open) => setOpen(open)}
    >
      <HoverCard.Trigger asChild className={cn(open && "text-primary-light")}>
        {trigger}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="mt-[15px] border-line bg-white p-[16px] shadow-chart transition-all"
          sideOffset={5}
          align={"start"}
        >
          {contents}
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
