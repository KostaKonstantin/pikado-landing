"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/motion/ScrollReveal";

export default function RealTimeDemo() {
  const t = useTranslations("realTimeDemo");
  const features = t.raw("features") as Array<{ title: string; description: string }>;

  return (
    <section id="demo" className="bg-[#060606] py-24 border-t border-border">
      <Container>
        <ScrollReveal className="text-center max-w-150 mx-auto mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-4">
            {t("headline")}
          </h2>
          <p className="text-[18px] text-text-secondary leading-relaxed">
            {t("description")}
          </p>
        </ScrollReveal>

        {/* 2×2 feature grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="flex items-start gap-4 p-6 rounded-[8px] bg-[#0d0d0d] border border-border cursor-default"
                whileHover={{ borderColor: "#3d5afe", y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-[8px] bg-primary flex items-center justify-center text-white text-sm font-semibold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.2} className="mt-10 rounded-[8px] border border-border bg-[#0d0d0d] p-10 text-center">
          <p className="text-[13px] text-[#555]">Live match dashboard — screenshot coming soon</p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
