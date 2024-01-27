"use client";
import Row from "@/components/layout/Row";
import { cn } from "@/lib/utils";
import { IconChevronDown } from "@/assets";
import Contents from "@/components/layout/Contents";
import React, { createContext, useContext, useState } from "react";
import { useSpring } from "@react-spring/web";
import AnimatedDiv from "@/components/layout/AnimatedDiv";
import Col from "@/components/layout/Col";

/*
우선 기억해야 할 것은 마우스 이벤트의 처리 순서이다
mousedown -> blur -> mouseup -> click
 */

interface DropDownContextType {
  className?: string;
  search: string;
  setSearch: any;
  isLoad?: boolean;
  chosen: any;
  setChosen: any;
  placeholder?: string;
  list: any[];
  focus: boolean;
  hasFocus: any;
}

const DropDownContext = createContext<DropDownContextType | undefined>(
  undefined,
);
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
  isLoad?: boolean;
  chosen: any;
  setChosen: any;
  placeholder?: string;
  list: any[];
}) {
  const [focus, hasFocus] = useState(false);

  return (
    <DropDownContext.Provider
      value={{
        className,
        search,
        setSearch,
        isLoad,
        chosen,
        setChosen,
        list,
        placeholder,
        focus,
        hasFocus,
      }}
    >
      <DropdownContainer>
        <DropdownInputSection>
          <DropdownInputOrView />
        </DropdownInputSection>
        <DropDownList />
      </DropdownContainer>
    </DropDownContext.Provider>
  );
}

function DropdownInputOrView() {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { focus, search, setSearch, placeholder, chosen } = context;

  if (focus) {
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
  return <DropDownView item={chosen} />;
}

function DropDownList() {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { focus, setChosen, search, isLoad } = context;

  if (!focus) {
    return null;
  }

  return (
    <DropdownListSection focus={focus}>
      <DropDownListView />
    </DropdownListSection>
  );
}
function DropDownListView() {
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { list, setChosen, isLoad, chosen } = context;

  if (isLoad && list?.length === 0) {
    return (
      <DropDownError
        text={"로딩중..."}
        className={"z-[1001] min-h-[48px] w-full cursor-pointer px-[15px]"}
      />
    );
  }
  if (list?.length === 0) {
    return (
      <DropDownError
        text={"검색 결과가 없습니다."}
        className={"z-[1001] min-h-[48px] w-full cursor-pointer px-[15px]"}
      />
    );
  }

  return list?.map((item, index) => (
    <DropDownView
      item={item}
      key={index}
      onClickHandler={setChosen}
      className={cn(
        "z-[1001] min-h-[48px] w-full cursor-pointer px-[15px] hover:bg-weakGray",
        chosen?.index === item?.index && "bg-weakGray",
      )}
    />
  ));
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
  const context = useContext(DropDownContext);
  if (!context) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { placeholder } = context;

  return (
    <Contents
      className={cn(
        "flex items-center gap-[5px] rounded-[10px] font-Inter text-[14px]",
        className,
      )}
      onMouseDown={(e) => {
        console.log("onMouseDown");
        if (!!onClickHandler) {
          onClickHandler(item);
        }
        e.stopPropagation();
      }}
    >
      {!item?.name ? (
        <Row className={"text-[16px] text-gray"}>{placeholder}</Row>
      ) : (
        <>
          <Row className={"break-all font-bold"}>{item?.name}</Row>
          <Row className={"text-neutralGray"}>{item?.symbol}</Row>
        </>
      )}
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
        "flex items-center gap-[5px] font-Inter text-[14px]",
        className,
      )}
    >
      <Row className={"break-all"}>{text}</Row>
    </Contents>
  );
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
        "visible absolute top-[48px] flex max-h-[200px] w-full gap-[5px] overflow-auto rounded-[10px] border border-lightGray bg-white px-[7px] py-[7px] shadow-dropdown"
      }
    >
      {children}
    </AnimatedDiv>
  );
}

function DropdownInputSection({ children }: { children: React.ReactNode }) {
  const context = useContext(DropDownContext);

  if (!context) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { focus, hasFocus, className } = context;
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
        "min-h-[48px] w-full items-center overflow-hidden rounded-[10px] border border-lightGray pl-[15px] pr-[50px]",
        className,
      )}
      onFocus={() => hasFocus(true)}
      onBlur={() => hasFocus(false)}
      tabIndex={-1}
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

function DropdownContainer({ children }: { children: React.ReactNode }) {
  return <Col className={"relative"}>{children}</Col>;
}
