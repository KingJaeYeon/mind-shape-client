import { Input, Label } from "@/components/layout/Input";
import { cn } from "@/lib/utils";
import Row from "@/components/layout/Row";

type LabeledInputProps = {
  id: string;
  label?: string;
  value: any;
  valueHandler: any;
  placeholder: string;
  type: string;
  secondary?: boolean;
  className?: string;
};
export default function LabeledInput({
  id,
  label,
  placeholder,
  value,
  valueHandler,
  type,
  secondary,
  className,
}: LabeledInputProps) {
  if (secondary) {
    return (
      <Row
        className={cn(
          "min-h-[40px] min-w-[82px] items-center justify-center overflow-hidden break-all rounded-[10px] text-[14px] font-bold text-inputValueText",
          !!valueHandler && "cursor-pointer",
        )}
      >
        <input
          value={value}
          placeholder={placeholder}
          onChange={(e) => valueHandler(e.target.value)}
          className={cn(
            "min-h-[40px] w-[82px] bg-inputReadOnly px-[20px] outline-none",
            className,
          )}
        />
      </Row>
    );
  }

  return (
    <>
      <Label
        className={
          "mb-[8px] ml-[5px] text-[14px] font-bold text-inputLabelText"
        }
        id={id}
        text={label}
        tabIndex={-1}
      />
      <Input
        className={
          "min-h-[40px] break-all bg-transparent px-[10px] text-[14px] focus:border-primary focus:shadow-input"
        }
        id={id}
        placeholder={placeholder}
        type={type}
        value={value ?? ""}
        tabIndex={-1}
        onChange={(e) => valueHandler(e)}
      />
    </>
  );
}
