"use client";
import React, { ComponentProps, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  secondary?: boolean;
  onClick?: any;
  size?: "sm" | "lg";
  disabled?: boolean;
  style?: React.CSSProperties;
} & ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      secondary,
      disabled,
      size = "lg",
      onClick,
      ...props
    },
    ref,
  ) => {
    const style = {
      addPortfolio: `border-deepGray hover:border-gray rounded-[10px] border-2 px-[15px] py-[7px] text-white`,
    };

    function getStyle() {
      // Lg / default
      let defaultClass = cn(
        "disabled:pointer-events-none disabled:cursor-default px-[24px] text-[14px] h-[48px] hover:bg-button-hover rounded-[8px] flex border outline-none disabled:bg-button disabled:opacity-50 cursor-pointer items-center justify-center bg-button text-white",
      );
      const secondaryClass =
        "text-button bg-white disabled:opacity-50 disabled:bg-button-secondary-disable border border-button hover:border-button-secondary-hover hover:text-button-secondary-hover hover:bg-white";
      const smClass = "text-[12px] h-[32px] px-[16px]";

      if (secondary) {
        defaultClass = cn(defaultClass, secondaryClass);
      }
      if (size === "sm") {
        defaultClass = cn(defaultClass, smClass);
      }
      return cn(defaultClass, className);
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        className={cn("disabled:bg-button-secondary-disable", getStyle())}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
