import { cn } from "@/lib/cn";
import Container from "./Container";

interface ContentSectionProps {
  headline: string;
  subheadline?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
  centered?: boolean;
  background?: "dark" | "darker";
}

export default function ContentSection({
  headline,
  subheadline,
  children,
  id,
  className,
  centered = true,
  background = "dark",
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24",
        background === "darker" ? "bg-[#060606]" : "bg-[#0a0a0a]",
        className
      )}
    >
      <Container>
        <div className={cn("mb-14", centered && "text-center max-w-[640px] mx-auto")}>
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-4">
            {headline}
          </h2>
          {subheadline && (
            <p className="text-[18px] text-[#a0a0a0] leading-relaxed">{subheadline}</p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
