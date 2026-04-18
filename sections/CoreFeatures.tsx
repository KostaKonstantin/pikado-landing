"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/motion/ScrollReveal";
import { itemVariants } from "@/lib/motion";

export default function CoreFeatures() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ icon: string; title: string; description: string }>;

  return (
    <section id="features" className="bg-dark-bg py-24 border-t border-border">
      <Container>
        <ScrollReveal className="text-center max-w-160 mx-auto mb-14">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-4">
            {t("headline")}
          </h2>
          <p className="text-[18px] text-text-secondary leading-relaxed">{t("subheadline")}</p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="flex flex-col gap-4 p-6 rounded-[8px] border border-border bg-[#0d0d0d] cursor-default"
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(61,90,254,0.12)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl leading-none">{item.icon}</div>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
