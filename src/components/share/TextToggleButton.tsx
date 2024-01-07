"use client";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ToggleListProps } from "@/constant/chart";
import Text from "@/components/layout/Text";
import { useState } from "react";

export function TextToggleButton({ options }: { options?: ToggleListProps }) {
  const toggleGroupItemClasses =
    "border-b border-r border-t border-line px-[10px] text-[12px] text-white first:border-l hover:bg-black focus:outline-none data-[state=on]:bg-black data-[state=on]:text-orange";

  const [value, setValue] = useState(options?.options[0]?.value);

  if (!options?.showToggleList) {
    return null;
  }

  return (
    <ToggleGroup.Root
      type="single"
      className={"flex"}
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      {options?.options.map((option, index) => (
        <ToggleGroup.Item
          disabled={value === option?.value}
          key={index}
          className={toggleGroupItemClasses}
          value={option?.value}
        >
          <Text>{option?.label}</Text>
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
