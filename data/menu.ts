// ---------------------------------------------------------------------------
// MENU DATA — PLACEHOLDER CONTENT
// ---------------------------------------------------------------------------
// Everything in this file (categories, items, descriptions, prices) is
// placeholder data used to build and test the menu page UI. It is clearly
// marked with `placeholder: true` on every item.
//
// TO UPDATE WITH THE REAL MENU: replace the `menuCategories` array below.
// The three pricing shapes (`single`, `sized`, `variant`) already cover every
// case this menu needs — see the type definitions for how each works.
// ---------------------------------------------------------------------------

/** A single flat price, e.g. a soft drink at Rs. 150. */
export type SinglePrice = {
  kind: "single";
  price: number;
};

/** A menu item sold in fixed sizes with different prices, e.g. Normal / Full. */
export type SizedPrice = {
  kind: "sized";
  sizes: { label: string; price: number }[];
};

/** A menu item sold as a choice of variants, each with its own price,
 *  e.g. Chicken / Seafood / Mixed kottu. */
export type VariantPrice = {
  kind: "variant";
  variants: { label: string; price: number }[];
};

export type MenuItemPricing = SinglePrice | SizedPrice | VariantPrice;

export type MenuItem = {
  /** Stable identifier, used as a React key and for future deep-linking. */
  id: string;
  name: string;
  description?: string;
  /** Path under /public, e.g. "/placeholder-dish-1.svg" */
  image?: string;
  pricing: MenuItemPricing;
  /** Marks this item's content as placeholder, to be replaced with real menu data. */
  placeholder?: boolean;
};

export type MenuCategory = {
  slug: string;
  name: string;
  /** Optional short note shown under the category heading, e.g. "Served with rice & 3 curries". */
  note?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    slug: "rice-and-curry",
    name: "Rice & Curry",
    note: "Served with a selection of home-style curries",
    items: [
      {
        id: "rc-chicken",
        name: "Chicken Rice & Curry",
        description: "Steamed rice with chicken curry, dhal and seasonal vegetables.",
        image: "/dish-plating.jpg",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 450 },
            { label: "Full", price: 650 },
          ],
        },
        placeholder: true,
      },
      {
        id: "rc-vegetable",
        name: "Vegetable Rice & Curry",
        description: "Steamed rice with a rotating selection of vegetable curries.",
        image: "/placeholder-dish-2.svg",
        pricing: { kind: "single", price: 350 },
        placeholder: true,
      },
      {
        id: "rc-special",
        name: "Special Rice & Curry",
        description: "Rice & curry with your choice of chicken, seafood, or mixed.",
        image: "/dish-fine-dining.jpg",
        pricing: {
          kind: "variant",
          variants: [
            { label: "Chicken", price: 550 },
            { label: "Seafood", price: 650 },
            { label: "Mixed", price: 750 },
          ],
        },
        placeholder: true,
      },
    ],
  },
  {
    slug: "kottu-and-noodles",
    name: "Kottu & Noodles",
    note: "Hand-chopped kottu, wok-tossed to order",
    items: [
      {
        id: "kn-chicken-kottu",
        name: "Chicken Kottu",
        description: "Shredded roti tossed with chicken, egg and vegetables.",
        image: "/placeholder-dish-4.svg",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 500 },
            { label: "Full", price: 700 },
          ],
        },
        placeholder: true,
      },
      {
        id: "kn-vegetable-noodles",
        name: "Vegetable Noodles",
        description: "Stir-fried noodles with fresh garden vegetables.",
        image: "/placeholder-dish-5.svg",
        pricing: { kind: "single", price: 400 },
        placeholder: true,
      },
      {
        id: "kn-special-kottu",
        name: "Special Kottu",
        description: "Our signature kottu, made your way.",
        pricing: {
          kind: "variant",
          variants: [
            { label: "Chicken", price: 600 },
            { label: "Seafood", price: 700 },
            { label: "Mixed", price: 800 },
          ],
        },
        placeholder: true,
      },
    ],
  },
  {
    slug: "beverages-and-sides",
    name: "Beverages & Sides",
    note: "To go with your meal",
    items: [
      {
        id: "bs-king-coconut",
        name: "King Coconut",
        description: "Chilled and served fresh.",
        image: "/placeholder-dish-6.svg",
        pricing: { kind: "single", price: 150 },
        placeholder: true,
      },
      {
        id: "bs-fruit-juice",
        name: "Fresh Fruit Juice",
        description: "Choice of seasonal fruit, blended fresh to order.",
        pricing: {
          kind: "variant",
          variants: [
            { label: "Mango", price: 250 },
            { label: "Pineapple", price: 220 },
            { label: "Watermelon", price: 200 },
          ],
        },
        placeholder: true,
      },
      {
        id: "bs-papadum",
        name: "Papadum (3 pcs)",
        description: "Crisp lentil wafers.",
        pricing: { kind: "single", price: 90 },
        placeholder: true,
      },
    ],
  },
];
