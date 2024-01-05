import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & ComponentProps<"div">;

const Col = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(`flex flex-col`, className)} {...props}>
        {children}
      </div>
    );
  },
);

Col.displayName = "Col";

export default Col;
