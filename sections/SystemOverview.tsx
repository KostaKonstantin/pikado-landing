"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/motion/ScrollReveal";

export default function SystemOverview() {
  const t = useTranslations("systemOverview");
  const benefits = t.raw("benefits") as Array<{ icon: string; title: string; description: string }>;

  return (
    <section className="bg-dark-bg py-24 border-t border-border">
      <Container>
        <ScrollReveal className="mb-12">
          <span className="inline-block text-[13px] font-medium text-primary uppercase tracking-widest mb-4">
            Platform
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-4 max-w-140">
            {t("headline")}
          </h2>
          <p className="text-[18px] text-text-secondary max-w-120">
            {t("subheadline")}
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <motion.div
                className="flex flex-col gap-3 p-6 rounded-[8px] border border-border bg-[#0d0d0d] cursor-default"
                whileHover={{ y: -4, borderColor: "#2a2a2a" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-[8px] bg-[#1a1a2e] flex items-center justify-center text-lg">
                  {b.icon}
                </div>
                <h3 className="text-[16px] font-semibold text-white">{b.title}</h3>
                <p className="text-[14px] text-text-secondary leading-relaxed">{b.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
