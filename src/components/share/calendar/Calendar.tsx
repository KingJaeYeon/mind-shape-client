import React, { ChangeEventHandler, useEffect, useState } from "react";
import { IconCalendar, IconLeft, IconRight } from "@/assets";

import {
  format,
  getMonth,
  isSameMonth,
  getYear,
  getDate,
  endOfMonth,
  parse,
  isValid,
} from "date-fns";
import {
  CaptionProps,
  DateRange,
  DayPicker,
  SelectSingleEventHandler,
  useDayPicker,
  useNavigation,
} from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./daypicker.css";
import { cn } from "@/lib/utils";
import Row from "@/components/layout/Row";
import { useModalStore } from "@/store/modalStore";
import Button from "@/components/share/button/Button";
import { useTranslation } from "@/app/[locale]/i18n/i18n-client";

/**
 *   기본 옵션
 *   className = {스타일 정의}<br/>
 *   disabled = {true}<br/>
 *   size = {"lg"}<br/>
 *   dateInputClassName = {input className}<br/>
 *   titleText = {titleText}<br/>
 *   titleTExtClassName = {titleTExtClassName}<br/>
 *   <br/>
 *   캘린더 옵션<br/>
 *   단일 선택 옵션<br/>
 *   multiple = {false}<br/>
 *   singleState<br/>
 *   setSingleState<br/>
 *   다중 선택 옵션<br/>
 *   multiple = {true}<br/>
 *   rangeState <br/>
 *   setRangeState <br/>
 * */
export function Calendar({
  disabled = false,
  className,
  dateInputClassName,
  titleText,
  titleTExtClassName,
  titleDateClassName,
  size = "small",
  multiple = false,
  singleState,
  setSingleState,
  rangeState,
  setRangeState,
}: DayPickerType) {
  const MainClassName =
    "cursor-pointer relative mx-auto flex items-center w-full justify-between rounded-[9999px] border border-grayscale-neutral px-[15px] text-grayscale-dark outline-none placeholder:text-grayscale-neutral hover:border-grayscale-black focus:border-grayscale-black";

  const boxSize = size === "small" ? "h-[31px]" : "h-[45px]";
  const [calendarToggle, setCalendarToggle] = useState<boolean>(false);

  // 오늘 날짜로 이동 버튼
  // const [month, setMonth] = useState<Date>(nextMonth);
  return (
    <div className={cn("w-full max-w-[328px]", className)}>
      <div
        className={
          disabled === false
            ? cn(MainClassName, boxSize, dateInputClassName)
            : cn(
                MainClassName,
                "pointer-events-none opacity-20",
                dateInputClassName,
              )
        }
        onClick={() => setCalendarToggle(!calendarToggle)}
      >
        <p className={cn("pr-[15px]", titleTExtClassName)}>{titleText ?? ""}</p>
        <div
          className={cn(
            "flex-1 overflow-x-hidden pr-[15px]",
            titleDateClassName,
          )}
        >
          {multiple === false && (
            <p>
              {singleState &&
                format(
                  typeof singleState !== "object"
                    ? new Date(singleState)
                    : singleState,
                  "yyyy-MM-dd",
                )}
            </p>
          )}
          {multiple === true && (
            <p className={"truncate"}>
              {rangeState?.from && format(rangeState.from, "yyyy-MM-dd")}
              {rangeState?.to && format(rangeState.to, " ~ yyyy-MM-dd")}
            </p>
          )}
        </div>
        <IconCalendar className={"select-none"} />
      </div>
      <div
        className={"relative mx-auto block w-full min-w-[228px] max-w-[328px]"}
      >
        {multiple ? (
          // 범위 날짜 선택
          <DayPicker
            // style
            style={{
              pointerEvents: "auto",
              opacity: 1,
              zIndex: 100,
              position: "absolute",
              top: calendarToggle ? "5px" : "-5px",
              maxWidth: "328px",
              minWidth: "228px",
              width: "100%",
              margin: "0 auto",
              padding: "16px 10px",
              backgroundColor: "white",
              boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: "15px",
              transition: "all 0.3s ease-in-out",
            }}
            styles={{
              months: {},
              month: {
                margin: "0 auto",
                width: "100%",
              },
              // table
              table: {
                fontWeight: "400",
                margin: "0 auto",
                width: "100%",
                maxWidth: "258px",
              },
              head: {
                fontWeight: "300",
                fontFamily: "SpoqaHanSansNeo Regular",
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "-0.42px",
                color: "#B0B0B9",
              },
              tbody: {},
            }}
            // 범위 날짜 선택
            mode={"range"}
            selected={rangeState}
            onSelect={(Date) => {
              if (setRangeState !== undefined) {
                setRangeState(Date);
              }
              if (Date?.to !== undefined) {
                setCalendarToggle(false);
              }
            }}
            // 오늘 날짜로 이동 버튼
            // month={month}
            // onMonthChange={setMonth}
            // footer={footer({ today, month, setMonth })}
            // css 커스텀
            components={{
              Caption: CustomHeader,
            }}
          />
        ) : (
          // 단일 날짜 선택
          <DayPicker
            // style
            style={{
              pointerEvents: !calendarToggle ? "auto" : "none",
              opacity: !calendarToggle ? 1 : 0,
              zIndex: 100,
              position: "absolute",
              top: calendarToggle ? "5px" : "-5px",
              maxWidth: "328px",
              minWidth: "228px",
              width: "100%",
              margin: "0 auto",
              padding: "16px 10px",
              backgroundColor: "white",
              boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
              borderRadius: "15px",
              transition: "all 0.3s ease-in-out",
            }}
            styles={{
              months: {},
              month: {
                margin: "0 auto",
                width: "100%",
              },
              // table
              table: {
                fontWeight: "400",
                margin: "0 auto",
                width: "100%",
                maxWidth: "258px",
              },
              head: {
                fontWeight: "300",
                fontFamily: "SpoqaHanSansNeo Regular",
                fontSize: "16px",
                lineHeight: "150%",
                letterSpacing: "-0.42px",
                color: "#B0B0B9",
              },
              tbody: {},
            }}
            // 단일 날짜 선택
            mode={"single"}
            selected={singleState}
            onSelect={(date) => {
              if (setSingleState !== undefined) {
                setSingleState(date);
                setCalendarToggle(false);
              }
            }}
            disableNavigation
            // 오늘 날짜로 이동 버튼
            // month={month}
            // onMonthChange={setMonth}
            // footer={footer({ today, month, setMonth })}
            // css 커스텀
            components={{
              Caption: CustomHeader,
            }}
          />
        )}
      </div>
    </div>
  );
}

