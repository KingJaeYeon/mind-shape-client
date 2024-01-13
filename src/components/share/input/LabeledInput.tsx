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
          "mb-[8px] ml-[5px] text-[14px] font-bold text-inputLabelText"
        }
        id={id}
        text={label}
      />
      <Input
        className={
          "focus:border-primary min-h-[40px] break-all bg-transparent px-[10px] text-[14px] focus:shadow-input"
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
