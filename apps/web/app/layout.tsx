import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { ContextCursor } from "../components/ContextCursor";
import { site } from "../data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: site.title,
    description: "I EMPATHISE, I THINK & EXECUTE",
    type: "website",
    url: site.url
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <ContextCursor />
        <div className="site-transition" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
