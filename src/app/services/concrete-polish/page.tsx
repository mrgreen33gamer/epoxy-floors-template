// PolyCoat Floors — Concrete Polish Service Page
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
  faGem, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faIndustry, faWrench, faPaintRoller
} from "@fortawesome/free-solid-svg-icons";

export default function ConcretePolishPage() {

  const expectations = [
    { icon: faSearch, title: "Honest Finish Assessment", description: "We tell you when polish is ideal and when a full epoxy system is the better spend." },
    { icon: faFileContract, title: "Clear Polish Scope", description: "Grind levels, densifier, and sheen target priced in writing." },
    { icon: faCheckCircle, title: "Progressive Grind Process", description: "Step-by-step grinding and polishing for a consistent, professional sheen." },
    { icon: faShieldHalved, title: "Bonded & Insured Crews", description: "Professional equipment and insured installers on every polish job." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Lower Long-Term Maintenance", description: "Polished floors clean easily and skip the recoat cycle of some coatings." },
    { icon: faGem, title: "Modern Aesthetic", description: "Natural concrete look for retail, offices, and contemporary homes." },
    { icon: faShieldHalved, title: "Local Experience", description: "We understand Central Texas slabs and moisture realities." },
  ];

  const processSteps = [
    { number: 1, title: "Inspect", description: "On-site assessment of slab condition and desired sheen.", icon: faHeadset },
    { number: 2, title: "Recommend", description: "Polish level vs. coating system — with reasons.", icon: faSearch },
    { number: 3, title: "Polish", description: "Multi-step grind, densify, and polish to target sheen.", icon: faFileContract },
    { number: 4, title: "Care Plan", description: "Cleaning guidance and maintenance tips.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 250, label: "Polish projects completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 95, label: "Clients who say we were honest about options", suffix: "%", duration: 2 },
    { icon: faClock,     value: 12, label: "Years refining Central Texas floors", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for concrete polish.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full concrete polish coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway concrete polish.", badge: "" },
    { town: "Temple",       benefit: "Bell County concrete polish — scheduled installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger garage and shop floors.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Honest polish vs coat advice", us: "âœ… Always", others: "âŒ One-size-fits-all" },
    { feature: "Written polish quote", us: "âœ… Yes", others: "âŒ Vague" },
    { feature: "Sheen target agreed upfront", us: "âœ… Included", others: "âŒ Surprise gloss" },
    { feature: "Dust-controlled process", us: "âœ… Best effort", others: "âŒ Messy" },
  ];

  const faq = [
    { question: "Is polished concrete good for garages?", answer: "Sometimes — but epoxy or flake systems often perform better for vehicles and oil. We recommend based on use." },
    { question: "How shiny can you make the floor?", answer: "From matte to high gloss depending on grind steps and densifier. We set a target sheen before starting." },
    { question: "Does polished concrete stain?", answer: "Densifiers and guards help; spills should still be cleaned promptly. We explain care at closeout." },
    { question: "Can you polish over old coating?", answer: "Usually not — coatings must be removed first. We assess and quote prep accurately." },
    { question: "How long does polishing take?", answer: "Depends on square footage and target sheen. Commercial spaces may be phased." },
  ];

  const crossServices = [
    { icon: faWarehouse, title: "Garage Epoxy", body: "Better for vehicle traffic and chemical resistance.", link: "/services/garage-epoxy" },
    { icon: faIndustry, title: "Commercial Epoxy", body: "Coated commercial floors when polish is not enough.", link: "/services/commercial-epoxy" },
    { icon: faWrench, title: "Floor Repair & Recoat", body: "Repair and recoat worn surfaces.", link: "/services/floor-repair-recoat" },
    { icon: faPaintRoller, title: "Flake Systems", body: "Decorative durable garage systems.", link: "/services/flake-systems" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Concrete Polish" },
      ]} />
      <SectionIntro
        title={"Concrete Polish in Waco, TX"}
        subtitle={"Polished concrete floors for modern homes, showrooms, and commercial spaces — refined finish, easy maintenance, and natural concrete beauty. Flat-rate quotes, 5-Year Coating Warranty on densifier/sealer systems where applicable."}
      />
      <TrustBar headline={"Polished floors that look clean for years with the right densifier and care"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Concrete Polish Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose PolyCoat for Concrete Polish"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/concrete-polish"} title={"Concrete Polish Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Concrete Polish FAQs"} /></div>
      <CTABanner
        headline={"Ready for Concrete Polish Done Right?"}
        subline="Free on-site quote. Flat-rate pricing. Certified coatings installers. 5-Year Coating Warranty · Slip-Resistant Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Concrete Polish Quote"}
          cityName="Waco"
          slug={"concrete-polish"}
          spot={"concrete-polish-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
