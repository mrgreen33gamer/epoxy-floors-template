// libs/blog-posts.ts
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
    imageSrc: '/pages/home/welcome/hero-main.jpg',
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
    imageSrc: '/pages/home/welcome/after.jpg',
    imageAlt: 'Professional garage floor prep for epoxy',
  },
  {
    slug:     'metallic-epoxy-design-ideas',
    title:    'Metallic Epoxy Design Ideas for Homes and Showrooms',
    excerpt:  'Color movement, gloss, and layout ideas for metallic epoxy floors in homes, offices, and showrooms.',
    category: 'Design',
    date:     'April 10, 2026',
    readTime: 7,
    imageSrc: '/pages/home/services/service-1.jpg',
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
