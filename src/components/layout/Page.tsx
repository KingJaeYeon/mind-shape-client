import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
};

const Page = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className } = props;
  return (
    <div ref={ref} className={cn(`relative flex`, className)}>
      {children}
    </div>
  );
});

Page.displayName = "Page";

export default Page;
