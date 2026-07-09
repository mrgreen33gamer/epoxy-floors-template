import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Metallic Epoxy in Waco, TX | PolyCoat Floors',
  description: 'Metallic epoxy floors in Waco, TX. Custom color and flow, flat-rate quotes, certified installers, 5-Year Coating Warranty.',
  keywords: ["metallic epoxy Waco TX","metallic epoxy floor Central Texas","decorative epoxy flooring Waco","metallic garage floor Temple"],
  alternates: { canonical: `${BASE}/services/metallic-epoxy` },
  openGraph: {
    title: 'Metallic Epoxy | PolyCoat Floors — Waco, TX',
    description: 'Metallic epoxy floors in Waco, TX. Custom color and flow, flat-rate quotes, certified installers, 5-Year Coating Warranty.',
    url: `${BASE}/services/metallic-epoxy`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
