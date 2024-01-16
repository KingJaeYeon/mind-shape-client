"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPortfolio } from "@/service/portfolio-service";

export function useAddPortfolio() {
  const queryClient = useQueryClient();
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
    },
    onError: () => {},
  });

  return { savePortfolio, isPending, data };
}
