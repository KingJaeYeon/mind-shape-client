"use client";
import { useConvenienceStore } from "@/store/convenienceStore";
import { useEffect } from "react";
import Contents from "@/components/layout/Contents";
import { IconEye, IconEyeOff } from "@/assets";
import { cn } from "@/lib/utils";

export function ShowOrHideAmount({
  text,
  length = 10,
}: {
  text: string;
  length?: number;
}) {
  const { getValue, setValue } = useConvenienceStore();

  useEffect(() => {
    const showAmount = Boolean(localStorage.getItem("showAmount")) || true;
    setValue("isShowAmount", showAmount);
  }, []);

  if (getValue("isShowAmount")) {
    return (
      <Contents className={"flex items-center break-all"}>{text}</Contents>
    );
  }
  return (
    <Contents className={"flex items-center break-all"}>
      {Array.from(Array(length), () => "*")}
    </Contents>
  );
}

export function ShowOrHideTrigger({ className }: { className?: string }) {
  const { getValue, setValue } = useConvenienceStore();

  return (
    <Contents
      className={"flex h-full items-center"}
      onClick={() => {
        setValue("isShowAmount", !getValue("isShowAmount"));
      }}
    >
      {getValue("isShowAmount") ? (
        <IconEyeOff className={cn("cursor-pointer text-weakGray", className)} />
      ) : (
        <IconEye className={cn("cursor-pointer text-white", className)} />
      )}
    </Contents>
  );
}
