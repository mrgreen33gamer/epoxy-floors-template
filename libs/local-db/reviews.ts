// libs/local-db/reviews.ts
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
