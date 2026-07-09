import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Homebuilders Epoxy Flooring Partner | PolyCoat Floors — Waco, TX',
  description: 'Epoxy flooring partner for homebuilders in Waco and Central Texas — garage and decorative floors on production schedules.',
  alternates: { canonical: `${BASE}/industries/homebuilders` },
  openGraph: {
    title: 'Homebuilders | PolyCoat Floors',
    description: 'Epoxy flooring partner for homebuilders in Waco and Central Texas — garage and decorative floors on production schedules.',
    url: `${BASE}/industries/homebuilders`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
