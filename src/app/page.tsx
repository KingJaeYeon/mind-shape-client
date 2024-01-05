import Page from "@/components/layout/Page";
import { CardList } from "@/components/share/Card";
import Grid from "@/components/layout/Grid";

export default async function Home() {
  return (
    <Page className={"w-full px-[20px] py-[10px]"}>
      <Grid
        className={
          "grid-col w-full max-w-full grid-cols-1 gap-x-[20px] gap-y-[20px] xl:grid-cols-2 2xl:grid-cols-4"
        }
      >
        <CardList
          options={[
            { title: "평균환전 활율", icon: "", value: 1189.06 },
            { title: "환차익 수익률", icon: "", value: 1.61, unit: "%" },
            {
              title: "이번달 예상 배당금",
              icon: "",
              value: 162878,
              unit: "원",
            },
            {
              title: "총실수익금(환차익제외/배당금제외)",
              icon: "",
              value: 56558698,
              unit: "원",
            },
            {
              title: "총실수익금(환차익포함/배당금제외)",
              icon: "",
              value: 58378388,
              unit: "원",
            },
          ]}
        />
        <CardList
          color={"red"}
          options={[
            { title: "환전총액", icon: "", value: 104340.06, unit: "$" },
            { title: "배당금 누적손익", icon: "", value: 2290106, unit: "원" },
            { title: "연간 예상 배당금", icon: "", value: 2834744, unit: "원" },
            {
              title: "총실수익률(환차익제외/배당금제외)",
              icon: "",
              value: 49.89,
              unit: "%",
            },
            {
              title: "총실수익률(환차익포함/배당금제외)",
              icon: "",
              value: 51.49,
              unit: "%",
            },
          ]}
        />
        <CardList
          options={[
            { title: "총 투자 원금", icon: "", value: 113367255, unit: "원" },
            { title: "배당금 누적 수익률", icon: "", value: 2.02, unit: "%" },
            { title: "연간 예상 배당률", icon: "", value: 2.5, unit: "%" },
            {
              title: "총실수입금(환차익제외/배당금포함)",
              icon: "",
              value: 58848804,
              unit: "원",
            },
            {
              title: "총실수입금(환차익포함/배당금포함)",
              icon: "",
              value: 50668494,
              unit: "원",
            },
          ]}
        />
        <CardList
          options={[
            { title: "환차익", icon: "", value: 1819690, unit: "원" },
            { title: "실현손익", icon: "", value: 4089570, unit: "원" },
            { title: "총 주식 자산", icon: "", value: 174035754, unit: "원" },
            {
              title: "총실수익률(환차익제외/배당금포함)",
              icon: "",
              value: 51.91,
              unit: "%",
            },
            {
              title: "총실수입금(환차익포함/배당금포함)",
              icon: "",
              value: 53.52,
              unit: "%",
            },
          ]}
        />
      </Grid>
    </Page>
  );
}
