"use client";
import Page from "@/components/layout/Page";
import React from "react";
import { useConvenienceStore } from "@/store/convenienceStore";
import { cn } from "@/lib/utils";
import Footer from "@/components/share/Footer";

export default function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  const { getValue } = useConvenienceStore();
  const getPageStyle = () => {
    return getValue("hideNavBar")
      ? { marginLeft: "-250px" }
      : { width: "calc(100% - 250px)" };
  };
  return (
    <Page
      className={cn(
        "hide-scrollbar left-[250px] mt-[75px] min-h-[calc(100dvh-75px)] w-full flex-col gap-[40px] " +
          "overflow-auto px-[30px] py-[10px] transition-all duration-700",
        className,
      )}
      style={getPageStyle()}
    >
      {children}
      <Footer />
    </Page>
  );
}
