"use client";
import Contents from "@/components/layout/Contents";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Row from "@/components/layout/Row";
import { useConvenienceStore } from "@/store/convenienceStore";
import { IconMenu } from "@/assets";
import { Desktop, Mobile } from "@/components/layout/responsive";
export function Header({ className }: { className?: string }) {
  return (
    <>
      <Desktop>
        <Contents
          className={cn(
            // "flex h-[75px] items-center justify-between bg-darkGray px-[20px] font-maple",
            "z-[2] flex h-[70px] w-full items-center border-b border-line bg-white px-[20px]",
            className,
          )}
        >
          <Row className={"relative ml-[10px] gap-[20px]"}>
            <Link href={"/"} className={"flex text-black"}>
              <img alt={"img"} className={"h-[30px] w-[30px]"} />
              <p>HOME</p>
            </Link>
          </Row>
          <Row className={"ml-[70px] gap-[30px] text-[14px]"}>
            <p>대시보드</p>
            <p>주식조회</p>
            <p>주식등록</p>
            <p>커뮤니티</p>
            <p>세팅</p>
          </Row>
          <Row className={"absolute right-[10px] gap-[10px]"}>
            <button
              className={
                "flex h-[32px] cursor-pointer items-center justify-center rounded-[8px] border border-primary px-[16px] text-[12px] font-bold text-primary outline-none"
              }
            >
              로그인
            </button>
            <button
              className={
                "flex h-[32px] cursor-pointer items-center justify-center rounded-[8px] border border-primary bg-primary px-[16px] text-[12px] font-bold text-white outline-none"
              }
            >
              회원가입
            </button>
          </Row>
        </Contents>
      </Desktop>
      <Mobile>
        <Contents
          className={cn(
            // "flex h-[75px] items-center justify-between bg-darkGray px-[20px] font-maple",
            "z-[2] flex h-[75px] w-full items-center border-b border-line bg-white px-[20px]",
            className,
          )}
        >
          <Row className={"relative ml-[10px] gap-[20px]"}>
            <Link href={"/"} className={"flex text-black"}>
              <img alt={"img"} className={"h-[30px] w-[30px]"} />
              <p>HOME</p>
            </Link>
          </Row>
          <Row className={"ml-[70px] gap-[30px]"}>
            <p>대시보드</p>
            <p>주식조회</p>
            <p>주식등록</p>
            <p>커뮤니티</p>
            <p>세팅</p>
          </Row>
          <Row className={"absolute right-[10px] gap-[10px]"}>
            <button
              className={
                "flex h-[32px] cursor-pointer items-center justify-center rounded-[8px] border border-primary px-[16px] text-[12px] font-bold text-primary outline-none"
              }
            >
              로그인
            </button>
            <button
              className={
                "flex h-[32px] cursor-pointer items-center justify-center rounded-[8px] border border-primary bg-primary px-[16px] text-[12px] font-bold text-white outline-none"
              }
            >
              회원가입
            </button>
          </Row>
        </Contents>
      </Mobile>
    </>
  );
}
