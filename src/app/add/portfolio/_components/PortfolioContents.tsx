"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import PortfolioViewChart from "@/app/add/portfolio/_components/PortfolioViewChart";
import Col from "@/components/layout/Col";
import { usePortfolio } from "@/hooks/react-query/portfolio.query";

export default function PortfolioContents() {
  const { data, isPending } = usePortfolio();

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
  const array: any[] = Object.values(list);
  return (
    <Contents className={"flex w-full flex-col"}>
      <PortfolioViewChart />
      <Col className={"text-primary"}>
        <p>PortfolioContents</p>
        <Row className={"gap-[20px]"}>
          <p>티커</p>
          <p>국가</p>
          <p>수량</p>
          <p>총매수 금액</p>
          <p>현재 평가금액</p>
          <p>이익/손실</p>
          <p>평균매수가</p>
          <p>수정</p>
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
