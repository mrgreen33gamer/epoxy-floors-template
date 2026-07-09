'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface BrandItem {
  name:     string;
  type:     string;
  icon?:    string;
}

interface BrandGroup {
  label: string;
  items: BrandItem[];
}

interface TechStackProps {
  title?:    string;
  subtitle?: string;
  groups?:   BrandGroup[];
}

const DEFAULT_GROUPS: BrandGroup[] = [
  {
    label: 'What We Coat',
    items: [
      { name: 'Garage Epoxy', type: 'brand', icon: '🚗' },
      { name: 'Metallic', type: 'brand', icon: '✨' },
      { name: 'Flake Systems', type: 'brand', icon: '🎨' },
      { name: 'Commercial', type: 'brand', icon: '🏭' },
      { name: 'Polish', type: 'brand', icon: '💎' },
      { name: 'Recoats', type: 'brand', icon: '🔧' },
      { name: 'Polyaspartic', type: 'brand', icon: '⚡' },
      { name: 'Topcoats', type: 'brand', icon: '🛡️' },
    ],
  },
  {
    label: 'Credentials',
    items: [
      { name: 'Certified Installers', type: 'cert' },
      { name: 'Bonded & Insured', type: 'cert' },
      { name: '5-Year Warranty', type: 'cert' },
      { name: 'Slip-Resistant Options', type: 'cert' },
    ],
  },
];

export default function TechStack({
  title = 'Systems & Credentials',
  subtitle = 'Professional coatings systems and credentials homeowners and facility managers trust.',
  groups = DEFAULT_GROUPS,
}: TechStackProps) {
  return (
    <section className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.groups}>
        {groups.map((g) => (
          <div key={g.label} className={styles.group}>
            <h3 className={styles.groupLabel}>{g.label}</h3>
            <div className={styles.items}>
              {g.items.map((item) => (
                <motion.div
                  key={item.name}
                  className={styles.item}
                  whileHover={{ y: -2 }}
                >
                  {item.icon && <span className={styles.icon}>{item.icon}</span>}
                  <span className={styles.name}>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
