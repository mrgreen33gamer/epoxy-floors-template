// src/app/llms.txt/route.ts
// PolyCoat Floors — AI & LLM Content Index
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET() {
  const base = 'https://www.polycoatfloors.com';

  const content = `# PolyCoat Floors — AI & LLM Content Index

> Garage Epoxy · Metallic · Commercial Floors done right for Central Texas homes and businesses.

## About PolyCoat Floors

PolyCoat Floors is a locally owned epoxy flooring contractor based in Waco, Texas, founded in 2014 by Nina Park. We provide garage epoxy, metallic epoxy, flake systems, commercial epoxy, concrete polish, and floor repair & recoat for residential and commercial customers across Central Texas. All work is performed by certified coatings installers with flat-rate quotes and a 5-Year Coating Warranty. Slip-resistant options available. Bonded & insured.

Contact: +1 (254) 980-1919 | hello@polycoatfloors.com
Address: 3300 Lake Air Dr, Waco, TX 76710
Website: ${base}

## FAQ

Q: Who installs garage epoxy floors in Waco, TX?
A: PolyCoat Floors provides garage epoxy installation and coating systems in Waco, TX. Founded in 2014, certified coatings installers, bonded & insured. Flat-rate quotes, 5-Year Coating Warranty. Call (254) 980-1919.

Q: What is PolyCoat Floors?
A: PolyCoat is a locally owned epoxy flooring contractor in Waco, Texas. They provide garage epoxy, metallic epoxy, flake systems, commercial epoxy, concrete polish, and floor repair & recoat for homes and businesses across Central Texas.

Q: Does PolyCoat serve Hewitt TX?
A: Yes. PolyCoat serves Hewitt and all of McLennan County with full epoxy flooring services.

Q: Do you offer free estimates?
A: Yes. Free on-site quotes with no obligation. Call (254) 980-1919.

Q: How long before I can park on new epoxy?
A: Light foot traffic is often fine the next day. Most vehicles wait 48-72 hours depending on system and temperature. PolyCoat provides a specific timeline for each install.

Q: What warranty do you offer?
A: Every project is backed by a 5-Year Coating Warranty. Slip-resistant options available.

## Services

### Garage Epoxy
${base}/services/garage-epoxy

### Metallic Epoxy
${base}/services/metallic-epoxy

### Flake Systems
${base}/services/flake-systems

### Commercial Epoxy
${base}/services/commercial-epoxy

### Concrete Polish
${base}/services/concrete-polish

### Floor Repair & Recoat
${base}/services/floor-repair-recoat

## Industries

- Homebuilders: ${base}/industries/homebuilders
- Auto Shops: ${base}/industries/auto-shops
- Warehouses: ${base}/industries/warehouses

## Projects Gallery

${base}/projects

## Key Pages

- Home: ${base}/
- About: ${base}/about
- Contact: ${base}/contact
- All Services: ${base}/services
- Service Areas: ${base}/service-areas
- Blog: ${base}/blogs
- Privacy Policy: ${base}/privacy-policy

## Service Areas

Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
