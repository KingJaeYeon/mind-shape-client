import { request } from "@/service/axios";

export function searchAsset(search: string) {
  console.log("request");
  return request({
    url: "/asset/list-search",
    method: "GET",
    params: {
      search: search,
    },
  });
}

export function recommendAsset() {
  return request({
    url: "/asset/list-recommend",
    method: "GET",
  });
}
