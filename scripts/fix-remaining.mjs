/**
 * Fix remaining PolyCoat reskin issues after apply-reskin.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = (rel, c) => { fs.writeFileSync(path.join(ROOT, rel), c); console.log('wrote', rel); };
const r = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const patch = (rel, fn) => { const p = path.join(ROOT, rel); let t = fs.readFileSync(p, 'utf8'); t = fn(t); fs.writeFileSync(p, t); console.log('patched', rel); };

// ── Forms ────────────────────────────────────────────────────────────────────
const servicesV1 = `const SERVICES = [
  { icon: faWarehouse,       label: 'Garage Epoxy' },
  { icon: faGem,             label: 'Metallic Epoxy' },
  { icon: faPaintRoller,     label: 'Flake Systems' },
  { icon: faIndustry,        label: 'Commercial Epoxy' },
  { icon: faShieldHalved,    label: 'Concrete Polish' },
  { icon: faWrench,          label: 'Floor Repair & Recoat' },
  { icon: faBolt,            label: 'Other / Not Sure' },
];`;

const servicesV4 = `const SERVICES = [
  { icon: faWarehouse,    label: 'Garage Epoxy',           sub: 'Solid or flake garage systems' },
  { icon: faGem,          label: 'Metallic Epoxy',         sub: 'Custom metallic showpiece floors' },
  { icon: faPaintRoller,  label: 'Flake Systems',          sub: 'Full-broadcast flake + topcoat' },
  { icon: faIndustry,     label: 'Commercial Epoxy',       sub: 'Shops, warehouses, facilities' },
  { icon: faShieldHalved, label: 'Concrete Polish',        sub: 'Modern polished concrete' },
  { icon: faWrench,       label: 'Floor Repair & Recoat',  sub: 'Peeling fixes and recoats' },
  { icon: faBolt,         label: 'Other / Not Sure',       sub: 'Tell us what you need' },
];`;

for (const f of [
  'components/PageComponents/ContactForms/Variant1/Form.tsx',
  'components/PageComponents/ContactForms/Variant2/Form.tsx',
  'components/PageComponents/ContactForms/Variant3/Form.tsx',
  'components/PageComponents/ContactForms/Variant4/Form.tsx',
]) {
  patch(f, (t) => {
    t = t.replace(/const SERVICES = \[[\s\S]*?\];/, f.includes('Variant4') ? servicesV4 : servicesV1);
    // Expand icon imports carefully — only replace the solid icons import block
    t = t.replace(
      /import \{\s*faCircleCheck[\s\S]*?\} from '@fortawesome\/free-solid-svg-icons';/,
      `import {
  faCircleCheck, faExclamationTriangle, faArrowRight, faArrowLeft,
  faPhone, faStar, faShieldHalved, faClock, faTag,
  faWarehouse, faGem, faPaintRoller, faWrench, faIndustry, faBolt,
} from '@fortawesome/free-solid-svg-icons';`
    );
    t = t
      .replace(/IronPath/g, 'PolyCoat')
      .replace(/ironpathconcrete\.com/g, 'polycoatfloors.com')
      .replace(/hello@ironpathconcrete\.com/g, 'hello@polycoatfloors.com')
      .replace(/tel:\+12547504400/g, 'tel:+12549801919')
      .replace(/\(254\) 750-4400/g, '(254) 980-1919')
      .replace(/4\.9★ · 900\+ reviews/g, '4.9★ · 700+ reviews')
      .replace(/ACI · Insured/g, 'Certified · Insured')
      .replace(/Free estimates/g, 'Free quotes')
      .replace(/#b45309/g, '#7e22ce')
      .replace(/An PolyCoat estimator/g, 'A PolyCoat estimator')
      .replace(/A licensed PolyCoat tech(?:nician)?/g, 'A PolyCoat estimator')
      .replace(/An IronPath estimator/g, 'A PolyCoat estimator');
    return t;
  });
}

// ── blog-posts.ts ────────────────────────────────────────────────────────────
w('libs/blog-posts.ts', `// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'epoxy-vs-polyaspartic-floors',
    title:    'Epoxy vs. Polyaspartic Floors: Which Is Right for Your Garage?',
    excerpt:  'Cure time, UV stability, cost, and durability — how to choose between epoxy and polyaspartic garage systems in Central Texas.',
    category: 'Coatings',
    date:     'April 18, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Epoxy versus polyaspartic garage floor comparison',
    featured: true,
  },
  {
    slug:     'how-to-prep-garage-for-epoxy',
    title:    'How to Prep Your Garage for Epoxy (What Pros Actually Do)',
    excerpt:  'Moisture testing, diamond grinding, crack repair, and oil removal — the prep steps that decide coating longevity.',
    category: 'Prep',
    date:     'April 14, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Professional garage floor prep for epoxy',
  },
  {
    slug:     'metallic-epoxy-design-ideas',
    title:    'Metallic Epoxy Design Ideas for Homes and Showrooms',
    excerpt:  'Color movement, gloss, and layout ideas for metallic epoxy floors in homes, offices, and showrooms.',
    category: 'Design',
    date:     'April 10, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Metallic epoxy floor design ideas',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }

export default ALL_POSTS;
`);

// ── projects.ts exports fix ──────────────────────────────────────────────────
w('libs/local-db/projects.ts', `// libs/local-db/projects.ts
// Central data store for PolyCoat Floors projects shown on
// /projects and /projects/[slug]. Images reuse existing gallery assets.

export type ProjectCategory =
  | 'Garage Epoxy'
  | 'Metallic Epoxy'
  | 'Flake Systems'
  | 'Commercial Epoxy'
  | 'Concrete Polish'
  | 'Floor Repair & Recoat';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  shortDesc: string;
  fullDesc: string;
  result: string;
  tags: string[];
  images: ProjectImage[];
  beforeImage?: ProjectImage;
  afterImage?: ProjectImage;
  sqft?: string;
  duration?: string;
  featured?: boolean;
}

const g = (name: string) => \`/projects/gallery/\${name}\`;

const garage: Project[] = [
  {
    id: 'woodway-flake-garage',
    title: 'Woodway Full-Broadcast Flake Garage',
    client: 'Private Residence',
    location: 'Woodway, TX',
    category: 'Flake Systems',
    year: '2026',
    duration: '3 days',
    sqft: '480 sq ft',
    shortDesc: 'Two-car garage with diamond grind prep, full flake broadcast, and slip-resistant topcoat.',
    fullDesc: 'The existing bare concrete was oil-stained and dusty. PolyCoat diamond-ground the surface, repaired cracks, and installed a full-broadcast flake system with a clear protective topcoat. Homeowners received clear park-on guidance before vehicles returned.',
    result: 'Full System Install',
    tags: ['Flake', 'Two-Car', 'Woodway'],
    images: [
      { src: g('2.png'), alt: 'Finished flake garage epoxy floor', caption: 'Completed garage' },
      { src: g('3.png'), alt: 'Flake garage floor detail', caption: '' },
    ],
    beforeImage: { src: g('4.png'), alt: 'Stained garage floor before coating' },
    afterImage:  { src: g('2.png'), alt: 'Garage after PolyCoat flake system' },
    featured: true,
  },
  {
    id: 'hewitt-solid-garage',
    title: 'Hewitt Solid-Color Garage Epoxy',
    client: 'Private Residence',
    location: 'Hewitt, TX',
    category: 'Garage Epoxy',
    year: '2025',
    duration: '2 days',
    sqft: '400 sq ft',
    shortDesc: 'Clean solid-color epoxy with moisture check and durable topcoat for daily parking.',
    fullDesc: 'Homeowners wanted a modern solid look without flakes. PolyCoat prepped thoroughly, applied a solid epoxy base, and sealed with a wear-ready topcoat suited to hot-tire traffic.',
    result: 'Solid Color System',
    tags: ['Solid Color', 'Hewitt', 'Garage'],
    images: [
      { src: g('5.png'), alt: 'Solid color garage epoxy floor', caption: '' },
      { src: g('7.png'), alt: 'Garage epoxy edge detail', caption: '' },
    ],
    featured: true,
  },
];

const metallic: Project[] = [
  {
    id: 'waco-metallic-showroom',
    title: 'Waco Metallic Showroom Floor',
    client: 'Local Retailer',
    location: 'Waco, TX',
    category: 'Metallic Epoxy',
    year: '2025',
    duration: '4 days',
    sqft: '900 sq ft',
    shortDesc: 'Custom metallic epoxy with high-gloss clear coat for a retail showroom.',
    fullDesc: 'Client wanted a signature floor that felt premium under showroom lighting. PolyCoat designed a two-tone metallic flow, prepped the slab, and finished with a durable clear topcoat.',
    result: 'Showpiece Metallic',
    tags: ['Metallic', 'Showroom', 'Waco'],
    images: [
      { src: g('ertret.png'), alt: 'Metallic epoxy showroom floor', caption: '' },
      { src: g('etru7.png'), alt: 'Metallic epoxy depth and movement', caption: '' },
    ],
    featured: true,
  },
];

const flake: Project[] = [
  {
    id: 'china-spring-shop-flake',
    title: 'China Spring Shop Flake System',
    client: 'Private Shop',
    location: 'China Spring, TX',
    category: 'Flake Systems',
    year: '2025',
    duration: '3 days',
    sqft: '600 sq ft',
    shortDesc: 'Full-broadcast flake system for a detached shop with vehicle and tool traffic.',
    fullDesc: 'Detached shop floor with oil history needed aggressive prep and a durable flake system. PolyCoat ground, repaired, and installed a dense flake broadcast with slip-resistant topcoat.',
    result: 'Shop-Ready Flake',
    tags: ['Flake', 'Shop', 'China Spring'],
    images: [
      { src: g('qwe.png'), alt: 'Shop flake epoxy floor', caption: '' },
    ],
  },
];

const commercial: Project[] = [
  {
    id: 'temple-auto-shop',
    title: 'Temple Auto Shop Service Bays',
    client: 'Independent Auto Shop',
    location: 'Temple, TX',
    category: 'Commercial Epoxy',
    year: '2025',
    duration: '5 days',
    sqft: '2,200 sq ft',
    shortDesc: 'Chemical-resistant commercial epoxy for active service bays with phased access.',
    fullDesc: 'Oil-stained bays needed a durable, cleanable surface. PolyCoat phased the install so the shop could keep limited operations, using a commercial system suited to vehicle traffic and fluids.',
    result: 'Commercial Shop System',
    tags: ['Auto Shop', 'Commercial', 'Temple'],
    images: [
      { src: g('ewew.png'), alt: 'Commercial auto shop epoxy floor', caption: '' },
      { src: g('gythgnb.png'), alt: 'Service bay coated floor', caption: '' },
    ],
    featured: true,
  },
  {
    id: 'killeen-warehouse-phase',
    title: 'Killeen Warehouse Aisle Phase',
    client: 'Distribution Facility',
    location: 'Killeen, TX',
    category: 'Commercial Epoxy',
    year: '2024',
    duration: '1 week',
    sqft: '4,500 sq ft',
    shortDesc: 'Phased warehouse coating for high-traffic aisles with abrasion-resistant topcoat.',
    fullDesc: 'Facility managers needed durable floors without shutting the entire building. PolyCoat coated critical aisles in phases with a system selected for forklift traffic.',
    result: 'Phased Facility Coat',
    tags: ['Warehouse', 'Phased', 'Killeen'],
    images: [
      { src: g('htf.png'), alt: 'Warehouse epoxy floor aisle', caption: '' },
      { src: g('iou.png'), alt: 'Commercial warehouse coated concrete', caption: '' },
    ],
  },
];

const polish: Project[] = [
  {
    id: 'woodway-retail-polish',
    title: 'Woodway Retail Polished Floor',
    client: 'Boutique Retail',
    location: 'Woodway, TX',
    category: 'Concrete Polish',
    year: '2025',
    duration: '3 days',
    sqft: '1,100 sq ft',
    shortDesc: 'Multi-step polish to a refined sheen for a modern retail suite.',
    fullDesc: 'Client preferred natural concrete character over a full coating. PolyCoat ground and polished to an agreed sheen with densifier for easier maintenance.',
    result: 'Polished Retail Floor',
    tags: ['Polish', 'Retail', 'Woodway'],
    images: [
      { src: g('iytyuhn.png'), alt: 'Polished concrete retail floor', caption: '' },
    ],
  },
];

const repair: Project[] = [
  {
    id: 'waco-peel-repair',
    title: 'Waco Peeling Epoxy Strip & Recoat',
    client: 'Private Residence',
    location: 'Waco, TX',
    category: 'Floor Repair & Recoat',
    year: '2025',
    duration: '3 days',
    sqft: '420 sq ft',
    shortDesc: 'Full removal of failed DIY coating and professional flake recoat.',
    fullDesc: 'A previous DIY roll-on had peeled at tire paths. PolyCoat mechanically removed the failed film, properly ground the slab, and installed a professional flake system with warranty.',
    result: 'Strip & Recoat',
    tags: ['Repair', 'Recoat', 'Waco'],
    images: [
      { src: g('jyfhtgb.png'), alt: 'Garage after professional epoxy recoat', caption: '' },
      { src: g('kgh.png'), alt: 'Recoated flake garage floor', caption: '' },
    ],
    beforeImage: { src: g('liukj.png'), alt: 'Peeling epoxy before repair' },
    afterImage:  { src: g('jyfhtgb.png'), alt: 'Floor after PolyCoat recoat' },
    featured: true,
  },
];

const ALL_PROJECTS: Project[] = [
  ...garage,
  ...metallic,
  ...flake,
  ...commercial,
  ...polish,
  ...repair,
];

export const CATEGORIES: ProjectCategory[] = [
  'Garage Epoxy',
  'Metallic Epoxy',
  'Flake Systems',
  'Commercial Epoxy',
  'Concrete Polish',
  'Floor Repair & Recoat',
];

export const PROJECTS_BY_CATEGORY: Record<ProjectCategory, Project[]> = {
  'Garage Epoxy': garage,
  'Metallic Epoxy': metallic,
  'Flake Systems': [...garage.filter(p => p.category === 'Flake Systems'), ...flake],
  'Commercial Epoxy': commercial,
  'Concrete Polish': polish,
  'Floor Repair & Recoat': repair,
};

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === slug);
}

export function getProjectById(id: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return ALL_PROJECTS.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return ALL_PROJECTS.filter((p) => p.category === category);
}

export default ALL_PROJECTS;
`);

// ── Blog pages (match BlogBody API) ──────────────────────────────────────────
w('src/app/blogs/epoxy-vs-polyaspartic-floors/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faClock, faSun, faDollarSign, faCheck, faShieldHalved, faCar } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Epoxy systems are proven, cost-effective, and excellent for many residential garages when properly prepped. Polyaspartic (and hybrid systems) often cure faster, resist UV yellowing better, and can return vehicles to the floor sooner — at a higher material cost. The right choice depends on budget, timeline, sun exposure, and how hard the floor will be used.',
  },
  {
    type: 'cards',
    heading: 'What to Compare Before You Buy',
    cards: [
      { icon: faClock, title: 'Cure window', body: 'How soon you need to park vehicles matters. Polyaspartic systems often allow faster return-to-service.' },
      { icon: faSun, title: 'UV exposure', body: 'Open-door sunlight can yellow some coatings. UV-stable topcoats and polyaspartics help in bright Texas garages.' },
      { icon: faCar, title: 'Hot-tire resistance', body: 'Prep and topcoat quality matter more than brand slogans for hot-tire pickup resistance.' },
      { icon: faDollarSign, title: 'Budget', body: 'Polyaspartic systems usually cost more per square foot than standard epoxy packages.' },
      { icon: faCheck, title: 'Installer skill', body: 'A great system applied poorly fails either way — grind prep is non-negotiable.' },
      { icon: faShieldHalved, title: 'Warranty', body: 'Ask what the warranty covers: adhesion, peel, and workmanship — not marketing promises alone.' },
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
      'We explain epoxy vs polyaspartic in plain English — no pressure',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Epoxy vs. Polyaspartic Floors: Which Is Right for Your Garage?"
        description="Cure time, UV stability, cost, and durability — how to choose between epoxy and polyaspartic garage systems in Central Texas."
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
`);

w('src/app/blogs/how-to-prep-garage-for-epoxy/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSearch, faIndustry, faOilCan, faBroom, faCheck, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Most failed garage epoxy is not a “bad product” — it is poor surface preparation. Coatings need a clean, profiled, dry surface. Painting over dirty, oily, or sealed concrete is a common DIY failure mode. Professional installs start with assessment and mechanical prep, not a quick etch and roll.',
  },
  {
    type: 'cards',
    heading: 'What Professional Prep Usually Includes',
    cards: [
      { icon: faSearch, title: 'Moisture evaluation', body: 'Check moisture before coating so vapor does not push the system off the slab later.' },
      { icon: faIndustry, title: 'Diamond grinding', body: 'Mechanical profile so epoxy can bond — acid etch alone is not a substitute for pro grind prep.' },
      { icon: faCheck, title: 'Crack repair', body: 'Patch cracks and damaged areas so the coating has a sound base.' },
      { icon: faOilCan, title: 'Oil treatment', body: 'Oil and contaminants must be addressed or the film will peel at tire paths.' },
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
        description="Moisture testing, diamond grinding, crack repair, and oil removal — the prep steps that decide coating longevity."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Professional garage floor prep for epoxy"
        category="Prep"
        date="April 14, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want Prep Done Right the First Time?"
        body="PolyCoat diamond-grinds, repairs, and coats with a written flat-rate quote — no shortcuts that cause peel later."
        buttonText="Get Free Quote"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="how-to-prep-garage-for-epoxy-blog" />
    </>
  );
}
`);

w('src/app/blogs/metallic-epoxy-design-ideas/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faPalette, faLightbulb, faHome, faStore, faCar, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: 'Metallic epoxy creates depth and movement that solid colors cannot match. Pigments catch light differently across the floor, so each install is unique. It is popular for showrooms, offices, modern homes, and custom garages where the floor is part of the design — not just protection.',
  },
  {
    type: 'cards',
    heading: 'Design Choices That Matter',
    cards: [
      { icon: faPalette, title: 'Color pairings', body: 'Primary and accent metallics should complement walls, cabinetry, and brand colors.' },
      { icon: faLightbulb, title: 'Lighting', body: 'Natural and artificial light change how movement reads — view samples in similar light.' },
      { icon: faHome, title: 'Sheen level', body: 'High gloss shows depth but needs good cleaning habits; satin can hide wear better.' },
      { icon: faStore, title: 'Showrooms & retail', body: 'Metallic floors make strong first impressions under display lighting.' },
      { icon: faCar, title: 'Garage use', body: 'Metallics can work in garages; discuss tire marking and maintenance first.' },
      { icon: faShieldHalved, title: 'Topcoat protection', body: 'A durable clear topcoat protects the metallic layer from wear and UV.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: 'Pro Tip: Every metallic floor is unique. Use samples and past project photos to set expectations — do not expect a photo-perfect clone of someone else’s pour.',
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
`);

// ── Services index ───────────────────────────────────────────────────────────
w('src/app/services/page.tsx', `// PolyCoat Floors — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faWarehouse, faGem, faPaintRoller, faIndustry, faWrench, faShieldHalved,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faLock, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faWarehouse, title: "Garage Epoxy", body: "Durable garage floor coatings with diamond grind prep, moisture checks, and slip-resistant topcoats built for Central Texas.", link: "/services/garage-epoxy" },
    { icon: faGem, title: "Metallic Epoxy", body: "One-of-a-kind metallic floors with depth and high-gloss finish for living spaces, showrooms, and custom garages.", link: "/services/metallic-epoxy" },
    { icon: faPaintRoller, title: "Flake Systems", body: "Full-broadcast flake systems that hide stains, add traction, and stand up to daily garage and shop use.", link: "/services/flake-systems" },
    { icon: faIndustry, title: "Commercial Epoxy", body: "High-traffic commercial and industrial coatings for warehouses, auto shops, and facilities.", link: "/services/commercial-epoxy" },
    { icon: faShieldHalved, title: "Concrete Polish", body: "Polished concrete for modern homes and commercial spaces — refined sheen and easy maintenance.", link: "/services/concrete-polish" },
    { icon: faWrench, title: "Floor Repair & Recoat", body: "Peeling epoxy repair, failed coating removal, and professional recoats with honest diagnosis.", link: "/services/floor-repair-recoat" },
  ];

  const expectations = [
    { icon: faSearch, title: "Free On-Site Quote", description: "We measure on-site, check moisture and condition, and explain exactly what's included with a written price before work starts." },
    { icon: faCheckCircle, title: "Upfront Flat-Rate Pricing", description: "No hourly billing, no surprise fees. You approve the price before we grind or coat." },
    { icon: faShieldHalved, title: "Certified · Bonded & Insured", description: "Certified coatings installers. Bonded and insured on every job." },
    { icon: faTag, title: "5-Year Coating Warranty", description: "Every floor is backed by five full years of coverage on our coating workmanship. Slip-resistant options available." },
  ];

  const metrics = [
    { icon: faTrophy, value: 2400, label: "Floors coated across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 12, label: "Years serving Waco and Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real PolyCoat team member — not a call center. We schedule your free quote fast." },
    { icon: faShieldHalved, title: "Honest System Advice", description: "We'll tell you when a recoat is enough and when a full strip-and-recoat makes sense — no upselling for the sake of it." },
    { icon: faLock, title: "Bonded & Insured", description: "Fully insured crews. Proof of insurance available on request for builders and facility managers." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or the form below. We'll confirm a free on-site quote that fits your schedule.", icon: faHeadset },
    { number: 2, title: "Assess & Measure", description: "We measure, check moisture, and recommend the right system in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work starts. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Coat & Warranty", description: "Professional prep and install, cure guidance, 5-Year Coating Warranty.", icon: faCheckCircle },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway floors.", badge: "" },
    { town: "McGregor", benefit: "Reliable turnaround for McGregor customers.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Temple", benefit: "Full service for Bell County homes and businesses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "5-Year Coating Warranty", us: "✅ Every floor", others: "❌ Rare or none" },
    { feature: "Certified coatings installers", us: "✅ All crews", others: "❌ Not always" },
    { feature: "Diamond grind prep included", us: "✅ Standard", others: "❌ Often skipped" },
    { feature: "Clear cure / park-on timeline", us: "✅ Always", others: "❌ Guesswork" },
  ];

  const faq = [
    { question: "How much does epoxy flooring cost in Waco?", answer: "Garage, metallic, flake, and commercial systems vary by size and scope. We always provide a flat-rate written quote after an on-site assessment." },
    { question: "Are your installers certified?", answer: "Yes — PolyCoat crews are led by certified coatings installers and we are bonded and insured." },
    { question: "Do you fix peeling epoxy?", answer: "Yes. Call (254) 980-1919 — we diagnose failures and recommend repair, recoat, or full strip when needed." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — every project is backed by our 5-Year Coating Warranty. Slip-resistant options available." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll schedule a free on-site quote and provide written pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />
      <SectionIntro
        title="Epoxy Flooring Services in Waco, TX"
        subtitle="Garage epoxy, metallic, flake systems, commercial coatings, polish, and repairs — flat-rate quotes, certified installers, 5-Year Coating Warranty."
      />
      <TrustBar headline="2,400+ floors coated · 4.9★ from 700+ reviews across Central Texas" />
      <div className={styles.section}><ServiceCardComponent heading="What We Coat" cards={services} /></div>
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Hire PolyCoat" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Service Areas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Service FAQs" /></div>
      <CTABanner
        headline="Ready to Get a Flat-Rate Floor Coating Quote?"
        subline="Free on-site quotes. Certified coatings installers. Call (254) 980-1919."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2
          title="Request a Free Quote"
          cityName="Waco"
          slug="services"
          spot="services-index"
          formVariant={2}
        />
      </div>
    </main>
  );
}
`);

// ── Industries index ─────────────────────────────────────────────────────────
w('src/app/industries/page.tsx', `// PolyCoat Floors — Industries Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline  from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import Variant4         from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faHardHat, faCar, faIndustry,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {
  const industries = [
    {
      icon: faHardHat,
      title: "Homebuilders",
      body: "Production and custom garage epoxy, flake systems, and decorative floors that hit install windows and protect closings.",
      link: "/industries/homebuilders",
    },
    {
      icon: faCar,
      title: "Auto Shops",
      body: "Chemical-resistant, easy-clean shop floors for service bays, detail areas, and automotive facilities.",
      link: "/industries/auto-shops",
    },
    {
      icon: faIndustry,
      title: "Warehouses",
      body: "Durable facility coatings for high-traffic aisles, storage floors, and phased warehouse installs.",
      link: "/industries/warehouses",
    },
  ];

  const whyFeatures = [
    { icon: faShieldHalved, title: "Bonded & Insured", description: "COIs and documentation ready for builders, shops, and facility managers." },
    { icon: faUsers, title: "Schedule-Driven Crews", description: "We protect openings, service hours, and production calendars." },
    { icon: faClock, title: "Clear Scopes", description: "Written scopes and flat-rate commercial quotes — not open-ended surprises." },
  ];

  const processSteps = [
    { number: 1, title: "Scope / Bid", description: "Site walk or plans review with written commercial pricing.", icon: faHeadset },
    { number: 2, title: "Schedule", description: "Lock install windows around your operations.", icon: faSearch },
    { number: 3, title: "Install", description: "Professional prep and multi-coat systems on schedule.", icon: faFileContract },
    { number: 4, title: "Closeout", description: "Walkthrough, warranty docs, invoice.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 600, label: "Commercial & production floors", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-schedule start rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 12, label: "Years serving Central Texas businesses", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you work with homebuilders?", answer: "Yes — production and custom garage coatings coordinated with construction schedules." },
    { question: "Can you coat active auto shops?", answer: "Yes — we plan access and phases so shops can keep limited operations when needed." },
    { question: "Do you provide COIs quickly?", answer: "Yes — insurance documentation is standard for commercial accounts." },
    { question: "What industries do you serve?", answer: "Homebuilders, auto shops, warehouses, and related commercial facilities across Central Texas." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />
      <SectionIntro
        title="Industries We Serve"
        subtitle="Epoxy flooring partner for homebuilders, auto shops, and warehouses across Waco and Central Texas."
      />
      <TrustBar headline="Certified coatings installers · Bonded & insured · Schedule-driven commercial work" />
      <div className={styles.section}><ServiceCardComponent heading="Who We Partner With" cards={industries} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Businesses Choose PolyCoat" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Industry FAQs" /></div>
      <CTABanner
        headline="Need a Reliable Floor Coatings Partner?"
        subline="Flat-rate commercial quotes. Certified installers. Call (254) 980-1919."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4
          title="Request a Commercial Bid"
          cityName="Waco"
          slug="industries"
          spot="industries-index"
          formVariant={4}
        />
      </div>
    </main>
  );
}
`);

// ── Layout metadata cleanup ──────────────────────────────────────────────────
patch('src/app/layout.tsx', (t) => {
  t = t.replace(
    /default: "PolyCoat Floors \|[^"]+"/,
    'default: "PolyCoat Floors | Garage Epoxy, Metallic & Commercial Floors — Waco, TX"'
  );
  t = t.replace(
    /description:\s*\n\s*"PolyCoat Floors is[^"]+"/,
    `description:
    "PolyCoat Floors is a Waco, TX epoxy flooring contractor offering garage epoxy, metallic epoxy, flake systems, commercial epoxy, concrete polish, and floor repair & recoat for Central Texas homes and businesses. Certified coatings installers, bonded & insured, 5-Year Coating Warranty."`
  );
  // Offer catalog names
  t = t.replace(/hasOfferCatalog: \{[\s\S]*?\},/, `hasOfferCatalog: {
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
  },`);
  t = t.replace(/#b45309/g, '#7e22ce');
  t = t.replace(/Nina Delgado|Nina Park/g, 'Nina Park');
  t = t.replace(/1800 S University Parks Dr/g, '3300 Lake Air Dr');
  t = t.replace(/foundingDate: "2014"/g, 'foundingDate: "2014"');
  t = t.replace(/\+12547504400/g, '+12549801919');
  t = t.replace(/hello@ironpathconcrete\.com/g, 'hello@polycoatfloors.com');
  return t;
});

// Contact page services list
patch('src/app/contact/page.tsx', (t) => {
  t = t.replace(/const SERVICES = \[[\s\S]*?\];/, `const SERVICES = [
  'Garage Epoxy', 'Metallic Epoxy', 'Flake Systems',
  'Commercial Epoxy', 'Concrete Polish', 'Floor Repair & Recoat',
  'Other / Not Sure',
];`);
  t = t
    .replace(/IronPath/g, 'PolyCoat')
    .replace(/#b45309/g, '#7e22ce')
    .replace(/#f97316/g, '#7e22ce')
    .replace(/tel:\+1254\d+/g, 'tel:+12549801919')
    .replace(/\(254\) \d{3}-\d{4}/g, '(254) 980-1919')
    .replace(/1800 S University Parks Dr/g, '3300 Lake Air Dr')
    .replace(/hello@ironpathconcrete\.com|contact@polycoatfloors\.com/g, 'hello@polycoatfloors.com');
  return t;
});

// Footer bulk identity
patch('components/GeneralComponents/Footer/Footer.tsx', (t) =>
  t
    .replace(/IronPath/g, 'PolyCoat')
    .replace(/ironpathconcrete/g, 'polycoatfloors')
    .replace(/#b45309/g, '#7e22ce')
    .replace(/tel:\+1254\d+/g, 'tel:+12549801919')
    .replace(/\(254\) \d{3}-\d{4}/g, '(254) 980-1919')
    .replace(/1800 S University Parks Dr/g, '3300 Lake Air Dr')
    .replace(/Garage Epoxy · Metallic floors · Flake Systems/g, 'Garage Epoxy · Metallic · Commercial Floors')
);

// Shared component defaults
for (const f of [
  'components/PageComponents/TrustBar/TrustBar.tsx',
  'components/PageComponents/CTABanner/CTABanner.tsx',
  'components/PageComponents/GuaranteeSection/GuaranteeSection.tsx',
  'components/PageComponents/WhyChooseUs/WhyChooseUs.tsx',
  'components/PageComponents/FAQ/FAQ.tsx',
  'components/PageComponents/ProcessTimeline/ProcessTimeline.tsx',
  'components/PageComponents/BlogPreviewGrid/BlogPreviewGrid.tsx',
  'components/PageComponents/LocalCitationBlock/LocalCitationBlock.tsx',
  'components/PageComponents/ValueComparison/ValueComparison.tsx',
  'components/GeneralComponents/CookieBanner/CookieBanner.tsx',
  'src/app/about/page.tsx',
  'src/app/service-areas/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/not-found.tsx',
  'src/app/robots.ts',
  'src/app/sitemap.xml/route.ts',
  'src/app/llms.txt/route.ts',
  'src/app/projects/page.tsx',
  'src/app/projects/[slug]/page.tsx',
  'src/app/projects/layout.tsx',
]) {
  const full = path.join(ROOT, f);
  if (!fs.existsSync(full)) continue;
  patch(f, (t) =>
    t
      .replace(/IronPath Concrete/g, 'PolyCoat Floors')
      .replace(/IronPath/g, 'PolyCoat')
      .replace(/ironpathconcrete\.com/g, 'polycoatfloors.com')
      .replace(/hello@ironpathconcrete\.com/g, 'hello@polycoatfloors.com')
      .replace(/tel:\+12547504400/g, 'tel:+12549801919')
      .replace(/\(254\) 750-4400/g, '(254) 980-1919')
      .replace(/#b45309/g, '#7e22ce')
      .replace(/Ray Delgado/g, 'Nina Park')
      .replace(/5-Year Workmanship Warranty/g, '5-Year Coating Warranty')
      .replace(/ACI-Trained Finishers/g, 'Certified Coatings Installers')
      .replace(/ACI-trained finishers/g, 'certified coatings installers')
      .replace(/ACI-Trained/g, 'Certified Coatings')
      .replace(/900\+ reviews/g, '700+ reviews')
      .replace(/4,000\+ floors coated/g, '2,400+ floors coated')
      .replace(/4,000\+/g, '2,400+')
      .replace(/Since 2008/g, 'Since 2014')
      .replace(/1800 S University Parks Dr/g, '3300 Lake Air Dr')
  );
}

// Fix ProjectCardGrid if it imports wrong things
{
  const f = 'components/PageComponents/ProjectCardGrid/ProjectCardGrid.tsx';
  if (fs.existsSync(path.join(ROOT, f))) {
    patch(f, (t) =>
      t
        .replace(/IronPath/g, 'PolyCoat')
        .replace(/Driveways|Patios & Walkways|Foundations|Stamped & Decorative|Concrete Repair|Commercial Flatwork/g, (m) => {
          const map = {
            'Driveways': 'Garage Epoxy',
            'Patios & Walkways': 'Metallic Epoxy',
            'Foundations': 'Flake Systems',
            'Stamped & Decorative': 'Commercial Epoxy',
            'Concrete Repair': 'Concrete Polish',
            'Commercial Flatwork': 'Floor Repair & Recoat',
          };
          return map[m] || m;
        })
    );
  }
}

// package.json name
{
  const f = path.join(ROOT, 'package.json');
  const j = JSON.parse(fs.readFileSync(f, 'utf8'));
  j.name = 'epoxy-floors-template';
  fs.writeFileSync(f, JSON.stringify(j, null, 2) + '\n');
}

// Fix faOilCan if missing - use faDroplet or faTint
patch('src/app/blogs/how-to-prep-garage-for-epoxy/page.tsx', (t) =>
  t.replace('faOilCan', 'faDroplet').replace(
    "faSearch, faIndustry, faDroplet, faBroom, faCheck, faShieldHalved",
    "faSearch, faIndustry, faDroplet, faBroom, faCheck, faShieldHalved"
  )
);

// If faDroplet not in FA5 free solid, use faTint
// We'll verify on typecheck

console.log('=== fix-remaining done ===');
