import { Label } from "@/components/layout/Input";
import Row from "@/components/layout/Row";

type LabeledDisplayProps = {
  id: string;
  label: string;
  displayText: any;
};

export default function LabeledDisplay({
  id,
  label,
  displayText,
}: LabeledDisplayProps) {
  return (
    <>
      <Label
        className={
          "text-inputLabelText mb-[8px] ml-[5px] text-[14px] font-bold"
        }
        id={id}
        text={label}
      />
      <Row
        className={
          "text-inputValueText bg-inputReadOnly min-h-[40px] items-center break-all rounded-[10px] border border-lightGray px-[10px] text-[14px]"
        }
        id={id}
      >
        {displayText}
      </Row>
    </>
  );
}
