import type { MenuItemPricing } from "@/data/menu";
import { formatPrice } from "@/lib/format";

/** Compact single-line price, used on cards where space is tight. */
export function compactPrice(pricing: MenuItemPricing): string {
  if (pricing.kind === "single") {
    return formatPrice(pricing.price);
  }
  if (pricing.kind === "sized") {
    const lowest = Math.min(...pricing.sizes.map((s) => s.price));
    return `From ${formatPrice(lowest)}`;
  }
  const lowest = Math.min(...pricing.variants.map((v) => v.price));
  return `From ${formatPrice(lowest)}`;
}

export default function PriceTag({ pricing }: { pricing: MenuItemPricing }) {
  if (pricing.kind === "single") {
    return (
      <span className="font-display text-lg font-semibold text-maroon">
        {formatPrice(pricing.price)}
      </span>
    );
  }

  if (pricing.kind === "sized") {
    return (
      <dl className="grid grid-cols-2 gap-x-4 gap-y-1">
        {pricing.sizes.map((size) => (
          <div key={size.label} className="flex flex-col">
            <dt className="text-[11px] font-medium uppercase tracking-wide text-charcoal/50">
              {size.label}
            </dt>
            <dd className="font-display text-base font-semibold text-maroon">
              {formatPrice(size.price)}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <dl className="flex flex-wrap gap-x-5 gap-y-2">
      {pricing.variants.map((variant) => (
        <div key={variant.label} className="flex flex-col">
          <dt className="text-[11px] font-medium uppercase tracking-wide text-charcoal/50">
            {variant.label}
          </dt>
          <dd className="font-display text-base font-semibold text-maroon">
            {formatPrice(variant.price)}
          </dd>
        </div>
      ))}
    </dl>
  );
}
