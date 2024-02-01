import Row from "@/components/layout/Row";
import SwitchBase from "@/components/share/radix/SwitchBase";
import { IS_SHOW_CHART } from "@/constant/portfolio";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";

export default function ShowChartSwitch() {
  const { t } = useTranslation("portfolio");
  return (
    <form>
      <Row className={"text-text-secondary items-center font-medium"}>
        <label
          htmlFor="portfolio-chart"
          className={"break-all pr-[15px] text-[14px]"}
        >
          {t("switch_label")}
        </label>
        <SwitchBase id={"portfolio-chart"} switchKey={IS_SHOW_CHART} />
      </Row>
    </form>
  );
}
