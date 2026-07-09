'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClock, faSun, faDollarSign, faCheck, faShieldHalved, faCar } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Epoxy systems are proven, cost-effective, and excellent for many residential garages when properly prepped. Polyaspartic (and hybrid systems) often cure faster, resist UV yellowing better, and can return vehicles to the floor sooner - at a higher material cost. The right choice depends on budget, timeline, sun exposure, and how hard the floor will be used.',
  },
  {
    type: 'cards',
    heading: 'What to Compare Before You Buy',
    cards: [
      { icon: faClock, title: 'Cure window', body: 'How soon you need to park vehicles matters. Polyaspartic systems often allow faster return-to-service.' },
      { icon: faSun, title: 'UV exposure', body: 'Open-door sunlight can yellow some coatings. UV-stable topcoats and polyaspartics help in bright Texas garages.' },
      { icon: faCar, title: 'Hot-tire resistance', body: 'Prep and topcoat quality matter more than brand slogans for hot-tire pickup resistance.' },
      { icon: faDollarSign, title: 'Budget', body: 'Polyaspartic systems usually cost more per square foot than standard epoxy packages.' },
      { icon: faCheck, title: 'Installer skill', body: 'A great system applied poorly fails either way - grind prep is non-negotiable.' },
      { icon: faShieldHalved, title: 'Warranty', body: 'Ask what the warranty covers: adhesion, peel, and workmanship - not marketing promises alone.' },
    ],
  },
  {
    type: 'table',
    heading: 'Epoxy vs Polyaspartic (Practical Guide)',
    tableHeaders: ['Factor', 'Epoxy', 'Polyaspartic'],
    tableRows: [
      ['Typical cost', 'Lower', 'Higher'],
      ['Cure / park timeline', 'Longer', 'Often faster'],
      ['UV stability', 'Varies by topcoat', 'Generally strong'],
      ['Best for', 'Many residential garages', 'Speed + UV + premium installs'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Moisture testing and diamond grinding decide longevity more than the brand name on the bucket. Do not skip prep to save money.',
  },
  {
    type: 'tips',
    heading: 'How PolyCoat Recommends Systems',
    items: [
      'We assess moisture, concrete condition, and your schedule first',
      'You get a flat-rate quote for grind prep through topcoat',
      'We explain epoxy vs polyaspartic in plain English - no pressure',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Epoxy vs. Polyaspartic Floors: Which Is Right for Your Garage?"
        description="Cure time, UV stability, cost, and durability - how to choose between epoxy and polyaspartic garage systems in Central Texas."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Epoxy versus polyaspartic garage floor comparison"
        category="Coatings"
        date="April 18, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Planning a Garage Floor in Waco?"
        body="PolyCoat installs epoxy and polyaspartic systems with clear guidance and a 5-Year Coating Warranty. Free on-site quotes."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="epoxy-vs-polyaspartic-floors-blog" />
    </>
  );
}
