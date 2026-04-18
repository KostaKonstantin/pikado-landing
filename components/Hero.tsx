import { useTranslations, useLocale } from "next-intl";
import Container from "./Container";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="bg-dark-bg pt-24 pb-32 md:pt-32 md:pb-40">
      <Container>
        <div className="max-w-[720px]">
          <h1 className="text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-6">
            {t("headline")}
          </h1>
          <p className="text-[20px] text-text-secondary leading-relaxed mb-10 max-w-140">
            {t("subheadline")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}#app`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-[8px] bg-primary text-white hover:bg-primary-hover transition-colors duration-150"
            >
              {t("cta")}
            </Link>
            <Link
              href={`/${locale}#demo`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-[8px] border border-border text-white hover:border-primary hover:text-primary transition-colors duration-150"
            >
              {t("secondary_cta")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
