"use client";
import { useConvenienceStore } from "@/store/convenienceStore";
import AnimatedDiv from "@/components/layout/AnimatedDiv";
import Col from "@/components/layout/Col";
import Row from "@/components/layout/Row";

export default function NavBar({}) {
  const { getValue } = useConvenienceStore();

  const getNavBarStyle = () => {
    return getValue("hideNavBar")
      ? { marginLeft: "0" }
      : { marginLeft: "-300px" };
  };

  return (
    <AnimatedDiv
      className={
        "flex w-[300px] border-r border-line bg-darkGray transition-all duration-700"
      }
      style={getNavBarStyle()}
    >
      <NavBarOption />
    </AnimatedDiv>
  );
}

function NavBarOption({}) {
  return (
    <Col>
      <Row className={"text-neutralGray text-[20px]"}>주식 조회</Row>
    </Col>
  );
}
