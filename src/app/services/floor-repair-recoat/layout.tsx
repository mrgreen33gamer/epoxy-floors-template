import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Floor Repair & Recoat in Waco, TX | PolyCoat Floors',
  description: 'Epoxy floor repair and recoat in Waco, TX — peeling fixes, strip-and-recoat, honest advice. Flat-rate quotes.',
  keywords: ["epoxy floor repair Waco TX","recoat garage epoxy Central Texas","peeling epoxy fix Waco","epoxy floor recoat Hewitt"],
  alternates: { canonical: `${BASE}/services/floor-repair-recoat` },
  openGraph: {
    title: 'Floor Repair & Recoat | PolyCoat Floors — Waco, TX',
    description: 'Epoxy floor repair and recoat in Waco, TX — peeling fixes, strip-and-recoat, honest advice. Flat-rate quotes.',
    url: `${BASE}/services/floor-repair-recoat`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
