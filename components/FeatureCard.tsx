import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 transition-colors hover:bg-cream/[0.08]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-cream">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-cream/65">
        {description}
      </p>
    </div>
  );
}
