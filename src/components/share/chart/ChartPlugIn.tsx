"use client";
import { ChartData } from "chart.js";
import BubbleChart from "@/components/share/chart/BubbleChart";
import Text from "@/components/layout/Text";
import { ChartOption, ToggleListProps } from "@/constant/chart";
import { ToggleGroupBaseSingle } from "@/components/share/radix/ToggleGroupBase";
import Contents from "@/components/layout/Contents";
import SelectBase from "@/components/share/radix/SelectBase";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  // ... 기타 옵션
};

export function ChartDuration({
  options,
}: {
  options: ChartOption["duration"];
}) {
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

export function ChartBase({
  value,
  chartType,
}: {
  value: ChartData<any>;
  chartType: string;
}) {
  switch (chartType) {
    case "bubble":
      return <BubbleChart data={value} options={options} />;
  }
}

export function ChartCardTitle({ title }: { title: string }) {
  return <Text className={"text-[20px] text-white"}>{title}</Text>;
}

export function TextToggleButton({ options }: { options?: ToggleListProps }) {
  const toggleGroupItemClasses =
    "border-b border-r border-t border-line px-[10px] text-[12px] text-white first:border-l hover:bg-black focus:outline-none data-[state=on]:bg-black data-[state=on]:text-orange";

  if (!options?.showToggleList) {
    return null;
  }

  return (
    <ToggleGroupBaseSingle
      options={options.options}
      className={toggleGroupItemClasses}
    />
  );
}
