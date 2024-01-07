import { IconModalTrigger } from "@/assets";

export default function ModalTriggerButton({ isShow }: { isShow?: boolean }) {
  if (!isShow) {
    return null;
  }
  return <IconModalTrigger className={"cursor-pointer text-white"} />;
}
