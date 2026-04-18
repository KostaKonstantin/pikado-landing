import { useTranslations } from "next-intl";
import ContentSection from "@/components/ContentSection";
import FeatureGrid from "@/components/FeatureGrid";

export default function TrustSection() {
  const t = useTranslations("trustSection");
  const cards = t.raw("cards") as Array<{ icon: string; title: string; description: string }>;

  return (
    <ContentSection
      headline={t("headline")}
      background="dark"
    >
      <FeatureGrid columns={3}>
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-4 p-6 rounded-[8px] border border-[#1f1f1f] bg-[#0d0d0d] hover:border-[#2a2a2a] transition-colors duration-200"
          >
            <div className="text-2xl leading-none">{card.icon}</div>
            <div>
              <h3 className="text-[16px] font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-[14px] text-[#a0a0a0] leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </FeatureGrid>
    </ContentSection>
  );
}
