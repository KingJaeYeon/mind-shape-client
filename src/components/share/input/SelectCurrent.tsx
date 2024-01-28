import SelectBase from "@/components/share/radix/SelectBase";
import { cn } from "@/lib/utils";

export function SelectCurrent() {
  return (
    <SelectBase
      triggerClassName={"w-auto"}
      contentClassName={"bg-white shadow-dropdown"}
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
  return (
    <p className={cn("font-Inter", className)}>$ {price?.toLocaleString()}</p>
  );
}
