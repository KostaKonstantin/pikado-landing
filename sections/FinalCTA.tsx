"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { slideUpVariants, scaleInVariants } from "@/lib/motion";

export default function FinalCTA() {
  const t = useTranslations("finalCta");
  const locale = useLocale();

  return (
    <section className="relative bg-dark-bg py-32 border-t border-border overflow-hidden">
      {/* Subtle blue glow behind content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[300px] rounded-full bg-primary opacity-[0.06] blur-[120px]" />
      </div>

      <Container>
        <div className="relative text-center max-w-160 mx-auto">
          <motion.h2
            className="text-[40px] md:text-[52px] font-bold text-white leading-tight tracking-tight mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideUpVariants}
          >
            {t("headline")}
          </motion.h2>

          <motion.p
            className="text-[18px] text-text-secondary mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: slideUpVariants.hidden,
              visible: {
                ...(slideUpVariants.visible as object),
                transition: { duration: 0.8, ease: "easeOut", delay: 0.15 },
              },
            }}
          >
            {t("subtext")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: scaleInVariants.hidden,
              visible: {
                ...(scaleInVariants.visible as object),
                transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
              },
            }}
          >
            <Link
              href={`/${locale}#app`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-[8px] bg-primary text-white hover:bg-primary-hover active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              {t("cta")}
            </Link>
            <Link
              href={`/${locale}#demo`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-[8px] border border-border text-white hover:border-primary hover:text-primary active:scale-[0.98] transition-all duration-200"
            >
              {t("secondary_cta")}
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
