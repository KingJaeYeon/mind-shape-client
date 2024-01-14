import { Label } from "@/components/layout/Input";
import Row from "@/components/layout/Row";

type LabeledDisplayProps = {
  id: string;
  label?: string;
  displayText: any;
};

export default function LabeledDisplay({
  id,
  label,
  displayText,
}: LabeledDisplayProps) {
  return (
    <>
      {!!label && (
        <Label
          className={
            "mb-[8px] ml-[5px] text-[14px] font-bold text-inputLabelText"
          }
          id={id}
          text={label}
        />
      )}
      <Row
        className={
          "min-h-[40px] items-center break-all rounded-[10px] bg-inputReadOnly px-[10px] text-[14px] font-bold text-inputValueText"
        }
        id={id}
      >
        {displayText}
      </Row>
    </>
  );
}
