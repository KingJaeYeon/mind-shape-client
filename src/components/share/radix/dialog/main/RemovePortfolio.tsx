import { MainModalHeader } from "@/components/share/radix/dialog/DialogHeader";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import Button from "@/components/share/button/Button";
import { useModalStore } from "@/store/modalStore";
import { useDeleteTransaction } from "@/hooks/react-query/portfolio.query";

export default function RemovePortfolio({ index }: { index: number }) {
  const { t } = useTranslation("portfolio");
  const { closeHandler } = useModalStore();
  const { mutate, isPending } = useDeleteTransaction();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <MainModalHeader title={t("remove_transactions")} />
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
        onClick={closeHandler}
      >
        {t("cancel")}
      </Button>
    </form>
  );
}
