import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Commercial Epoxy in Waco, TX | PolyCoat Floors',
  description: 'Commercial epoxy flooring in Waco, TX — warehouses, shops, and facilities. Insured, schedule-driven, 5-Year Coating Warranty.',
  keywords: ["commercial epoxy flooring Waco TX","warehouse floor coating Central Texas","industrial epoxy Waco","auto shop floor epoxy"],
  alternates: { canonical: `${BASE}/services/commercial-epoxy` },
  openGraph: {
    title: 'Commercial Epoxy | PolyCoat Floors — Waco, TX',
    description: 'Commercial epoxy flooring in Waco, TX — warehouses, shops, and facilities. Insured, schedule-driven, 5-Year Coating Warranty.',
    url: `${BASE}/services/commercial-epoxy`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
