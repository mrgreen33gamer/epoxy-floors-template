import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Service Areas | PolyCoat Floors — Waco, Temple, Killeen & Central Texas',
  description:
    'PolyCoat Floors serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and Central Texas. Free on-site quotes. Flat-rate quotes.',
  alternates: { canonical: `${BASE}/service-areas` },
  openGraph: {
    title: 'Service Areas | PolyCoat Floors',
    description: 'Garage epoxy floors, metallic floors, flake systems, and floor coating across Central Texas.',
    url: `${BASE}/service-areas`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
