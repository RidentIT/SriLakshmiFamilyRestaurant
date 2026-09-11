// ---------------------------------------------------------------------------
// MENU DATA
// ---------------------------------------------------------------------------
// The real Sri Lakshmi Family Restaurant menu. Add or edit categories and
// items directly in the `menuCategories` array below — the menu page,
// search, and the home page's "Featured Dishes" section (see app/page.tsx)
// all read from this single file.
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
    slug: "fried-rice",
    name: "Fried Rice",
    items: [
      {
        id: "fr-chicken",
        name: "Chicken Fried",
        image: "/dish-plating.jpg",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 800 },
            { label: "Full", price: 1000 },
          ],
        },
      },
      {
        id: "fr-vegetable",
        name: "Vegetable Fried",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 550 },
            { label: "Full", price: 700 },
          ],
        },
      },
      {
        id: "fr-egg",
        name: "Egg Fried",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 650 },
            { label: "Full", price: 850 },
          ],
        },
      },
      {
        id: "fr-seafood",
        name: "Seafood Fried",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 1050 },
            { label: "Full", price: 1300 },
          ],
        },
      },
      {
        id: "fr-mixed",
        name: "Mixed Fried",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 1200 },
            { label: "Full", price: 1500 },
          ],
        },
      },
    ],
  },
  {
    slug: "kottu",
    name: "Kottu",
    items: [
      {
        id: "ko-chicken",
        name: "Chicken Kottu",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 800 },
            { label: "Full", price: 1000 },
          ],
        },
      },
      {
        id: "ko-vegetable",
        name: "Vegetable Kottu",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 550 },
            { label: "Full", price: 700 },
          ],
        },
      },
      {
        id: "ko-egg",
        name: "Egg Kottu",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 650 },
            { label: "Full", price: 850 },
          ],
        },
      },
      {
        id: "ko-seafood",
        name: "Seafood Kottu",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 1050 },
            { label: "Full", price: 1300 },
          ],
        },
      },
      {
        id: "ko-mixed",
        name: "Mixed Kottu",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 1200 },
            { label: "Full", price: 1500 },
          ],
        },
      },
    ],
  },
  {
    slug: "noodles",
    name: "Noodles",
    items: [
      {
        id: "no-vegetable",
        name: "Vegetable Noodles",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 550 },
            { label: "Full", price: 700 },
          ],
        },
      },
      {
        id: "no-egg",
        name: "Egg Noodles",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 650 },
            { label: "Full", price: 850 },
          ],
        },
      },
      {
        id: "no-chicken",
        name: "Chicken Noodles",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 800 },
            { label: "Full", price: 1000 },
          ],
        },
      },
      {
        id: "no-seafood",
        name: "Seafood Noodles",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 1050 },
            { label: "Full", price: 1300 },
          ],
        },
      },
      {
        id: "no-mixed",
        name: "Mixed Noodles",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 1200 },
            { label: "Full", price: 1500 },
          ],
        },
      },
    ],
  },
  {
    slug: "pasta",
    name: "Pasta",
    items: [
      {
        id: "pa-vegetable",
        name: "Vegetable Pasta",
        pricing: { kind: "single", price: 700 },
      },
      {
        id: "pa-egg",
        name: "Egg Pasta",
        pricing: { kind: "single", price: 850 },
      },
      {
        id: "pa-chicken",
        name: "Chicken Pasta",
        pricing: { kind: "single", price: 1000 },
      },
      {
        id: "pa-seafood",
        name: "Seafood Pasta",
        pricing: { kind: "single", price: 1300 },
      },
      {
        id: "pa-mixed",
        name: "Mixed Pasta",
        pricing: { kind: "single", price: 1500 },
      },
    ],
  },
  {
    slug: "string-hopper-kottu",
    name: "String Hopper Kottu",
    items: [
      {
        id: "sh-vegetable",
        name: "Vegetable",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 550 },
            { label: "Full", price: 700 },
          ],
        },
      },
      {
        id: "sh-egg",
        name: "Egg",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 650 },
            { label: "Full", price: 850 },
          ],
        },
      },
      {
        id: "sh-chicken",
        name: "Chicken",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 800 },
            { label: "Full", price: 1000 },
          ],
        },
      },
      {
        id: "sh-seafood",
        name: "Seafood",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 1050 },
            { label: "Full", price: 1300 },
          ],
        },
      },
      {
        id: "sh-mixed",
        name: "Mixed",
        pricing: {
          kind: "sized",
          sizes: [
            { label: "Normal", price: 1200 },
            { label: "Full", price: 1500 },
          ],
        },
      },
    ],
  },
  {
    slug: "cheese-kottu",
    name: "Cheese Kottu",
    items: [
      {
        id: "ck-vegetable",
        name: "Vegetable",
        pricing: { kind: "single", price: 1200 },
      },
      {
        id: "ck-egg",
        name: "Egg",
        pricing: { kind: "single", price: 1350 },
      },
      {
        id: "ck-chicken",
        name: "Chicken",
        pricing: { kind: "single", price: 1550 },
      },
      {
        id: "ck-seafood",
        name: "Seafood",
        pricing: { kind: "single", price: 1700 },
      },
      {
        id: "ck-mixed",
        name: "Mixed",
        pricing: { kind: "single", price: 1850 },
      },
    ],
  },
  {
    slug: "cheese-pasta",
    name: "Cheese Pasta",
    items: [
      {
        id: "cp-vegetable",
        name: "Vegetable",
        pricing: { kind: "single", price: 1200 },
      },
      {
        id: "cp-egg",
        name: "Egg",
        pricing: { kind: "single", price: 1350 },
      },
      {
        id: "cp-chicken",
        name: "Chicken",
        pricing: { kind: "single", price: 1550 },
      },
      {
        id: "cp-seafood",
        name: "Seafood",
        pricing: { kind: "single", price: 1700 },
      },
      {
        id: "cp-mixed",
        name: "Mixed",
        pricing: { kind: "single", price: 1850 },
      },
    ],
  },
  {
    slug: "special-items",
    name: "Special Items",
    items: [
      {
        id: "sp-thai-rice",
        name: "Thai Rice",
        description: "A mix of chicken, fish, prawns, sausage, and cuttlefish.",
        image: "/dish-fine-dining.jpg",
        pricing: { kind: "single", price: 1950 },
      },
      {
        id: "sp-mongolian-rice",
        name: "Mongolian Rice",
        description: "Choice of vegetable, egg, chicken, seafood, or mixed.",
        pricing: { kind: "single", price: 2150 },
      },
      {
        id: "sp-chopsey-rice",
        name: "Chopsey Rice",
        pricing: {
          kind: "variant",
          variants: [
            { label: "Chicken", price: 2100 },
            { label: "Seafood", price: 2400 },
            { label: "Mixed", price: 2700 },
            { label: "Special", price: 2900 },
            { label: "Crab Curry", price: 2500 },
          ],
        },
      },
    ],
  },
  {
    slug: "side-dishes",
    name: "Side Dishes",
    items: [
      {
        id: "sd-devil-chicken",
        name: "Devil Chicken",
        pricing: { kind: "single", price: 1300 },
      },
      {
        id: "sd-chilly-chicken",
        name: "Chilly Chicken",
        pricing: { kind: "single", price: 1350 },
      },
      {
        id: "sd-pepper-chicken",
        name: "Pepper Chicken",
        pricing: { kind: "single", price: 1400 },
      },
      {
        id: "sd-chicken-stew",
        name: "Chicken Stew",
        pricing: { kind: "single", price: 1400 },
      },
      {
        id: "sd-fried-chicken",
        name: "Fried Chicken",
        pricing: { kind: "single", price: 300 },
      },
      {
        id: "sd-seafood-devil",
        name: "Seafood Devil",
        description: "Cuttlefish, prawns, or fish, cooked devilled style.",
        pricing: { kind: "single", price: 1600 },
      },
      {
        id: "sd-seafood-chilly",
        name: "Seafood Chilly",
        description: "Cuttlefish, prawns, or fish, cooked chilli style.",
        pricing: { kind: "single", price: 1700 },
      },
      {
        id: "sd-seafood-curry",
        name: "Seafood Curry",
        description: "Cuttlefish, prawns, or fish curry.",
        pricing: { kind: "single", price: 1850 },
      },
      {
        id: "sd-seafood-fried",
        name: "Seafood Fried",
        description: "Cuttlefish, prawns, or fish, fried.",
        pricing: { kind: "single", price: 1550 },
      },
    ],
  },
  {
    slug: "indian",
    name: "Indian",
    items: [
      {
        id: "in-thosai",
        name: "Thosai",
        pricing: { kind: "single", price: 100 },
      },
      {
        id: "in-ulundu-wade",
        name: "Ulundu Wade",
        pricing: { kind: "single", price: 100 },
      },
      {
        id: "in-parippu-wade",
        name: "Parippu Wade",
        description: "Lentil vada.",
        pricing: { kind: "single", price: 70 },
      },
      {
        id: "in-plain-naan",
        name: "Plain Naan",
        pricing: { kind: "single", price: 160 },
      },
      {
        id: "in-butter-naan",
        name: "Butter Naan",
        pricing: { kind: "single", price: 230 },
      },
      {
        id: "in-paratha",
        name: "Paratha",
        pricing: { kind: "single", price: 80 },
      },
      {
        id: "in-roti",
        name: "Roti",
        pricing: { kind: "single", price: 50 },
      },
    ],
  },
  // NOTE: Pricing label was ambiguous in the source menu — confirm with
  // owner before publishing. Currently interpreted as Vegetarian Rs.450 /
  // Non-Vegetarian Rs.550 for each of the Breakfast, Lunch, and Dinner
  // buffets below.
  {
    slug: "buffet",
    name: "Buffet",
    note: "Vegetarian and Non-Vegetarian options available.",
    items: [
      {
        id: "bf-breakfast",
        name: "Breakfast Buffet",
        description:
          "Bread, cereal, string hoppers, milk rice, paratha, thosai, red rice, white rice, dhal, a fried item, coconut milk gravy, meat curry (chicken or fish), and coconut sambol.",
        pricing: {
          kind: "variant",
          variants: [
            { label: "Vegetarian", price: 450 },
            { label: "Non-Vegetarian", price: 550 },
          ],
        },
      },
      {
        id: "bf-lunch",
        name: "Lunch Buffet",
        description:
          "White rice, red rice, dhal, a fried item, a chilli item, a gravy, mixed green mallung, meat curry (chicken, ambulthiyal, or lake fish), poppadum, and pickle. Set menu and biryani also available.",
        pricing: {
          kind: "variant",
          variants: [
            { label: "Vegetarian", price: 450 },
            { label: "Non-Vegetarian", price: 550 },
          ],
        },
      },
      {
        id: "bf-dinner",
        name: "Dinner Buffet",
        description:
          "String hoppers, thosai, pittu, bread or rose bread, roti, white rice, red rice, dhal, assorted curries, a fried item, meat, and coconut sambol. Set menu and biryani also available.",
        pricing: {
          kind: "variant",
          variants: [
            { label: "Vegetarian", price: 450 },
            { label: "Non-Vegetarian", price: 550 },
          ],
        },
      },
      {
        id: "bf-biryani-dried-fish",
        name: "Biryani Add-on: Dried Fish (Hurulla)",
        pricing: { kind: "single", price: 200 },
      },
      {
        id: "bf-biryani-lake-fish",
        name: "Biryani Add-on: Lake Fish",
        pricing: { kind: "single", price: 250 },
      },
      {
        id: "bf-biryani-omelette",
        name: "Biryani Add-on: Omelette",
        pricing: { kind: "single", price: 100 },
      },
      {
        id: "bf-biryani-prawns",
        name: "Biryani Add-on: Prawns",
        pricing: { kind: "single", price: 250 },
      },
    ],
  },
  {
    slug: "soup",
    name: "Soup",
    items: [
      {
        id: "so-vegetable",
        name: "Vegetable Soup",
        pricing: { kind: "single", price: 550 },
      },
      {
        id: "so-chicken",
        name: "Chicken Soup",
        pricing: { kind: "single", price: 550 },
      },
      {
        id: "so-sweet-corn",
        name: "Sweet Corn Soup",
        pricing: { kind: "single", price: 550 },
      },
    ],
  },
  {
    slug: "short-eats",
    name: "Short Eats",
    items: [
      {
        id: "se-rolls",
        name: "Rolls",
        pricing: { kind: "single", price: 150 },
      },
      {
        id: "se-patties",
        name: "Patties",
        pricing: { kind: "single", price: 150 },
      },
      {
        id: "se-vegetable-roti",
        name: "Vegetable Roti",
        pricing: { kind: "single", price: 150 },
      },
      {
        id: "se-buns",
        name: "Buns",
        pricing: { kind: "single", price: 150 },
      },
      {
        id: "se-cake",
        name: "Cake",
        pricing: { kind: "single", price: 150 },
      },
    ],
  },
  {
    slug: "tea-beverages",
    name: "Tea & Beverages",
    items: [
      {
        id: "tb-plain-tea",
        name: "Plain Tea",
        pricing: { kind: "single", price: 60 },
      },
      {
        id: "tb-milk-tea",
        name: "Milk Tea",
        pricing: { kind: "single", price: 150 },
      },
      {
        id: "tb-nescafe",
        name: "Nescafe",
        pricing: { kind: "single", price: 150 },
      },
      {
        id: "tb-nestomalt",
        name: "Nestomalt",
        pricing: { kind: "single", price: 150 },
      },
    ],
  },
  {
    slug: "fresh-juice",
    name: "Fresh Juice",
    items: [
      {
        id: "fj-lime",
        name: "Lime",
        pricing: { kind: "single", price: 250 },
      },
      {
        id: "fj-avocado",
        name: "Avocado",
        pricing: { kind: "single", price: 250 },
      },
      {
        id: "fj-mango",
        name: "Mango",
        pricing: { kind: "single", price: 250 },
      },
      {
        id: "fj-papaya",
        name: "Papaya",
        pricing: { kind: "single", price: 250 },
      },
      {
        id: "fj-mixed",
        name: "Mixed",
        pricing: { kind: "single", price: 250 },
      },
      {
        id: "fj-pineapple",
        name: "Pineapple",
        pricing: { kind: "single", price: 250 },
      },
    ],
  },
  {
    slug: "ice-cream",
    name: "Ice Cream",
    items: [
      {
        id: "ic-ice-cream",
        name: "Ice Cream",
        pricing: { kind: "single", price: 150 },
      },
    ],
  },
];