export function SingleDayPickerTypeModal({
  isDialog = true,
  selected,
  selectedHandler,
  hasInputOption,
}: {
  isDialog?: boolean;
  selected?: any;
  selectedHandler?: any;
  hasInputOption?: boolean;
}) {
  const date = new Date();
  const year = getYear(date);
  const month = getMonth(date);
  const day = getDate(date);
  const endDay = format(endOfMonth(date), "dd");
  const disabledDays = [
    {
      from: new Date(year, month, day + 1),
      to: new Date(year, 11, Number(endDay)),
    },
  ];

  const { backHandler } = useModalStore();
  const [inputValue, setInputValue] = useState<string>("");
  const [display, setDisplay] = useState<Date | undefined>(selected);
  const { t } = useTranslation("portfolio");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.currentTarget.value);
    const date = parse(e.currentTarget.value, "yyyy-MM-dd", new Date());
    const inputYear = getYear(date);
    if (isValid(date) && year >= inputYear) {
      setDisplay(date);
    } else {
      setDisplay(undefined);
    }
  };

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    if (date) {
      setInputValue(format(date, "yyyy-MM-dd"));
      setDisplay(date);
    } else {
      setInputValue("");
    }
  };

  const changeDateHandler = () => {
    if (!display) {
      selectedHandler(new Date());
    }
    selectedHandler(display);
    backHandler();
  };

  return (
    <>
      <DayPicker
        // style
        style={{
          pointerEvents: "auto",
          opacity: 1,
          zIndex: 100,
          position: isDialog ? "relative" : "absolute",
          top: "5px",
          maxWidth: isDialog ? "100%" : "328px",
          minWidth: isDialog ? "100%" : "228px",
          width: "100%",
          margin: isDialog ? "auto" : "0 auto",
          padding: isDialog ? "" : "16px 10px",
          backgroundColor: "white",
          boxShadow: isDialog ? "" : "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
          borderRadius: "15px",
          transition: "all 0.3s ease-in-out",
        }}
        styles={{
          month: {
            margin: "0 auto",
            width: "100%",
          },
          // table
          table: {
            fontWeight: "400",
            margin: "0 auto",
            width: isDialog ? "100%" : "100%",
            maxWidth: isDialog ? "100%" : "258px",
          },
          head: {
            fontWeight: "300",
            fontFamily: "Inter",
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "-0.42px",
            color: "#58667e",
          },
          tbody: {},
        }}
        // 단일 날짜 선택
        mode={"single"}
        selected={display}
        onSelect={handleDaySelect}
        disabled={disabledDays}
        captionLayout="dropdown-buttons"
        fromYear={2000}
        toYear={year}
        components={{
          Caption: CustomHeader,
        }}
        footer={
          <InputOption
            hasInputOption={hasInputOption}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
          />
        }
      />
      <Button className={"mt-[20px]"} onClick={() => changeDateHandler()}>
        {t("change_date")}
      </Button>
    </>
  );
}

