"use client";
import Text from "@/components/layout/Text";
import { ToggleGroupBaseSingle } from "@/components/share/radix/ToggleGroupBase";
import SelectBase from "@/components/share/radix/SelectBase";
import { useState } from "react";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  // ... 기타 옵션
};

export function ChartDuration({ options }: { options: any["duration"] }) {
  if (options.isFixedDuration) {
    return (
      <Text className={"text-[0.8rem] text-neutralGray"}>
        {options.options?.label}
      </Text>
    );
  }
  return (
    <SelectBase options={options.options} defaultValue={options.defaultValue} />
  );
}

export function ChartCardTitle({ title }: { title: string }) {
  return <Text className={"text-[20px] text-white"}>{title}</Text>;
}

export function TextToggleButton({ options }: { options?: any }) {
  const toggleGroupItemClasses =
    "border-b border-r border-t border-line px-[10px] text-[12px] text-white first:border-l hover:bg-black focus:outline-none data-[state=on]:bg-black data-[state=on]:text-orange";
  const [value, setValue] = useState(() => {
    return !options?.showToggleList ? null : options[0]?.value;
  });

  return (
    <ToggleGroupBaseSingle
      options={options?.options}
      className={toggleGroupItemClasses}
      value={value}
      setValue={setValue}
    />
  );
}
