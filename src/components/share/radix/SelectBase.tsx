"use client";
import * as Select from "@radix-ui/react-select";
import React, { forwardRef } from "react";
import { IconChevronDown } from "@/assets";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  value: string;
} & React.ComponentPropsWithoutRef<"div">;

export default function SelectBase({
  selectIcon = <IconChevronDown className={"text-neutralGray"} />,
  triggerClassName,
  contentClassName,
  selectClassName,
  options,
  defaultValue,
}: {
  selectIcon?: any;
  triggerClassName?: string;
  contentClassName?: string;
  selectClassName?: string;
  options: { value: any; label: string }[];
  defaultValue: { value: any; label: string };
}) {
  const [value, setValue] = React.useState(defaultValue?.value);
  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger
        className={cn(
          "flex w-full max-w-[100px] items-center text-[0.8rem] text-neutralGray outline-none",
          triggerClassName,
        )}
      >
        <Select.Value aria-label={value}>
          {options.map((option, index) => {
            return option.value === value && option.label;
          })}
        </Select.Value>
        <Select.Icon>{selectIcon}</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={cn(
            "z-[1002] flex w-full max-w-[100px] justify-center rounded-[10px] bg-darkGray text-white shadow-dark",
            contentClassName,
          )}
        >
          <Select.Viewport className="p-[5px]">
            {options?.map((option, index) => (
              <SelectItem
                key={option.value + index}
                value={option.value}
                className={selectClassName}
              >
                {option.label}
              </SelectItem>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        ref={forwardedRef}
        {...props}
        className={cn(
          "relative flex h-[40px] select-none items-center justify-center rounded-[5px] pl-[10px] pr-[10px] font-maple text-[16px] data-[disabled]:pointer-events-none data-[highlighted]:bg-deepGray data-[disabled]:text-weakGray data-[highlighted]:text-orange data-[highlighted]:outline-none",
          className,
        )}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  },
);
SelectItem.displayName = "SelectItem";
