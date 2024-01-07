import { ChartData } from "chart.js";

export interface ChartOption {
  title: string;
  value: ChartData<any>;
  chartType: string;
  hasModal?: boolean;
  dropDown?: {
    showDropdown: boolean;
    options?: {
      label: string;
      value: number;
    }[];
  };
  toggleList?: ToggleListProps;
}
export interface ToggleListProps {
  showToggleList?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}
