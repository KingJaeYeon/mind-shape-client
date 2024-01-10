import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: React.CSSProperties;
} & ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(`flex`, className)} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
