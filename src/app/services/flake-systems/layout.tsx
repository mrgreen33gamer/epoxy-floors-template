import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Flake Systems in Waco, TX | PolyCoat Floors',
  description: 'Flake epoxy flooring systems in Waco, TX. Full broadcast, durable topcoats, flat-rate quotes, 5-Year Coating Warranty.',
  keywords: ["flake epoxy garage Waco","full broadcast flake floor Central Texas","garage flake system Waco TX","epoxy flake flooring Hewitt"],
  alternates: { canonical: `${BASE}/services/flake-systems` },
  openGraph: {
    title: 'Flake Systems | PolyCoat Floors — Waco, TX',
    description: 'Flake epoxy flooring systems in Waco, TX. Full broadcast, durable topcoats, flat-rate quotes, 5-Year Coating Warranty.',
    url: `${BASE}/services/flake-systems`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
