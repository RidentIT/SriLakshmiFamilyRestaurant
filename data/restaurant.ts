// Single source of truth for restaurant details used across the site
// (nav, footer, home, contact). Update this file if the restaurant's
// address, phone number, or hours ever change.

const ADDRESS = "Jaffna Road, Sandamalgama, Rambewa, Anuradhapura";

export const RESTAURANT = {
  name: "Sri Lakshmi Family Restaurant",
  shortName: "Sri Lakshmi",
  tagline: "Authentic, home-style Sri Lankan cooking served with warmth.",
  description:
    "A family-run restaurant on Jaffna Road, Sandamalgama serving authentic Sri Lankan rice & curry, kottu and more — dine-in or takeaway, open 24 hours.",

  address: ADDRESS,
  addressLines: ["Jaffna Road, Sandamalgama", "Rambewa, Anuradhapura"],

  phoneDisplay: "077 727 3794",
  phoneHref: "tel:+94777273794",

  hoursDisplay: "Open 24 Hours",
  hoursNote: "Every day, including public holidays",

  seatingCapacity: 80,

  services: {
    dineIn: true,
    takeaway: true,
    delivery: false,
  },

  mapsEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`,
  mapsDirectionsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
