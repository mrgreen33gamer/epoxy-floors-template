// components/PageComponents/SectionIndustriesServed/SectionIndustriesServed.tsx
"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHardHat,
  faDraftingCompass,
  faHotel,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const INDUSTRIES = [
  { slug: 'homebuilders-developers', label: 'Homebuilders', icon: faHardHat },
  { slug: 'interior-designers',      label: 'Auto Shops',        icon: faDraftingCompass },
  { slug: 'commercial-hospitality',  label: 'Warehouses',  icon: faHotel },
];

interface SectionIndustriesServedProps {
  title?: string;
  subtitle?: string;
  disableLinks?: boolean;
}

export default function SectionIndustriesServed({
  title = 'Industries We Serve Across Texas',
  subtitle = 'Epoxyry and floor coating programs built for how your organization actually works.',
  disableLinks = false,
}: SectionIndustriesServedProps) {
  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.sub}>{subtitle}</p>
      </div>

      <div className={styles.grid}>
        {INDUSTRIES.map(({ slug, label, icon }) => {
          const card = (
            <div className={styles.card} key={slug}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={icon} className={styles.industryIcon} />
              </div>
              <span className={styles.industryLabel}>{label}</span>
              {!disableLinks && (
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />
              )}
            </div>
          );

          return disableLinks ? (
            card
          ) : (
            <Link href={`/industries/${slug}`} key={slug} className={styles.cardLink}>
              {card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
