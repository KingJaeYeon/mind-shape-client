"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPortfolio, getPortfolio } from "@/service/portfolio-service";
import { useModalStore } from "@/store/modalStore";
import toast from "react-hot-toast";

export function useAddPortfolio() {
  const queryClient = useQueryClient();
  const { closeHandler } = useModalStore();
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
      closeHandler();
      toast.success("포트폴리오가 등록되었습니다.");
    },
    onError: () => {
      toast.error("error:: 다시 시도해 주세요.");
    },
  });

  return { savePortfolio, isPending, data };
}

export function usePortfolio() {
  const { data, isPending } = useQuery({
    queryKey: ["myPortfolio"],
    queryFn: getPortfolio,
  });
  const { myList, sum } = data ?? "";
  return { data, isPending, myList, sum };
}
