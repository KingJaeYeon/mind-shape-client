"use client";
import Contents from "@/components/layout/Contents";
import { cn } from "@/lib/utils";
import Card from "@/components/layout/Card";
import Row from "@/components/layout/Row";
import IconMoney from "@/assets/IconMoney";

export function CardList({
  options,
  color = "green",
  isColumn = true,
}: {
  options: { title: string; value: any; unit?: any; icon: any }[];
  color?: "green" | "red" | "orange" | "gold";
  isColumn?: boolean;
}) {
  function style() {
    let style = "";
    style += isColumn ? "flex-col " : "flex-row ";
    return style;
  }
  return (
    <Contents className={cn("flex w-full max-w-full gap-[30px]", style())}>
      {options.map((option, index) => (
        <CardItem key={option.title} color={color} option={option} />
      ))}
    </Contents>
  );
}

export function CardItem({
  color,
  option,
}: {
  color: "green" | "red" | "orange" | "gold";
  option: { title: string; value: any; unit?: any; icon: any };
}) {
  const { title, value, unit, icon } = option;
  function colorStyle() {
    switch (color) {
      case "green":
        return "rgb(50 ,168 ,102)";
      case "red":
        return "rgb( 238,40 ,16)";
      case "orange":
        return "bg-orange";
      case "gold":
        return "bg-gold";
    }
  }
  function text() {
    if (!unit) {
      return value.toLocaleString();
    }

    if (unit === "$") {
      return unit + " " + value.toLocaleString();
    } else {
      return value.toLocaleString() + " " + unit;
    }
  }
  return (
    <Card
      className={"shadow-card h-[120px] w-full max-w-full pb-[25px] pt-[10px]"}
    >
      <Row className={"px-[60px] text-neutralGray"}>{title}</Row>
      <Row className={"relative h-full w-full"}>
        <Row
          className={
            "h-full w-full items-end justify-center text-[24px] text-white"
          }
        >
          {text()}
        </Row>
        <Row
          className={cn(
            "absolute bottom-0 right-[-10px] h-[50px] w-[50px] items-center justify-center rounded-[5px]",
          )}
          style={{ backgroundColor: colorStyle() }}
        >
          <IconMoney />
        </Row>
      </Row>
    </Card>
  );
}
