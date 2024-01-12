"use client";
import Row from "@/components/layout/Row";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@/assets";
import Contents from "@/components/layout/Contents";
import React, { useState } from "react";
import { useSpring } from "@react-spring/web";
import AnimatedDiv from "@/components/layout/AnimatedDiv";
import Col from "@/components/layout/Col";
/*
우선 기억해야 할 것은 마우스 이벤트의 처리 순서이다
mousedown -> blur -> mouseup -> click
 */
export default function DropDown({
  className,
  search,
  setSearch,
  isLoad,
  setChosen,
  list,
  placeholder,
  viewElement,
}: {
  className?: string;
  search: string;
  setSearch: any;
  isLoad?: boolean;
  setChosen: any;
  placeholder?: string;
  list: any[];
  viewElement: any;
}) {
  const [focus, hasFocus] = useState(false);

  return (
    <DropdownContainer>
      <DropdownInputSection
        className={className}
        focus={focus}
        hasFocus={hasFocus}
      >
        <DropdownInputOrView
          focus={focus}
          placeholder={placeholder}
          search={search}
          setSearch={setSearch}
          viewElement={viewElement}
        />
      </DropdownInputSection>
      <DropDownList
        list={list}
        search={search}
        setChosen={setChosen}
        focus={focus}
        isLoad={isLoad}
      />
    </DropdownContainer>
  );
}
function DropdownInputOrView({
  focus,
  search,
  setSearch,
  placeholder,
  viewElement,
}: {
  focus: boolean;
  search: string;
  setSearch: any;
  placeholder?: string;
  viewElement: any;
}) {
  if (focus || !search) {
    return (
      <input
        value={search}
        autoFocus={true}
        placeholder={placeholder}
        className={cn("w-full outline-none")}
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  }
  return viewElement;
}
function DropDownList({
  list,
  focus,
  setChosen,
  search,
  isLoad,
}: {
  list: any[];
  focus: boolean;
  setChosen: any;
  search?: string;
  isLoad?: boolean;
}) {
  if (!focus || !search) {
    return null;
  }

  return (
    <DropdownListSection focus={focus}>
      <DropDownListView list={list} setChosen={setChosen} isLoad={isLoad} />
    </DropdownListSection>
  );
}
function DropDownListView({
  isLoad,
  list,
  setChosen,
}: {
  isLoad?: boolean;
  list: any[];
  setChosen: any;
}) {
  if (isLoad) {
    return (
      <DropDownError
        text={"로딩중..."}
        className={
          "z-[1001] h-[48px] w-full cursor-pointer px-[15px] hover:bg-lightGray"
        }
      />
    );
  }
  if (list?.length === 0) {
    return (
      <DropDownError
        text={"검색 결과가 없습니다."}
        className={
          "z-[1001] h-[48px] w-full cursor-pointer px-[15px] hover:bg-lightGray"
        }
      />
    );
  }

  return list?.map((item, index) => {
    return (
      <DropDownView
        item={item}
        key={index}
        onClickHandler={setChosen}
        className={
          "z-[1001] h-[48px] w-full cursor-pointer px-[15px] hover:bg-lightGray"
        }
      />
    );
  });
}
export function DropDownView({
  item,
  className,
  onClickHandler,
}: {
  item: {
    index: number;
    name: string;
    symbol: string;
  };
  className?: string;
  onClickHandler?: any;
}) {
  return (
    <Contents
      className={cn(
        "font-Inter flex items-center gap-[5px] text-[14px]",
        className,
      )}
      onMouseDown={() => {
        if (!!onClickHandler) {
          onClickHandler(item);
        }
      }}
    >
      <Row className={"break-all font-bold"}>{item.name}</Row>
      <Row className={"text-neutralGray"}>{item.symbol}</Row>
    </Contents>
  );
}
function DropDownError({
  className,
  text,
}: {
  className?: string;
  text: string;
}) {
  return (
    <Contents
      className={cn(
        "font-Inter flex items-center gap-[5px] text-[14px]",
        className,
      )}
    >
      <Row className={"break-all"}>{text}</Row>
    </Contents>
  );
}

function DropdownContainer({ children }: { children: React.ReactNode }) {
  return <Col className={"relative"}>{children}</Col>;
}
function DropdownListSection({
  children,
  focus,
}: {
  children: React.ReactNode;
  focus: boolean;
}) {
  const sp = useSpring({
    opacity: focus ? 1 : 0,
    visibility: focus ? "visible" : "hidden",
    config: {
      tension: 100,
    },
  });
  return (
    <AnimatedDiv
      style={{
        opacity: sp.opacity,
        visibility: sp.visibility.to((v) => (v ? "visible" : "hidden")),
      }}
      className={
        "visible absolute top-[48px] flex max-h-[200px] w-full overflow-hidden rounded-[10px] border border-lightGray bg-white shadow-dropdown"
      }
    >
      {children}
    </AnimatedDiv>
  );
}
function DropdownInputSection({
  children,
  className,
  focus,
  hasFocus,
}: {
  children: React.ReactNode;
  className?: string;
  focus: boolean;
  hasFocus: any;
}) {
  const sp = useSpring({
    transform: focus ? "rotate(180deg)" : "rotate(0deg)",
    config: {
      tension: 100,
    },
    delay: 0,
  });
  return (
    <Row
      className={cn(
        "h-[48px] w-full items-center overflow-hidden rounded-[10px] border border-lightGray pl-[15px] pr-[50px]",
        className,
      )}
      onFocus={() => hasFocus(true)}
      onBlur={() => hasFocus(false)}
      tabIndex={1}
    >
      {children}
      <Contents
        className={"absolute right-[20px] flex cursor-pointer flex-col"}
      >
        <AnimatedDiv style={{ ...sp }}>
          <IconChevronDown />
        </AnimatedDiv>
      </Contents>
    </Row>
  );
}
