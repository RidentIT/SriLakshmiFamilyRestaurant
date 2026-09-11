import Image from "next/image";

/**
 * The source logo artwork (public/logo.jpg) is a square card that also
 * includes a divider line and a phone number below the wordmark — that
 * number doesn't match the restaurant's real number, so every usage here
 * crops to the top 70% (lotus mark + wordmark only) via a locked 10:7
 * aspect-ratio container with object-position "top". Pass only a height
 * class (e.g. "h-12") — width is derived from the aspect ratio, so the
 * crop can't drift out of sync between call sites the way separately
 * hand-picked height/width pairs did.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`relative aspect-[10/7] overflow-hidden ${className ?? "h-12"}`}>
      <Image
        src="/logo.jpg"
        alt="Sri Lakshmi Family Restaurant"
        fill
        className="object-cover object-top"
        sizes="140px"
      />
    </div>
  );
}
