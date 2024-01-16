import { request } from "@/service/axios";
import { AddPortfolio } from "@/constant/portfolio";

export function addPortfolio({
  assetId,
  price,
  amount,
  categoryId,
  buyAt,
}: AddPortfolio) {
  return request({
    url: "/portfolio",
    method: "POST",
    data: {
      assetId,
      price,
      amount,
      categoryId,
      buyAt,
    },
  });
}
