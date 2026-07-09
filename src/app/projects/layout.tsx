import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Projects Gallery | PolyCoat Floors — Waco, TX',
  description:
    'Epoxy project gallery by PolyCoat Floors across Central Texas — garage floors, metallic floors, flake systems, stamped & decorative floors coated, repairs, and commercial floor coating in Waco, Temple, Killeen, and beyond.',
  alternates: { canonical: `${BASE}/projects` },
  openGraph: {
    title: 'Projects Gallery | PolyCoat Floors',
    description:
      'A portfolio of garage floors, metallic floors, flake systems, decorative epoxy, repairs, and commercial floor coating completed by PolyCoat Floors across Central Texas.',
    url: `${BASE}/projects`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
