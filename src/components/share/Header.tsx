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

export default function Header() {
  const { t } = useTranslation("home");
  const { setValue } = usePortfolioStore();
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
          <Row className={"ml-[70px] gap-[30px] text-[14px]"}>
            <Link href={"/add/dividends"}>{t("dashboard")}</Link>
            <Link href={"/add/forex"}>{t("asset_view")}</Link>
            <Link
              href={"/add/portfolio"}
              onClick={() => setValue("data", "detailSymbol", null)}
            >
              {t("asset_add")}
            </Link>
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
