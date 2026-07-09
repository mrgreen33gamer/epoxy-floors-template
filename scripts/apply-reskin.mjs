/**
 * PolyCoat Floors — full reskin generator
 * Run: node scripts/apply-reskin.mjs
 * Base: concrete-driveway structure already copied; folders renamed to epoxy slugs.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const write = (rel, content) => {
  const full = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('wrote', rel);
};

const SKIP = new Set(['node_modules', '.next', '.git', 'COMBINE_FILES_SERVICE', 'GeoLite2-City.mmdb']);

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|jsx?|scss|css|md|txt|json|mjs)$/.test(ent.name)) files.push(p);
  }
  return files;
}

// ─── Bulk identity rebrand (IronPath / HVAC leftovers → PolyCoat) ────────────
const pairs = [
  // Domains / contact
  ['https://www.ironpathconcrete.com', 'https://www.polycoatfloors.com'],
  ['ironpathconcrete.com', 'polycoatfloors.com'],
  ['hello@ironpathconcrete.com', 'hello@polycoatfloors.com'],
  ['+12547504400', '+12549801919'],
  ['(254) 750-4400', '(254) 980-1919'],
  ['254-750-4400', '254-980-1919'],
  ['1800 S University Parks Dr, Waco, TX 76706', '3300 Lake Air Dr, Waco, TX 76710'],
  ['1800 S University Parks Dr', '3300 Lake Air Dr'],
  ['facebook.com/ironpathconcrete', 'facebook.com/polycoatfloors'],
  ['g.page/r/ironpathconcrete', 'g.page/r/polycoatfloors'],
  ['76706', '76710'],

  // Brand
  ['IronPath Concrete', 'PolyCoat Floors'],
  ['IronPath', 'PolyCoat'],
  ['Ray Delgado', 'Nina Park'],
  ['Ray', 'Nina'],
  ['Owner & Lead Finisher', 'Owner & Lead Coatings Specialist'],
  ['Lead Finisher', 'Lead Coatings Specialist'],

  // Credentials / guarantee
  ['5-Year Workmanship Warranty', '5-Year Coating Warranty'],
  ['5-Yr Workmanship Warranty', '5-Yr Coating Warranty'],
  ['5-Year Workmanship', '5-Year Coating'],
  ['5-Yr Workmanship', '5-Yr Coating'],
  ['Workmanship Warranty', 'Coating Warranty'],
  ['ACI-Trained Finishers · Bonded & Insured', 'Certified Coatings Installers · Bonded & Insured'],
  ['ACI-Trained Finishers', 'Certified Coatings Installers'],
  ['ACI-trained finishers', 'certified coatings installers'],
  ['ACI-Trained', 'Certified Coatings'],
  ['ACI-trained', 'certified coatings'],
  ['ACI · Insured', 'Certified · Insured'],
  ['ACI-Trained · Bonded & Insured', 'Certified · Bonded & Insured'],

  // Social proof
  ['4,000+ Pours', '2,400+ Floors Coated'],
  ['4,000+ pours', '2,400+ floors coated'],
  ['4000+ pours', '2400+ floors coated'],
  ['4,000+', '2,400+'],
  ['900+ Reviews', '700+ Reviews'],
  ['900+ reviews', '700+ reviews'],
  ['Since 2008', 'Since 2014'],
  ['since 2008', 'since 2014'],
  ['2008', '2014'],
  ['18+ Yrs', '12+ Yrs'],
  ['18 Years', '12 Years'],
  ['18 years', '12 years'],

  // Service paths (concrete → epoxy)
  ['/services/driveways', '/services/garage-epoxy'],
  ['/services/patios-walkways', '/services/metallic-epoxy'],
  ['/services/foundations', '/services/flake-systems'],
  ['/services/stamped-decorative', '/services/commercial-epoxy'],
  ['/services/concrete-repair', '/services/concrete-polish'],
  ['/services/commercial-flatwork', '/services/floor-repair-recoat'],

  // Industry paths
  ['/industries/property-management', '/industries/auto-shops'],
  ['/industries/municipalities', '/industries/warehouses'],

  // Blog paths
  ['/blogs/how-long-before-drive-on-new-concrete', '/blogs/epoxy-vs-polyaspartic-floors'],
  ['/blogs/stamped-vs-broom-finish-texas', '/blogs/how-to-prep-garage-for-epoxy'],
  ['/blogs/foundation-cracks-when-to-call', '/blogs/metallic-epoxy-design-ideas'],
  ['how-long-before-drive-on-new-concrete', 'epoxy-vs-polyaspartic-floors'],
  ['stamped-vs-broom-finish-texas', 'how-to-prep-garage-for-epoxy'],
  ['foundation-cracks-when-to-call', 'metallic-epoxy-design-ideas'],

  // Labels — longer first
  ['Stamped & Decorative Concrete', 'Commercial Epoxy'],
  ['Stamped & Decorative', 'Commercial Epoxy'],
  ['Patios & Walkways', 'Metallic Epoxy'],
  ['Commercial Flatwork', 'Floor Repair & Recoat'],
  ['Concrete Repair', 'Concrete Polish'],
  ['Concrete Driveways', 'Garage Epoxy'],
  ['Driveways', 'Garage Epoxy'],
  ['Foundations', 'Flake Systems'],
  ['Property Management', 'Auto Shops'],
  ['Municipalities & Public Works', 'Warehouses'],
  ['Municipalities', 'Warehouses'],

  // Hex
  ['#b45309', '#7e22ce'],
  ['#d97706', '#a855f7'],
  ['#92400e', '#6b21a8'],
  ['#1c1410', '#1a1025'],
  ['#2a1f18', '#2a1a3a'],
  ['#faf7f2', '#faf5ff'],
  ['#a89078', '#b8a0d0'],
  ['#6b5644', '#6b5080'],
  ['#e8dcc8', '#e8dcf5'],
  ['#f97316', '#7e22ce'],
  ['#fb923c', '#a855f7'],
  ['#c2410c', '#6b21a8'],
  ['#0d1b2a', '#1a1025'],

  // HVAC leftovers
  ['Arctic Air HVAC', 'PolyCoat Floors'],
  ['Arctic Air', 'PolyCoat'],
  ['arcticairhvac.com', 'polycoatfloors.com'],
  ['contact@arcticairhvac.com', 'hello@polycoatfloors.com'],
  ['service@arcticairhvac.com', 'hello@polycoatfloors.com'],
  ['+12549001234', '+12549801919'],
  ['(254) 900-1234', '(254) 980-1919'],
  ['254-900-1234', '254-980-1919'],
  ['NATE Certified', 'Certified Coatings'],
  ['NATE-certified', 'certified coatings'],
  ['NATE · TDLR', 'Certified · Insured'],
  ['Mike Hawkins', 'Nina Park'],
  ['4521 Bosque Blvd', '3300 Lake Air Dr'],
  ['hvac-template', 'epoxy-floors-template'],
  ['hvac-pro-template', 'epoxy-floors-template'],

  // Concrete language → epoxy
  ['concrete contractor', 'epoxy flooring contractor'],
  ['Concrete contractor', 'Epoxy flooring contractor'],
  ['Concrete Contractor', 'Epoxy Flooring Contractor'],
  ['concrete company', 'epoxy flooring company'],
  ['Free On-Site Estimates', 'Free On-Site Quotes'],
  ['Free on-site estimates', 'Free on-site quotes'],
  ['Free On-Site Estimate', 'Free On-Site Quote'],
  ['Free on-site estimate', 'Free on-site quote'],
  ['Free Estimates', 'Free Quotes'],
  ['Free estimates', 'Free quotes'],
  ['on-site estimate', 'on-site quote'],
  ['Flat-Rate Quotes', 'Flat-Rate Quotes'],
  ['flat-rate quotes', 'flat-rate quotes'],
  ['pours', 'floors coated'],
  ['Pours', 'Floors Coated'],
  ['pour day', 'install day'],
  ['Pour day', 'Install day'],
  ['Pour Day', 'Install Day'],
  ['pour window', 'install window'],
  ['every pour', 'every floor'],
  ['Every pour', 'Every floor'],
  ['the pour', 'the install'],
  ['a pour', 'a coating job'],
  ['new pour', 'new coating'],
  ['full pour', 'full recoat'],
  ['we pour', 'we coat'],
  ['We pour', 'We coat'],
  ['to pour', 'to coat'],
  ['poured', 'coated'],
  ['Poured', 'Coated'],
  ['finishers', 'installers'],
  ['Finishers', 'Installers'],
  ['broom finish', 'garage coating'],
  ['Broom finish', 'Garage coating'],
  ['Broom Finish', 'Garage Coating'],
  ['stamped concrete', 'metallic epoxy'],
  ['Stamped concrete', 'Metallic epoxy'],
  ['control joints', 'surface prep'],
  ['Control joints', 'Surface prep'],
  ['base prep', 'surface prep'],
  ['Base prep', 'Surface prep'],
  ['excavation', 'grinding and prep'],
  ['Excavation', 'Grinding and prep'],
  ['slab', 'floor'],
  ['Slab', 'Floor'],
  ['concrete driveway', 'garage epoxy floor'],
  ['Concrete driveway', 'Garage epoxy floor'],
  ['driveway', 'garage floor'],
  ['Driveway', 'Garage floor'],
  ['patio', 'metallic floor'],
  ['Patio', 'Metallic floor'],
  ['foundation', 'flake system'],
  ['Foundation', 'Flake system'],
  ['flatwork', 'floor coating'],
  ['Flatwork', 'Floor coating'],
  ['concrete', 'epoxy'],
  ['Concrete', 'Epoxy'],
];

console.log('=== Bulk rebrand ===');
let changed = 0;
for (const file of walk(ROOT)) {
  if (file.includes(`${path.sep}scripts${path.sep}`)) continue;
  let text = fs.readFileSync(file, 'utf8');
  const orig = text;
  for (const [from, to] of pairs) {
    if (text.includes(from)) text = text.split(from).join(to);
  }
  if (text !== orig) {
    fs.writeFileSync(file, text, 'utf8');
    changed++;
  }
}
console.log('patched files:', changed);

// ─── globalVariables ─────────────────────────────────────────────────────────
write('src/app/globalVariables.scss', `// src/app/globalVariables.scss
// ─────────────────────────────────────────────────────────────────────────────
// PolyCoat Floors — Brand Tokens
//
// THREE DISTINCT FONTS:
//   $titleFont  → Barlow Condensed  — bold condensed display (hero h1, section titles)
//   $headerFont → Outfit            — clean geometric sans   (nav, card titles, labels, CTAs)
//   $textFont   → Inter             — refined humanist sans  (body copy, form text, paragraphs)
// ─────────────────────────────────────────────────────────────────────────────

$titleFont:  var(--font-barlow-condensed), 'Barlow Condensed', sans-serif;
$headerFont: var(--font-outfit),           'Outfit',           sans-serif;
$textFont:   var(--font-inter),            'Inter',            sans-serif;

// ── Core Palette ─────────────────────────────────────────────────────────────
$black:      #000000;
$obsidian:   #1a1025;
$blackflat:  #2a1a3a;
$white:      #FFFFFF;
$offwhite:   #faf5ff;

// Greys (purple-tinted)
$darkgrey:   #b8a0d0;
$grey:       #6b5080;
$lightgrey:  #e8dcf5;

// Brand Accent — purple
$orange:     #7e22ce;
$lightorange:#a855f7;
$darkorange: #6b21a8;

// Legacy aliases
$green:      $orange;
$lightgreen: $lightorange;
$darkgreen:  $darkorange;
$blue:       #1e6fa8;

// Error
$danger-red: #ef4444;
`);

// ─── Service page generator ──────────────────────────────────────────────────
const servicePage = (s) => `// PolyCoat Floors — ${s.name} Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  ${s.iconImport}
} from "@fortawesome/free-solid-svg-icons";

export default function ${s.fn}() {

  const expectations = [
${s.expectations.map(([icon, title, desc]) => `    { icon: ${icon}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)} },`).join('\n')}
  ];

  const whyFeatures = [
${s.why.map(([icon, title, desc]) => `    { icon: ${icon}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)} },`).join('\n')}
  ];

  const processSteps = [
${s.process.map(([n, title, desc, icon]) => `    { number: ${n}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)}, icon: ${icon} },`).join('\n')}
  ];

  const metrics = [
    { icon: faTrophy,    value: ${s.metrics[0][0]}, label: ${JSON.stringify(s.metrics[0][1])}, suffix: ${JSON.stringify(s.metrics[0][2])}, duration: ${s.metrics[0][3]} },
    { icon: faChartLine, value: ${s.metrics[1][0]}, label: ${JSON.stringify(s.metrics[1][1])}, suffix: ${JSON.stringify(s.metrics[1][2])}, duration: ${s.metrics[1][3]} },
    { icon: faClock,     value: ${s.metrics[2][0]}, label: ${JSON.stringify(s.metrics[2][1])}, suffix: ${JSON.stringify(s.metrics[2][2])}, duration: ${s.metrics[2][3]} },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for ${s.short.toLowerCase()}.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full ${s.short.toLowerCase()} coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway ${s.short.toLowerCase()}.", badge: "" },
    { town: "Temple",       benefit: "Bell County ${s.short.toLowerCase()} — scheduled installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger garage and shop floors.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
${s.comparison.map(([f, us, o]) => `    { feature: ${JSON.stringify(f)}, us: ${JSON.stringify(us)}, others: ${JSON.stringify(o)} },`).join('\n')}
  ];

  const faq = [
${s.faq.map(([q, a]) => `    { question: ${JSON.stringify(q)}, answer: ${JSON.stringify(a)} },`).join('\n')}
  ];

  const crossServices = [
${s.cross.map(([icon, title, body, link]) => `    { icon: ${icon}, title: ${JSON.stringify(title)}, body: ${JSON.stringify(body)}, link: ${JSON.stringify(link)} },`).join('\n')}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: ${JSON.stringify(s.short)} },
      ]} />
      <SectionIntro
        title={${JSON.stringify(s.name + ' in Waco, TX')}}
        subtitle={${JSON.stringify(s.subtitle)}}
      />
      <TrustBar headline={${JSON.stringify(s.trust)}} />
      <div className={styles.section}><WhatToExpect sectionTitle={${JSON.stringify('What Happens on a ' + s.short + ' Project')}} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={${JSON.stringify('Why Homeowners Choose PolyCoat for ' + s.short)}} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={${JSON.stringify('services/' + s.slug)}} title={${JSON.stringify(s.short + ' Across Central Texas')}} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={${JSON.stringify(s.short + ' FAQs')}} /></div>
      <CTABanner
        headline={${JSON.stringify('Ready for ' + s.short + ' Done Right?')}}
        subline="Free on-site quote. Flat-rate pricing. Certified coatings installers. 5-Year Coating Warranty · Slip-Resistant Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={${JSON.stringify('Get a Free ' + s.short + ' Quote')}}
          cityName="Waco"
          slug={${JSON.stringify(s.slug)}}
          spot={${JSON.stringify(s.slug + '-page')}}
          formVariant={4}
        />
      </div>
    </main>
  );
}
`;

const serviceLayout = (s) => `import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: '${s.name} in Waco, TX | PolyCoat Floors',
  description: '${s.desc}',
  keywords: ${JSON.stringify(s.keywords)},
  alternates: { canonical: \`\${BASE}/services/${s.slug}\` },
  openGraph: {
    title: '${s.name} | PolyCoat Floors — Waco, TX',
    description: '${s.desc}',
    url: \`\${BASE}/services/${s.slug}\`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

const SERVICES = [
  {
    slug: 'garage-epoxy',
    name: 'Garage Epoxy',
    short: 'Garage Epoxy',
    fn: 'GarageEpoxyPage',
    iconImport: 'faWarehouse, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faPaintRoller, faIndustry, faWrench, faGem',
    subtitle: 'Durable garage floor coatings with professional grind prep, moisture checks, and slip-resistant topcoats built for Central Texas heat and vehicle traffic. Flat-rate quotes, 5-Year Coating Warranty.',
    trust: '2,400+ floors coated across Central Texas by PolyCoat Floors',
    expectations: [
      ['faSearch', 'On-Site Floor Assessment', 'We check moisture, cracks, oil staining, and access before quoting — no ballpark guesses from a photo.'],
      ['faFileContract', 'Flat-Rate Written Quote', 'Prep, coating system, flakes or solid color, and topcoat are in the number. No surprise change orders mid-install.'],
      ['faCheckCircle', 'Proper Grind Prep', 'Diamond grind and repair so the coating bonds for years — not a thin roll-on over dirty concrete.'],
      ['faShieldHalved', '5-Year Coating Warranty', 'Every garage epoxy install is backed by our 5-Year Coating Warranty with slip-resistant options.'],
    ],
    why: [
      ['faClock', 'Clear Install Timeline', 'We give you a realistic install window and cure timeline so you know when you can park again.'],
      ['faWarehouse', 'Built for Texas Garages', 'Systems selected for heat, tire marking resistance, and hot-tire pickup common in Central Texas.'],
      ['faShieldHalved', 'Certified Coatings Installers · Bonded & Insured', 'Crews led by certified coatings installers. Fully bonded and insured on every floor.'],
    ],
    process: [
      [1, 'Free Quote', 'We measure, check moisture and condition, and recommend the right system.', 'faHeadset'],
      [2, 'Quote & Schedule', 'You get a flat-rate quote. We schedule grind day and install day.', 'faSearch'],
      [3, 'Prep & Coat', 'Diamond grind, repairs, epoxy base, optional flakes, and protective topcoat.', 'faFileContract'],
      [4, 'Cure & Warranty', 'We walk you through cure care and back the work with our 5-year warranty.', 'faCheckCircle'],
    ],
    metrics: [[1200, 'Garage floors coated in Central Texas', '+', 3], [99, 'On-schedule install rate', '%', 2], [12, 'Years coating Waco-area floors', '+', 2]],
    comparison: [
      ['Diamond grind surface prep', '✅ Always', '❌ Often skipped'],
      ['Flat-rate quote (prep + coat + topcoat)', '✅ Written', '❌ Hourly + extras'],
      ['5-Year Coating Warranty', '✅ Every floor', '❌ Rare'],
      ['Certified coatings installers', '✅ All crews', '❌ Varies'],
      ['Moisture testing before coat', '✅ Standard', '❌ Guesswork'],
    ],
    faq: [
      ['How much does garage epoxy cost in Waco?', 'Most residential garage floors are priced by square footage, condition, system type (solid, flake, polyaspartic), and repair needs. We provide a flat-rate written quote after an on-site assessment.'],
      ['How long before I can park on new epoxy?', 'Light foot traffic is often fine the next day. Vehicles typically wait 48–72 hours depending on system and temperature. We give you a specific timeline for your install.'],
      ['Do you fix cracks before coating?', 'Yes — crack repair and patching are assessed and included when needed so the coating has a sound base.'],
      ['Solid color or flake system?', 'Flake systems hide stains and add traction; solid colors look clean and modern. We help you choose based on use and style.'],
      ['Will hot tires peel the coating?', 'Proper prep and a quality topcoat resist hot-tire pickup. Cheap roll-ons fail here — our systems are selected for garage traffic.'],
    ],
    cross: [
      ['faGem', 'Metallic Epoxy', 'Showpiece metallic floors for living spaces, showrooms, and custom garages.', '/services/metallic-epoxy'],
      ['faPaintRoller', 'Flake Systems', 'Full-broadcast flake floors with durable topcoats for garages and shops.', '/services/flake-systems'],
      ['faIndustry', 'Commercial Epoxy', 'High-traffic commercial and industrial coating systems.', '/services/commercial-epoxy'],
      ['faWrench', 'Floor Repair & Recoat', 'Repair failed coatings and recoat worn floors.', '/services/floor-repair-recoat'],
    ],
    keywords: ['garage epoxy Waco TX', 'garage floor coating Waco', 'epoxy garage floor Central Texas', 'garage epoxy installation Hewitt', 'flake garage floor Woodway'],
    desc: 'Garage epoxy flooring in Waco, TX. Diamond grind prep, flat-rate quotes, certified installers, 5-Year Coating Warranty.',
  },
  {
    slug: 'metallic-epoxy',
    name: 'Metallic Epoxy',
    short: 'Metallic Epoxy',
    fn: 'MetallicEpoxyPage',
    iconImport: 'faGem, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faPaintRoller, faIndustry, faWrench',
    subtitle: 'One-of-a-kind metallic epoxy floors with depth, movement, and high-gloss finish — for living spaces, showrooms, offices, and custom garages. Flat-rate design quotes, 5-Year Coating Warranty.',
    trust: 'Custom metallic floors that look like liquid metal — installed by PolyCoat',
    expectations: [
      ['faSearch', 'Color & Flow Design', 'We review metallic color options and layout so the finished floor matches your vision.'],
      ['faFileContract', 'Design Scope in Writing', 'Prep, metallic system, and topcoat priced upfront — no vague mid-job surprises.'],
      ['faCheckCircle', 'Controlled Application', 'Metallic pours need skill and timing — our installers manage flow, depth, and finish.'],
      ['faShieldHalved', '5-Year Coating Warranty', 'Metallic floors backed by the same coating warranty as our garage systems.'],
    ],
    why: [
      ['faClock', 'Weather-Smart Scheduling', 'Metallic work needs the right temperature and humidity window — we plan for Texas conditions.'],
      ['faGem', 'Showpiece Results', 'Get a unique, high-end look without tile seams or paver maintenance.'],
      ['faShieldHalved', 'Experienced Decorative Crews', 'Installers trained for metallics, clear topcoats, and clean detailing.'],
    ],
    process: [
      [1, 'Design Consult', 'Pick metallic colors, sheen, and borders for your space.', 'faHeadset'],
      [2, 'Quote', 'Full decorative metallic scope in a flat-rate quote.', 'faSearch'],
      [3, 'Prep & Pour', 'Grind, prime, metallic epoxy, and detail edges.', 'faFileContract'],
      [4, 'Topcoat & Care', 'Clear protective topcoat and care guide for long-term gloss.', 'faCheckCircle'],
    ],
    metrics: [[350, 'Metallic floors completed', '+', 3], [4.9, 'Average customer rating', '★', 2], [12, 'Years of decorative coatings', '+', 2]],
    comparison: [
      ['Color samples before install', '✅ Always', '❌ Surprise finish'],
      ['Metallic process explained', '✅ Clear options', '❌ Vague'],
      ['5-Year Coating Warranty', '✅ Included', '❌ Decorative excluded'],
      ['Clear topcoat protection', '✅ Yes', '❌ Soft finish only'],
    ],
    faq: [
      ['How much does metallic epoxy cost vs. standard garage epoxy?', 'Metallic systems cost more due to materials and artistry. We quote the full package after design selection.'],
      ['Is every metallic floor unique?', 'Yes — flow patterns are one-of-a-kind. We set realistic expectations with samples and past project photos.'],
      ['Can you do metallic in a garage?', 'Yes for many residential garages; we discuss traffic, tire marking, and maintenance first.'],
      ['How long does the gloss last?', 'A quality clear topcoat holds up well; maintenance depends on traffic and cleaning. We advise a care plan.'],
      ['Can metallic go over existing epoxy?', 'Sometimes after proper prep — we assess adhesion and recommend recoat vs. full system.'],
    ],
    cross: [
      ['faWarehouse', 'Garage Epoxy', 'Durable solid and flake garage systems.', '/services/garage-epoxy'],
      ['faPaintRoller', 'Flake Systems', 'High-traction flake broadcasts for garages and shops.', '/services/flake-systems'],
      ['faWrench', 'Floor Repair & Recoat', 'Fix damaged decorative sections.', '/services/floor-repair-recoat'],
      ['faIndustry', 'Commercial Epoxy', 'Commercial-grade coatings for businesses.', '/services/commercial-epoxy'],
    ],
    keywords: ['metallic epoxy Waco TX', 'metallic epoxy floor Central Texas', 'decorative epoxy flooring Waco', 'metallic garage floor Temple'],
    desc: 'Metallic epoxy floors in Waco, TX. Custom color and flow, flat-rate quotes, certified installers, 5-Year Coating Warranty.',
  },
  {
    slug: 'flake-systems',
    name: 'Flake Systems',
    short: 'Flake Systems',
    fn: 'FlakeSystemsPage',
    iconImport: 'faPaintRoller, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faGem, faIndustry, faWrench',
    subtitle: 'Full-broadcast flake epoxy systems that hide stains, add traction, and stand up to vehicles, tools, and Texas heat. Flat-rate quotes, 5-Year Coating Warranty.',
    trust: 'The most popular garage system in Central Texas — done right',
    expectations: [
      ['faSearch', 'Flake Blend Selection', 'We show flake color blends so you pick a look that matches your home or shop.'],
      ['faFileContract', 'Full System Quote', 'Grind, base coat, full flake broadcast, scrape, and topcoat in one flat-rate number.'],
      ['faCheckCircle', 'Full Broadcast Coverage', 'Dense flake coverage that hides concrete imperfections and improves slip resistance.'],
      ['faShieldHalved', '5-Year Coating Warranty', 'Flake systems backed by our coating warranty.'],
    ],
    why: [
      ['faClock', 'Efficient Two-Day Rhythm', 'Most residential garages follow a clear prep-and-coat schedule with minimal downtime.'],
      ['faPaintRoller', 'Hides Stains & Imperfections', 'Flakes camouflage oil spots and concrete variation better than solid color alone.'],
      ['faShieldHalved', 'Certified · Bonded & Insured', 'Professional crews with documentation for builders and homeowners.'],
    ],
    process: [
      [1, 'Site Visit', 'Measure, moisture check, flake blend selection.', 'faHeadset'],
      [2, 'Quote', 'Flat-rate price for full flake system.', 'faSearch'],
      [3, 'Install', 'Grind, base, broadcast flakes, scrape, topcoat.', 'faFileContract'],
      [4, 'Cure Guidance', 'Park timeline and care instructions with warranty.', 'faCheckCircle'],
    ],
    metrics: [[900, 'Flake systems installed', '+', 3], [98, 'Customer satisfaction rating', '%', 2], [12, 'Years of flake installations', '+', 2]],
    comparison: [
      ['Full broadcast (not light sprinkle)', '✅ Standard', '❌ Sparse flakes'],
      ['Flat-rate flake system quote', '✅ Written', '❌ Vague estimate'],
      ['5-Year Coating Warranty', '✅ Included', '❌ Short or none'],
      ['Slip-resistant topcoat options', '✅ Yes', '❌ Gloss only'],
    ],
    faq: [
      ['What is a flake system?', 'Epoxy base coat with vinyl color flakes fully broadcast into the wet coating, then scraped and sealed with a clear topcoat for durability and traction.'],
      ['How long does a flake garage take?', 'Most two-car garages are a multi-day process for prep, coat, and cure. We confirm the schedule at quote time.'],
      ['Can flakes be used commercially?', 'Yes — shops, showrooms, and light industrial floors often use flake systems for durability and easy cleaning.'],
      ['Do flake floors get slippery?', 'Flakes plus optional media in the topcoat improve traction vs. pure high-gloss solids.'],
      ['Can you match my existing flake floor?', 'We can get close with blend samples; exact matches to aged floors are never perfect.'],
    ],
    cross: [
      ['faWarehouse', 'Garage Epoxy', 'Solid-color and custom garage coatings.', '/services/garage-epoxy'],
      ['faGem', 'Metallic Epoxy', 'High-end metallic showpiece floors.', '/services/metallic-epoxy'],
      ['faIndustry', 'Commercial Epoxy', 'Commercial and industrial coatings.', '/services/commercial-epoxy'],
      ['faWrench', 'Floor Repair & Recoat', 'Refresh worn flake floors.', '/services/floor-repair-recoat'],
    ],
    keywords: ['flake epoxy garage Waco', 'full broadcast flake floor Central Texas', 'garage flake system Waco TX', 'epoxy flake flooring Hewitt'],
    desc: 'Flake epoxy flooring systems in Waco, TX. Full broadcast, durable topcoats, flat-rate quotes, 5-Year Coating Warranty.',
  },
  {
    slug: 'commercial-epoxy',
    name: 'Commercial Epoxy',
    short: 'Commercial Epoxy',
    fn: 'CommercialEpoxyPage',
    iconImport: 'faIndustry, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faPaintRoller, faWrench, faGem',
    subtitle: 'High-traffic commercial and industrial epoxy floors for warehouses, auto shops, retail, and facilities. Schedule-driven, insured, 5-Year Coating Warranty.',
    trust: 'Commercial coatings on your opening date — not when it is convenient for us',
    expectations: [
      ['faSearch', 'Scope From Plans or Site Walk', 'We quote from drawings or a site walk with clear square footage and system type.'],
      ['faFileContract', 'Commercial Documentation', 'COI, scheduling, and invoice clarity for PMs and facility managers.'],
      ['faCheckCircle', 'Traffic-Ready Specs', 'System thickness and topcoat matched to forklift, vehicle, or pedestrian use.'],
      ['faShieldHalved', 'Bonded & Insured', 'Full insurance for commercial jobs.'],
    ],
    why: [
      ['faClock', 'Reliable Mobilization', 'We protect your openings and operational timelines.'],
      ['faIndustry', 'Facility & Shop Experience', 'Warehouses, auto shops, and commercial spaces are core work for us.'],
      ['faShieldHalved', 'Certified Coatings Installers', 'Commercial finish standards, not residential-only crews.'],
    ],
    process: [
      [1, 'Bid / Scope', 'Site measure or plans review with written commercial quote.', 'faHeadset'],
      [2, 'Schedule Lock', 'Install window coordinated with other trades and access.', 'faSearch'],
      [3, 'Install', 'Mobilized crew, proper prep, multi-coat system as specified.', 'faFileContract'],
      [4, 'Closeout', 'Walkthrough, punch, warranty docs, invoice.', 'faCheckCircle'],
    ],
    metrics: [[400, 'Commercial coating projects', '+', 3], [98, 'On-schedule mobilization', '%', 2], [12, 'Years commercial coatings', '+', 2]],
    comparison: [
      ['COI & commercial paperwork ready', '✅ Fast', '❌ Delays start'],
      ['Schedule-driven install windows', '✅ Reliable', '❌ Flexible-only'],
      ['5-Year Coating Warranty', '✅ Available', '❌ Limited'],
      ['PM-friendly communication', '✅ Standard', '❌ Hard to reach'],
    ],
    faq: [
      ['Do you coat warehouse and shop floors?', 'Yes — warehouses, auto shops, light industrial, retail back-of-house, and similar commercial floors.'],
      ['Can you work nights or weekends?', 'Often yes for access-sensitive sites — discuss at bid time.'],
      ['What systems do you use commercially?', 'Epoxy and polyaspartic systems selected for traffic, chemical exposure, and cure windows.'],
      ['How large of a floor can you handle?', 'We scale crews and materials to the job; phased commercial sequences are common.'],
      ['Do you offer warranties on commercial work?', 'Yes — 5-Year Coating Warranty on our workmanship, terms confirmed in the contract.'],
    ],
    cross: [
      ['faWarehouse', 'Garage Epoxy', 'Residential garage coatings.', '/services/garage-epoxy'],
      ['faPaintRoller', 'Flake Systems', 'High-traction flake floors for shops.', '/services/flake-systems'],
      ['faWrench', 'Floor Repair & Recoat', 'Commercial floor repairs and recoats.', '/services/floor-repair-recoat'],
      ['faGem', 'Concrete Polish', 'Polished concrete for commercial spaces.', '/services/concrete-polish'],
    ],
    keywords: ['commercial epoxy flooring Waco TX', 'warehouse floor coating Central Texas', 'industrial epoxy Waco', 'auto shop floor epoxy'],
    desc: 'Commercial epoxy flooring in Waco, TX — warehouses, shops, and facilities. Insured, schedule-driven, 5-Year Coating Warranty.',
  },
  {
    slug: 'concrete-polish',
    name: 'Concrete Polish',
    short: 'Concrete Polish',
    fn: 'ConcretePolishPage',
    iconImport: 'faGem, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faIndustry, faWrench, faPaintRoller',
    subtitle: 'Polished concrete floors for modern homes, showrooms, and commercial spaces — refined finish, easy maintenance, and natural concrete beauty. Flat-rate quotes, 5-Year Coating Warranty on densifier/sealer systems where applicable.',
    trust: 'Polished floors that look clean for years with the right densifier and care',
    expectations: [
      ['faSearch', 'Honest Finish Assessment', 'We tell you when polish is ideal and when a full epoxy system is the better spend.'],
      ['faFileContract', 'Clear Polish Scope', 'Grind levels, densifier, and sheen target priced in writing.'],
      ['faCheckCircle', 'Progressive Grind Process', 'Step-by-step grinding and polishing for a consistent, professional sheen.'],
      ['faShieldHalved', 'Bonded & Insured Crews', 'Professional equipment and insured installers on every polish job.'],
    ],
    why: [
      ['faClock', 'Lower Long-Term Maintenance', 'Polished floors clean easily and skip the recoat cycle of some coatings.'],
      ['faGem', 'Modern Aesthetic', 'Natural concrete look for retail, offices, and contemporary homes.'],
      ['faShieldHalved', 'Local Experience', 'We understand Central Texas slabs and moisture realities.'],
    ],
    process: [
      [1, 'Inspect', 'On-site assessment of slab condition and desired sheen.', 'faHeadset'],
      [2, 'Recommend', 'Polish level vs. coating system — with reasons.', 'faSearch'],
      [3, 'Polish', 'Multi-step grind, densify, and polish to target sheen.', 'faFileContract'],
      [4, 'Care Plan', 'Cleaning guidance and maintenance tips.', 'faCheckCircle'],
    ],
    metrics: [[250, 'Polish projects completed', '+', 3], [95, 'Clients who say we were honest about options', '%', 2], [12, 'Years refining Central Texas floors', '+', 2]],
    comparison: [
      ['Honest polish vs coat advice', '✅ Always', '❌ One-size-fits-all'],
      ['Written polish quote', '✅ Yes', '❌ Vague'],
      ['Sheen target agreed upfront', '✅ Included', '❌ Surprise gloss'],
      ['Dust-controlled process', '✅ Best effort', '❌ Messy'],
    ],
    faq: [
      ['Is polished concrete good for garages?', 'Sometimes — but epoxy or flake systems often perform better for vehicles and oil. We recommend based on use.'],
      ['How shiny can you make the floor?', 'From matte to high gloss depending on grind steps and densifier. We set a target sheen before starting.'],
      ['Does polished concrete stain?', 'Densifiers and guards help; spills should still be cleaned promptly. We explain care at closeout.'],
      ['Can you polish over old coating?', 'Usually not — coatings must be removed first. We assess and quote prep accurately.'],
      ['How long does polishing take?', 'Depends on square footage and target sheen. Commercial spaces may be phased.'],
    ],
    cross: [
      ['faWarehouse', 'Garage Epoxy', 'Better for vehicle traffic and chemical resistance.', '/services/garage-epoxy'],
      ['faIndustry', 'Commercial Epoxy', 'Coated commercial floors when polish is not enough.', '/services/commercial-epoxy'],
      ['faWrench', 'Floor Repair & Recoat', 'Repair and recoat worn surfaces.', '/services/floor-repair-recoat'],
      ['faPaintRoller', 'Flake Systems', 'Decorative durable garage systems.', '/services/flake-systems'],
    ],
    keywords: ['polished concrete Waco TX', 'concrete polish commercial Central Texas', 'polished floor Waco', 'concrete grinding polish Hewitt'],
    desc: 'Concrete polishing in Waco, TX — modern sheen, easy care, honest polish-vs-coat advice. Flat-rate quotes.',
  },
  {
    slug: 'floor-repair-recoat',
    name: 'Floor Repair & Recoat',
    short: 'Floor Repair & Recoat',
    fn: 'FloorRepairRecoatPage',
    iconImport: 'faWrench, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faPaintRoller, faIndustry, faGem',
    subtitle: 'Peeling epoxy repair, failed coating removal, crack fixes, and professional recoats. Honest assessment — repair when it makes sense, full strip-and-recoat when it does not.',
    trust: 'Honest repair recommendations — not every failed floor needs a full tear-out story',
    expectations: [
      ['faSearch', 'Honest Diagnosis', 'We tell you when a recoat will last and when full removal is the smarter spend.'],
      ['faFileContract', 'Clear Repair Scope', 'Written price for the repair area — not open-ended time and materials surprises.'],
      ['faCheckCircle', 'Matched Finish When Possible', 'We blend recoats to adjacent floors as closely as practical.'],
      ['faShieldHalved', 'Coating Warranty on New Work', 'New coating work we perform is backed by our warranty terms.'],
    ],
    why: [
      ['faClock', 'Faster Than Full Replacement', 'Targeted repairs get you functional without a full project timeline when adhesion allows.'],
      ['faWrench', 'Failed Coating Experts', 'We see peeling, hot-tire failures, and moisture issues every week in Central Texas.'],
      ['faShieldHalved', 'Local Experience', 'We understand prep shortcuts that caused the failure — and we do not repeat them.'],
    ],
    process: [
      [1, 'Inspect', 'On-site assessment of peeling, moisture, and adhesion.', 'faHeadset'],
      [2, 'Recommend', 'Spot repair, recoat, or full strip — with reasons.', 'faSearch'],
      [3, 'Execute', 'Repair or recoat work completed with proper prep.', 'faFileContract'],
      [4, 'Follow-Up', 'Care tips and warranty on the work performed.', 'faCheckCircle'],
    ],
    metrics: [[500, 'Repair & recoat projects completed', '+', 3], [95, 'Clients who say we were honest about options', '%', 2], [12, 'Years diagnosing failed coatings', '+', 2]],
    comparison: [
      ['Honest repair vs strip advice', '✅ Always', '❌ Upsell full system'],
      ['Written repair quote', '✅ Yes', '❌ Vague'],
      ['Cause assessment (moisture/prep)', '✅ Included', '❌ Band-aid only'],
      ['Match adjacent finish', '✅ Best effort', '❌ Obvious patch'],
    ],
    faq: [
      ['Can peeling garage epoxy be repaired?', 'Often localized peeling can be repaired if the rest of the system is sound. Widespread adhesion failure usually needs full removal.'],
      ['Why did my epoxy peel?', 'Common causes: poor prep, moisture vapor, oil contamination, or incompatible topcoats. We diagnose before quoting.'],
      ['How much does a recoat cost?', 'Depends on square footage and whether grinding/removal is required. On-site quotes are free.'],
      ['Can you recoat over existing epoxy?', 'Sometimes after sanding and adhesion testing — not always. Honesty here saves money later.'],
      ['Do you remove old coating?', 'Yes — mechanical removal and proper re-prep when a recoat would fail.'],
    ],
    cross: [
      ['faWarehouse', 'Garage Epoxy', 'Full garage systems when repair is not enough.', '/services/garage-epoxy'],
      ['faPaintRoller', 'Flake Systems', 'Replace failing floors with full flake systems.', '/services/flake-systems'],
      ['faIndustry', 'Commercial Epoxy', 'Commercial floor repairs and recoats.', '/services/commercial-epoxy'],
      ['faGem', 'Metallic Epoxy', 'Decorative replacement systems.', '/services/metallic-epoxy'],
    ],
    keywords: ['epoxy floor repair Waco TX', 'recoat garage epoxy Central Texas', 'peeling epoxy fix Waco', 'epoxy floor recoat Hewitt'],
    desc: 'Epoxy floor repair and recoat in Waco, TX — peeling fixes, strip-and-recoat, honest advice. Flat-rate quotes.',
  },
];

// ─── Industries ──────────────────────────────────────────────────────────────
const industryPage = (ind) => `// PolyCoat Floors — ${ind.name}
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline  from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import Variant4         from "#/PageComponents/ContactForms/Variant4/Form";

import {
  ${ind.iconImport}
} from "@fortawesome/free-solid-svg-icons";

export default function ${ind.fn}() {
  const whyFeatures = [
${ind.why.map(([icon, title, desc]) => `    { icon: ${icon}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)} },`).join('\n')}
  ];

  const processSteps = [
${ind.process.map(([n, title, desc, icon]) => `    { number: ${n}, title: ${JSON.stringify(title)}, description: ${JSON.stringify(desc)}, icon: ${icon} },`).join('\n')}
  ];

  const metrics = [
    { icon: faTrophy, value: ${ind.metrics[0][0]}, label: ${JSON.stringify(ind.metrics[0][1])}, suffix: ${JSON.stringify(ind.metrics[0][2])}, duration: 3 },
    { icon: faChartLine, value: ${ind.metrics[1][0]}, label: ${JSON.stringify(ind.metrics[1][1])}, suffix: ${JSON.stringify(ind.metrics[1][2])}, duration: 2 },
    { icon: faClock, value: ${ind.metrics[2][0]}, label: ${JSON.stringify(ind.metrics[2][1])}, suffix: ${JSON.stringify(ind.metrics[2][2])}, duration: 2 },
  ];

  const faq = [
${ind.faq.map(([q, a]) => `    { question: ${JSON.stringify(q)}, answer: ${JSON.stringify(a)} },`).join('\n')}
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: ${JSON.stringify(ind.name)} },
      ]} />
      <SectionIntro
        title={${JSON.stringify(ind.name + ' Epoxy Partner — Waco & Central Texas')}}
        subtitle={${JSON.stringify(ind.subtitle)}}
      />
      <TrustBar headline={${JSON.stringify(ind.trust)}} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={${JSON.stringify('Why ' + ind.name + ' Choose PolyCoat')}} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={${JSON.stringify(ind.name + ' FAQs')}} /></div>
      <CTABanner
        headline={${JSON.stringify('Need a Reliable Floor Coatings Partner?')}}
        subline="Flat-rate commercial and production quotes. Certified coatings installers. Bonded & insured. Call (254) 980-1919."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4
          title={${JSON.stringify('Request a Bid for ' + ind.name)}}
          cityName="Waco"
          slug={${JSON.stringify(ind.slug)}}
          spot={${JSON.stringify(ind.slug + '-industry')}}
          formVariant={4}
        />
      </div>
    </main>
  );
}
`;

const industryLayout = (ind) => `import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: '${ind.name} Epoxy Flooring Partner | PolyCoat Floors — Waco, TX',
  description: '${ind.desc}',
  alternates: { canonical: \`\${BASE}/industries/${ind.slug}\` },
  openGraph: {
    title: '${ind.name} | PolyCoat Floors',
    description: '${ind.desc}',
    url: \`\${BASE}/industries/${ind.slug}\`,
    siteName: 'PolyCoat Floors',
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

const INDUSTRIES = [
  {
    slug: 'homebuilders',
    name: 'Homebuilders',
    fn: 'HomebuildersPage',
    iconImport: 'faHardHat, faClock, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine',
    subtitle: 'Production and custom homebuilders need floor coating partners who hit install windows, protect other trades, and do not hold up closing. PolyCoat delivers garage epoxy and decorative floors for Central Texas builders.',
    trust: 'Preferred epoxy partner for Central Texas homebuilders',
    why: [
      ['faHardHat', 'Production-Ready Scheduling', 'We protect your close schedule with reliable install-day mobilization and clear communication.'],
      ['faShieldHalved', 'Clean, Professional Crews', 'Protected work areas, controlled dust where practical, and finish standards buyers notice.'],
      ['faUsers', 'Builder-Friendly Process', 'Professional crews that coordinate with your supers and other trades on site.'],
    ],
    process: [
      [1, 'Scope & Bid', 'Plans or model review and competitive production pricing.', 'faHeadset'],
      [2, 'Schedule', 'Lock install windows into your construction calendar.', 'faSearch'],
      [3, 'Install', 'On-time prep and coating to agreed system.', 'faFileContract'],
      [4, 'Closeout', 'Walkthrough and warranty documentation.', 'faCheckCircle'],
    ],
    metrics: [[300, 'Builder floors completed', '+'], [99, 'On-schedule install rate', '%'], [12, 'Years with Central Texas builders', '+']],
    faq: [
      ['Do you coat production home garages?', 'Yes — production and custom residential garage epoxy and flake systems.'],
      ['Can you support multiple simultaneous sites?', 'Yes within crew capacity — we plan mobilization with your supers.'],
      ['Do you provide COIs quickly?', 'Yes — insurance documentation is standard for builder accounts.'],
      ['What is your typical lead time?', 'Season and volume dependent; established builder accounts get priority scheduling.'],
    ],
    desc: 'Epoxy flooring partner for homebuilders in Waco and Central Texas — garage and decorative floors on production schedules.',
  },
  {
    slug: 'auto-shops',
    name: 'Auto Shops',
    fn: 'AutoShopsPage',
    iconImport: 'faCar, faClock, faShieldHalved, faClipboardCheck, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine',
    subtitle: 'Auto shops and service centers need chemical-resistant, easy-clean floors that stand up to oil, solvents, and daily traffic. PolyCoat delivers commercial epoxy systems with schedule-aware crews.',
    trust: 'Shop floors built for real automotive work — not showroom-only coatings',
    why: [
      ['faCar', 'Shop-Ready Systems', 'Coatings selected for oil, tire traffic, and tool-drop durability.'],
      ['faClipboardCheck', 'Clear Scopes & Invoices', 'Written scopes shop owners and facility managers can approve and file.'],
      ['faShieldHalved', 'Fully Insured', 'COIs without chase-down delays.'],
    ],
    process: [
      [1, 'Site Walk', 'Assess existing floor, drains, and chemical exposure.', 'faHeadset'],
      [2, 'Written Scope', 'Flat-rate system options for shop use.', 'faSearch'],
      [3, 'Mobilize', 'Scheduled work with minimal operational disruption.', 'faFileContract'],
      [4, 'Closeout', 'Photos, invoice, warranty.', 'faCheckCircle'],
    ],
    metrics: [[180, 'Auto shop floors coated', '+'], [98, 'On-time start rate', '%'], [12, 'Years coating shop floors', '+']],
    faq: [
      ['Do you coat service bays?', 'Yes — bays, detail areas, and shop offices with systems matched to use.'],
      ['Can you work after hours?', 'Often yes — discuss access at bid time.'],
      ['What about oil-soaked concrete?', 'We assess contamination and prep requirements honestly — some floors need aggressive grind or remediation.'],
      ['Warranty for commercial shops?', 'Yes — 5-Year Coating Warranty terms confirmed in the contract.'],
    ],
    desc: 'Epoxy flooring for auto shops and service centers in Waco and Central Texas — durable, cleanable, insured.',
  },
  {
    slug: 'warehouses',
    name: 'Warehouses',
    fn: 'WarehousesPage',
    iconImport: 'faIndustry, faClock, faShieldHalved, faRoad, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine',
    subtitle: 'Warehouses and distribution spaces need durable floor coatings that handle forklifts, pallet traffic, and long shifts. PolyCoat is bonded, insured, and schedule-driven for facility managers.',
    trust: 'Warehouse epoxy that keeps operations moving',
    why: [
      ['faIndustry', 'Facility-Ready Specs', 'Systems matched to traffic, abrasion, and marking needs.'],
      ['faRoad', 'Phased Install Options', 'We plan phases so critical aisles stay operational when possible.'],
      ['faShieldHalved', 'Bonded & Insured', 'Coverage profile suitable for commercial facilities.'],
    ],
    process: [
      [1, 'Bid Package', 'Review plans/specs or site measure and submit pricing.', 'faHeadset'],
      [2, 'Award & Schedule', 'Coordinate access and phase plan.', 'faSearch'],
      [3, 'Install', 'Safe work zones and quality multi-coat system.', 'faFileContract'],
      [4, 'Accept & Invoice', 'Punch list closeout and documentation.', 'faCheckCircle'],
    ],
    metrics: [[120, 'Warehouse / facility projects', '+'], [100, 'Safety-first job sites', '%'], [12, 'Years Central Texas commercial work', '+']],
    faq: [
      ['Do you coat large warehouse floors?', 'Yes within capacity — phased installs are common for large square footage.'],
      ['Forklift traffic systems?', 'We recommend systems and topcoats rated for your traffic profile.'],
      ['Can you stripe after coating?', 'Line striping can be coordinated — discuss at bid time.'],
      ['Service area for warehouses?', 'Waco and Central Texas facilities within our operational radius.'],
    ],
    desc: 'Warehouse and facility epoxy flooring in Central Texas — durable systems, phased installs, schedule-driven crews.',
  },
];

// ─── Blogs ───────────────────────────────────────────────────────────────────
const blogPage = (b) => `// PolyCoat Floors — Blog: ${b.title}
"use client";

import styles from "../_shared/page.module.scss";
import BlogHero from "#/BlogComponents/BlogHero/BlogHero";
import BlogBody from "#/BlogComponents/BlogBody/BlogBody";
import BlogCTA from "#/BlogComponents/BlogCTA/BlogCTA";
import ContentSection from "#/BlogComponents/ContentSection/ContentSection";
import SectionWithTips from "#/BlogComponents/SectionWithTips/SectionWithTips";
import RelatedLinks from "#/BlogComponents/RelatedLinks/RelatedLinks";

export default function BlogPostPage() {
  return (
    <main className={styles.page}>
      <BlogHero
        title={${JSON.stringify(b.title)}}
        category={${JSON.stringify(b.category)}}
        date={${JSON.stringify(b.date)}}
        readTime={${b.readTime}}
        imageSrc={${JSON.stringify(b.imageSrc)}}
        imageAlt={${JSON.stringify(b.imageAlt)}}
      />
      <BlogBody>
${b.sections.map(sec => {
  if (sec.type === 'content') {
    return `        <ContentSection
          title={${JSON.stringify(sec.title)}}
          body={${JSON.stringify(sec.body)}}
        />`;
  }
  if (sec.type === 'tips') {
    return `        <SectionWithTips
          title={${JSON.stringify(sec.title)}}
          intro={${JSON.stringify(sec.intro)}}
          tips={${JSON.stringify(sec.tips)}}
        />`;
  }
  return '';
}).join('\n')}
        <RelatedLinks links={${JSON.stringify(b.related)}} />
      </BlogBody>
      <BlogCTA
        title={${JSON.stringify(b.ctaTitle)}}
        body={${JSON.stringify(b.ctaBody)}}
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </main>
  );
}
`;

const blogLayout = (b) => `import type { Metadata } from 'next';

const BASE = 'https://www.polycoatfloors.com';

export const metadata: Metadata = {
  title: ${JSON.stringify(b.title + ' | PolyCoat Floors')},
  description: ${JSON.stringify(b.excerpt)},
  keywords: ${JSON.stringify(b.keywords)},
  alternates: { canonical: \`\${BASE}/blogs/${b.slug}\` },
  openGraph: {
    title: ${JSON.stringify(b.title)},
    description: ${JSON.stringify(b.excerpt)},
    url: \`\${BASE}/blogs/${b.slug}\`,
    siteName: 'PolyCoat Floors',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

const BLOGS = [
  {
    slug: 'epoxy-vs-polyaspartic-floors',
    title: 'Epoxy vs. Polyaspartic Floors: Which Is Right for Your Garage?',
    category: 'Coatings',
    date: 'April 18, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Epoxy versus polyaspartic garage floor coating comparison for Waco Texas',
    excerpt: 'Cure time, UV stability, cost, and durability — how to choose between epoxy and polyaspartic garage floor systems in Central Texas.',
    keywords: ['epoxy vs polyaspartic', 'polyaspartic garage floor', 'epoxy garage floor Waco', 'best garage floor coating Texas'],
    ctaTitle: 'Planning a Garage Floor in Waco?',
    ctaBody: 'PolyCoat installs epoxy and polyaspartic systems with clear guidance and a 5-Year Coating Warranty. Free on-site quotes.',
    related: [
      { label: 'Garage Epoxy', href: '/services/garage-epoxy' },
      { label: 'Flake Systems', href: '/services/flake-systems' },
      { label: 'Get a Free Quote', href: '/contact' },
    ],
    sections: [
      {
        type: 'content',
        title: 'The short answer',
        body: 'Epoxy systems are proven, cost-effective, and excellent for many residential garages when properly prepped. Polyaspartic (and hybrid systems) often cure faster, resist UV yellowing better, and can return vehicles to the floor sooner — at a higher material cost. The right choice depends on budget, timeline, sun exposure, and how hard the floor will be used.',
      },
      {
        type: 'tips',
        title: 'What to compare before you buy',
        intro: 'Skip marketing hype and focus on these practical factors for Waco and Central Texas:',
        tips: [
          'Cure window: how soon you need to park vehicles',
          'UV exposure: open-door sunlight can yellow some coatings',
          'Hot-tire resistance: prep and topcoat quality matter more than brand slogans',
          'Budget: polyaspartic systems usually cost more per square foot',
          'Installer skill: a great system applied poorly fails either way',
        ],
      },
      {
        type: 'content',
        title: 'How PolyCoat recommends systems',
        body: 'We assess moisture, concrete condition, and your schedule, then recommend epoxy, polyaspartic, or a hybrid approach in plain English. You get a flat-rate quote for the full system — grind prep through topcoat — not a vague per-square-foot promise that changes on install day.',
      },
    ],
  },
  {
    slug: 'how-to-prep-garage-for-epoxy',
    title: 'How to Prep Your Garage for Epoxy (What Pros Actually Do)',
    category: 'Prep',
    date: 'April 14, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Professional garage floor grinding and prep for epoxy coating',
    excerpt: 'Moisture testing, diamond grinding, crack repair, and oil removal — the prep steps that decide whether epoxy lasts years or peels in months.',
    keywords: ['garage epoxy prep', 'diamond grind epoxy', 'how to prep garage floor for epoxy', 'epoxy floor prep Waco'],
    ctaTitle: 'Want Prep Done Right the First Time?',
    ctaBody: 'PolyCoat diamond-grinds, repairs, and coats with a written flat-rate quote — no shortcuts that cause peel later.',
    related: [
      { label: 'Garage Epoxy', href: '/services/garage-epoxy' },
      { label: 'Floor Repair & Recoat', href: '/services/floor-repair-recoat' },
      { label: 'Get a Free Quote', href: '/contact' },
    ],
    sections: [
      {
        type: 'content',
        title: 'Prep is 80% of the job',
        body: 'Most failed garage epoxy is not a “bad product” — it is poor surface preparation. Coatings need a clean, profiled, dry surface. Painting over dirty, oily, or sealed concrete is a common DIY failure mode. Professional installs start with assessment and mechanical prep, not a quick etch and roll.',
      },
      {
        type: 'tips',
        title: 'What professional prep usually includes',
        intro: 'Every floor is different, but quality installs commonly involve:',
        tips: [
          'Moisture evaluation before coating',
          'Diamond grinding for proper surface profile',
          'Crack repair and patching as needed',
          'Oil and contaminant treatment or removal',
          'Thorough vacuuming and clean staging before mix and pour',
          'Clear cure and park timelines after topcoat',
        ],
      },
      {
        type: 'content',
        title: 'How to prepare as a homeowner',
        body: 'Clear the garage, remove storage, and plan for a few days without parking inside. Tell your installer about past floods, oil leaks, or previous coatings. Do not DIY acid etch and expect pro results — if you want the floor to last, invest in proper grind prep.',
      },
    ],
  },
  {
    slug: 'metallic-epoxy-design-ideas',
    title: 'Metallic Epoxy Design Ideas for Homes and Showrooms',
    category: 'Design',
    date: 'April 10, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Metallic epoxy floor design ideas for Waco Texas homes and showrooms',
    excerpt: 'Color movement, high-gloss depth, and layout ideas for metallic epoxy floors in living spaces, offices, garages, and retail showrooms.',
    keywords: ['metallic epoxy design ideas', 'metallic epoxy colors', 'decorative epoxy flooring ideas', 'metallic floor Waco TX'],
    ctaTitle: 'Want a Custom Metallic Floor?',
    ctaBody: 'PolyCoat designs and installs metallic epoxy with sample guidance and a 5-Year Coating Warranty.',
    related: [
      { label: 'Metallic Epoxy', href: '/services/metallic-epoxy' },
      { label: 'Garage Epoxy', href: '/services/garage-epoxy' },
      { label: 'Contact Us', href: '/contact' },
    ],
    sections: [
      {
        type: 'content',
        title: 'Why metallic epoxy stands out',
        body: 'Metallic epoxy creates depth and movement that solid colors cannot match. Pigments catch light differently across the floor, so each install is unique. It is popular for showrooms, offices, modern homes, and custom garages where the floor is part of the design — not just protection.',
      },
      {
        type: 'tips',
        title: 'Design choices that matter',
        intro: 'Before you fall in love with a photo, decide:',
        tips: [
          'Primary and accent metallic colors that match walls and cabinetry',
          'Sheen level — high gloss shows depth but needs good cleaning habits',
          'Borders or solid edges for a framed look',
          'Traffic and furniture — metallics can show scratches more than flake systems',
          'Lighting — natural and artificial light change how movement reads',
        ],
      },
      {
        type: 'content',
        title: 'Where metallic works best',
        body: 'Living rooms, basements, retail floors, auto showrooms, and low-to-moderate vehicle garages are common. Heavy shop environments may prefer flake or solid commercial systems. PolyCoat helps you match the system to the space so you get beauty without the wrong wear profile.',
      },
    ],
  },
];

console.log('=== Services ===');
SERVICES.forEach(s => {
  write(`src/app/services/${s.slug}/page.tsx`, servicePage(s));
  write(`src/app/services/${s.slug}/layout.tsx`, serviceLayout(s));
});

console.log('=== Industries ===');
INDUSTRIES.forEach(ind => {
  write(`src/app/industries/${ind.slug}/page.tsx`, industryPage(ind));
  write(`src/app/industries/${ind.slug}/layout.tsx`, industryLayout(ind));
});

console.log('=== Blogs ===');
BLOGS.forEach(b => {
  write(`src/app/blogs/${b.slug}/page.tsx`, blogPage(b));
  write(`src/app/blogs/${b.slug}/layout.tsx`, blogLayout(b));
  write(`src/app/blogs/${b.slug}/page.module.scss`, `@use '../../_shared/page.module.scss';\n`);
});

// ─── Key pages ───────────────────────────────────────────────────────────────
write('src/app/page.tsx', `// PolyCoat Floors — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faWarehouse, faGem, faPaintRoller, faIndustry, faWrench, faSparkles,
  faTrophy, faChartLine, faClock,
  faClipboardCheck, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

// faSparkles may not exist in FA5 — use faStar as polish icon fallback via rename
const faPolish = faGem;

export default function HomePage() {

  const services = [
    {
      icon: faWarehouse,
      title: "Garage Epoxy",
      body: "Durable garage floor coatings with diamond grind prep, moisture checks, and slip-resistant topcoats built for Central Texas heat and vehicles.",
      link: "/services/garage-epoxy",
    },
    {
      icon: faGem,
      title: "Metallic Epoxy",
      body: "One-of-a-kind metallic floors with depth and high-gloss finish for living spaces, showrooms, and custom garages.",
      link: "/services/metallic-epoxy",
    },
    {
      icon: faPaintRoller,
      title: "Flake Systems",
      body: "Full-broadcast flake systems that hide stains, add traction, and stand up to daily garage and shop use.",
      link: "/services/flake-systems",
    },
    {
      icon: faIndustry,
      title: "Commercial Epoxy",
      body: "High-traffic commercial and industrial coatings for warehouses, auto shops, and facilities.",
      link: "/services/commercial-epoxy",
    },
    {
      icon: faPolish,
      title: "Concrete Polish",
      body: "Polished concrete for modern homes and commercial spaces — refined sheen and easy maintenance.",
      link: "/services/concrete-polish",
    },
    {
      icon: faWrench,
      title: "Floor Repair & Recoat",
      body: "Peeling epoxy repair, failed coating removal, and professional recoats with honest diagnosis.",
      link: "/services/floor-repair-recoat",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Floors coated across Central Texas",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 12,   label: "Years of local coatings craftsmanship", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Free On-Site Quotes",
      description: "We measure on-site, check moisture and condition, and give you a written flat-rate quote before any grinding starts.",
    },
    {
      icon: faShieldHalved,
      title: "Certified Coatings Installers · Bonded & Insured",
      description: "Crews led by certified coatings installers with full bonding and insurance on every floor — documentation available on request.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2014",
      description: "We're not a franchise. PolyCoat was founded in Waco by Nina Park. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a free on-site quote that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Assess & Measure",
      description: "We measure square footage, check moisture and condition, and recommend the right system in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before grind day. You decide — zero pressure. The quote covers prep, coat, and topcoat.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Coat, Cure & Warranty",
      description: "Professional prep and install, clear cure guidance, and a 5-Year Coating Warranty with slip-resistant options.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest System Recommendation",
      description: "We tell you when a recoat is enough and when a full strip-and-recoat makes sense — not what's most profitable to sell.",
    },
    {
      icon: faLayerGroup,
      title: "Surface Prep That Lasts",
      description: "Diamond grinding and repair so your coating bonds for years — not a thin roll-on over dirty concrete.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before we start. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Clear Cure Guidance",
      description: "You'll know when you can walk and park — so you don't ruin a perfect finish by driving too early.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway floors.", badge: "" },
    { town: "Temple",       benefit: "Bell County garage and commercial coatings.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const faq = [
    { question: "How much does garage epoxy cost in Waco?", answer: "Pricing depends on square footage, floor condition, system type (solid, flake, metallic, polyaspartic), and repair needs. We provide a free on-site assessment and a flat-rate written quote — no ballpark phone guesses that change later." },
    { question: "How long before I can park on new epoxy?", answer: "Light foot traffic is often fine the next day. Most passenger vehicles wait 48–72 hours depending on system and temperature. We give you a specific timeline for your install." },
    { question: "Are you licensed and insured?", answer: "Yes. PolyCoat Floors uses certified coatings installers and is bonded and insured. Proof of insurance is available for builders and facility managers." },
    { question: "Do you fix peeling epoxy?", answer: "Yes — we diagnose adhesion failures and recommend repair, recoat, or full strip when needed. See our Floor Repair & Recoat service." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "What warranty do you offer?", answer: "Every project is backed by our 5-Year Coating Warranty. Slip-resistant topcoat options available." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="4.9★ · 700+ reviews · 2,400+ floors coated across Central Texas" />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Epoxy Floor Services Built for Central Texas"
          subheading="Garage epoxy, metallic, flake systems, commercial coatings, polish, and repairs — flat-rate quotes and certified installers."
          cards={services}
        />
      </div>
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" title="12 Years, By the Numbers" />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses PolyCoat" />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect Working With Us" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving Waco & Central Texas" />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Epoxy Flooring FAQs" />
      </div>
      <CTABanner
        headline="Ready for Floors Done Right?"
        subline="Free on-site quote. Flat-rate pricing. Certified coatings installers. 5-Year Coating Warranty · Slip-Resistant Options."
        primaryText="Call (254) 980-1919"
        primaryLink="tel:+12549801919"
        secondaryText="Get a Free Quote"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Get Your Free Floor Coating Quote"
          cityName="Waco"
          slug="home"
          spot="homepage"
          formVariant={4}
        />
      </div>
    </main>
  );
}
`);

// Fix unused faSparkles import - rewrite without it
write('src/app/page.tsx', fs.readFileSync(path.join(ROOT, 'src/app/page.tsx'), 'utf8')
  .replace(`faWarehouse, faGem, faPaintRoller, faIndustry, faWrench, faSparkles,`, `faWarehouse, faGem, faPaintRoller, faIndustry, faWrench,`)
  .replace(`// faSparkles may not exist in FA5 — use faStar as polish icon fallback via rename\nconst faPolish = faGem;\n\n`, '')
  .replace('icon: faPolish', 'icon: faGem'));

write('components/Pages/Home/WelcomePage/WelcomePage.tsx', `'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './styles.module.scss';

// ── Epoxy flake / pigment canvas ─────────────────────────────────────────────
function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    const pts = Array.from({ length: 34 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 3.5 + 1, vx: (Math.random() - 0.5) * 0.8,
      vy: Math.random() * 0.35 + 0.12, o: Math.random() * 0.35 + 0.55,
      spin: Math.random() * 0.05 - 0.025, angle: Math.random() * Math.PI * 2,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.save(); ctx.globalAlpha = p.o;
        ctx.translate(p.x, p.y); ctx.rotate(p.angle);
        ctx.fillStyle = '#7e22ce';
        ctx.fillRect(-p.r, -p.r * 0.5, p.r * 2, p.r);
        ctx.restore();
        p.x += p.vx; p.y += p.vy; p.angle += p.spin;
        if (p.y > canvas.height + 10) { p.y = -10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className={styles.particleCanvas} aria-hidden="true" />;
}

// ── Coat / cure meter ────────────────────────────────────────────────────────
function InstallMeter() {
  const [fill, setFill] = useState(0);
  useEffect(() => { const t = setTimeout(() => setFill(100), 750); return () => clearTimeout(t); }, []);
  return (
    <div className={styles.thermo} aria-hidden="true">
      <div className={styles.thermoColumn}>
        <div className={styles.thermoTube}>
          <motion.div
            className={styles.thermoFill}
            initial={{ height: '0%' }}
            animate={{ height: \`\${fill}%\` }}
            transition={{ duration: 2.0, delay: 0.85, ease: [0.34, 1.2, 0.64, 1] }}
          />
        </div>
        <div className={styles.thermoBulb} />
      </div>
      <div className={styles.thermoLabels}>
        <span className={styles.thermoTop}>Cured</span>
        <span className={styles.thermoMid}>Waco, TX</span>
        <span className={styles.thermoBot}>Coated</span>
      </div>
    </div>
  );
}

const CHIPS = ['Free Quotes', 'Flat-Rate Pricing', 'Certified Installers', '12+ Yrs Local', '5-Yr Warranty'];

export default function WelcomePage() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <ParticleCanvas />
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>

        <div className={styles.content}>
          <motion.div className={styles.badge}
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <span className={styles.badgeDot} />
            Waco&apos;s Trusted Epoxy Flooring Contractor — Since 2014
          </motion.div>

          <motion.h1 className={styles.headline}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Garage Epoxy. Metallic.<br />Commercial Floors.<br />
            <span className={styles.accentLine}>PolyCoat.</span>
          </motion.h1>

          <motion.p className={styles.sub}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}>
            Free on-site quotes. Flat-rate pricing. 5-Year Coating Warranty · Slip-Resistant Options.
            Garage epoxy · Metallic · Commercial floors done right for Central Texas homes and businesses.
          </motion.p>

          <motion.div className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}>
            <a href="tel:+12549801919" className={styles.ctaPrimary}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call (254) 980-1919
            </a>
            <Link href="/contact" className={styles.ctaSecondary}>
              Free Quote
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </motion.div>

          <motion.div className={styles.chips}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}>
            {CHIPS.map(c => (
              <span key={c} className={styles.chip}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {c}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <motion.div className={styles.bgFlake}
            animate={{ rotate: 360 }}
            transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}>
            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.3" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="1"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
          </motion.div>

          <motion.div className={\`\${styles.statCard} \${styles.sc1}\`}
            initial={{ opacity: 0, y: -10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.05, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>700+ Reviews</span>
          </motion.div>

          <motion.div className={\`\${styles.statCard} \${styles.sc2}\`}
            initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.25, type: 'spring', stiffness: 240, damping: 18 }}>
            <span className={styles.statNum}>2,400+</span>
            <span className={styles.statLabel}>Floors Coated</span>
          </motion.div>

          <InstallMeter />
        </motion.div>
      </div>
    </section>
  );
}
`);

console.log('=== Key content libs ===');
write('libs/blog-posts.ts', `// libs/blog-posts.ts
// Central registry for PolyCoat Floors blog posts.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  imageSrc: string;
  imageAlt: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'epoxy-vs-polyaspartic-floors',
    title: 'Epoxy vs. Polyaspartic Floors: Which Is Right for Your Garage?',
    excerpt: 'Cure time, UV stability, cost, and durability — how to choose between epoxy and polyaspartic garage systems in Central Texas.',
    category: 'Coatings',
    date: 'April 18, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Epoxy versus polyaspartic garage floor comparison',
  },
  {
    slug: 'how-to-prep-garage-for-epoxy',
    title: 'How to Prep Your Garage for Epoxy (What Pros Actually Do)',
    excerpt: 'Moisture testing, diamond grinding, crack repair, and oil removal — the prep steps that decide coating longevity.',
    category: 'Prep',
    date: 'April 14, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Professional garage floor prep for epoxy',
  },
  {
    slug: 'metallic-epoxy-design-ideas',
    title: 'Metallic Epoxy Design Ideas for Homes and Showrooms',
    excerpt: 'Color movement, gloss, and layout ideas for metallic epoxy floors in homes, offices, and showrooms.',
    category: 'Design',
    date: 'April 10, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Metallic epoxy floor design ideas',
  },
];

export default blogPosts;
`);

write('libs/local-db/reviews.ts', `// libs/local-db/reviews.ts
// Static testimonials for PolyCoat Floors — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Garage Epoxy',
    text:     "PolyCoat transformed our stained garage with a full flake system. Quote was flat-rate, grind prep was thorough, and they told us exactly when we could park. Looks sharp and cleans up easily.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Metallic Epoxy',
    text:     'Metallic floor in our showroom space — the depth and color movement are incredible. Nina walked us through samples without pressure. Guests always ask who did the floor.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Flake Systems',
    text:     'Our builder recommended PolyCoat for the garage. They hit the install window, protected the rest of the home, and the flake blend looks premium. Professional crew from start to finish.',
  },
  {
    name:     'Patricia L.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Floor Repair & Recoat',
    text:     'Honest about what could be recoated vs. what needed full strip. Fixed peeling corners on our garage for a fair price. Would call them again in a heartbeat.',
  },
  {
    name:     'David M.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Commercial Epoxy',
    text:     'Shop floor for our small auto business. Chemical-resistant, easy to clean, and they worked around our schedule. COI paperwork was fast.',
  },
  {
    name:     'Angela W.',
    location: 'Temple, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Concrete Polish',
    text:     'Polished floor for our retail suite. Sheen is consistent and maintenance is simple. Fair pricing, professional crew — our go-to flooring partner now.',
  },
  {
    name:     'Robert H.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Garage Epoxy',
    text:     'Compared three companies. PolyCoat was clear about prep, moisture, and topcoat options. The garage cured as promised and still looks new after a Texas summer.',
  },
  {
    name:     'Cheryl B.',
    location: 'Waco, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Flake Systems',
    text:     'Free on-site quote, flat-rate price, and a crew that protected our belongings. With kids at home they were respectful and tidy every day. Thank you, PolyCoat.',
  },
];

export default reviews;
`);

// Projects data
write('libs/local-db/projects.ts', `// libs/local-db/projects.ts
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

const projects: Project[] = [
  ...garage,
  ...metallic,
  ...commercial,
  ...polish,
  ...repair,
];

export default projects;

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
`);

// ─── Forms services lists ────────────────────────────────────────────────────
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

const iconImport = `import {
  faCircleCheck, faExclamationTriangle, faArrowRight,
  faPhone, faStar, faShieldHalved, faClock, faTag,
  faWarehouse, faGem, faPaintRoller, faWrench, faIndustry, faBolt,
} from '@fortawesome/free-solid-svg-icons';`;

for (const f of [
  'components/PageComponents/ContactForms/Variant1/Form.tsx',
  'components/PageComponents/ContactForms/Variant2/Form.tsx',
  'components/PageComponents/ContactForms/Variant3/Form.tsx',
  'components/PageComponents/ContactForms/Variant4/Form.tsx',
]) {
  const full = path.join(ROOT, f);
  if (!fs.existsSync(full)) continue;
  let t = fs.readFileSync(full, 'utf8');
  t = t.replace(/const SERVICES = \[[\s\S]*?\];/, f.includes('Variant4') ? servicesV4 : servicesV1);
  t = t.replace(/import \{[\s\S]*?\} from '@fortawesome\/free-solid-svg-icons';/, iconImport);
  t = t
    .replace(/An PolyCoat estimator/g, 'A PolyCoat estimator')
    .replace(/A licensed PolyCoat tech(?:nician)?/g, 'A PolyCoat estimator')
    .replace(/Arctic Air/g, 'PolyCoat')
    .replace(/IronPath/g, 'PolyCoat');
  fs.writeFileSync(full, t);
  console.log('forms patched', f);
}

// Header marquee
{
  const f = path.join(ROOT, 'components/GeneralComponents/Header/Header.tsx');
  let t = fs.readFileSync(f, 'utf8');
  t = t.replace(/const MARQUEE_ITEMS = \[[\s\S]*?\];/, `const MARQUEE_ITEMS = [
  'Free On-Site Quotes',
  '5-Year Coating Warranty · Slip-Resistant Options',
  'Flat-Rate Quotes — No Surprises',
  '4.9★ Google Rating · 700+ Reviews',
  'Certified Coatings Installers · Fully Insured',
  '2,400+ Floors Coated',
  'Serving Central Texas Since 2014',
  'Certified · Bonded & Insured · Waco, TX',
];`);
  // Ensure projects link exists
  if (!t.includes("/projects")) {
    t = t.replace(
      "{ href: '/services',      label: 'Services' },",
      "{ href: '/services',      label: 'Services' },\n  { href: '/projects',      label: 'Projects' },"
    );
  }
  fs.writeFileSync(f, t);
  console.log('header patched');
}

// TechStack
write('components/PageComponents/TechStack/TechStack.tsx', `'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'What We Coat',
    items: [
      { name: 'Garage Epoxy', type: 'brand', icon: '🚗' },
      { name: 'Metallic', type: 'brand', icon: '✨' },
      { name: 'Flake Systems', type: 'brand', icon: '🎨' },
      { name: 'Commercial', type: 'brand', icon: '🏭' },
      { name: 'Polish', type: 'brand', icon: '💎' },
      { name: 'Recoats', type: 'brand', icon: '🔧' },
      { name: 'Polyaspartic', type: 'brand', icon: '⚡' },
      { name: 'Topcoats', type: 'brand', icon: '🛡️' },
    ],
  },
  {
    label: 'Credentials',
    items: [
      { name: 'Certified Installers', type: 'cert' },
      { name: 'Bonded & Insured', type: 'cert' },
      { name: '5-Year Warranty', type: 'cert' },
      { name: 'Slip-Resistant Options', type: 'cert' },
    ],
  },
];

export default function TechStack({
  title = 'Systems & Credentials',
  subtitle = 'Professional coatings systems and credentials homeowners and facility managers trust.',
  groups = DEFAULT_GROUPS,
}: TechStackProps) {
  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.groups}>
        {groups.map((g) => (
          <div key={g.label} className={styles.group}>
            <h3 className={styles.groupLabel}>{g.label}</h3>
            <div className={styles.items}>
              {g.items.map((item) => (
                <motion.div
                  key={item.name}
                  className={styles.item}
                  whileHover={{ y: -2 }}
                >
                  {item.icon && <span className={styles.icon}>{item.icon}</span>}
                  <span className={styles.name}>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
`);

// package.json name
{
  const f = path.join(ROOT, 'package.json');
  const j = JSON.parse(fs.readFileSync(f, 'utf8'));
  j.name = 'epoxy-floors-template';
  fs.writeFileSync(f, JSON.stringify(j, null, 2) + '\n');
  console.log('package.json name set');
}

// ValueComparison default title
{
  const f = path.join(ROOT, 'components/PageComponents/ValueComparison/ValueComparison.tsx');
  if (fs.existsSync(f)) {
    let t = fs.readFileSync(f, 'utf8');
    t = t.replace(/PolyCoat vs\\. The Other Guys|Arctic Air vs\\. The Other Guys|IronPath vs\\. The Other Guys/g, 'PolyCoat vs. The Other Guys');
    t = t.replace(/>\\s*PolyCoat\\s*</g, (m) => m); // keep
    fs.writeFileSync(f, t);
  }
}

console.log('=== Done apply-reskin ===');
