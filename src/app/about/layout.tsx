import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'About PolyCoat Floors | Waco Epoxy Flooring Contractor Since 2014',
  description:
    'PolyCoat Floors is a locally owned Waco epoxy flooring contractor founded in 2014 by Nina Park. certified coatings installers, bonded & insured, 5-Year Coating Warranty. 2,400+ floors coated across Central Texas.',
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: 'About PolyCoat Floors | Waco, TX',
    description:
      'Locally owned since 2014. Garage Epoxy, metallic floors, flake systems, and commercial floor coating for Central Texas.',
    url: `${BASE}/about`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
