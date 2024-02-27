"use client";
import * as Switch from "@radix-ui/react-switch";
import { useConvenience } from "@/store/convenienceStore";
export default function SwitchBase({
  id,
  switchKey,
}: {
  id: string;
  switchKey: string;
}) {
  const { getValue, setValue } = useConvenience();

  const rootStyle =
    "duration-400 bg-lightGray h-[25px] w-[42px] rounded-[999px] transition-all data-[state='checked']:bg-switchBg";
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
