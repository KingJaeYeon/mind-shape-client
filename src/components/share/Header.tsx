"use client";
import Contents from "@/components/layout/Contents";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Row from "@/components/layout/Row";
import { useConvenienceStore } from "@/store/convenienceStore";

export default function Header({ className }: { className?: string }) {
  const { setValue, getValue } = useConvenienceStore();

  return (
    <Contents
      className={cn(
        "font-maple flex h-[75px] justify-between border-b border-line bg-darkGray",
        className,
      )}
    >
      <Row>
        <button
          className={"cursor-pointer text-[40px] text-white"}
          onClick={() => setValue("hideNavBar", !getValue("hideNavBar"))}
        >
          사이드바
        </button>
        <Link href={"/"} className={"cursor-pointer text-[40px] text-white"}>
          HOME
        </Link>
      </Row>
      <Link
        href={"/account/signin"}
        className={"cursor-pointer text-[40px] text-white"}
      >
        로그인
      </Link>
    </Contents>
  );
}
