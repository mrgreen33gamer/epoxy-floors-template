import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.polycoatfloors.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact PolyCoat Floors | Free Quotes in Waco & Central Texas',
  description:
    'Contact PolyCoat Floors to schedule a free in-home estimate for hardwood, tile, LVP, carpet, commercial flooring, or repair. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 980-1919.',
  keywords: [
    'contact PolyCoat Waco',
    'flooring estimate Waco TX',
    'free flooring quote Central Texas',
    'PolyCoat contact',
    'licensed contractor Waco phone',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact PolyCoat Floors | Free Quotes in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Free on-site quotes. Flat-rate pricing, 5-Year Coating Warranty, licensed craftspeople.',
    url,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact PolyCoat Floors | Waco & Central Texas',
    description: 'Schedule a free flooring estimate. Call (254) 980-1919.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
