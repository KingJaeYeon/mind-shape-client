"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import {
  Desktop,
  DesktopTypeTM,
  Mobile,
  TabletAndMobile,
} from "@/components/layout/responsive";
import HomeButtonTypeLogo from "@/components/share/button/HomeButtonTypeLogo";
import Button from "@/components/share/button/Button";
import Link from "next/link";
import { usePortfolioStore } from "@/store/portfolioStore";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import IconMenu from "../../assets/IconMenu";
import React from "react";
import HoverCardBase from "@/components/share/radix/HoverCardBase";
import Col from "@/components/layout/Col";

export default function Header() {
  const { t } = useTranslation("home");
  const { setValue } = usePortfolioStore();

  const addMenu = [
    {
      href: "/add/portfolio",
      onclick: () => setValue("data", "detailSymbol", null),
      text: t("add_portfolio"),
    },
    {
      href: "/add/forex",
      onclick: () => setValue("data", "detailSymbol", null),
      text: t("add_forex"),
    },
    {
      href: "/add/dividends",
      onclick: () => setValue("data", "detailSymbol", null),
      text: t("add_dividends"),
    },
    {
      href: "/add/realized",
      onclick: () => setValue("data", "detailSymbol", null),
      text: t("add_realized"),
    },
  ];

  return (
    <>
      <DesktopTypeTM>
        <Contents
          className={
            "z-[2] flex h-[70px] w-full items-center border-b-2 border-border bg-white px-[20px]"
          }
        >
          <Row className={"relative ml-[10px]"}>
            <HomeButtonTypeLogo />
          </Row>
          <Row className={"ml-[70px] gap-[30px] text-[16px] font-bold"}>
            <Link href={"/add/dividends"}>{t("dashboard")}</Link>
            <Link href={"/add/forex"}>{t("asset_view")}</Link>
            <HoverCardBase
              trigger={
                <Link href={addMenu[0].href} onClick={addMenu[0].onclick}>
                  {t("asset_add")}
                </Link>
              }
              contents={<HoverContentsDT options={addMenu} />}
            />
            <Link href={"/add/realized"}>{t("community")}</Link>
            <Link href={"/add/"}>{t("setting")}</Link>
          </Row>
          <Row className={"absolute right-[10px] gap-[10px]"}>
            <Button secondary={true} size={"sm"}>
              {t("sign_in")}
            </Button>
            <Button size={"sm"}>{t("sign_up")}</Button>
          </Row>
        </Contents>
      </DesktopTypeTM>

      <TabletAndMobile>
        <Contents
          className={
            "z-[2] flex h-[60px] w-full items-center border-b-2 border-border bg-white px-[16px]"
          }
        >
          <Row className={"relative ml-[10px]"}>
            <HomeButtonTypeLogo />
          </Row>
          <Row className={"absolute right-[16px] gap-[10px]"}>
            <IconMenu />
          </Row>
        </Contents>
      </TabletAndMobile>
    </>
  );
}
function HoverContentsDT({ options }: { options: any }) {
  return (
    <Col>
      {options.map((option: any, index: number) => (
        <Link
          href={option.href}
          onClick={option.onclick}
          key={option.href}
          className={
            "cursor-pointer rounded-[10px] px-[16px] py-[10px] hover:bg-weakGray"
          }
        >
          {option.text}
        </Link>
      ))}
    </Col>
  );
}
