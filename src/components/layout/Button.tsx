import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  styleType?: string;
  style?: React.CSSProperties;
} & ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, styleType, ...props }, ref) => {
    if (styleType === "addPortfolioButton") {
      return (
        <button
          ref={ref}
          className={cn(
            `border-deepGray hover:border-gray flex rounded-[10px] border-2 px-[15px] py-[7px] text-white`,
            className,
          )}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button ref={ref} className={cn(`flex`, className)} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
