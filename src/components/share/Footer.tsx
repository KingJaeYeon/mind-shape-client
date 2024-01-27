import Contents from "@/components/layout/Contents";

export default function Footer({ locale }: { locale: string }) {
  return (
    <Contents
      className={
        "bottom-0 flex h-[30px] w-full items-center justify-center bg-orange text-white"
      }
    >
      Footer
    </Contents>
  );
}
