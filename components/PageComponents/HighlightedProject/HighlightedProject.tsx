// PageComponents/HighlightedProject/HighlightedProject.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

interface HighlightedProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tag?: string;
  projectLink?: string;
  projectLinkLabel?: string;
  ctaLink?: string;
  ctaLabel?: string;
}

const HighlightedProject: React.FC<HighlightedProjectProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  tag = "Recent Project",
  projectLink = "/contact",
  projectLinkLabel = "Request a Free Estimate",
  ctaLink = "/projects",
  ctaLabel = "See All Projects",
}) => {
  return (
    <section className={styles.section} aria-label="Highlighted Project">
      <div className={styles.container}>
        <div className={styles.textSide}>
          <div className={styles.card}>
            <span className={styles.tag}>{tag}</span>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardDesc}>{description}</p>
            <div className={styles.ctaRow}>
              <Link
                href={projectLink}
                className={styles.btnPrimary}
              >
                {projectLinkLabel}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Link href={ctaLink} className={styles.btnGhost}>
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.imageSide}>
          <div className={styles.imageFrame}>
            <Image
              fill
              src={imageSrc}
              alt={imageAlt}
              style={{ objectFit: "cover" }}
              quality={100}
              loading="lazy"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedProject;