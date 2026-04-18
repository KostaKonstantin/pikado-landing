"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "./Container";
import { slideUpVariants, fadeInVariants } from "@/lib/motion";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="bg-dark-bg pt-24 pb-32 md:pt-32 md:pb-40">
      <Container>
        <div className="max-w-[720px]">
          <motion.h1
            className="text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: slideUpVariants.hidden,
              visible: {
                ...(slideUpVariants.visible as object),
                transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
              },
            }}
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            className="text-[20px] text-text-secondary leading-relaxed mb-10 max-w-140"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: slideUpVariants.hidden,
              visible: {
                ...(slideUpVariants.visible as object),
                transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
              },
            }}
          >
            {t("subheadline")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: fadeInVariants.hidden,
              visible: {
                ...(fadeInVariants.visible as object),
                transition: { duration: 0.6, delay: 0.6 },
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
