import { IconChevronLeft } from "@/assets";
import { usePortfolio } from "@/store/portfolioStore";

export default function BackButton() {
  const { setValue } = usePortfolio();
  return (
    <button
      onClick={() => setValue("data", "detailSymbol", null)}
      className={
        "flex items-center gap-[4px] text-[15px] font-semibold text-primary"
      }
    >
      <IconChevronLeft className={"h-[20px] w-[20px]"} />
      <p>Back</p>
    </button>
  );
}
