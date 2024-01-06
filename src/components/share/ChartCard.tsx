import Card from "@/components/layout/Card";
import Row from "@/components/layout/Row";
import Bubble from "@/components/share/chart/Bubble";

export function ChartList({
  options,
}: {
  options: { title: string; value: {}; type: string }[];
}) {
  return (
    <Row className={"w-full gap-[30px]"}>
      {options.map((option, index) => (
        <ChartItem key={index} option={option} />
      ))}
    </Row>
  );
}

export function ChartItem({
  option,
}: {
  option: { title: string; value: {}; type: string };
}) {
  function chartType() {
    switch (option.type) {
      case "bubble":
        return <Bubble value={option.value} />;
    }
  }
  return (
    <Card className={"h-[400px]"}>
      <Row className={"px-[60px] text-neutralGray"}>{option.title}</Row>
      {chartType()}
    </Card>
  );
}
