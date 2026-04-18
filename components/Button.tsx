"use client";

import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#3d5afe] text-white hover:bg-[#5c6bc0] active:bg-[#3949ab] disabled:bg-[#1f1f1f] disabled:text-[#a0a0a0]",
  secondary:
    "bg-transparent text-[#a0a0a0] hover:text-white hover:bg-[#1f1f1f] active:bg-[#2a2a2a] disabled:text-[#555]",
  outline:
    "bg-transparent text-white border border-[#1f1f1f] hover:border-[#3d5afe] hover:text-[#3d5afe] active:bg-[#1f1f1f] disabled:text-[#555] disabled:border-[#1f1f1f]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-[8px] transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d5afe] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
