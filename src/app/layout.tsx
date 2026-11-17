import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { profile, site } from "@/content/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: profile.fullName, url: site.url }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: profile.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    firstName: "Karl Naio",
    lastName: "Edio",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
  colorScheme: "dark",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#main"
          className="label sr-only z-50 bg-fg px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
