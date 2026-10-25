import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({ src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", display: "swap", variable: "--font-inter", weight: "100 900" });

export const metadata: Metadata = {
  title: "INBOXMEN — Email & Retention for Shopify Brands",
  description: "Klaviyo flows and campaigns that turn subscribers into repeat buyers.",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}
