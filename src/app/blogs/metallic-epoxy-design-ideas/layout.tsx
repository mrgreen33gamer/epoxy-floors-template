import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: "Metallic Epoxy Design Ideas for Homes and Showrooms | PolyCoat Floors",
  description: "Color movement, high-gloss depth, and layout ideas for metallic epoxy floors in living spaces, offices, garages, and retail showrooms.",
  keywords: ["metallic epoxy design ideas","metallic epoxy colors","decorative epoxy flooring ideas","metallic floor Waco TX"],
  alternates: { canonical: `${BASE}/blogs/metallic-epoxy-design-ideas` },
  openGraph: {
    title: "Metallic Epoxy Design Ideas for Homes and Showrooms",
    description: "Color movement, high-gloss depth, and layout ideas for metallic epoxy floors in living spaces, offices, garages, and retail showrooms.",
    url: `${BASE}/blogs/metallic-epoxy-design-ideas`,
    siteName: 'PolyCoat Floors',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
