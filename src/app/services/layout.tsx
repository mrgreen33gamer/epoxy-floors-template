import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Epoxy Flooring Services | PolyCoat Floors — Waco, TX',
  description:
    'PolyCoat Floors offers garage epoxy, metallic epoxy, flake systems, commercial epoxy, concrete polish, and floor repair & recoat for Waco and Central Texas. Certified coatings installers, 5-Year Coating Warranty.',
  keywords: [
    'epoxy flooring services Waco TX',
    'garage epoxy floor Waco',
    'metallic epoxy Central Texas',
    'flake epoxy system Waco',
    'commercial epoxy Waco',
    'concrete polish Waco',
    'epoxy floor recoat Central Texas',
  ],
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: 'Epoxy Flooring Services | PolyCoat Floors',
    description:
      'Garage epoxy, metallic, flake systems, commercial coatings, polish, and repairs for Waco and Central Texas.',
    url: `${BASE}/services`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
