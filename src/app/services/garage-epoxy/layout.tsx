import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: 'Garage Epoxy in Waco, TX | PolyCoat Floors',
  description: 'Garage epoxy flooring in Waco, TX. Diamond grind prep, flat-rate quotes, certified installers, 5-Year Coating Warranty.',
  keywords: ["garage epoxy Waco TX","garage floor coating Waco","epoxy garage floor Central Texas","garage epoxy installation Hewitt","flake garage floor Woodway"],
  alternates: { canonical: `${BASE}/services/garage-epoxy` },
  openGraph: {
    title: 'Garage Epoxy | PolyCoat Floors — Waco, TX',
    description: 'Garage epoxy flooring in Waco, TX. Diamond grind prep, flat-rate quotes, certified installers, 5-Year Coating Warranty.',
    url: `${BASE}/services/garage-epoxy`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
