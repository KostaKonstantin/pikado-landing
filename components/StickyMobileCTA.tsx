"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { stickyCtaVariants } from "@/lib/motion";

export default function StickyMobileCTA() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-[#0a0a0a] to-transparent"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={stickyCtaVariants}
        >
          <Link
            href={`/${locale}#app`}
            className="flex items-center justify-center w-full h-14 rounded-[8px] bg-primary text-white text-[16px] font-semibold active:scale-[0.98] transition-transform shadow-lg shadow-primary/30"
          >
            {t("cta")}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
