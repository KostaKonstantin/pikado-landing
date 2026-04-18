"use client";

import { motion } from "framer-motion";
import { slideUpVariants, fadeInVariants, scaleInVariants } from "@/lib/motion";

type AnimationType = "slideUp" | "fadeIn" | "scaleIn";

const variantMap = {
  slideUp: slideUpVariants,
  fadeIn: fadeInVariants,
  scaleIn: scaleInVariants,
};

interface MotionWrapperProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function MotionWrapper({
  children,
  type = "slideUp",
  delay = 0,
  duration,
  className,
}: MotionWrapperProps) {
  const base = variantMap[type];

  const variants = duration
    ? {
        hidden: base.hidden,
        visible: {
          ...(base.visible as object),
          transition: { ...(base.visible as { transition?: object }).transition, duration, delay },
        },
      }
    : {
        hidden: base.hidden,
        visible: {
          ...(base.visible as object),
          transition: { ...(base.visible as { transition?: object }).transition, delay },
        },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
