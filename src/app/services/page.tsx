// PolyCoat Floors — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faWarehouse, faGem, faPaintRoller, faIndustry, faWrench, faShieldHalved,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faLock, faTag,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faWarehouse, title: "Garage Epoxy", body: "Durable garage floor coatings with diamond grind prep, moisture checks, and slip-resistant topcoats built for Central Texas.", link: "/services/garage-epoxy" },
    { icon: faGem, title: "Metallic Epoxy", body: "One-of-a-kind metallic floors with depth and high-gloss finish for living spaces, showrooms, and custom garages.", link: "/services/metallic-epoxy" },
    { icon: faPaintRoller, title: "Flake Systems", body: "Full-broadcast flake systems that hide stains, add traction, and stand up to daily garage and shop use.", link: "/services/flake-systems" },
    { icon: faIndustry, title: "Commercial Epoxy", body: "High-traffic commercial and industrial coatings for warehouses, auto shops, and facilities.", link: "/services/commercial-epoxy" },
    { icon: faShieldHalved, title: "Concrete Polish", body: "Polished concrete for modern homes and commercial spaces — refined sheen and easy maintenance.", link: "/services/concrete-polish" },
    { icon: faWrench, title: "Floor Repair & Recoat", body: "Peeling epoxy repair, failed coating removal, and professional recoats with honest diagnosis.", link: "/services/floor-repair-recoat" },
  ];

  const expectations = [
    { icon: faSearch, title: "Free On-Site Quote", description: "We measure on-site, check moisture and condition, and explain exactly what's included with a written price before work starts." },
    { icon: faCheckCircle, title: "Upfront Flat-Rate Pricing", description: "No hourly billing, no surprise fees. You approve the price before we grind or coat." },
    { icon: faShieldHalved, title: "Certified · Bonded & Insured", description: "Certified coatings installers. Bonded and insured on every job." },
    { icon: faTag, title: "5-Year Coating Warranty", description: "Every floor is backed by five full years of coverage on our coating workmanship. Slip-resistant options available." },
  ];

  const metrics = [
    { icon: faTrophy, value: 2400, label: "Floors coated across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 12, label: "Years serving Waco and Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real PolyCoat team member — not a call center. We schedule your free quote fast." },
    { icon: faShieldHalved, title: "Honest System Advice", description: "We'll tell you when a recoat is enough and when a full strip-and-recoat makes sense — no upselling for the sake of it." },
    { icon: faLock, title: "Bonded & Insured", description: "Fully insured crews. Proof of insurance available on request for builders and facility managers." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or the form below. We'll confirm a free on-site quote that fits your schedule.", icon: faHeadset },
    { number: 2, title: "Assess & Measure", description: "We measure, check moisture, and recommend the right system in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before work starts. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Coat & Warranty", description: "Professional prep and install, cure guidance, 5-Year Coating Warranty.", icon: faCheckCircle },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for Woodway floors.", badge: "" },
    { town: "McGregor", benefit: "Reliable turnaround for McGregor customers.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Temple", benefit: "Full service for Bell County homes and businesses.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "âœ… Always", others: "âŒ Vague estimates" },
    { feature: "5-Year Coating Warranty", us: "âœ… Every floor", others: "âŒ Rare or none" },
    { feature: "Certified coatings installers", us: "âœ… All crews", others: "âŒ Not always" },
    { feature: "Diamond grind prep included", us: "âœ… Standard", others: "âŒ Often skipped" },
    { feature: "Clear cure / park-on timeline", us: "âœ… Always", others: "âŒ Guesswork" },
  ];

  const faq = [
    { question: "How much does epoxy flooring cost in Waco?", answer: "Garage, metallic, flake, and commercial systems vary by size and scope. We always provide a flat-rate written quote after an on-site assessment." },
    { question: "Are your installers certified?", answer: "Yes — PolyCoat crews are led by certified coatings installers and we are bonded and insured." },
    { question: "Do you fix peeling epoxy?", answer: "Yes. Call (254) 980-1919 — we diagnose failures and recommend repair, recoat, or full strip when needed." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — every project is backed by our 5-Year Coating Warranty. Slip-resistant options available." },
    { question: "How do I get a quote?", answer: "Call, text, or fill out our online form. We'll schedule a free on-site quote and provide written pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services" },
      ]} />
      <SectionIntro
        title="Epoxy Flooring Services in Waco, TX"
        subtitle="Garage epoxy, metallic, flake systems, commercial coatings, polish, and repairs — flat-rate quotes, certified installers, 5-Year Coating Warranty."
      />
      <TrustBar headline="2,400+ floors coated · 4.9â˜… from 700+ reviews across Central Texas" />
      <div className={styles.section}><ServiceCardComponent heading="What We Coat" cards={services} /></div>
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Hire PolyCoat" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Service Areas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Service FAQs" /></div>
      <CTABanner
        headline="Ready to Get a Flat-Rate Floor Coating Quote?"
        subline="Free on-site quotes. Certified coatings installers. Call (254) 980-1919."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2
          title="Request a Free Quote"
          cityName="Waco"
          slug="services"
          spot="services-index"
          formVariant={2}
        />
      </div>
    </main>
  );
}
