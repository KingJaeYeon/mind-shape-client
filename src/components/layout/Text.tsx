import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & ComponentProps<"p">;

const Text = forwardRef<HTMLParagraphElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(`flex`, className)} {...props}>
        {children}
      </p>
    );
  },
);

Text.displayName = "Text";

export default Text;
