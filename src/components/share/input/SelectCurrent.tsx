import SelectBase from "@/components/share/radix/SelectBase";
import { useConvenienceStore } from "@/store/convenienceStore";
import Row from "@/components/layout/Row";
import { cn } from "@/lib/utils";

export function SelectCurrent() {
  const { getValue, setValue } = useConvenienceStore();
  return (
    <SelectBase
      triggerClassName={"w-auto"}
      contentClassName={"bg-white shadow-dropdown2"}
      selectClassName={
        "text-deepGray font-Inter data-[highlighted]:bg-primary-light data-[highlighted]:text-white"
      }
      options={[
        { value: "USD", label: "USD" },
        { value: "KRW", label: "KRW" },
      ]}
      defaultValue={{ value: "USD", label: "USD" }}
    />
  );
}
export function CurrentDisplayPrice({
  price,
  className,
}: {
  price: number;
  className?: string;
}) {
  const { getValue, setValue } = useConvenienceStore();
  return (
    <p className={cn("font-Inter", className)}>$ {price.toLocaleString()}</p>
  );
}
