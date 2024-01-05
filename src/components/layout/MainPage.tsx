"use client";
import NavBar from "@/components/share/NavBar";
import React from "react";
import Row from "@/components/layout/Row";

export default function MainPage({ children }: { children: React.ReactNode }) {
  return (
    <Row className={"h-full"}>
      <NavBar />
      <Row className={"w-full bg-darkGray"}>{children}</Row>
    </Row>
  );
}
