"use client";

import { createContext, useContext } from "react";
import React from "react";
import Row from "@/components/layout/Row";
import Contents from "@/components/layout/Contents";
import { cn } from "@/lib/utils";
import Text from "@/components/layout/Text";

const TableContext = createContext<any>(undefined);

function Table({
  children,
  columns,
}: {
  children: React.ReactNode;
  columns?: any;
}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <Contents className={"flex w-full flex-col"}>{children}</Contents>
    </TableContext.Provider>
  );
}
export function Header({ children }: { children: React.ReactNode }) {
  const { columns }: any = useContext(TableContext);
  return (
    <header
      role="row"
      style={{
        gridTemplateColumns: `${columns}`,
      }}
      className={"grid w-full"}
    >
      {children}
    </header>
  );
}
export function Body({
  data,
  render,
  isLoading,
}: {
  data: any;
  render: any;
  isLoading?: boolean;
}) {
  if (isLoading) return <div>Loading...</div>;
  if (!data || !data?.length)
    return (
      <Row
        className={
          "flex h-[60px] items-center justify-start border-y border-border px-[10px] py-[11px] text-[15px]"
        }
      >
        There is no data
      </Row>
    );

  return data?.map(render);
}

export function TRow({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const { columns } = useContext(TableContext);
  return (
    <Row
      onClick={onClick}
      className={cn(
        "grid h-[80px] w-full items-center border-b border-border",
        className,
      )}
      style={{
        gridTemplateColumns: `${columns}`,
      }}
    >
      {children}
    </Row>
  );
}

function Th({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Text
      className={cn(
        "flex h-[48px] items-center justify-end border-y border-border px-[10px] py-[11px] text-[12px]",
        className,
      )}
    >
      {children}
    </Text>
  );
}

function Td({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex justify-end px-[10px] text-[14px] font-medium",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Footer({ children }: { children: React.ReactNode }) {
  return <footer className={"flex w-full"}>{children}</footer>;
}

TableContext.displayName = "TableContext";
Table.Header = Header;
Table.Body = Body;
Table.Th = Th;
Table.Td = Td;
Table.TRow = TRow;
Table.Footer = Footer;
export default Table;
