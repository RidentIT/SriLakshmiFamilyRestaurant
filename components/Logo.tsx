import Image from "next/image";

/**
 * The source logo artwork (public/logo.jpg) is a square card that also
 * includes a divider line and a phone number below the wordmark — that
 * number doesn't match the restaurant's real number, so every usage here
 * crops to the top ~70% (lotus mark + wordmark only) via a wide, short
 * container with object-position "top".
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ring-1 ring-gold/30 ${className ?? "h-12 w-[4.7rem]"}`}
    >
      <Image
        src="/logo.jpg"
        alt="Sri Lakshmi Family Restaurant"
        fill
        className="object-cover object-top"
        sizes="120px"
      />
    </div>
  );
}
