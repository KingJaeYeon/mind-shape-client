import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, subYears, startOfYear, subMonths, getYear } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDurationDate(
  key:
    | "all-duration"
    | "3year-ago"
    | "3year-start"
    | "2year-ago"
    | "2year-start"
    | "1year-ago"
    | "1year-start"
    | "this-year"
    | "half-month"
    | "current",
) {
  const currentDate = new Date();
  switch (key) {
    case "all-duration":
      return "all-duration";
    case "3year-ago":
      return format(subYears(currentDate, 3), "yyyy-MM");
    case "3year-start":
      return format(subYears(startOfYear(currentDate), 3), "yyyy-MM");
    case "2year-ago":
      return format(subYears(currentDate, 2), "yyyy-MM");
    case "2year-start":
      return format(subYears(startOfYear(currentDate), 2), "yyyy-MM");
    case "1year-ago":
      return format(subYears(currentDate, 1), "yyyy-MM");
    case "1year-start":
      return format(subYears(startOfYear(currentDate), 1), "yyyy-MM");
    case "this-year":
      return format(startOfYear(currentDate), "yyyy-MM");
    case "half-month":
      return format(subMonths(currentDate, 6), "yyyy-MM");
    case "current":
      return format(currentDate, "yyyy-MM");
  }
}

export function getYearAndUint(date: Date, unit?: boolean) {
  return `${getYear(date)}${unit && "년"}`;
}
