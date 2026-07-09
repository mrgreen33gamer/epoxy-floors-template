"use client";
// components/PageComponents/ProjectCardGrid/ProjectCardGrid.tsx

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faXmark,
  faTag,
  faChevronDown,
  faArrowRight,
  faHouseChimney,
  faHammer,
  faBath,
  faBuilding,
  faDraftingCompass,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import ALL_PROJECTS, {
  CATEGORIES,
  PROJECTS_BY_CATEGORY,
  type Project,
  type ProjectCategory,
} from '&/local-db/projects';

// ─── Constants ────────────────────────────────────────────────────────────────
const PAGE_SIZE = 6;

// ─── Types ────────────────────────────────────────────────────────────────────
type TabKey = 'All' | ProjectCategory;

// ─── Service CTA definitions (one per service, cycled in the All tab) ─────────
const SERVICE_CTAS = [
  {
    key: 'garage floors',
    icon: faHouseChimney,
    eyebrow: 'Garage Epoxy',
    headline: 'Ready for a garage floor done right?',
    body: 'Durable garage epoxy systems — flat-rate quote before we grind or coat.',
    cta: 'Get a Free Quote',
    href: '/services/garage-epoxy',
    accent: 'green' as const,
  },
  {
    key: 'metallic floors',
    icon: faBath,
    eyebrow: 'Metallic Epoxy',
    headline: 'Planning a metallic showpiece floor?',
    body: 'Custom metallic epoxy with depth, color movement, and clear topcoat protection.',
    cta: 'Start a Metallic Project',
    href: '/services/metallic-epoxy',
    accent: 'obsidian' as const,
  },
  {
    key: 'polish',
    icon: faDraftingCompass,
    eyebrow: 'Concrete Polish',
    headline: 'Want a refined polished floor?',
    body: 'Modern polished concrete with densifier and an agreed sheen target.',
    cta: 'Explore Polish',
    href: '/services/concrete-polish',
    accent: 'green' as const,
  },
  {
    key: 'repair',
    icon: faBuilding,
    eyebrow: 'Floor Repair & Recoat',
    headline: 'Peeling epoxy or worn coating?',
    body: 'Honest diagnosis, repairs, and professional recoats that last.',
    cta: 'Talk to Our Team',
    href: '/services/floor-repair-recoat',
    accent: 'obsidian' as const,
  },
];

// ─── Framer variants ──────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

