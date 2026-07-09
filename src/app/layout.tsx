// src/app/layout.tsx
// PolyCoat Floors — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#1a1025' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, ABeeZee } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS ─────────────────────────────────────────────────────────────────────
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-condensed",
});

const aBeeZee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abeezee",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.polycoatfloors.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a1025" },
    { media: "(prefers-color-scheme: dark)",  color: "#1a1025" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "PolyCoat Floors | Garage Epoxy, Metallic & Commercial Floors — Waco, TX",
    template: "%s | PolyCoat Floors",
  },
  description:
    "PolyCoat Floors is a Waco, TX epoxy flooring contractor offering garage epoxy, metallic epoxy, flake systems, commercial epoxy, concrete polish, and floor repair & recoat for Central Texas homes and businesses. Certified coatings installers, bonded & insured, 5-Year Coating Warranty.",
  keywords: [
    "PolyCoat Floors",
    "epoxy flooring contractor Waco TX",
    "garage epoxy floor Waco Texas",
    "metallic floor epoxy Central Texas",
    "flake epoxy floor Waco TX",
    "metallic epoxy Waco",
    "epoxy repair Hewitt TX",
    "commercial floor coating Waco",
    "epoxy flooring company Temple Killeen",
  ],
  authors: [{ name: "PolyCoat Floors", url: BASE_URL }],
  creator: "PolyCoat Floors",
  publisher: "PolyCoat Floors",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "PolyCoat Floors | Garage Epoxy, Metallic & Commercial Floors — Waco, TX",
    description:
      "Waco-based epoxy flooring contractor for garage floors, metallic floors, flake systems, decorative floors coated, repairs, and commercial floor coating across Central Texas. certified coatings, bonded & insured. 5-Year Coating Warranty.",
    url: BASE_URL,
    siteName: "PolyCoat Floors",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 4000,
        height: 630,
        alt: "PolyCoat Floors — Waco TX Garage Epoxy · Metallic floors · Flake Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PolyCoat Floors | Waco TX Epoxy Flooring Contractor",
    description:
      "Garage Epoxy, metallic floors, flake systems, metallic epoxy & commercial floor coating for Central Texas. certified coatings · 5-Year Coating Warranty.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "4.9";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "PolyCoat Floors",
  alternateName: "PolyCoat Floors Waco",
  description:
    "Residential and commercial epoxy flooring in Waco and Central Texas — garage epoxy, metallic epoxy, flake systems, commercial epoxy, concrete polish, and floor repair & recoat. Certified coatings installers, bonded & insured, 5-Year Coating Warranty.",
  url: BASE_URL,
  telephone: "+12549801919",
  email: "hello@polycoatfloors.com",
  foundingDate: "2014",
  founder: {
    "@type": "Person",
    name: "Nina Park",
    jobTitle: "Owner & Lead Coatings Specialist",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3300 Lake Air Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76710",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Epoxy Flooring Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garage Epoxy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Metallic Epoxy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Flake Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Epoxy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Concrete Polish" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Floor Repair & Recoat" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/polycoatfloors",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${aBeeZee.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#7e22ce" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#1a1025",
                }}
              >
                <PulseLoader size={50} color="#7e22ce" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
