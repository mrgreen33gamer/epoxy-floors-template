// PolyCoat Floors — Auto Shops
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
  faCar, faClock, faShieldHalved, faClipboardCheck, faHeadset, faSearch, faFileContract, faCheckCircle, faTrophy, faChartLine
} from "@fortawesome/free-solid-svg-icons";

export default function AutoShopsPage() {
  const whyFeatures = [
    { icon: faCar, title: "Shop-Ready Systems", description: "Coatings selected for oil, tire traffic, and tool-drop durability." },
    { icon: faClipboardCheck, title: "Clear Scopes & Invoices", description: "Written scopes shop owners and facility managers can approve and file." },
    { icon: faShieldHalved, title: "Fully Insured", description: "COIs without chase-down delays." },
  ];

  const processSteps = [
    { number: 1, title: "Site Walk", description: "Assess existing floor, drains, and chemical exposure.", icon: faHeadset },
    { number: 2, title: "Written Scope", description: "Flat-rate system options for shop use.", icon: faSearch },
    { number: 3, title: "Mobilize", description: "Scheduled work with minimal operational disruption.", icon: faFileContract },
    { number: 4, title: "Closeout", description: "Photos, invoice, warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 180, label: "Auto shop floors coated", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-time start rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 12, label: "Years coating shop floors", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you coat service bays?", answer: "Yes — bays, detail areas, and shop offices with systems matched to use." },
    { question: "Can you work after hours?", answer: "Often yes — discuss access at bid time." },
    { question: "What about oil-soaked concrete?", answer: "We assess contamination and prep requirements honestly — some floors need aggressive grind or remediation." },
    { question: "Warranty for commercial shops?", answer: "Yes — 5-Year Coating Warranty terms confirmed in the contract." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Auto Shops" },
      ]} />
      <SectionIntro
        title={"Auto Shops Epoxy Partner — Waco & Central Texas"}
        subtitle={"Auto shops and service centers need chemical-resistant, easy-clean floors that stand up to oil, solvents, and daily traffic. PolyCoat delivers commercial epoxy systems with schedule-aware crews."}
      />
      <TrustBar headline={"Shop floors built for real automotive work — not showroom-only coatings"} />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Auto Shops Choose PolyCoat"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Auto Shops FAQs"} /></div>
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
          title={"Request a Bid for Auto Shops"}
          cityName="Waco"
          slug={"auto-shops"}
          spot={"auto-shops-industry"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
