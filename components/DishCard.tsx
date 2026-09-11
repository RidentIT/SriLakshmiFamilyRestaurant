import Image from "next/image";
import type { MenuItem } from "@/data/menu";
import { compactPrice } from "@/components/PriceTag";

export default function DishCard({ item }: { item: MenuItem }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white/5 shadow-sm ring-1 ring-white/10 transition-shadow hover:shadow-lg hover:shadow-black/20">
      <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            unoptimized={item.image.endsWith(".svg")}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-cream/40">
            Photo coming soon
          </div>
        )}
      </div>
      <div className="flex items-center justify-between gap-3 p-4">
        <h3 className="font-display text-base font-semibold text-cream">
          {item.name}
        </h3>
        <span className="shrink-0 text-sm font-semibold text-gold">
          {compactPrice(item.pricing)}
        </span>
      </div>
    </div>
  );
}
