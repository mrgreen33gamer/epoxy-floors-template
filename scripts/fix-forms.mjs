import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const svcs1 = `const SERVICES = [
  { icon: faWarehouse,       label: 'Garage Epoxy' },
  { icon: faGem,             label: 'Metallic Epoxy' },
  { icon: faPaintRoller,     label: 'Flake Systems' },
  { icon: faIndustry,        label: 'Commercial Epoxy' },
  { icon: faShieldHalved,    label: 'Concrete Polish' },
  { icon: faWrench,          label: 'Floor Repair & Recoat' },
  { icon: faBolt,            label: 'Other / Not Sure' },
];`;

const svcs4 = `const SERVICES = [
  { icon: faWarehouse,    label: 'Garage Epoxy',           sub: 'Solid or flake garage systems' },
  { icon: faGem,          label: 'Metallic Epoxy',         sub: 'Custom metallic showpiece floors' },
  { icon: faPaintRoller,  label: 'Flake Systems',          sub: 'Full-broadcast flake + topcoat' },
  { icon: faIndustry,     label: 'Commercial Epoxy',       sub: 'Shops, warehouses, facilities' },
  { icon: faShieldHalved, label: 'Concrete Polish',        sub: 'Modern polished concrete' },
  { icon: faWrench,       label: 'Floor Repair & Recoat',  sub: 'Peeling fixes and recoats' },
  { icon: faBolt,         label: 'Other / Not Sure',       sub: 'Tell us what you need' },
];`;

const forms = [
  'components/PageComponents/ContactForms/Variant1/Form.tsx',
  'components/PageComponents/ContactForms/Variant2/Form.tsx',
  'components/PageComponents/ContactForms/Variant3/Form.tsx',
  'components/PageComponents/ContactForms/Variant4/Form.tsx',
];

for (const rel of forms) {
  const f = path.join(ROOT, rel);
  let t = fs.readFileSync(f, 'utf8');
  t = t
    .replace(/IronPath/g, 'PolyCoat')
    .replace(/tel:\+12547504400/g, 'tel:+12549801919')
    .replace(/\(254\) 750-4400/g, '(254) 980-1919')
    .replace(/#b45309/g, '#7e22ce')
    .replace(/4\.9★ · 900\+ reviews/g, '4.9★ · 700+ reviews')
    .replace(/ACI · Insured/g, 'Certified · Insured')
    .replace(/Free estimates/g, 'Free quotes')
    .replace(/An PolyCoat estimator/g, 'A PolyCoat estimator')
    .replace(/An IronPath estimator/g, 'A PolyCoat estimator')
    .replace(/A licensed PolyCoat tech(?:nician)?/g, 'A PolyCoat estimator');

  // Swap concrete service icons for epoxy ones in imports and usage
  t = t
    .replace(/\bfaRoad\b/g, 'faWarehouse')
    .replace(/\bfaPersonWalking\b/g, 'faGem')
    .replace(/\bfaHouse\b/g, 'faShieldHalved');

  if (t.includes('const SERVICES')) {
    t = t.replace(/const SERVICES = \[[\s\S]*?\];/, rel.includes('Variant4') ? svcs4 : svcs1);
  }

  // Ensure required icons are imported
  t = t.replace(/import \{([\s\S]*?)\} from '@fortawesome\/free-solid-svg-icons';/, (_, body) => {
    const needed = [
      'faWarehouse', 'faGem', 'faPaintRoller', 'faWrench', 'faIndustry', 'faBolt', 'faShieldHalved',
      'faCircleCheck', 'faExclamationTriangle', 'faArrowRight', 'faPhone', 'faStar', 'faClock', 'faTag',
    ];
    // Variant3 extras
    if (rel.includes('Variant3')) {
      needed.push('faPaperPlane', 'faUser', 'faEnvelope', 'faLocationDot', 'faCalendarDays');
    }
    if (rel.includes('Variant4')) {
      needed.push('faArrowLeft');
    }
    const set = new Set(
      body
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    );
    for (const n of needed) set.add(n);
    return `import {\n  ${[...set].join(', ')}\n} from '@fortawesome/free-solid-svg-icons';`;
  });

  fs.writeFileSync(f, t);
  console.log('patched', rel);
}
