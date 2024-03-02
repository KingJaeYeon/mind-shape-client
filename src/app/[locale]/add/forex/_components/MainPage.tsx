"use client";
import Contents from "@/components/layout/Contents";
import PageTitle from "@/app/[locale]/add/portfolio/_components/main/PageTitle";
import React from "react";

import PortfolioContents from "@/app/[locale]/add/portfolio/_components/main/PortfolioContents";
import ForexHeader from "@/app/[locale]/add/forex/_components/ForexHeader";

export default function MainPage() {
  return (
    <Contents className={"w-full max-w-[1230px] flex-col items-start"}>
      <PageTitle title={"My Forex"} emoji={"🚀"} />
      <ForexHeader />
      <PortfolioContents />
    </Contents>
  );
}
