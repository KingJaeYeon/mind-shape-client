"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const config = {
  defaultOptions: {
    mutations: {
      retry: (failureCount: number, error: any) => {
        return failureCount <= 2 && error?.cause?.status === 401;
      },
    },
  },
};

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  const queryClient = new QueryClient(config);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
