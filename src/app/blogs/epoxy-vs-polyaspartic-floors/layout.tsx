import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: "Epoxy vs. Polyaspartic Floors: Which Is Right for Your Garage? | PolyCoat Floors",
  description: "Cure time, UV stability, cost, and durability — how to choose between epoxy and polyaspartic garage floor systems in Central Texas.",
  keywords: ["epoxy vs polyaspartic","polyaspartic garage floor","epoxy garage floor Waco","best garage floor coating Texas"],
  alternates: { canonical: `${BASE}/blogs/epoxy-vs-polyaspartic-floors` },
  openGraph: {
    title: "Epoxy vs. Polyaspartic Floors: Which Is Right for Your Garage?",
    description: "Cure time, UV stability, cost, and durability — how to choose between epoxy and polyaspartic garage floor systems in Central Texas.",
    url: `${BASE}/blogs/epoxy-vs-polyaspartic-floors`,
    siteName: 'PolyCoat Floors',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
