interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-[8px] border border-[#1f1f1f] bg-[#0d0d0d] hover:border-[#2a2a2a] hover:bg-[#111111] transition-all duration-200">
      <div className="text-2xl leading-none">{icon}</div>
      <div>
        <h3 className="text-[16px] font-semibold text-white mb-2">{title}</h3>
        <p className="text-[14px] text-[#a0a0a0] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
