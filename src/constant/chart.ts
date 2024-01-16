import { ChartData, ChartOptions } from "chart.js";

export interface ChartOption {
  title: string;
  value: ChartData<any>;
  chartType: string;
  hasModal?: boolean;
  duration: DurationProps | DurationListProps;
  toggleList?: ToggleListProps;
}

export interface ChartOptionV1 {
  title: string;
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

export const chartOptions: ChartOptions<"doughnut"> = {
  plugins: {
    filler:{
      drawTime:"beforeDraw"
    },
    datalabels:{
      formatter:function (value){
        if (value===0) return"";
        else return value + "시간";
      },
      display: true,
      color:'black',
      anchor:'end',
      align:'start'
    },
    legend: {
      position: "right",
      align: "center",
      labels: {
        boxHeight: 12,
        boxWidth: 12,
        font: {
          size: 16,
          family: "Inter",
        },
        color: "white",
        pointStyle: "circle",
        usePointStyle: true,
        padding: 20,
      },
    },
  },
};
