// src/app/projects/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import styles from './page.module.scss';

import Breadcrumb from '#/PageComponents/Breadcrumb/Breadcrumb';
import HighlightedProject from '#/PageComponents/HighlightedProject/HighlightedProject';
import BeforeAfter from '#/PageComponents/BeforeAfter/BeforeAfter';
import CaseStudyGrid from '#/PageComponents/CaseStudyGrid/CaseStudyGrid';
import Variant1 from '#/PageComponents/ContactForms/Variant1/Form';

import ALL_PROJECTS, { getProjectBySlug } from '&/local-db/projects';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.polycoatfloors.com';

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  const url = `${BASE_URL}/projects/${project.id}`;
  return {
    title: `${project.title} | PolyCoat Floors Case Study`,
    description: project.shortDesc,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | PolyCoat Floors`,
      description: project.shortDesc,
      url, siteName: 'PolyCoat Floors', locale: 'en_US', type: 'article',
      images: [{ url: `${BASE_URL}${project.images[0].src}`, alt: project.images[0].alt }],
    },
    robots: { index: true, follow: true },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const relatedProjects = ALL_PROJECTS
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  const fallbackRelated = relatedProjects.length > 0
    ? relatedProjects
    : ALL_PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  const caseStudyItems = fallbackRelated.map((p) => ({
    title: p.title,
    client: p.client,
    location: p.location,
    result: p.result,
    description: p.shortDesc,
    imageSrc: p.images[0].src,
    imageAlt: p.images[0].alt,
    link: `/projects/${p.id}`,
  }));

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.shortDesc,
    locationCreated: {
      '@type': 'Place',
      address: project.location,
    },
    about: project.category,
  };

  return (
    <main className={styles.pageWrapper}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />

      <div className={styles.breadcrumbRow}>
        <Breadcrumb
          crumbs={[
            { label: 'Projects', href: '/projects' },
            { label: project.title },
          ]}
        />
      </div>

      <HighlightedProject
        title={project.title}
        description={project.fullDesc}
        imageSrc={project.images[0].src}
        imageAlt={project.images[0].alt}
        tag={project.category}
      />

      <div className={styles.metaPanel}>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Location</span>
          <span className={styles.metaValue}>{project.location}</span>
        </div>
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Year</span>
          <span className={styles.metaValue}>{project.year}</span>
        </div>
        {project.sqft && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Size</span>
            <span className={styles.metaValue}>{project.sqft}</span>
          </div>
        )}
        {project.duration && (
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Duration</span>
            <span className={styles.metaValue}>{project.duration}</span>
          </div>
        )}
        <div className={styles.metaItem}>
          <span className={styles.metaLabel}>Result</span>
          <span className={styles.metaValue}>{project.result}</span>
        </div>
      </div>

      {project.beforeImage && project.afterImage && (
        <div className={styles.section}>
          <BeforeAfter
            title="Before & After"
            subtitle="Drag the slider to see the transformation."
            items={[{
              beforeSrc: project.beforeImage.src,
              afterSrc: project.afterImage.src,
              beforeAlt: project.beforeImage.alt,
              afterAlt: project.afterImage.alt,
              clientName: project.title,
              result: project.result,
            }]}
          />
        </div>
      )}

      <div className={styles.section}>
        <CaseStudyGrid title="More Projects" studies={caseStudyItems} />
      </div>

      <div className={styles.section}>
        <Variant1
          title="Want Results Like This for Your Property?"
          cityName={project.location.split(',')[0]}
          slug={`projects-${project.id}`}
          spot="case-study-page"
          formVariant={1}
        />
      </div>
    </main>
  );
}
