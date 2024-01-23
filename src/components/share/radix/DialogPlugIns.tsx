"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import { SingleDayPickerTypeModal } from "@/components/share/calendar/Calendar";

export function TypeChosenDividends() {
  return <Contents className={"min-h-auto mt-[10px] flex flex-col"}></Contents>;
}

export function TypeChosenBuyAt({
  dateState,
  setDateState,
  buyAtCloseHandler,
}: {
  dateState: Date;
  setDateState: any;
  buyAtCloseHandler: any;
}) {
  return (
    <Contents className={"min-h-auto mt-[10px] flex flex-col"}>
      <Row className={"mb-[20px] border-t border-t-lightGray"} />
      <SingleDayPickerTypeModal
        selected={dateState}
        selectedHandler={setDateState}
        hasInputOption={true}
        buyAtCloseHandler={buyAtCloseHandler}
      />
    </Contents>
  );
}
