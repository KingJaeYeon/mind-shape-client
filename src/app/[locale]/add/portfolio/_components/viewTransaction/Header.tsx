import Col from "@/components/layout/Col";
import Row from "@/components/layout/Row";
import {
  ShowOrHideAmount,
  ShowOrHideTrigger,
} from "@/components/share/button/ShowOrHideAmount";

export default function Header({
  symbol,
  name,
  totalPrice,
  totalAmount,
}: {
  symbol: string;
  name: string;
  totalPrice: number;
  totalAmount: number;
}) {
  return (
    <Col className={"pb-[24px] pt-[28px]"}>
      <h3 className={"text-text-secondary"}>{`${name} (${symbol})`}</h3>
      <Row className={"items-center gap-[8px]"}>
        <ShowOrHideAmount
          text={`₩${totalPrice?.toLocaleString()}`}
          className={"text-[32px] font-bold text-text"}
        />
        <ShowOrHideTrigger className={"h-[20px] w-[24px]"} />
      </Row>
      <h3 className={"text-text-secondary"}>{totalAmount}</h3>
    </Col>
  );
}
