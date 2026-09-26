import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { site } from "../data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },

  description: site.description,

  manifest: "/manifest.webmanifest",

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },

  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Amit Awad — Builder. Engineer. Entrepreneur.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og-image.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}