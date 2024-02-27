"use client";
import { useConvenience } from "@/store/convenienceStore";
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
  const { getValue, setValue } = useConvenience();

  useEffect(() => {
    const showQuantity = localStorage.getItem("showQuantity");
    let isShowText;
    isShowText = showQuantity !== "false";
    setValue("isShowText", isShowText);
  }, [setValue]);

  if (getValue("isShowText")) {
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
  const { getValue, setValue } = useConvenience();

  return (
    <Contents
      className={"flex h-full items-center"}
      onClick={() => {
        const value = !getValue("isShowText");
        setValue("isShowText", value);
        localStorage.setItem("showQuantity", String(value));
      }}
    >
      {getValue("isShowText") ? (
        <IconEye className={cn("cursor-pointer text-gray", className)} />
      ) : (
        <IconEyeOff className={cn("cursor-pointer text-gray", className)} />
      )}
    </Contents>
  );
}
