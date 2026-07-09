// PolyCoat Floors — Warehouses
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline  from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import Variant4         from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faIndustry, faClock, faShieldHalved, faRoad, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function WarehousesPage() {
  const whyFeatures = [
    { icon: faIndustry, title: "Facility-Ready Specs", description: "Systems matched to traffic, abrasion, and marking needs." },
    { icon: faRoad, title: "Phased Install Options", description: "We plan phases so critical aisles stay operational when possible." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Coverage profile suitable for commercial facilities." },
  ];

  const processSteps = [
    { number: 1, title: "Bid Package", description: "Review plans/specs or site measure and submit pricing.", icon: faHeadset },
    { number: 2, title: "Award & Schedule", description: "Coordinate access and phase plan.", icon: faSearch },
    { number: 3, title: "Install", description: "Safe work zones and quality multi-coat system.", icon: faFileContract },
    { number: 4, title: "Accept & Invoice", description: "Punch list closeout and documentation.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 120, label: "Warehouse / facility projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 100, label: "Safety-first job sites", suffix: "%", duration: 2 },
    { icon: faClock, value: 12, label: "Years Central Texas commercial work", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you coat large warehouse floors?", answer: "Yes within capacity — phased installs are common for large square footage." },
    { question: "Forklift traffic systems?", answer: "We recommend systems and topcoats rated for your traffic profile." },
    { question: "Can you stripe after coating?", answer: "Line striping can be coordinated — discuss at bid time." },
    { question: "Service area for warehouses?", answer: "Waco and Central Texas facilities within our operational radius." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Warehouses" },
      ]} />
      <SectionIntro
        title={"Warehouses Epoxy Partner — Waco & Central Texas"}
        subtitle={"Warehouses and distribution spaces need durable floor coatings that handle forklifts, pallet traffic, and long shifts. PolyCoat is bonded, insured, and schedule-driven for facility managers."}
      />
      <TrustBar headline={"Warehouse epoxy that keeps operations moving"} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Warehouses Choose PolyCoat"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Warehouses FAQs"} /></div>
      <CTABanner
        headline={"Need a Reliable Floor Coatings Partner?"}
        subline="Flat-rate commercial and production quotes. Certified coatings installers. Bonded & insured. Call (254) 980-1919."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4
          title={"Request a Bid for Warehouses"}
          cityName="Waco"
          slug={"warehouses"}
          spot={"warehouses-industry"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
