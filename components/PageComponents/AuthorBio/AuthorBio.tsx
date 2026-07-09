// components/PageComponents/AuthorBio/AuthorBio.tsx
// FIX9: LinkedIn "Connect on LinkedIn" link now fires 'click' tracking.
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface AuthorBioProps {
  cityName:  string;
  imageSrc?: string;
  imageAlt?: string;
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nina Park",
  jobTitle: "Founder & Lead Coatings Specialist",
  worksFor: {
    "@type": "Organization",
    name: "PolyCoat Floors",
    url: "https://www.polycoatfloors.com",
  },
  url: "https://www.polycoatfloors.com/about",
  sameAs: [
    "https://www.facebook.com/polycoatfloors",
    "https://www.polycoatfloors.com",
  ],
  knowsAbout: [
    "Garage Epoxy", "Metallic Epoxy", "Flake Systems",
    "Commercial Floor Coatings", "Concrete Polish",
    "Floor Repair & Recoat", "Central Texas Flooring",
  ],
  description:
    "Owner of PolyCoat Floors in Waco, TX. 12+ years coating garage floors, metallic epoxy, and commercial systems for Central Texas homes and businesses.",
};

const AuthorBio: React.FC<AuthorBioProps> = ({
  cityName,
  imageSrc = "/pages/seo-template-resources/owner.jpg",
  imageAlt = "Nina Park - Founder of PolyCoat Floors",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.authorBio} aria-label="About the Author">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className={styles.card}>
        <div className={styles.accentStrip} aria-hidden="true" />

        <div className={styles.imageCol}>
          <div className={styles.imageRing}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={180}
              height={180}
              className={styles.authorImage}
              priority
            />
          </div>
          <div className={styles.verifiedBadge}>✓ Verified Owner</div>
        </div>

        <div className={styles.content}>
          <p className={styles.role}>Owner & Lead Coatings Specialist · PolyCoat Floors</p>
          <h2 className={styles.title}>Nina Park</h2>

          <p className={styles.description}>
            10+ years building websites, software, and marketing systems for Central Texas
            businesses. Based in <strong>Waco, TX</strong> — serving{" "}
            <strong>{cityName}</strong> and the surrounding region. Every project is
            fixed-price, direct-developer, and 100% owned by you at delivery.
          </p>

          <ul className={styles.credentials} aria-label="Credentials and specializations">
            <li>Next.js & React — production sites since 2019</li>
            <li>Local SEO — ranked 30+ Central Texas businesses in Google top 3</li>
            <li>Custom software — CRMs, portals, and automation for TX businesses</li>
            <li>Google Business Profile optimization — 5★ rated agency</li>
          </ul>

          <p className={styles.updated}>
            Last updated April 2026 · Based on real local data &amp; 2026 Texas growth projections
          </p>

          <div className={styles.footer}>
            {/* LinkedIn link — tracked */}
            <a
              href="https://www.linkedin.com/in/joshua-feliciano-231765172/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
              aria-label="Connect with Nina Park on LinkedIn"
              onClick={() => trackEvent({
                eventType:    'click',
                elementLabel: 'Connect on LinkedIn',
                section:      'AuthorBio',
              })}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>

            <div className={styles.badges}>
              <span className={styles.badge}>10+ Years</span>
              <span className={styles.badge}>5.0 ★ Rated</span>
              <span className={styles.badge}>Waco, TX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
