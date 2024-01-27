"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import { SingleDayPickerTypeModal } from "@/components/share/calendar/Calendar";
import { SubModalHeader } from "@/components/share/radix/dialog/DialogHeader";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import { wait } from "@/components/share/radix/DialogBase";
import { useModalStore } from "@/store/modalStore";

export default function TypeChosenBuyAt() {
  const { t } = useTranslation("portfolio");
  const { getContentsValue, setContentsValue } = useModalStore();
  function selectHandler(value: string) {
    setContentsValue("date", value);
  }
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <SubModalHeader title={t("modal_calendar")} />
      <Contents className={"min-h-auto mt-[10px] flex flex-col"}>
        <Row className={"mb-[20px] border-t border-t-lightGray"} />
        <SingleDayPickerTypeModal
          selected={getContentsValue("date")}
          selectedHandler={selectHandler}
          hasInputOption={true}
        />
      </Contents>
    </form>
  );
}
