import React from "react";
import Row from "@/components/layout/Row";

export default function CardBox({ children }: { children: React.ReactNode }) {
  return (
    <Row
      className={
        "mb-[12px] h-[108px] items-center justify-between rounded-[12px] px-[24px] py-[16px] shadow-chart sm:mr-[24px] sm:h-auto sm:flex-col sm:items-start"
      }
    >
      {children}
    </Row>
  );
}
