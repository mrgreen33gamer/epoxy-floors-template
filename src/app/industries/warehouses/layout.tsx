import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Warehouses Epoxy Flooring Partner | PolyCoat Floors — Waco, TX',
  description: 'Warehouse and facility epoxy flooring in Central Texas — durable systems, phased installs, schedule-driven crews.',
  alternates: { canonical: `${BASE}/industries/warehouses` },
  openGraph: {
    title: 'Warehouses | PolyCoat Floors',
    description: 'Warehouse and facility epoxy flooring in Central Texas — durable systems, phased installs, schedule-driven crews.',
    url: `${BASE}/industries/warehouses`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
