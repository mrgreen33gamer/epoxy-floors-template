// libs/local-db/projects.ts
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

const g = (name: string) => `/projects/gallery/${name}`;

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
