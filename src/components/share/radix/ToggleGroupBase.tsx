"use client";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import Text from "@/components/layout/Text";
import { useState } from "react";

export function ToggleGroupBaseSingle({
  options,
  className,
}: {
  options: { value: any; label: string }[];
  className?: string;
}) {
  const [value, setValue] = useState(options[0]?.value);
  return (
    <ToggleGroup.Root
      type="single"
      className={"flex"}
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      {options.map((option, index) => (
        <ToggleGroup.Item
          disabled={value === option?.value}
          key={option.value + "-" + index}
          className={className}
          value={option?.value}
        >
          <Text>{option?.label}</Text>
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}

export function ToggleGroupBase({
  options,
  className,
}: {
  options: { value: any; label: string }[];
  className?: string;
}) {
  const [value, setValue] = useState(options[0]?.value);
  return (
    <ToggleGroup.Root
      type="multiple"
      className={"flex"}
      value={value}
      onValueChange={(value) => {
        if (value) setValue(value);
      }}
    >
      {options.map((option, index) => (
        <ToggleGroup.Item
          disabled={value === option?.value}
          key={index}
          className={className}
          value={option?.value}
        >
          <Text>{option?.label}</Text>
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
