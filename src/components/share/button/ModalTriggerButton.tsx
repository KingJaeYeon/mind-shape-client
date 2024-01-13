"use client";
import { IconModalClose, IconModalTrigger } from "@/assets";
import { cn } from "@/lib/utils";

export function ModalTriggerButtonTypeChart({ isShow }: { isShow?: boolean }) {
  if (!isShow) {
    return null;
  }
  return <IconModalTrigger className={"text-iconColor cursor-pointer"} />;
}

export function ModalCloseTriggerButton({ className }: { className?: string }) {
  return <IconModalClose className={cn("cursor-pointer", className)} />;
}
