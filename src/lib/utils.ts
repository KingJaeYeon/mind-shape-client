import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDurationDate(
  key: "전체 기간" | "3년" | "2년" | "1년" | "올해" | "6개월",
) {
  switch (key) {
    case "전체 기간":
      return "all";
    case "3년":
      return "";
    case "2년":
      return "";
    case "1년":
      return "";
    case "올해":
      return new Date();
    case "6개월":
      return "";
  }
}
