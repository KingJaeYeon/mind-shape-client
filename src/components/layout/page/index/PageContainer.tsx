"use client";
import Page from "@/components/layout/Page";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Footer from "@/components/share/Footer";

export default function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Page
      className={cn(
        "hide-scrollbar w-full flex-col items-center gap-[40px] " +
          "overflow-auto p-[20px] transition-all duration-700",
        className,
      )}
    >
      {children}
    </Page>
  );
}
