// Epoxy Floors Hero — Gloss Industrial (cyan-on-obsidian)
// Photographic parallax stage + an authentic installer photo card replaces the
// before/after drag-to-reveal panel. Real jobsite imagery (glossy epoxy floor +
// installers applying a self-leveling coating), cyan detailing, Orbitron/Exo 2 type.
// Photos sourced from Pexels (Craftsman Concrete Floors, Dallas/Houston TX) and
// saved locally in /public/pages/home/welcome — now wired into the hero.
'use client';
import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  // Scroll-linked parallax on the background photo. Disabled under reduced-motion.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '16%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, reduceMotion ? 1.08 : 1.16]);

const badgeText = 'Waco\'s Trusted Epoxy Flooring Contractor — Since 2014';
const headlineLines = [
  'Garage Epoxy. Metallic.',
  'Commercial Floors.',
];
const headlineAccent = 'PolyCoat.';
const subheadline = 'Free on-site quotes. Flat-rate pricing. 5-Year Coating Warranty · Slip-Resistant Options. Garage epoxy · Metallic · Commercial floors done right for Central Texas homes and businesses.';
const primaryCta = { label: 'Call (254) 980-1919', href: 'tel:+12549801919' };
const secondaryCta = { label: 'Free Quote', href: '/contact' };
const chips = [
  'Free Quotes',
  'Flat-Rate Pricing',
  'Certified Installers',
  '12+ Yrs Local',
  '5-Yr Warranty',
];

  return (
    <section ref={heroRef} className={styles.hero} aria-label="Hero">
      {/* Photographic parallax background — genuine glossy epoxy floor, industrial facility */}
      <motion.div
        className={styles.bgLayer}
        style={{ y: bgY, scale: bgScale }}
        aria-hidden="true"
      >
        <Image
          src="/pages/home/welcome/hero-epoxy-floor.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
      </motion.div>
      {/* Obsidian/cyan scrim keeps the jobsite photo on-brand and the headline legible */}
      <div className={styles.scrim} aria-hidden="true" />
      <div className={styles.shard} aria-hidden="true" />

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.48 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Authentic jobsite photo — installers applying a self-leveling epoxy
            coating, framed as a spec card. Visible on desktop AND mobile. */}
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          <div className={styles.photoCard}>
            <Image
              src="/pages/home/welcome/hero-epoxy-application.jpg"
              alt="Certified installers in hard hats and safety vests squeegeeing a self-leveling epoxy coating across a commercial floor"
              fill
              priority
              sizes="(max-width: 960px) 88vw, 460px"
              className={styles.photo}
            />
            <div className={styles.photoGlaze} aria-hidden="true" />

            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              Certified Installers · On-Site
            </div>

            <div className={styles.specCard}>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> Certified installers
              </span>
              <span className={styles.specRow}>
                <CheckIcon size={10} /> 5-Year coating warranty
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
