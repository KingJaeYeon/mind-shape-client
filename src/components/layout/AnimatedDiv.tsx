import React, { forwardRef } from "react";
import { animated, AnimatedProps } from "@react-spring/web";
import { cn } from "@/lib/utils";

// Props 타입 정의
type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & AnimatedProps<React.HTMLProps<HTMLDivElement>>;

// AnimatedDiv 컴포넌트 정의
const AnimatedDiv = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <animated.div
        ref={ref as any}
        className={cn("flex flex-col", className)}
        {...props}
      >
        {children}
      </animated.div>
    );
  },
);

AnimatedDiv.displayName = "AnimatedDiv";

export default AnimatedDiv;
