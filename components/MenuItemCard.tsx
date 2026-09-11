import type { MenuItem } from "@/data/menu";
import PriceTag from "@/components/PriceTag";

// Intentionally text-only: with 80 items across the full menu, per-item
// photos would add a lot of weight without much payoff. Dish photography
// is reserved for the home page's hand-picked "Featured Dishes".
export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="rounded-2xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-lg font-semibold text-cream">
          {item.name}
        </h3>
        {item.pricing.kind === "single" && <PriceTag pricing={item.pricing} />}
      </div>
      {item.description && (
        <p className="mt-2 text-sm leading-relaxed text-cream/60">
          {item.description}
        </p>
      )}
      {item.pricing.kind !== "single" && (
        <div className="mt-2 pt-1">
          <PriceTag pricing={item.pricing} />
        </div>
      )}
    </div>
  );
}
