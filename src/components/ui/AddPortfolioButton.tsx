import Button from "@/components/layout/Button";
import { cn } from "@/lib/utils";

export default function AddPortfolioButton({
  className,
}: {
  className?: string;
}) {
  return (
    <Button
      className={cn(
        "border-deepGray hover:border-gray rounded-[10px] border-2 px-[15px] py-[7px] text-white",
        className,
      )}
    >
      + 거래 추가
    </Button>
  );
}
