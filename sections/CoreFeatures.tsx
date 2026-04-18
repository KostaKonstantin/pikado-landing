import { useTranslations } from "next-intl";
import ContentSection from "@/components/ContentSection";
import FeatureCard from "@/components/FeatureCard";
import FeatureGrid from "@/components/FeatureGrid";

export default function CoreFeatures() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ icon: string; title: string; description: string }>;

  return (
    <ContentSection
      id="features"
      headline={t("headline")}
      subheadline={t("subheadline")}
      background="dark"
    >
      <FeatureGrid columns={3}>
        {items.map((item) => (
          <FeatureCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </FeatureGrid>
    </ContentSection>
  );
}
