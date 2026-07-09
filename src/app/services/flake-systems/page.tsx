// PolyCoat Floors — Flake Systems Service Page
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
  faPaintRoller, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faGem, faIndustry, faWrench
} from "@fortawesome/free-solid-svg-icons";

export default function FlakeSystemsPage() {

  const expectations = [
    { icon: faSearch, title: "Flake Blend Selection", description: "We show flake color blends so you pick a look that matches your home or shop." },
    { icon: faFileContract, title: "Full System Quote", description: "Grind, base coat, full flake broadcast, scrape, and topcoat in one flat-rate number." },
    { icon: faCheckCircle, title: "Full Broadcast Coverage", description: "Dense flake coverage that hides concrete imperfections and improves slip resistance." },
    { icon: faShieldHalved, title: "5-Year Coating Warranty", description: "Flake systems backed by our coating warranty." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Efficient Two-Day Rhythm", description: "Most residential garages follow a clear prep-and-coat schedule with minimal downtime." },
    { icon: faPaintRoller, title: "Hides Stains & Imperfections", description: "Flakes camouflage oil spots and concrete variation better than solid color alone." },
    { icon: faShieldHalved, title: "Certified · Bonded & Insured", description: "Professional crews with documentation for builders and homeowners." },
  ];

  const processSteps = [
    { number: 1, title: "Site Visit", description: "Measure, moisture check, flake blend selection.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Flat-rate price for full flake system.", icon: faSearch },
    { number: 3, title: "Install", description: "Grind, base, broadcast flakes, scrape, topcoat.", icon: faFileContract },
    { number: 4, title: "Cure Guidance", description: "Park timeline and care instructions with warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 900, label: "Flake systems installed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock,     value: 12, label: "Years of flake installations", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for flake systems.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full flake systems coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway flake systems.", badge: "" },
    { town: "Temple",       benefit: "Bell County flake systems — scheduled installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger garage and shop floors.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Full broadcast (not light sprinkle)", us: "âœ… Standard", others: "âŒ Sparse flakes" },
    { feature: "Flat-rate flake system quote", us: "âœ… Written", others: "âŒ Vague estimate" },
    { feature: "5-Year Coating Warranty", us: "âœ… Included", others: "âŒ Short or none" },
    { feature: "Slip-resistant topcoat options", us: "âœ… Yes", others: "âŒ Gloss only" },
  ];

  const faq = [
    { question: "What is a flake system?", answer: "Epoxy base coat with vinyl color flakes fully broadcast into the wet coating, then scraped and sealed with a clear topcoat for durability and traction." },
    { question: "How long does a flake garage take?", answer: "Most two-car garages are a multi-day process for prep, coat, and cure. We confirm the schedule at quote time." },
    { question: "Can flakes be used commercially?", answer: "Yes — shops, showrooms, and light industrial floors often use flake systems for durability and easy cleaning." },
    { question: "Do flake floors get slippery?", answer: "Flakes plus optional media in the topcoat improve traction vs. pure high-gloss solids." },
    { question: "Can you match my existing flake floor?", answer: "We can get close with blend samples; exact matches to aged floors are never perfect." },
  ];

  const crossServices = [
    { icon: faWarehouse, title: "Garage Epoxy", body: "Solid-color and custom garage coatings.", link: "/services/garage-epoxy" },
    { icon: faGem, title: "Metallic Epoxy", body: "High-end metallic showpiece floors.", link: "/services/metallic-epoxy" },
    { icon: faIndustry, title: "Commercial Epoxy", body: "Commercial and industrial coatings.", link: "/services/commercial-epoxy" },
    { icon: faWrench, title: "Floor Repair & Recoat", body: "Refresh worn flake floors.", link: "/services/floor-repair-recoat" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Flake Systems" },
      ]} />
      <SectionIntro
        title={"Flake Systems in Waco, TX"}
        subtitle={"Full-broadcast flake epoxy systems that hide stains, add traction, and stand up to vehicles, tools, and Texas heat. Flat-rate quotes, 5-Year Coating Warranty."}
      />
      <TrustBar headline={"The most popular garage system in Central Texas — done right"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Flake Systems Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose PolyCoat for Flake Systems"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/flake-systems"} title={"Flake Systems Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Flake Systems FAQs"} /></div>
      <CTABanner
        headline={"Ready for Flake Systems Done Right?"}
        subline="Free on-site quote. Flat-rate pricing. Certified coatings installers. 5-Year Coating Warranty · Slip-Resistant Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Flake Systems Quote"}
          cityName="Waco"
          slug={"flake-systems"}
          spot={"flake-systems-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
