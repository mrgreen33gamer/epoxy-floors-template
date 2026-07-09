'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSearch, faIndustry, faTint, faBroom, faCheck, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Most failed garage epoxy is not a bad product - it is poor surface preparation. Coatings need a clean, profiled, dry surface. Painting over dirty, oily, or sealed concrete is a common DIY failure mode. Professional installs start with assessment and mechanical prep, not a quick etch and roll.',
  },
  {
    type: 'cards',
    heading: 'What Professional Prep Usually Includes',
    cards: [
      { icon: faSearch, title: 'Moisture evaluation', body: 'Check moisture before coating so vapor does not push the system off the slab later.' },
      { icon: faIndustry, title: 'Diamond grinding', body: 'Mechanical profile so epoxy can bond - acid etch alone is not a substitute for pro grind prep.' },
      { icon: faCheck, title: 'Crack repair', body: 'Patch cracks and damaged areas so the coating has a sound base.' },
      { icon: faTint, title: 'Oil treatment', body: 'Oil and contaminants must be addressed or the film will peel at tire paths.' },
      { icon: faBroom, title: 'Clean staging', body: 'Thorough vacuuming and clean staging before mix and pour keeps debris out of the finish.' },
      { icon: faShieldHalved, title: 'Cure timeline', body: 'Clear park-on guidance protects the finish and your warranty.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Clear the garage completely and plan a few days without parking inside. Tell your installer about past floods, oil leaks, or previous coatings.',
  },
  {
    type: 'tips',
    heading: 'Homeowner Prep Checklist',
    items: [
      'Remove vehicles, storage, and wall clutter so crews can work wall-to-wall',
      'Share history of flooding, oil leaks, or old coatings',
      'Avoid DIY acid-etch-and-roll if you want a long-lasting floor',
      'Follow the written cure and park timeline after install day',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How to Prep Your Garage for Epoxy (What Pros Actually Do)"
        description="Moisture testing, diamond grinding, crack repair, and oil removal - the prep steps that decide coating longevity."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Professional garage floor prep for epoxy"
        category="Prep"
        date="April 14, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want Prep Done Right the First Time?"
        body="PolyCoat diamond-grinds, repairs, and coats with a written flat-rate quote - no shortcuts that cause peel later."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="how-to-prep-garage-for-epoxy-blog" />
    </>
  );
}
