import Row from "@/components/layout/Row";
import SwitchBase from "@/components/share/radix/SwitchBase";
import { IS_SHOW_CHART } from "@/constant/portfolio";

export default function ShowChartSwitch() {
  return (
    <form>
      <Row className={"items-center text-white"}>
        <label htmlFor="portfolio-chart" className={"break-all pr-[15px]"}>
          Show charts
        </label>
        <SwitchBase id={"portfolio-chart"} switchKey={IS_SHOW_CHART} />
      </Row>
    </form>
  );
}
