"use client";
import { useConvenienceStore } from "@/store/convenienceStore";
import { useEffect } from "react";
import Contents from "@/components/layout/Contents";
import { IconEye, IconEyeOff } from "@/assets";
import { cn } from "@/lib/utils";
import Text from "@/components/layout/Text";

export function ShowOrHideAmount({
  text,
  length = 10,
  className,
}: {
  text: string;
  length?: number;
  className?: string;
}) {
  const { getValue, setValue } = useConvenienceStore();

  useEffect(() => {
    const showAmount = localStorage.getItem("showAmount");
    let isShowAmount;
    isShowAmount = showAmount !== "false";
    setValue("isShowAmount", isShowAmount);
  }, [setValue]);

  if (getValue("isShowAmount")) {
    return (
      <Contents className={cn("flex items-center break-all", className)}>
        <Text>{text}</Text>
      </Contents>
    );
  }
  return (
    <Contents className={cn("flex items-center break-all", className)}>
      <Text>{Array.from(Array(length), () => "*")}</Text>
    </Contents>
  );
}

export function ShowOrHideTrigger({ className }: { className?: string }) {
  const { getValue, setValue } = useConvenienceStore();

  return (
    <Contents
      className={"flex h-full items-center"}
      onClick={() => {
        const value = !getValue("isShowAmount");
        setValue("isShowAmount", value);
        localStorage.setItem("showAmount", String(value));
      }}
    >
      {getValue("isShowAmount") ? (
        <IconEye className={cn("cursor-pointer text-gray", className)} />
      ) : (
        <IconEyeOff className={cn("cursor-pointer text-gray", className)} />
      )}
    </Contents>
  );
}
