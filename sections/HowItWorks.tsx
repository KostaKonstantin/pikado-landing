"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/motion/ScrollReveal";
import Container from "@/components/Container";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Array<{ step: number; title: string; description: string }>;

  return (
    <section className="bg-[#060606] py-24 border-t border-border">
      <Container>
        <ScrollReveal className="text-center max-w-160 mx-auto mb-14">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-4">
            {t("headline")}
          </h2>
          <p className="text-[18px] text-text-secondary leading-relaxed">{t("subheadline")}</p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((s, i) => (
            <StaggerItem key={s.step}>
              <div className="relative flex flex-col gap-4">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%-8px)] w-full h-px bg-border z-0" />
                )}
                <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary text-sm font-bold shrink-0 relative z-10">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-1.5">{s.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{s.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
