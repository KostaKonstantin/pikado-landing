import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("w-full max-w-[1200px] mx-auto px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
