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
            "shadow-dark flex w-full max-w-[100px] justify-center rounded-[10px] bg-darkGray text-white",
            contentClassName,
          )}
        >
          <Select.Viewport className="p-[5px]">
            {options?.map((option, index) => (
              <SelectItem
                key={"label"}
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

export const SelectDemo = () => (
  <Select.Root>
    <Select.Trigger
      className="text-violet11 hover:bg-mauve3 data-[placeholder]:text-violet9 inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      aria-label="Food"
    >
      <Select.Value placeholder="Select a fruit…" />
      <Select.Icon className="text-violet11">dd</Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.ScrollUpButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
          dd
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px]">
          <Select.Group>
            <Select.Label className="text-mauve11 px-[25px] text-xs leading-[25px]">
              Fruits
            </Select.Label>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </Select.Group>

          <Select.Separator className="bg-violet6 m-[5px] h-[1px]" />

          <Select.Group>
            <Select.Label className="text-mauve11 px-[25px] text-xs leading-[25px]">
              Vegetables
            </Select.Label>
            <SelectItem value="aubergine">Aubergine</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="carrot" aria-disabled={true}>
              Carrot
            </SelectItem>
            <SelectItem value="courgette">Courgette</SelectItem>
            <SelectItem value="leek">Leek</SelectItem>
          </Select.Group>

          <Select.Separator className="bg-violet6 m-[5px] h-[1px]" />

          <Select.Group>
            <Select.Label className="text-mauve11 px-[25px] text-xs leading-[25px]">
              Meat
            </Select.Label>
            <SelectItem value="beef">Beef</SelectItem>
            <SelectItem value="chicken">Chicken</SelectItem>
            <SelectItem value="lamb">Lamb</SelectItem>
            <SelectItem value="pork">Pork</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
          dd
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
