import Link from "next/link";
import Logo from "@/components/Logo";
import { NAV_LINKS, RESTAURANT } from "@/data/restaurant";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-charcoal text-cream/90">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo className="h-14" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            {RESTAURANT.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Visit Us
          </h3>
          <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-cream/80">
            {RESTAURANT.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>
          <a
            href={RESTAURANT.phoneHref}
            className="mt-3 inline-block text-sm font-medium text-cream underline decoration-gold/60 underline-offset-4 hover:text-gold"
          >
            {RESTAURANT.phoneDisplay}
          </a>
          <p className="mt-1 text-sm text-cream/80">{RESTAURANT.hoursDisplay}</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-cream/80 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {RESTAURANT.name}. All rights
            reserved.
          </p>
          <p>Dine-in &amp; Takeaway available · Seating for up to {RESTAURANT.seatingCapacity}</p>
        </div>
      </div>
    </footer>
  );
}
