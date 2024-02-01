"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import { Desktop, Mobile } from "@/components/layout/responsive";
import HomeButtonTypeLogo from "@/components/share/button/HomeButtonTypeLogo";
import Button from "@/components/share/button/Button";
import Link from "next/link";
import { usePortfolioStore } from "@/store/portfolioStore";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";

export default function Header() {
  const { t } = useTranslation("home");
  const { setValue } = usePortfolioStore();
  return (
    <>
      <Desktop>
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
              onClick={() => {
                setValue("symbol", undefined);
              }}
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
      </Desktop>

      <Mobile>
        <Contents
          className={
            "z-[2] flex h-[75px] w-full items-center border-b border-line bg-white px-[20px]"
          }
        >
          <Row className={"relative ml-[10px]"}>
            <HomeButtonTypeLogo />
          </Row>
          <Row className={"ml-[70px] gap-[30px]"}>
            <p>{t("dashboard")}</p>
            <p>{t("asset_view")}</p>
            <p>{t("asset_add")}</p>
            <p>{t("community")}</p>
            <p>{t("setting")}</p>
          </Row>
          <Row className={"absolute right-[10px] gap-[10px]"}>
            <Button secondary={true} size={"sm"}>
              {t("sign_in")}
            </Button>
            <Button size={"sm"}>{t("sign_up")}</Button>
          </Row>
        </Contents>
      </Mobile>
    </>
  );
}
