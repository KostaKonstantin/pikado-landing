import { useTranslations } from "next-intl";
import Container from "@/components/Container";

export default function WhatIsPikado() {
  const t = useTranslations("whatIsPikado");
  const benefits = t.raw("benefits") as Array<{ icon: string; title: string; description: string }>;

  return (
    <section className="bg-[#060606] py-24 border-t border-[#1f1f1f]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-6">
              {t("headline")}
            </h2>
            <p className="text-[18px] text-[#a0a0a0] leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Right: benefit cards */}
          <div className="flex flex-col gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex items-start gap-4 p-5 rounded-[8px] border border-[#1f1f1f] bg-[#0d0d0d]"
              >
                <span className="text-2xl leading-none shrink-0">{b.icon}</span>
                <div>
                  <p className="text-[15px] font-semibold text-white mb-1">{b.title}</p>
                  <p className="text-[14px] text-[#a0a0a0]">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
