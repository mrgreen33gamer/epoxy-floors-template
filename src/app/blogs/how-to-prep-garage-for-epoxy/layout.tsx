import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: "How to Prep Your Garage for Epoxy (What Pros Actually Do) | PolyCoat Floors",
  description: "Moisture testing, diamond grinding, crack repair, and oil removal — the prep steps that decide whether epoxy lasts years or peels in months.",
  keywords: ["garage epoxy prep","diamond grind epoxy","how to prep garage floor for epoxy","epoxy floor prep Waco"],
  alternates: { canonical: `${BASE}/blogs/how-to-prep-garage-for-epoxy` },
  openGraph: {
    title: "How to Prep Your Garage for Epoxy (What Pros Actually Do)",
    description: "Moisture testing, diamond grinding, crack repair, and oil removal — the prep steps that decide whether epoxy lasts years or peels in months.",
    url: `${BASE}/blogs/how-to-prep-garage-for-epoxy`,
    siteName: 'PolyCoat Floors',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
