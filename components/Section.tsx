import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

type SectionBackground = "dark" | "darker" | "accent";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: SectionBackground;
  as?: "section" | "div" | "article";
}

const bgClasses: Record<SectionBackground, string> = {
  dark: "bg-[#0a0a0a]",
  darker: "bg-[#060606]",
  accent: "bg-[#0a0a0a] border-t border-b border-[#1f1f1f]",
};

export default function Section({
  children,
  background = "dark",
  as: Tag = "section",
  className,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        "py-24 md:py-12",
        bgClasses[background],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