// ─── Image Carousel ───────────────────────────────────────────────────────────
function ImageCarousel({ images, title }: { images: Project['images']; title: string }) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselTrack}>
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            className={styles.carouselSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={images[idx].src}
              alt={images[idx].alt}
              fill
              style={{ objectFit: 'cover' }}
              quality={90}
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </motion.div>
        </AnimatePresence>
        {images[idx].caption && (
          <span className={styles.carouselCaption}>{images[idx].caption}</span>
        )}
      </div>
      {images.length > 1 && (
        <>
          <button className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`} onClick={prev} aria-label="Previous image">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={`${styles.carouselBtn} ${styles.carouselBtnNext}`} onClick={next} aria-label="Next image">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className={styles.carouselDots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Project Modal ────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modalPanel}
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.97 }}
          transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.modalClose} onClick={onClose} aria-label="Close modal">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <ImageCarousel images={project.images} title={project.title} />
          <div className={styles.modalContent}>
            <div className={styles.modalMeta}>
              <span className={styles.modalCategory}>
                <FontAwesomeIcon icon={faTag} />
                {project.category}
              </span>
              <span className={styles.modalResult}>{project.result}</span>
              <span className={styles.modalYear}>{project.year}</span>
            </div>
            <h2 className={styles.modalTitle}>{project.title}</h2>
            <p className={styles.modalClient}>{project.client} &mdash; {project.location}</p>
            <p className={styles.modalDesc}>{project.fullDesc}</p>
            <div className={styles.modalTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.modalTag}>{tag}</span>
              ))}
            </div>
            <div className={styles.modalCtaRow}>
              <Link href={`/projects/${project.id}`} className={styles.modalCta}>
                View Full Case Study
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link href="/contact" className={styles.modalCtaGhost}>
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, wide, onClick }: { project: Project; wide: boolean; onClick: () => void }) {
  return (
    <motion.article
      className={`${styles.card} ${wide ? styles.cardWide : ''}`}
      variants={cardVariants}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      <div className={styles.cardImage}>
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
          fill
          style={{ objectFit: 'cover' }}
          quality={80}
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        <div className={styles.resultBadge}>{project.result}</div>
        <div className={styles.categoryLabel}>
          <FontAwesomeIcon icon={faTag} />
          {project.category}
        </div>
        <div className={styles.cardHoverOverlay}>
          <span className={styles.viewDetailsBtn}>
            View Details <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <span className={styles.clientName}>{project.client}</span>
          <span className={styles.location}>{project.location}</span>
          {project.year && <span className={styles.year}>{project.year}</span>}
        </div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.shortDesc}</p>
        <div className={styles.tagRow}>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
          {project.tags.length > 3 && (
            <span className={styles.tag}>+{project.tags.length - 3}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Service CTA Card (injected in All tab every 7 items) ─────────────────────
function ServiceCtaCard({ cta }: { cta: typeof SERVICE_CTAS[number] }) {
  const isDark = cta.accent === 'obsidian';
  return (
    <motion.div
      className={`${styles.ctaCard} ${isDark ? styles.ctaCardDark : styles.ctaCardLight}`}
      variants={cardVariants}
      aria-label={`${cta.eyebrow} — ${cta.headline}`}
    >
      <div className={styles.ctaCardInner}>
        <div className={styles.ctaCardIcon}>
          <FontAwesomeIcon icon={cta.icon} />
        </div>
        <span className={styles.ctaCardEyebrow}>{cta.eyebrow}</span>
        <h3 className={styles.ctaCardHeadline}>{cta.headline}</h3>
        <p className={styles.ctaCardBody}>{cta.body}</p>
        <Link href={cta.href} className={styles.ctaCardBtn}>
          {cta.cta}
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── All-tab Panel with CTA injection ────────────────────────────────────────
// Rule: for every full group of 7 project cards, insert 1 service CTA on the 8th slot.
// CTAs cycle through all 4 services in order. Only inject if there are 7 MORE
// cards after the previous injection point (i.e. another full group of 7 follows).
type GridItem =
  | { kind: 'project'; project: Project; originalIndex: number }
  | { kind: 'cta'; ctaIndex: number };

function buildAllItems(projects: Project[]): GridItem[] {
  const items: GridItem[] = [];
  let ctaCount = 0;
  let projectsSinceLastCta = 0;

  for (let i = 0; i < projects.length; i++) {
    items.push({ kind: 'project', project: projects[i], originalIndex: i });
    projectsSinceLastCta++;

    // After every 7th project, check: are there at least 7 more projects remaining?
    if (projectsSinceLastCta === 7) {
      const remaining = projects.length - (i + 1);
      if (remaining >= 7) {
        items.push({ kind: 'cta', ctaIndex: ctaCount % SERVICE_CTAS.length });
        ctaCount++;
      }
      projectsSinceLastCta = 0;
    }
  }

  return items;
}

function AllPanel({ projects }: { projects: Project[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE + 2); // +2 so a CTA can show early
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => { setVisible(PAGE_SIZE + 2); }, [projects]);

  const allItems = buildAllItems(projects);
  const shownItems = allItems.slice(0, visible);
  const hasMore = visible < allItems.length;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key="all-grid"
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {shownItems.map((item, i) => {
            if (item.kind === 'cta') {
              const cta = SERVICE_CTAS[item.ctaIndex];
              return <ServiceCtaCard key={`cta-${item.ctaIndex}`} cta={cta} />;
            }
            const p = item.project;
            // Wide every 3rd project slot (use project originalIndex for consistency)
            const wide = item.originalIndex % 3 === 0;
            return (
              <ProjectCard
                key={p.id}
                project={p}
                wide={wide}
                onClick={() => setActiveProject(p)}
              />
            );
          })}
        </motion.div>
      </AnimatePresence>

      {hasMore && (
        <motion.div
          className={styles.loadMoreRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            className={styles.loadMoreBtn}
            onClick={() => setVisible((v) => v + PAGE_SIZE + 1)}
          >
            Load More Projects
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <span className={styles.loadMoreCount}>
            Showing {shownItems.filter(i => i.kind === 'project').length} of {projects.length}
          </span>
        </motion.div>
      )}

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}

// ─── Standard Category Panel ──────────────────────────────────────────────────
function CategoryPanel({ projects }: { projects: Project[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => { setVisible(PAGE_SIZE); }, [projects]);

  const shown = projects.slice(0, visible);
  const hasMore = visible < projects.length;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={projects[0]?.id ?? 'empty'}
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {shown.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              wide={i % 3 === 0}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {hasMore && (
        <motion.div
          className={styles.loadMoreRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            className={styles.loadMoreBtn}
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
          >
            Load More Projects
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <span className={styles.loadMoreCount}>
            Showing {shown.length} of {projects.length}
          </span>
        </motion.div>
      )}

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
interface ProjectCardGridProps {
  title?: string;
  subtitle?: string;
}

const ALL_TABS: TabKey[] = ['All', ...CATEGORIES];

const ProjectCardGrid: React.FC<ProjectCardGridProps> = ({
  title    = 'Our Projects',
  subtitle = 'A selection of builds and renovations completed for Central Texas homeowners and businesses',
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('All');

  const currentProjects: Project[] =
    activeTab === 'All'
      ? ALL_PROJECTS
      : PROJECTS_BY_CATEGORY[activeTab as ProjectCategory] ?? [];

  // Counts shown in tab badges
  const countForTab = (tab: TabKey): number => {
    if (tab === 'All') return ALL_PROJECTS.length;
    return PROJECTS_BY_CATEGORY[tab as ProjectCategory]?.length ?? 0;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionSubtitle}>{subtitle}</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className={styles.filterRow}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {ALL_TABS.map((tab) => (
            <button
              key={tab}
              className={`${styles.filterBtn} ${activeTab === tab ? styles.filterActive : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              <span className={styles.filterCount}>
                {countForTab(tab) > 0 ? countForTab(tab) : '—'}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {activeTab === 'All' ? (
              <AllPanel projects={ALL_PROJECTS} />
            ) : (
              <CategoryPanel key={activeTab} projects={currentProjects} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectCardGrid;
