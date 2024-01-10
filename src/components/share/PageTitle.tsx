import Text from "@/components/layout/Text";
import Contents from "@/components/layout/Contents";
import Row from "@/components/layout/Row";

export default function PageTitle({
  title,
  emoji,
}: {
  title: string;
  emoji?: string;
}) {
  return (
    <Contents className={"my-[20px] flex items-center gap-[10px]"}>
      <Row
        className={
          "h-[35px] w-[35px] items-center justify-center rounded-[999px] border bg-lightGray text-[18px]"
        }
      >
        {emoji}
      </Row>
      <Text className={"text-[30px] text-white"}>{title}</Text>
    </Contents>
  );
}
