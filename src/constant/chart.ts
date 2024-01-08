import { ChartData } from "chart.js";

export interface ChartOption {
  title: string;
  value: ChartData<any>;
  chartType: string;
  hasModal?: boolean;
  duration: DurationProps | DurationListProps;
  toggleList?: ToggleListProps;
}

export interface DurationListProps {
  isFixedDuration: false;
  defaultValue: {
    label: string;
    value: string;
  };
  options: {
    label: string;
    value: string;
  }[];
}

export interface DurationProps {
  isFixedDuration: true;
  options: {
    label: string;
    value: string;
  };
}

export interface ToggleListProps {
  showToggleList?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}
