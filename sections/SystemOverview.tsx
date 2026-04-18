import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import BenefitCard from "@/components/BenefitCard";

export default function SystemOverview() {
  const t = useTranslations("systemOverview");
  const benefits = t.raw("benefits") as Array<{ icon: string; title: string; description: string }>;

  return (
    <section className="bg-dark-bg py-24 border-t border-border">
      <Container>
        {/* Top: accent label */}
        <div className="mb-12">
          <span className="inline-block text-[13px] font-medium text-primary uppercase tracking-widest mb-4">
            Platform
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-white leading-tight tracking-tight mb-4 max-w-140">
            {t("headline")}
          </h2>
          <p className="text-[18px] text-text-secondary max-w-120">
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