function InputOption({
  hasInputOption,
  inputValue,
  handleInputChange,
}: {
  hasInputOption?: boolean;
  inputValue: string;
  handleInputChange: (e: any) => void;
}) {
  if (!hasInputOption) {
    return null;
  }

  return (
    <Row>
      <Row className={"mt-[5px] gap-[10px] rounded-[5px] p-[5px] font-Inter"}>
        <p>Search:</p>
        <input
          size={12}
          type="text"
          className={"outline-none"}
          placeholder={format(new Date(), "yyyy-MM-dd")}
          value={inputValue}
          onChange={(e) => {
            e.preventDefault();
            handleInputChange(e);
          }}
        />
      </Row>
      <Row className={"mt-[5px] gap-[10px] rounded-[5px] p-[5px] font-Inter"}>
        <input type={"time"} />
      </Row>
    </Row>
  );
}

function CustomHeader(props: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth, goToDate } = useNavigation();
  const { selected } = useDayPicker();

  useEffect(() => {
    if (selected instanceof Date) {
      goToDate(selected);
    }
  }, [selected]);

  return (
    <div
      className={
        "mb-[17px] flex h-[23px] w-full justify-between font-Inter text-[16px]"
      }
    >
      <button
        disabled={!previousMonth}
        onClick={(e) => {
          previousMonth && goToMonth(previousMonth);
          e.preventDefault();
        }}
      >
        <IconLeft />
      </button>
      <h2>{format(props.displayMonth, "yyyy-MM")}</h2>
      <button
        disabled={!nextMonth}
        onClick={(e) => {
          nextMonth && goToMonth(nextMonth);
          e.preventDefault();
        }}
      >
        <IconRight />
      </button>
    </div>
  );
}

function footer({ today, month, setMonth }: footerPropsType) {
  return (
    <button
      className={
        "text-grayscale-white mt-5 w-full rounded bg-primary px-4 py-2 font-bold hover:bg-blue-700"
      }
      disabled={isSameMonth(today, month)}
      onClick={() => setMonth(today)}
    >
      Go to Today
    </button>
  );
}

interface DayPickerType {
  className?: string;
  disabled?: boolean;
  dateInputClassName?: string;
  titleText?: string;
  titleDateClassName?: string;
  titleTExtClassName?: string;
  size?: "small" | "lg";
  multiple?: boolean;
  singleState?: Date | undefined;
  rangeState?: DateRange | undefined;
  setSingleState?: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setRangeState?: React.Dispatch<React.SetStateAction<DateRange | undefined>>;
}

interface footerPropsType {
  today: Date;
  month: Date;
  setMonth: React.SetStateAction<any>;
}
