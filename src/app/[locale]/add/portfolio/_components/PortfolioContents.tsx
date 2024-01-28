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
    <Contents className={"flex w-full flex-col"}>
      <PortfolioViewChart />
      <Col className={"font-bold text-text"}>
        <p className={"flex h-[75px] items-center text-[18px]"}>
          {t("assets")}
        </p>
        <Contents className={"flex w-full max-w-full"}>
          <Contents className={"w-full overflow-x-auto overflow-y-hidden"}>
            <table className={"w-full"}>
              <thead className={"z-1 sticky"}>
                <tr>
                  <Th>{t("ticker")}</Th>
                  <Th>{t("country")}</Th>
                  <Th>{t("amount")}</Th>
                  <Th>{t("investment_total")}</Th>
                  <Th>{t("valuation_amount")}</Th>
                  <Th>{t("profit_loss")}</Th>
                  <Th>{t("avg_buy_price")}</Th>
                  <Th>{t("edit")}</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
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
          </Contents>
        </Contents>
      </Col>
    </Contents>
  );
}

function Th({ children }: any) {
  return (
    <th
      className={
        "h-[38px] border-y border-border px-[10px] py-[11px] text-[12px]"
      }
    >
      {children}
    </th>
  );
}
