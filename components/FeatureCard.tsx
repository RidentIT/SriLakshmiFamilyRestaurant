import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-maroon/10 bg-white/60 p-6 shadow-sm shadow-maroon/5 transition-shadow hover:shadow-md hover:shadow-maroon/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon/10 text-maroon">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
        {description}
      </p>
    </div>
  );
}
