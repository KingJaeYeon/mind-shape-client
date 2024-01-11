"use client";
import Row from "@/components/layout/Row";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@/assets";
import Contents from "@/components/layout/Contents";
import { useState } from "react";

export default function DropDown({
  className,
  value,
  setValue,
  chosen,
  placeholder,
}: {
  className?: string;
  value: string;
  setValue: any;
  chosen: { index: number; value: string };
  placeholder?: string;
}) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Row
      className={cn(
        "h-[45px] w-full items-center overflow-hidden rounded-[10px] border border-lightGray pl-[15px] pr-[50px]",
        className,
      )}
    >
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => {
          setIsFocus(false);
          setValue("");
        }}
        value={isFocus ? value : chosen.value}
        placeholder={placeholder}
        className={cn("w-full outline-none")}
        onChange={(e) => setValue(e.target.value)}
      />
      <Contents
        className={"absolute right-[50px] flex cursor-pointer flex-col"}
      >
        <IconChevronDown />
      </Contents>
    </Row>
  );
}
