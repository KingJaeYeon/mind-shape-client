"use client";
import Row from "@/components/layout/Row";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@/assets";
import Contents from "@/components/layout/Contents";
import { useState } from "react";
import { useSpring } from "@react-spring/web";
import AnimatedDiv from "@/components/layout/AnimatedDiv";
import Col from "@/components/layout/Col";

export default function DropDown({
  className,
  search,
  setSearch,
  isLoad,
  chosen,
  setChosen,
  list,
  placeholder,
}: {
  className?: string;
  search: string;
  setSearch: any;
  isLoad: boolean;
  chosen: {
    index: number;
    name: string;
    symbol: string;
  };
  setChosen: any;
  placeholder?: string;
  list: any[];
}) {
  console.log(chosen);
  const [isFocus, setIsFocus] = useState(false);
  const sp = useSpring({
    transform: isFocus ? "rotate(180deg)" : "rotate(0deg)",
    config: {
      tension: 100,
    },
    delay: 0,
  });
  return (
    <Col className={"relative"}>
      <Row
        className={cn(
          "h-[45px] w-full items-center overflow-hidden rounded-[10px] border border-lightGray pl-[15px] pr-[50px]",
          className,
        )}
      >
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={(e) => {
            e.preventDefault();
            setIsFocus(false);
          }}
          value={isFocus ? search : chosen.name}
          placeholder={placeholder}
          className={cn("w-full outline-none")}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Contents
          className={"absolute right-[20px] flex cursor-pointer flex-col"}
        >
          <AnimatedDiv style={{ ...sp }}>
            <IconChevronDown />
          </AnimatedDiv>
        </Contents>
      </Row>
      <DropDownList
        list={list}
        search={search}
        setChosen={setChosen}
        isFocus={isFocus}
        isLoad={isLoad}
      />
    </Col>
  );
}

function DropDownList({
  list,
  isFocus,
  setChosen,
  search,
  isLoad,
}: {
  list: any[];
  isFocus: boolean;
  setChosen: any;
  search?: string;
  isLoad: boolean;
}) {
  const sp = useSpring({
    opacity: isFocus ? 1 : 0,
    visibility: isFocus ? "visible" : "hidden",
    config: {
      tension: 100,
    },
  });
  if (!isFocus || !search) {
    return null;
  }

  return (
    <AnimatedDiv
      style={{
        opacity: sp.opacity,
        visibility: sp.visibility.to((v) => (v ? "visible" : "hidden")),
      }}
      className={
        "shadow-dropdown visible absolute top-[45px] flex max-h-[200px] w-full rounded-[10px] border border-lightGray bg-white"
      }
    >
      {isLoad ? (
        <DropDownLoading />
      ) : list.length > 0 ? (
        list?.map((item, index) => {
          return <DropDownItem item={item} key={index} onClick={setChosen} />;
        })
      ) : (
        <DropDownNotFound />
      )}
    </AnimatedDiv>
  );
}
function DropDownItem({ item, onClick }: { item: any; onClick: any }) {
  console.log(item.name);
  return (
    <Contents
      onClick={(e) => {
        e.preventDefault();
        onClick({
          index: item?.index,
          name: item?.name,
          symbol: item?.symbol,
        });
      }}
      className={
        "z-[1001] flex h-[45px] w-full cursor-pointer items-center text-black"
      }
    >
      {item?.name}
    </Contents>
  );
}
function DropDownNotFound() {
  return (
    <Contents
      className={
        "z-[1001] flex h-[45px] w-full cursor-pointer items-center text-black"
      }
    >
      검색 결과가 없습니다.
    </Contents>
  );
}
function DropDownLoading() {
  return (
    <Contents
      className={
        "z-[1001] flex h-[45px] w-full cursor-pointer items-center text-black"
      }
    >
      로딩중...
    </Contents>
  );
}
