import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] py-8">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-[#a0a0a0]">{t("copyright")}</span>
          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="text-sm text-[#a0a0a0] hover:text-white transition-colors duration-150"
            >
              {t("privacy")}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-sm text-[#a0a0a0] hover:text-white transition-colors duration-150"
            >
              {t("terms")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
