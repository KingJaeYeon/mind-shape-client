"use client";
import { useConvenienceStore } from "@/store/convenienceStore";
import AnimatedDiv from "@/components/layout/AnimatedDiv";
import Col from "@/components/layout/Col";
import Row from "@/components/layout/Row";
import Link from "next/link";

export default function NavBar({}) {
  const { getValue } = useConvenienceStore();

  const getNavBarStyle = () => {
    return getValue("hideNavBar")
      ? { marginLeft: "-300px" }
      : { marginLeft: "0" };
  };

  return (
    <AnimatedDiv
      className={
        "flex w-[300px] border-r border-line bg-darkGray transition-all duration-700"
      }
      style={getNavBarStyle()}
    >
      <NavBarOption
        title={"주식조회"}
        option={[
          { title: "투자현황", url: "/view/investment-status" },
          { title: "포토폴리오 상세", url: "/view/portfolio" },
          { title: "누적배당금 내역", url: "/view/accumulated-dividends" },
          { title: "월별수익률", url: "/view/monthly-returns" },
          { title: "월간이력", url: "/view/monthly-history" },
        ]}
      />
    </AnimatedDiv>
  );
}

function NavBarOption({
  title,
  option,
}: {
  title?: string;
  option: { title: string; url: string }[];
}) {
  return (
    <Col>
      <Title title={title} />
      <Col className={"gap-[10px] px-[20px] pt-[10px]"}>
        {option.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className={
              "cursor-pointer text-[18px] text-neutralGray transition-all duration-200 hover:text-white"
            }
          >
            {item.title}
          </Link>
        ))}
      </Col>
    </Col>
  );
}

function Title({ title }: { title?: string }) {
  if (!title) return;
  return (
    <Row className={"px-[10px] pt-[10px] text-[16px] text-neutralGray"}>
      {title}
    </Row>
  );
}
