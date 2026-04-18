interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-[8px] border border-border bg-[#0d0d0d]">
      <div className="w-10 h-10 rounded-[8px] bg-[#1a1a2e] flex items-center justify-center text-lg">
        {icon}
      </div>
      <h3 className="text-[16px] font-semibold text-white">{title}</h3>
      <p className="text-[14px] text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
