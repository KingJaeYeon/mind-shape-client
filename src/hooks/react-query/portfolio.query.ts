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

export function useAddPortfolio({ setIsOpen }: { setIsOpen: any }) {
  const queryClient = useQueryClient();
  const { t } = useTranslation("toast");
  const {
    mutate: savePortfolio,
    data,
    isPending,
  } = useMutation({
    mutationFn: addPortfolio,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["myPortfolio"],
      });
      setIsOpen(false);
      toast.success(t("transaction_add"));
    },
    onError: () => {
      toast.error(t("error"));
    },
  });

  return { savePortfolio, isPending, data };
}

export function usePortfolio() {
  const { data = {}, isPending } = useQuery({
    queryKey: ["myPortfolio"],
    queryFn: getPortfolio,
  });
  const { portfolio, dailyPriceData } = data;

  const newDailyPriceData = dailyPriceData?.reduce((acc: any, cur: any) => {
    acc[cur?.assetId] = {
      closePrice: cur?.closePrice,
      createdAt: cur?.createdAt,
    };
    return acc;
  }, {});

  return { portfolio, isPending, dailyPriceData: newDailyPriceData };
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
