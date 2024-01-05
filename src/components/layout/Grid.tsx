import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
};

const Grid = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className } = props;
  return (
    <div ref={ref} className={cn(`grid`, className)}>
      {children}
    </div>
  );
});

Grid.displayName = "Grid";

export default Grid;
