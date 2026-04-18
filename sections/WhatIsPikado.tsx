"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/motion/ScrollReveal";

export default function WhatIsPikado() {
  const t = useTranslations("whatIsPikado");
  const benefits = t.raw("benefits") as Array<{ icon: string; title: string; description: string }>;

  return (
    <section className="bg-[#060606] py-24 border-t border-border">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <ScrollReveal>
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-6">
              {t("headline")}
            </h2>
            <p className="text-[18px] text-text-secondary leading-relaxed">
              {t("description")}
            </p>
          </ScrollReveal>

          {/* Right: benefit cards */}
          <StaggerReveal className="flex flex-col gap-4">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="flex items-start gap-4 p-5 rounded-[8px] border border-border bg-[#0d0d0d]">
                  <span className="text-2xl leading-none shrink-0">{b.icon}</span>
                  <div>
                    <p className="text-[15px] font-semibold text-white mb-1">{b.title}</p>
                    <p className="text-[14px] text-text-secondary">{b.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </Container>
    </section>
  );
}
