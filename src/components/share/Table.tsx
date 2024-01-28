"use client";

import { createContext, useContext } from "react";
import React from "react";
import Row from "@/components/layout/Row";
import Col from "@/components/layout/Col";
import Contents from "@/components/layout/Contents";
import { cn } from "@/lib/utils";

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
      {/*{"250 130 108 108 108 190 170 185 150"}*/}
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
  if (!data || !data.length)
    return <Row className={"w-full"}>There is no data</Row>;

  return <section className={"w-full"}>{data?.map(render)}</section>;
}

export function TRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { columns } = useContext(TableContext);
  return (
    <Row
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
export function Footer({ children }: { children: React.ReactNode }) {
  return <footer className={"flex w-full"}>{children}</footer>;
}

TableContext.displayName = "TableContext";
Table.Header = Header;
Table.Body = Body;
Table.TRow = TRow;
Table.Footer = Footer;
export default Table;
