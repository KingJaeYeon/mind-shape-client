import { request } from "@/service/axios";
import { AddPortfolio, UpdatePortfolio } from "@/constant/portfolio";

export function addPortfolio({
  assetId,
  price,
  quantity,
  categoryId,
  transactionDate,
  transactionType,
}: AddPortfolio) {
  return request({
    url: "/portfolio",
    method: "POST",
    data: {
      assetId,
      price,
      quantity,
      categoryId,
      transactionDate,
      transactionType,
    },
  });
}

export function getPortfolio() {
  return request({
    url: "/portfolio",
    method: "GET",
  });
}

export function deleteTransaction({ index }: { index: number }) {
  return request({
    url: "/portfolio/delete",
    method: "POST",
    data: {
      index,
    },
  });
}

export function updateTransaction({
  price,
  quantity,
  index,
  transactionDate,
}: UpdatePortfolio) {
  return request({
    url: "/portfolio/update",
    method: "POST",
    data: {
      price,
      quantity,
      index,
      transactionDate,
    },
  });
}
