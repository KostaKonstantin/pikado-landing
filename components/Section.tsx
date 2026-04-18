import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

type SectionBackground = "dark" | "darker" | "accent";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  background?: SectionBackground;
  as?: "section" | "div" | "article";
}

const bgClasses: Record<SectionBackground, string> = {
  dark: "bg-dark-bg",
  darker: "bg-[#060606]",
  accent: "bg-dark-bg border-t border-b border-border",
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
