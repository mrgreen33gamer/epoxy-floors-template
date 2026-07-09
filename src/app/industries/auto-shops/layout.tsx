import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Auto Shops Epoxy Flooring Partner | PolyCoat Floors — Waco, TX',
  description: 'Epoxy flooring for auto shops and service centers in Waco and Central Texas — durable, cleanable, insured.',
  alternates: { canonical: `${BASE}/industries/auto-shops` },
  openGraph: {
    title: 'Auto Shops | PolyCoat Floors',
    description: 'Epoxy flooring for auto shops and service centers in Waco and Central Texas — durable, cleanable, insured.',
    url: `${BASE}/industries/auto-shops`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
