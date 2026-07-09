// PolyCoat Floors — Floor Repair & Recoat Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faWrench, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faPaintRoller, faIndustry, faGem
} from "@fortawesome/free-solid-svg-icons";

export default function FloorRepairRecoatPage() {

  const expectations = [
    { icon: faSearch, title: "Honest Diagnosis", description: "We tell you when a recoat will last and when full removal is the smarter spend." },
    { icon: faFileContract, title: "Clear Repair Scope", description: "Written price for the repair area — not open-ended time and materials surprises." },
    { icon: faCheckCircle, title: "Matched Finish When Possible", description: "We blend recoats to adjacent floors as closely as practical." },
    { icon: faShieldHalved, title: "Coating Warranty on New Work", description: "New coating work we perform is backed by our warranty terms." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Faster Than Full Replacement", description: "Targeted repairs get you functional without a full project timeline when adhesion allows." },
    { icon: faWrench, title: "Failed Coating Experts", description: "We see peeling, hot-tire failures, and moisture issues every week in Central Texas." },
    { icon: faShieldHalved, title: "Local Experience", description: "We understand prep shortcuts that caused the failure — and we do not repeat them." },
  ];

  const processSteps = [
    { number: 1, title: "Inspect", description: "On-site assessment of peeling, moisture, and adhesion.", icon: faHeadset },
    { number: 2, title: "Recommend", description: "Spot repair, recoat, or full strip — with reasons.", icon: faSearch },
    { number: 3, title: "Execute", description: "Repair or recoat work completed with proper prep.", icon: faFileContract },
    { number: 4, title: "Follow-Up", description: "Care tips and warranty on the work performed.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 500, label: "Repair & recoat projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 95, label: "Clients who say we were honest about options", suffix: "%", duration: 2 },
    { icon: faClock,     value: 12, label: "Years diagnosing failed coatings", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for floor repair & recoat.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full floor repair & recoat coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway floor repair & recoat.", badge: "" },
    { town: "Temple",       benefit: "Bell County floor repair & recoat — scheduled installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger garage and shop floors.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Honest repair vs strip advice", us: "✅ Always", others: "❌ Upsell full system" },
    { feature: "Written repair quote", us: "✅ Yes", others: "❌ Vague" },
    { feature: "Cause assessment (moisture/prep)", us: "✅ Included", others: "❌ Band-aid only" },
    { feature: "Match adjacent finish", us: "✅ Best effort", others: "❌ Obvious patch" },
  ];

  const faq = [
    { question: "Can peeling garage epoxy be repaired?", answer: "Often localized peeling can be repaired if the rest of the system is sound. Widespread adhesion failure usually needs full removal." },
    { question: "Why did my epoxy peel?", answer: "Common causes: poor prep, moisture vapor, oil contamination, or incompatible topcoats. We diagnose before quoting." },
    { question: "How much does a recoat cost?", answer: "Depends on square footage and whether grinding/removal is required. On-site quotes are free." },
    { question: "Can you recoat over existing epoxy?", answer: "Sometimes after sanding and adhesion testing — not always. Honesty here saves money later." },
    { question: "Do you remove old coating?", answer: "Yes — mechanical removal and proper re-prep when a recoat would fail." },
  ];

  const crossServices = [
    { icon: faWarehouse, title: "Garage Epoxy", body: "Full garage systems when repair is not enough.", link: "/services/garage-epoxy" },
    { icon: faPaintRoller, title: "Flake Systems", body: "Replace failing floors with full flake systems.", link: "/services/flake-systems" },
    { icon: faIndustry, title: "Commercial Epoxy", body: "Commercial floor repairs and recoats.", link: "/services/commercial-epoxy" },
    { icon: faGem, title: "Metallic Epoxy", body: "Decorative replacement systems.", link: "/services/metallic-epoxy" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Floor Repair & Recoat" },
      ]} />
      <SectionIntro
        title={"Floor Repair & Recoat in Waco, TX"}
        subtitle={"Peeling epoxy repair, failed coating removal, crack fixes, and professional recoats. Honest assessment — repair when it makes sense, full strip-and-recoat when it does not."}
      />
      <TrustBar headline={"Honest repair recommendations — not every failed floor needs a full tear-out story"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Floor Repair & Recoat Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose PolyCoat for Floor Repair & Recoat"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/floor-repair-recoat"} title={"Floor Repair & Recoat Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Floor Repair & Recoat FAQs"} /></div>
      <CTABanner
        headline={"Ready for Floor Repair & Recoat Done Right?"}
        subline="Free on-site quote. Flat-rate pricing. Certified coatings installers. 5-Year Coating Warranty · Slip-Resistant Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Floor Repair & Recoat Quote"}
          cityName="Waco"
          slug={"floor-repair-recoat"}
          spot={"floor-repair-recoat-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
