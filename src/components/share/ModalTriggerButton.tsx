"use client";
import { IconModalTrigger } from "@/assets";

export function ModalTriggerButtonTypeChart({ isShow }: { isShow?: boolean }) {
  if (!isShow) {
    return null;
  }
  return <IconModalTrigger className={"cursor-pointer text-white"} />;
}
