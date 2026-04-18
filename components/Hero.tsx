import { useTranslations, useLocale } from "next-intl";
import Container from "./Container";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="bg-[#0a0a0a] pt-24 pb-32 md:pt-32 md:pb-40">
      <Container>
        <div className="max-w-[720px]">
          <h1 className="text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-6">
            {t("headline")}
          </h1>
          <p className="text-[20px] text-[#a0a0a0] leading-relaxed mb-10 max-w-[560px]">
            {t("subheadline")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}#app`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-[8px] bg-[#3d5afe] text-white hover:bg-[#5c6bc0] transition-colors duration-150"
            >
              {t("cta")}
            </Link>
            <Link
              href={`/${locale}#demo`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-[8px] border border-[#1f1f1f] text-white hover:border-[#3d5afe] hover:text-[#3d5afe] transition-colors duration-150"
            >
              {t("secondary_cta")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
