import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Concrete Polish in Waco, TX | PolyCoat Floors',
  description: 'Concrete polishing in Waco, TX — modern sheen, easy care, honest polish-vs-coat advice. Flat-rate quotes.',
  keywords: ["polished concrete Waco TX","concrete polish commercial Central Texas","polished floor Waco","concrete grinding polish Hewitt"],
  alternates: { canonical: `${BASE}/services/concrete-polish` },
  openGraph: {
    title: 'Concrete Polish | PolyCoat Floors — Waco, TX',
    description: 'Concrete polishing in Waco, TX — modern sheen, easy care, honest polish-vs-coat advice. Flat-rate quotes.',
    url: `${BASE}/services/concrete-polish`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
