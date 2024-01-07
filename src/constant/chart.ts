import { ChartData } from "chart.js";

export interface ChartOption {
  title: string;
  value: ChartData<any>;
  chartType: string;
  hasModal?: boolean;
  duration: DurationListProps | DurationProps;
  toggleList?: ToggleListProps;
}

export interface DurationListProps {
  isFixedDuration: true;
  options: {
    label: string;
    value: number;
  }[];
}

export interface DurationProps {
  isFixedDuration: false;
  options: {
    label: string;
    value: number;
  };
}

export interface ToggleListProps {
  showToggleList?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}
