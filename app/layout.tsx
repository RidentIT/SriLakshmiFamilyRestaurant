import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RESTAURANT } from "@/data/restaurant";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${RESTAURANT.name} — Authentic Sri Lankan Cooking`,
    template: `%s — ${RESTAURANT.name}`,
  },
  description: RESTAURANT.description,
  openGraph: {
    title: RESTAURANT.name,
    description: RESTAURANT.description,
    type: "website",
    locale: "en_LK",
    images: ["/logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#6b1220",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-body text-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
