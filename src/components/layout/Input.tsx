"use client";
import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type InputProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & ComponentProps<"input">;
type LabelProps = {
  text?: string;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
} & ComponentProps<"label">;
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, id, ...props }, ref) => {
    return (
      <input
        ref={ref}
        id={id}
        type={type}
        className={cn(
          `w-full rounded-[0.625rem] border border-lightGray bg-transparent outline-none`,
          className,
        )}
        {...props}
      />
    );
  },
);

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, id, children, text, ...props }, ref) => {
    return (
      <label ref={ref} id={id} className={cn(`w-full`, className)} {...props}>
        {text}
      </label>
    );
  },
);

Label.displayName = "Label";
Input.displayName = "Input";
