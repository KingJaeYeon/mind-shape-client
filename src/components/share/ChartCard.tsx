"use client";
import Card from "@/components/layout/Card";
import Row from "@/components/layout/Row";
import Bubble from "@/components/share/chart/Bubble";
import Grid from "@/components/layout/Grid";

export function ChartList({
  options,
}: {
  options: { title: string; value: {}; type: string }[];
}) {
  return (
    <Grid
      className={
        "h-auto w-full max-w-full grid-cols-1 gap-x-[30px] gap-y-[30px] xl:grid-cols-2 2xl:grid-cols-3"
      }
    >
      {options.map((option, index) => (
        <ChartItem key={index} option={option} />
      ))}
    </Grid>
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
    <Card className={"h-[400px] transition-all duration-700"}>
      <Row className={"px-[60px] text-neutralGray"}>{option.title}</Row>
      {chartType()}
    </Card>
  );
}
