import { ChartData } from "chart.js";

export interface ChartOption {
  title: string;
  value: ChartData<any>;
  chartType: string;
  hasModal?: boolean;
  duration?: DurationListProps;
  toggleList?: ToggleListProps;
}

export interface DurationListProps {
  isFixedDuration: boolean;
  options: {
    label: string;
    value: number;
  }[];
}

export interface ToggleListProps {
  showToggleList?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}
