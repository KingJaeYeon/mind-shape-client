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
    <Contents className={"flex w-full max-w-full items-center gap-[10px]"}>
      <Row
        className={
          "h-[24px] w-[24px] items-center justify-center rounded-[999px] border border-lightGray bg-lightGray text-[12px]"
        }
      >
        {emoji}
      </Row>
      <Text className={"text-[16px] font-medium text-text-secondary"}>
        {title}
      </Text>
    </Contents>
  );
}
