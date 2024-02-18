"use client";
import Contents from "@/components/layout/Contents";
import PageTitle from "@/app/[locale]/add/portfolio/_components/main/PageTitle";
import React from "react";
import Header from "@/app/[locale]/add/realized/_components/Header";
import Body from "@/app/[locale]/add/realized/_components/Body";

export default function MainPage() {
  return (
    <Contents className={"w-full flex-col items-start"}>
      <PageTitle title={"My Realized"} emoji={"🚀"} />
      <Header />
      <Body />
    </Contents>
  );
}
