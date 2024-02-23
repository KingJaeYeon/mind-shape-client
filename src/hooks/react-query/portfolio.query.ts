"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addPortfolio,
  deleteTransaction,
  getPortfolio,
  updateTransaction,
} from "@/service/portfolio-service";
import toast from "react-hot-toast";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";
import { usePortfolio } from "@/store/portfolioStore";

export function useAddPortfolio({ setIsOpen }: { setIsOpen: any }) {
  const queryClient = useQueryClient();
  const { getValue } = usePortfolio();
  const { t } = useTranslation("toast");
  const {
    mutate: savePortfolio,
    data,
    isPending,
  } = useMutation({
    mutationFn: addPortfolio,
    onSuccess: async () => {
      const data = await getValue("data", "formattedData");
      if (data?.length === 0) {
        location.reload();
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["myPortfolio"],
        });
      }
      setIsOpen(false);
      toast.success(t("transaction_add"));
    },
    onError: () => {
      toast.error(t("error"));
    },
  });

  return { savePortfolio, isPending, data };
}

export function usePortfolioData() {
  const {
    data = {},
    isPending,
    error,
  } = useQuery({
    queryKey: ["myPortfolio"],
    queryFn: getPortfolio,
  });
  const { portfolio, closePriceData } = data;
  return {
    portfolio,
    isPending,
    closePriceData,
    error,
  };
}

export function useDeleteTransaction({ setIsOpen }: { setIsOpen: any }) {
  const queryClient = useQueryClient();
  const { t } = useTranslation("toast");

  const { mutate, isPending } = useMutation({
    mutationFn: deleteTransaction,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["myPortfolio"] });
      toast.success(t("transaction_remove"));
      setIsOpen(false);
    },
    onError: () => {
      toast.error(t("error"));
    },
  });

  return { mutate, isPending };
}

export function useUpdateTransaction({ setIsOpen }: { setIsOpen: any }) {
  const queryClient = useQueryClient();
  const { t } = useTranslation("toast");

  const { mutate, isPending } = useMutation({
    mutationFn: updateTransaction,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["myPortfolio"] });
      toast.success(t("transaction_add"));
      setIsOpen(false);
    },
    onError: (e) => {
      toast.error(t("error2", { message: e.message }));
    },
  });

  return { mutate, isPending };
}
