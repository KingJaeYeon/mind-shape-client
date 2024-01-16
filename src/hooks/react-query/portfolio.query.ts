"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPortfolio } from "@/service/portfolio-service";
import { useModalStore } from "@/store/modalStore";
import toast from "react-hot-toast";

export function useAddPortfolio() {
  const queryClient = useQueryClient();
  const { setValue } = useModalStore();
  const {
    mutate: savePortfolio,
    data,
    isPending,
  } = useMutation({
    mutationFn: addPortfolio,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myPortfolio"],
      });
      setValue("isOpen", false);
      toast.success("포트폴리오가 등록되었습니다.");
    },
    onError: () => {
      toast.error("error:: 다시 시도해 주세요.");
    },
  });

  return { savePortfolio, isPending, data };
}
