// src/app/industries/layout.tsx
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.polycoatfloors.com';
const url      = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Builders, Designers & Hospitality | PolyCoat Floors",
  description:
    "PolyCoat Floors builds epoxy and floor coating programs for homebuilders and developers, interior designers, and commercial and hospitality groups across Central Texas.",
  keywords: [
    "homebuilder epoxy Waco",
    "interior designer floor coating Central Texas",
    "hospitality floor coating Waco TX",
    "commercial epoxyry property managers",
    "production epoxy builder Texas",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | PolyCoat Floors — Waco, TX",
    description:
      "Epoxyry programs for builders, designers, and hospitality groups across Central Texas.",
    url,
    siteName: "PolyCoat Floors",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | PolyCoat Floors",
    description: "Epoxyry programs for builders, designers, and hospitality groups across Central Texas.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Industries", item: url },
  ],
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  );
}
