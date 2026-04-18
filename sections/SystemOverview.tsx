import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import BenefitCard from "@/components/BenefitCard";

export default function SystemOverview() {
  const t = useTranslations("systemOverview");
  const benefits = t.raw("benefits") as Array<{ icon: string; title: string; description: string }>;

  return (
    <section className="bg-[#0a0a0a] py-24 border-t border-[#1f1f1f]">
      <Container>
        {/* Top: accent label */}
        <div className="mb-12">
          <span className="inline-block text-[13px] font-medium text-[#3d5afe] uppercase tracking-widest mb-4">
            Platform
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-4 max-w-[560px]">
            {t("headline")}
          </h2>
          <p className="text-[18px] text-[#a0a0a0] max-w-[480px]">
            {t("subheadline")}
          </p>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((b) => (
            <BenefitCard
              key={b.title}
              icon={b.icon}
              title={b.title}
              description={b.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
