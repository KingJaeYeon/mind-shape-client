"use client";
import Page from "@/components/layout/Page";
import React, {useEffect, useState} from "react";
import {useConvenienceStore} from "@/store/convenienceStore";
import {cn} from "@/lib/utils";
import Footer from "@/components/share/Footer";

export default function PageContainer({
                                          children,
                                          className,
                                      }: {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null;
    }

    return (
        <Page
            className={cn(
                "hide-scrollbar mt-[75px] min-h-[calc(100dvh-75px)] w-full flex-col gap-[40px] " +
                "overflow-auto px-[30px] py-[10px] transition-all duration-700",
                className,
            )}
        >
            {children}
            <Footer/>
        </Page>
    );
}
