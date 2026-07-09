# Epoxy Floors Template — Design Spec

## Context

Scott Apps trade template forked from `hvac-template` into `epoxy-floors-template`, following `RESKIN_PLAYBOOK.md`.

Epoxy is **gallery-first**: keep and rebuild `/projects` (before/after floors). Per-city SEO subpages (`waco-tx` / `temple-tx` / `killeen-tx`) are **deleted**.

Reference sibling: `concrete-driveway-template` (projects gallery kept).

## Business Identity (locked)

- **Business name:** PolyCoat Floors
- **Tagline:** Garage Epoxy · Metallic · Commercial Floors
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Founded:** 2014
- **Owner:** Nina Park
- **Credential/license line:** Certified Coatings Installers · Bonded & Insured
- **Guarantee:** 5-Year Coating Warranty · Slip-Resistant Options
- **Social proof:** 4.9★, 700+ reviews, 2,400+ floors coated
- **Brand accent:** purple `#7e22ce` (`$orange` + hardcoded hex loaders)
- **Phone:** (254) 980-1919 / `tel:+12549801919`
- **Email:** hello@polycoatfloors.com
- **Domain:** polycoatfloors.com
- **Address:** 3300 Lake Air Dr, Waco, TX 76710

## Services (6)

| Old HVAC slug | New slug | Title |
|---------------|----------|-------|
| ac-repair | garage-epoxy | Garage Epoxy |
| heating | metallic-epoxy | Metallic Epoxy |
| installation | flake-systems | Flake Systems |
| duct-cleaning | commercial-epoxy | Commercial Epoxy |
| indoor-air-quality | concrete-polish | Concrete Polish |
| maintenance | floor-repair-recoat | Floor Repair & Recoat |

## Industries (3)

| Old | New slug | Title |
|-----|----------|-------|
| automotive | homebuilders | Homebuilders |
| manufacturing | auto-shops | Auto Shops |
| oil-gas | warehouses | Warehouses |

## Blogs (3)

1. `epoxy-vs-polyaspartic-floors`
2. `how-to-prep-garage-for-epoxy`
3. `metallic-epoxy-design-ideas`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3), **Projects** (gallery index + `[slug]` case studies). No per-city SEO.

## Projects (KEEP + rebuild)

Gallery-first portfolio using `libs/local-db/projects.ts` + `ProjectCardGrid` / `BeforeAfter` / case-study routes. Categories align to the six services.

## Non-goals

- No marketplace catalog flip (separate pass on `scottapplications`).
- No new component primitives — sibling-clone of existing page shapes.
- Do not commit `.env` / Mapbox `pk.eyJ…` tokens.

## Success criteria

- `npm run typecheck` passes
- Grep clean of HVAC / Arctic Air / old phone / Mapbox pk tokens / vendor identity leaks
- Accent `#7e22ce` in SCSS tokens and hardcoded loaders
- City SEO deleted; projects gallery live
