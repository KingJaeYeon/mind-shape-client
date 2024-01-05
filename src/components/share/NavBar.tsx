"use client";
import { useConvenienceStore } from "@/store/convenienceStore";
import AnimatedDiv from "@/components/layout/AnimatedDiv";
import Col from "@/components/layout/Col";
import Row from "@/components/layout/Row";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavBar({}) {
  const { getValue } = useConvenienceStore();

  const getNavBarStyle = () => {
    return getValue("hideNavBar")
      ? { marginLeft: "-250px" }
      : { marginLeft: "0" };
  };

  return (
    <AnimatedDiv
      className={
        // "flex w-[250px] bg-darkGray transition-all duration-700"
        "flex w-[250px] border-r border-line bg-darkGray transition-all duration-700"
      }
      style={getNavBarStyle()}
    >
      <NavBarOption
        index={0}
        title={"주식조회"}
        option={[
          { title: "투자현황", url: "/view/investment-status" },
          { title: "포토폴리오 상세", url: "/view/portfolio" },
          { title: "누적배당금 내역", url: "/view/accumulated-dividends" },
          { title: "월별수익률", url: "/view/monthly-returns" },
          { title: "월간이력", url: "/view/monthly-history" },
        ]}
      />
      <NavBarOption
        title={"주식내역 등록"}
        option={[
          { title: "포토폴리오내역", url: "/view/investment-status" },
          { title: "외화내역", url: "/view/portfolio" },
          { title: "배당금내역", url: "/view/accumulated-dividends" },
          { title: "실현손익내역", url: "/view/monthly-returns" },
        ]}
      />
      <NavBarOption
        title={"커뮤니티"}
        option={[
          { title: "뉴스", url: "/view/investment-status" },
          { title: "피드", url: "/view/portfolio" },
          { title: "게시글", url: "/view/accumulated-dividends" },
        ]}
      />
    </AnimatedDiv>
  );
}

function NavBarOption({
  title,
  option,
  index,
}: {
  title?: string;
  option: { title: string; url: string }[];
  index?: number;
}) {
  return (
    <Col className={cn("", index !== 0 && "border-t border-line")}>
      <Title title={title} />
      <Col className={"gap-[15px] px-[20px] py-[15px]"}>
        {option.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className={
              "hover:text-orange cursor-pointer text-[18px] text-white transition-all duration-200"
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
