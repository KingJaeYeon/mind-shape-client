import { Input, Label } from "@/components/layout/Input";

type LabeledInputProps = {
  id: string;
  label: string;
  value: any;
  valueHandler: any;
  placeholder: string;
  type: string;
};
export default function LabeledInput({
  id,
  label,
  placeholder,
  value,
  valueHandler,
  type,
}: LabeledInputProps) {
  return (
    <>
      <Label
        className={
          "text-inputLabelText mb-[8px] ml-[5px] text-[14px] font-bold"
        }
        id={id}
        text={label}
      />
      <Input
        className={
          "focus:shadow-input focus:border-inputFocusBorder min-h-[40px] break-all bg-transparent px-[10px] text-[14px]"
        }
        id={id}
        placeholder={placeholder}
        type={type}
        value={value ?? ""}
        onChange={(e) => valueHandler(e)}
      />
    </>
  );
}
