"use client";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";
import PortfolioViewChart from "@/app/add/portfolio/_components/PortfolioViewChart";

export default function PortfolioContents() {
  return (
    <Contents className={"flex flex-col"}>
      <PortfolioViewChart />
      <Row></Row>
    </Contents>
  );
}
