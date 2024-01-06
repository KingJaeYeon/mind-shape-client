import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & ComponentProps<"div">;

const Page = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, style } = props;
  return (
    <div ref={ref} className={cn(`relative flex`, className)} style={style}>
      {children}
    </div>
  );
});

Page.displayName = "Page";

export default Page;
