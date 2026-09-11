import type { Metadata } from "next";
import MenuClient from "@/components/MenuClient";
import { menuCategories } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the full Sri Lakshmi Family Restaurant menu — rice & curry, kottu, noodles, beverages and more.",
};

export default function MenuPage() {
  return (
    <div className="py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Our Menu
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-charcoal sm:text-5xl">
          Something for everyone
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-charcoal/70">
          Prices below are placeholder figures used to build this page —
          they&apos;ll be updated with the real menu shortly. All dishes are
          prepared fresh to order.
        </p>
      </div>

      <div className="mt-8">
        <MenuClient categories={menuCategories} />
      </div>
    </div>
  );
}
