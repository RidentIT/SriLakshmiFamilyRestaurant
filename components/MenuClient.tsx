"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { MenuCategory } from "@/data/menu";
import MenuItemCard from "@/components/MenuItemCard";

export default function MenuClient({ categories }: { categories: MenuCategory[] }) {
  const [query, setQuery] = useState("");
  const [activeSlug, setActiveSlug] = useState(categories[0]?.slug ?? "");
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const normalizedQuery = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return categories;
    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.name.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [categories, normalizedQuery]);

  const hasResults = filteredCategories.length > 0;
  const isSearching = normalizedQuery.length > 0;

  // Highlight the category tab for whichever section is currently in view.
  useEffect(() => {
    if (isSearching) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSlug(visible[0].target.id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isSearching, categories]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="sticky top-16 z-30 -mx-4 bg-charcoal/95 px-4 pb-4 pt-4 backdrop-blur supports-[backdrop-filter]:bg-charcoal/90 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <label htmlFor="menu-search" className="sr-only">
          Search the menu
        </label>
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cream/40"
          >
            <circle cx="11" cy="11" r="7" />
            <path strokeLinecap="round" d="m20 20-3.5-3.5" />
          </svg>
          <input
            id="menu-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the menu, e.g. kottu, juice, rice..."
            className="h-12 w-full rounded-full border border-cream/15 bg-white/10 pl-11 pr-4 text-sm text-cream shadow-sm outline-none placeholder:text-cream/40 focus:border-gold/50 focus:ring-2 focus:ring-gold/40"
          />
        </div>

        {!isSearching && (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeSlug === category.slug
                    ? "bg-gold text-maroon-dark"
                    : "bg-white/10 text-cream/70 hover:bg-white/15"
                }`}
              >
                {category.name}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-12">
        {!isSearching && (
          <nav className="hidden lg:block">
            <ul className="sticky top-40 space-y-1">
              {categories.map((category) => (
                <li key={category.slug}>
                  <a
                    href={`#${category.slug}`}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      activeSlug === category.slug
                        ? "bg-gold/10 text-gold"
                        : "text-cream/60 hover:bg-white/5 hover:text-cream"
                    }`}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className={isSearching ? "lg:col-span-2" : ""}>
          {!hasResults && (
            <p className="rounded-2xl bg-white/5 p-8 text-center text-sm text-cream/60 shadow-sm ring-1 ring-white/10">
              No dishes found for &ldquo;{query}&rdquo;. Try a different search.
            </p>
          )}

          <div className="space-y-14">
            {filteredCategories.map((category) => (
              <section
                key={category.slug}
                id={category.slug}
                ref={(el) => {
                  if (el) sectionRefs.current.set(category.slug, el);
                  else sectionRefs.current.delete(category.slug);
                }}
              >
                <div className="border-b border-gold/30 pb-3">
                  <h2 className="font-display text-2xl font-semibold text-gold">
                    {category.name}
                  </h2>
                  {category.note && (
                    <p className="mt-1 text-sm text-cream/60">{category.note}</p>
                  )}
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
