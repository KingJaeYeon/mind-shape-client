import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  styleType?: string;
  style?: React.CSSProperties;
} & ComponentProps<"button">;

const ButtonBase = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, styleType, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(`flex`, className)} {...props}>
        {children}
      </button>
    );
  },
);

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
