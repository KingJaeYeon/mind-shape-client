"use client";
import Contents from "@/components/layout/Contents";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Row from "@/components/layout/Row";
import { useConvenienceStore } from "@/store/convenienceStore";
import { IconMenu } from "@/assets";

export function HeaderV1({ className }: { className?: string }) {
  const { setValue, getValue } = useConvenienceStore();

  return (
    <Contents
      className={cn(
        // "flex h-[75px] items-center justify-between bg-darkGray px-[20px] font-maple",
        "flex h-[75px] items-center justify-between border-b border-line bg-darkGray px-[20px] font-maple",
        className,
      )}
    >
      <Row className={"gap-[20px]"}>
        <button
          className={"cursor-pointer text-[40px] text-white"}
          onClick={() => setValue("hideNavBar", !getValue("hideNavBar"))}
        >
          <IconMenu className={"h-[40px] w-[40px] text-white"} />
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

export function Header({ className }: { className?: string }) {
  const { setValue, getValue } = useConvenienceStore();

  return (
    <Contents
      className={cn(
        // "flex h-[75px] items-center justify-between bg-darkGray px-[20px] font-maple",
        "absolute top-0 z-[2] flex h-[75px] w-full items-center justify-between border-b border-line bg-darkGray px-[20px] font-maple",
        className,
      )}
    >
      <Row className={"gap-[20px]"}>
        <button
          className={"cursor-pointer text-[40px] text-white"}
          onClick={() => setValue("hideNavBar", !getValue("hideNavBar"))}
        >
          <IconMenu className={"h-[40px] w-[40px] text-white"} />
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
