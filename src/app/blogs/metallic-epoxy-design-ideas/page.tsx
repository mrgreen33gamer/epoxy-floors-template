'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faPalette, faLightbulb, faHome, faStore, faCar, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Metallic epoxy creates depth and movement that solid colors cannot match. Pigments catch light differently across the floor, so each install is unique. It is popular for showrooms, offices, modern homes, and custom garages where the floor is part of the design - not just protection.',
  },
  {
    type: 'cards',
    heading: 'Design Choices That Matter',
    cards: [
      { icon: faPalette, title: 'Color pairings', body: 'Primary and accent metallics should complement walls, cabinetry, and brand colors.' },
      { icon: faLightbulb, title: 'Lighting', body: 'Natural and artificial light change how movement reads - view samples in similar light.' },
      { icon: faHome, title: 'Sheen level', body: 'High gloss shows depth but needs good cleaning habits; satin can hide wear better.' },
      { icon: faStore, title: 'Showrooms and retail', body: 'Metallic floors make strong first impressions under display lighting.' },
      { icon: faCar, title: 'Garage use', body: 'Metallics can work in garages; discuss tire marking and maintenance first.' },
      { icon: faShieldHalved, title: 'Topcoat protection', body: 'A durable clear topcoat protects the metallic layer from wear and UV.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Every metallic floor is unique. Use samples and past project photos to set expectations - do not expect a photo-perfect clone of someone else\'s pour.',
  },
  {
    type: 'tips',
    heading: 'Where Metallic Works Best',
    items: [
      'Living rooms, basements, and modern open spaces',
      'Retail floors and auto showrooms',
      'Custom garages with moderate vehicle traffic',
      'Offices where the floor is a design feature',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Metallic Epoxy Design Ideas for Homes and Showrooms"
        description="Color movement, gloss, and layout ideas for metallic epoxy floors in homes, offices, and showrooms."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Metallic epoxy floor design ideas"
        category="Design"
        date="April 10, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want a Custom Metallic Floor?"
        body="PolyCoat designs and installs metallic epoxy with sample guidance and a 5-Year Coating Warranty."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="metallic-epoxy-design-ideas-blog" />
    </>
  );
}
