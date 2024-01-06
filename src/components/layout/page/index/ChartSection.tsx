import Contents from "@/components/layout/Contents";
import { ChartList } from "@/components/share/ChartCard";

export default function ChartSection() {
  return (
    <Contents className={"h-auto w-full"}>
      <ChartList
        options={[
          { title: "비중과 수익률 버블 차트", value: [], type: "bubble" },
          { title: "포트폴리오 비중 도넛 차트", value: [], type: "bubble" },
          { title: "포트폴리오 비중 트리맵 차트", value: [], type: "bubble" },
          { title: "업종별 비중 도넛 차트", value: [], type: "bubble" },
          { title: "배당 비중 도넛 차트", value: [], type: "bubble" },
          { title: "1년간 예상 배당금 차트", value: [], type: "bubble" },
          { title: "올해 배당금 차트", value: [], type: "bubble" },
          { title: "년도별 배당금 차트", value: [], type: "bubble" },
          { title: "누적 배당금 차트", value: [], type: "bubble" },
          {
            title: "수익률,매수금액,평가금액,누적수익금 차트",
            value: [],
            type: "bubble",
          },
          {
            title: "내수익률과 지수수익률 비교 차트",
            value: [],
            type: "bubble",
          },
          { title: "월별 수익금, 누적수입금 차트", value: [], type: "bubble" },
        ]}
      />
    </Contents>
  );
}
