"use client";
import * as Switch from "@radix-ui/react-switch";
import { useConvenienceStore } from "@/store/convenienceStore";
export default function SwitchBase({
  id,
  switchKey,
}: {
  id: string;
  switchKey: string;
}) {
  const { getValue, setValue } = useConvenienceStore();

  const rootStyle =
    "duration-400 shadow-switch bg-switchBg h-[25px] w-[42px] rounded-[999px] transition-all data-[state='checked']:bg-orange";
  const thumbStyle =
    "shadow-switchThumb block h-[21px] w-[21px] translate-x-[2px] rounded-[999px] bg-white transition-all duration-100 will-change-transform data-[state='checked']:translate-x-[19px]";

  return (
    <Switch.Root
      onCheckedChange={(checked) => setValue(switchKey, checked)}
      checked={getValue(switchKey)}
      className={rootStyle}
      id={id}
    >
      <Switch.Thumb className={thumbStyle} />
    </Switch.Root>
  );
}
