"use client";
import Contents from "@/components/layout/Contents";
import { cn } from "@/lib/utils";
import Card from "@/components/layout/Card";
import Row from "@/components/layout/Row";

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
      className={
        "shadow-card h-[120px] w-full max-w-full px-[60px] pb-[25px] pt-[10px]"
      }
    >
      <Row className={"text-neutralGray"}>{title}</Row>
      <Row
        className={
          "h-full w-full items-end justify-center text-[24px] text-white"
        }
      >
        {text()}
      </Row>
    </Card>
  );
}
