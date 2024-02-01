import { IconChevronLeft } from "@/assets";
import { usePortfolioStore } from "@/store/portfolioStore";

export default function BackButton() {
  const { setValue } = usePortfolioStore();
  return (
    <button
      onClick={() => setValue("symbol", undefined)}
      className={
        "flex items-center gap-[4px] text-[15px] font-semibold text-primary"
      }
    >
      <IconChevronLeft className={"h-[20px] w-[20px]"} />
      <p>Back</p>
    </button>
  );
}