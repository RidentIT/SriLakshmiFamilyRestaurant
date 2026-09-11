import type { Metadata } from "next";
import MotionSection from "@/components/MotionSection";
import { RESTAURANT } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Contact & Location",
  description: `Find, call or visit ${RESTAURANT.name} on Jaffna Road, Sandamalgama, Rambewa, Anuradhapura.`,
};

const SERVICES = [
  { label: "Dine-In", available: RESTAURANT.services.dineIn },
  { label: "Takeaway", available: RESTAURANT.services.takeaway },
  { label: "Delivery", available: RESTAURANT.services.delivery },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-charcoal pt-28 pb-10 sm:pt-32 sm:pb-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          Contact &amp; Location
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-cream sm:text-5xl">
          Find us, call us, come say hello
        </h1>
      </div>

      <MotionSection className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:p-10">
            <h2 className="font-display text-xl font-semibold text-gold">
              {RESTAURANT.name}
            </h2>

            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-cream/45">
                  Address
                </dt>
                <dd className="mt-1 text-base leading-relaxed text-cream/80">
                  {RESTAURANT.addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-cream/45">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={RESTAURANT.phoneHref}
                    className="text-lg font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold/80"
                  >
                    {RESTAURANT.phoneDisplay}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-cream/45">
                  Hours
                </dt>
                <dd className="mt-1 text-base text-cream/80">
                  {RESTAURANT.hoursDisplay} &middot; {RESTAURANT.hoursNote}
                </dd>
              </div>
            </dl>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {SERVICES.map((service) => (
                <div
                  key={service.label}
                  className={`rounded-xl px-3 py-3 text-center ${
                    service.available ? "bg-gold/10" : "bg-white/5"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold ${
                      service.available ? "text-gold" : "text-cream/35"
                    }`}
                  >
                    {service.label}
                  </p>
                  <p
                    className={`mt-1 text-xs ${
                      service.available ? "text-cream/60" : "text-cream/35"
                    }`}
                  >
                    {service.available ? "Available" : "Not yet available"}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={RESTAURANT.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-maroon-dark transition-colors hover:bg-gold/90 sm:w-auto"
            >
              Get Directions
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <iframe
              title={`Map showing the location of ${RESTAURANT.name}`}
              src={RESTAURANT.mapsEmbedSrc}
              className="h-full min-h-[320px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection
        id="reserve"
        className="mx-auto mt-20 max-w-6xl px-4 pb-8 sm:px-6 lg:px-8"
      >
        <div className="overflow-hidden rounded-3xl bg-white/5 text-center ring-1 ring-gold/20">
          <div className="mx-auto max-w-xl px-6 py-14 sm:px-10 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Reserve a Table
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
              Planning a family gathering?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              We don&apos;t take bookings online yet — but with seating for
              up to {RESTAURANT.seatingCapacity} guests, we can almost always
              find you a table. Give us a call and we&apos;ll get you sorted.
            </p>
            <a
              href={RESTAURANT.phoneHref}
              className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-10 text-lg font-semibold text-maroon-dark shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] hover:bg-gold/90 active:scale-[0.99]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.9c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
              </svg>
              Call {RESTAURANT.phoneDisplay}
            </a>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
