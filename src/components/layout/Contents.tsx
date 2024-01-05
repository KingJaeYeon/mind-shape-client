import React, {ComponentProps, forwardRef} from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & ComponentProps<"section">;

const Contents = forwardRef<HTMLDivElement, Props>(
        ({ children, className,...props }, ref) => {
  return (
    <section ref={ref} className={cn(``, className)} {...props}>
      {children}
    </section>
  );
});

Contents.displayName = "Contents";

export default Contents;
