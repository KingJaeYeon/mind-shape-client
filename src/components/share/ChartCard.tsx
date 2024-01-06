import Card from "@/components/layout/Card";
import Row from "@/components/layout/Row";
import Bubble from "@/components/share/chart/Bubble";

export function ChartList() {
  return (
    <Row>
      <ChartItem />
    </Row>
  );
}

export function ChartItem() {
  return (
    <Card>
      <Row className={"px-[60px] text-neutralGray"}>
        비중과 수익률 버블 차트
      </Row>
      <Bubble />
    </Card>
  );
}
