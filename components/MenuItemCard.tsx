import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import PriceTag from "@/components/PriceTag";

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm shadow-maroon/5 ring-1 ring-maroon/5 sm:p-5">
      {item.image && (
        <div className="relative hidden h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-maroon/5 sm:block">
          <Image
            src={item.image}
            alt={item.name}
            fill
            unoptimized={item.image.endsWith(".svg")}
            className="object-cover"
            sizes="96px"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-lg font-semibold text-charcoal">
            {item.name}
          </h3>
          {item.pricing.kind === "single" && <PriceTag pricing={item.pricing} />}
        </div>
        {item.description && (
          <p className="text-sm leading-relaxed text-charcoal/65">
            {item.description}
          </p>
        )}
        {item.pricing.kind !== "single" && (
          <div className="pt-1">
            <PriceTag pricing={item.pricing} />
          </div>
        )}
      </div>
    </div>
  );
}
