"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPortfolio } from "@/service/portfolio-service";
import { useModalStore } from "@/store/modalStore";

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
    },
    onError: () => {},
  });

  return { savePortfolio, isPending, data };
}
