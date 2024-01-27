"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import PortfolioViewChart from "@/app/[locale]/add/portfolio/_components/PortfolioViewChart";
import Col from "@/components/layout/Col";
import { usePortfolio } from "@/hooks/react-query/portfolio.query";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";

export default function PortfolioContents() {
  const { data, isPending } = usePortfolio();
  const { t } = useTranslation("portfolio");
  if (isPending) {
    return null;
  }

  const list = data?.myList.reduce((acc: any, cur: any) => {
    acc[cur?.asset?.symbol] = {
      price: Number(acc[cur?.asset?.symbol]?.price ?? 0) + Number(cur?.price),
      amount:
        Number(acc[cur?.asset?.symbol]?.amount ?? 0) + Number(cur?.amount),
      symbol: cur?.asset?.symbol,
      exChange: cur?.asset?.exChange,
    };
    return acc;
  }, {});
  const array: any[] = Object.values(list).sort(
    (a: any, b: any) => b.price - a.price,
  );
  return (
    <Contents className={"mt-[40px] flex w-full flex-col"}>
      <PortfolioViewChart />
      <Col className={"text-text font-bold"}>
        <p className={"flex h-[75px] items-center text-[18px]"}>Assets</p>
        <Row
          className={
            "h-[47px] items-center gap-[20px] border-y border-border text-[14px]"
          }
        >
          <p>{t("ticker")}</p>
          <p>{t("country")}</p>
          <p>{t("amount")}</p>
          <p>{t("investment_total")}</p>
          <p>{t("valuation_amount")}</p>
          <p>{t("profit_loss")}</p>
          <p>{t("avg_buy_price")}</p>
          <p>{t("edit")}</p>
        </Row>
        {array?.map((item) => {
          return (
            <Row className={"gap-[20px]"} key={item?.symbol}>
              <p>{item?.symbol}</p>
              <p>{item?.exChange}</p>
              <p>{item?.amount}</p>
              <p>{item?.price}</p>
              <p>현재 평가금액</p>
              <p>이익/손실</p>
              <p>{(item?.price / item?.amount).toFixed(2)}</p>
              <p>수정</p>
            </Row>
          );
        })}
      </Col>
    </Contents>
  );
}
