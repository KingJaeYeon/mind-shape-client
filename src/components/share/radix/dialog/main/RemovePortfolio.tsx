import { MainModalHeader } from "@/components/share/radix/dialog/DialogHeader";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Button from "@/components/share/button/Button";
import { useDeleteTransaction } from "@/hooks/react-query/portfolio.query";
import { wait } from "@/components/share/radix/DialogBase";

export default function RemovePortfolio({
  index,
  setIsOpen,
}: {
  index: number;
  setIsOpen: any;
}) {
  const { t } = useTranslation("portfolio");
  const { mutate, isPending } = useDeleteTransaction({ setIsOpen });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        wait().then(() => setIsOpen(false));
      }}
    >
      <MainModalHeader title={t("transaction_remove")} setIsOpen={setIsOpen} />
      <div className={"mb-[32px] text-[14px] text-text-secondary"}>
        Are you sure you want to remove this transaction?
      </div>
      <Button
        disabled={isPending}
        type={"submit"}
        className={"my-[4px] w-full"}
        onClick={() => mutate({ index })}
      >
        {t("remove")}
      </Button>
      <Button
        secondary={true}
        className={"mt-[6px] w-full"}
        onClick={() => setIsOpen(false)}
      >
        {t("cancel")}
      </Button>
    </form>
  );
}
