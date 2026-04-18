import { useTranslations } from "next-intl";
import ContentSection from "@/components/ContentSection";
import StepCard from "@/components/StepCard";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Array<{ step: number; title: string; description: string }>;

  return (
    <ContentSection
      headline={t("headline")}
      subheadline={t("subheadline")}
      background="darker"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((s, i) => (
          <div key={s.step} className="relative">
            {/* Connector line between steps (desktop only) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-5 left-[calc(100%_-_8px)] w-full h-px bg-border z-0" />
            )}
            <StepCard step={s.step} title={s.title} description={s.description} />
          </div>
        ))}
      </div>
    </ContentSection>
  );
}
