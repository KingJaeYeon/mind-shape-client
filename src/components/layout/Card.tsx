import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  isShadow?: boolean;
  className?: string;
};

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `flex w-full max-w-full flex-col rounded-[0.625rem] border-none bg-darkGray`,
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
