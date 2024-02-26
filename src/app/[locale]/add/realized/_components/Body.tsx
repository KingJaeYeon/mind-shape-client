import Text from "@/components/layout/Text";
import Contents from "@/components/layout/Contents";
import Col from "@/components/layout/Col";
import React from "react";
import List from "@/app/[locale]/add/realized/_components/TableList";

export default function Body() {
  return (
    <Col className={"font-bold text-text"}>
      <Text className={"flex h-[75px] items-center text-[18px]"}>
        {"Realized"}
      </Text>
      <Contents
        className={"flex w-full max-w-full overflow-x-auto overflow-y-hidden"}
      >
        <List />
      </Contents>
    </Col>
  );
}
