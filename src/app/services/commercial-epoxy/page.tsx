// PolyCoat Floors — Commercial Epoxy Service Page
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
  faIndustry, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faPaintRoller, faWrench, faGem
} from "@fortawesome/free-solid-svg-icons";

export default function CommercialEpoxyPage() {

  const expectations = [
    { icon: faSearch, title: "Scope From Plans or Site Walk", description: "We quote from drawings or a site walk with clear square footage and system type." },
    { icon: faFileContract, title: "Commercial Documentation", description: "COI, scheduling, and invoice clarity for PMs and facility managers." },
    { icon: faCheckCircle, title: "Traffic-Ready Specs", description: "System thickness and topcoat matched to forklift, vehicle, or pedestrian use." },
    { icon: faShieldHalved, title: "Bonded & Insured", description: "Full insurance for commercial jobs." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Reliable Mobilization", description: "We protect your openings and operational timelines." },
    { icon: faIndustry, title: "Facility & Shop Experience", description: "Warehouses, auto shops, and commercial spaces are core work for us." },
    { icon: faShieldHalved, title: "Certified Coatings Installers", description: "Commercial finish standards, not residential-only crews." },
  ];

  const processSteps = [
    { number: 1, title: "Bid / Scope", description: "Site measure or plans review with written commercial quote.", icon: faHeadset },
    { number: 2, title: "Schedule Lock", description: "Install window coordinated with other trades and access.", icon: faSearch },
    { number: 3, title: "Install", description: "Mobilized crew, proper prep, multi-coat system as specified.", icon: faFileContract },
    { number: 4, title: "Closeout", description: "Walkthrough, punch, warranty docs, invoice.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 400, label: "Commercial coating projects", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-schedule mobilization", suffix: "%", duration: 2 },
    { icon: faClock,     value: 12, label: "Years commercial coatings", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for commercial epoxy.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full commercial epoxy coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway commercial epoxy.", badge: "" },
    { town: "Temple",       benefit: "Bell County commercial epoxy — scheduled installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger garage and shop floors.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "COI & commercial paperwork ready", us: "âœ… Fast", others: "âŒ Delays start" },
    { feature: "Schedule-driven install windows", us: "âœ… Reliable", others: "âŒ Flexible-only" },
    { feature: "5-Year Coating Warranty", us: "âœ… Available", others: "âŒ Limited" },
    { feature: "PM-friendly communication", us: "âœ… Standard", others: "âŒ Hard to reach" },
  ];

  const faq = [
    { question: "Do you coat warehouse and shop floors?", answer: "Yes — warehouses, auto shops, light industrial, retail back-of-house, and similar commercial floors." },
    { question: "Can you work nights or weekends?", answer: "Often yes for access-sensitive sites — discuss at bid time." },
    { question: "What systems do you use commercially?", answer: "Epoxy and polyaspartic systems selected for traffic, chemical exposure, and cure windows." },
    { question: "How large of a floor can you handle?", answer: "We scale crews and materials to the job; phased commercial sequences are common." },
    { question: "Do you offer warranties on commercial work?", answer: "Yes — 5-Year Coating Warranty on our workmanship, terms confirmed in the contract." },
  ];

  const crossServices = [
    { icon: faWarehouse, title: "Garage Epoxy", body: "Residential garage coatings.", link: "/services/garage-epoxy" },
    { icon: faPaintRoller, title: "Flake Systems", body: "High-traction flake floors for shops.", link: "/services/flake-systems" },
    { icon: faWrench, title: "Floor Repair & Recoat", body: "Commercial floor repairs and recoats.", link: "/services/floor-repair-recoat" },
    { icon: faGem, title: "Concrete Polish", body: "Polished concrete for commercial spaces.", link: "/services/concrete-polish" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Commercial Epoxy" },
      ]} />
      <SectionIntro
        title={"Commercial Epoxy in Waco, TX"}
        subtitle={"High-traffic commercial and industrial epoxy floors for warehouses, auto shops, retail, and facilities. Schedule-driven, insured, 5-Year Coating Warranty."}
      />
      <TrustBar headline={"Commercial coatings on your opening date — not when it is convenient for us"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Commercial Epoxy Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose PolyCoat for Commercial Epoxy"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/commercial-epoxy"} title={"Commercial Epoxy Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Commercial Epoxy FAQs"} /></div>
      <CTABanner
        headline={"Ready for Commercial Epoxy Done Right?"}
        subline="Free on-site quote. Flat-rate pricing. Certified coatings installers. 5-Year Coating Warranty · Slip-Resistant Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Commercial Epoxy Quote"}
          cityName="Waco"
          slug={"commercial-epoxy"}
          spot={"commercial-epoxy-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
