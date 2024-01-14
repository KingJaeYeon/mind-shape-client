"use client";
import { Label } from "@/components/layout/Input";
import Row from "@/components/layout/Row";
import { cn } from "@/lib/utils";

type LabeledDisplayProps = {
  id: string;
  label?: string;
  displayText: any;
  className?: string;
};

export default function LabeledDisplay({
  id,
  label,
  displayText,
  className,
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
        className={cn(
          "min-h-[40px] items-center break-all rounded-[10px] bg-inputReadOnly px-[10px] text-[14px] font-bold text-inputValueText",
          className,
        )}
        id={id}
      >
        {displayText}
      </Row>
    </>
  );
}
