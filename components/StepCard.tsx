interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary text-sm font-bold shrink-0">
        {step}
      </div>
      <div>
        <h3 className="text-[16px] font-semibold text-white mb-1.5">{title}</h3>
        <p className="text-[14px] text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
