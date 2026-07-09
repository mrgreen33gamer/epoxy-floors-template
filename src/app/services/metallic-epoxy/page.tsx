// PolyCoat Floors — Metallic Epoxy Service Page
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
  faGem, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faWarehouse, faPaintRoller, faIndustry, faWrench
} from "@fortawesome/free-solid-svg-icons";

export default function MetallicEpoxyPage() {

  const expectations = [
    { icon: faSearch, title: "Color & Flow Design", description: "We review metallic color options and layout so the finished floor matches your vision." },
    { icon: faFileContract, title: "Design Scope in Writing", description: "Prep, metallic system, and topcoat priced upfront — no vague mid-job surprises." },
    { icon: faCheckCircle, title: "Controlled Application", description: "Metallic pours need skill and timing — our installers manage flow, depth, and finish." },
    { icon: faShieldHalved, title: "5-Year Coating Warranty", description: "Metallic floors backed by the same coating warranty as our garage systems." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Weather-Smart Scheduling", description: "Metallic work needs the right temperature and humidity window — we plan for Texas conditions." },
    { icon: faGem, title: "Showpiece Results", description: "Get a unique, high-end look without tile seams or paver maintenance." },
    { icon: faShieldHalved, title: "Experienced Decorative Crews", description: "Installers trained for metallics, clear topcoats, and clean detailing." },
  ];

  const processSteps = [
    { number: 1, title: "Design Consult", description: "Pick metallic colors, sheen, and borders for your space.", icon: faHeadset },
    { number: 2, title: "Quote", description: "Full decorative metallic scope in a flat-rate quote.", icon: faSearch },
    { number: 3, title: "Prep & Pour", description: "Grind, prime, metallic epoxy, and detail edges.", icon: faFileContract },
    { number: 4, title: "Topcoat & Care", description: "Clear protective topcoat and care guide for long-term gloss.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 350, label: "Metallic floors completed", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 4.9, label: "Average customer rating", suffix: "★", duration: 2 },
    { icon: faClock,     value: 12, label: "Years of decorative coatings", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for metallic epoxy.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full metallic epoxy coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway metallic epoxy.", badge: "" },
    { town: "Temple",       benefit: "Bell County metallic epoxy — scheduled installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger garage and shop floors.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Color samples before install", us: "✅ Always", others: "❌ Surprise finish" },
    { feature: "Metallic process explained", us: "✅ Clear options", others: "❌ Vague" },
    { feature: "5-Year Coating Warranty", us: "✅ Included", others: "❌ Decorative excluded" },
    { feature: "Clear topcoat protection", us: "✅ Yes", others: "❌ Soft finish only" },
  ];

  const faq = [
    { question: "How much does metallic epoxy cost vs. standard garage epoxy?", answer: "Metallic systems cost more due to materials and artistry. We quote the full package after design selection." },
    { question: "Is every metallic floor unique?", answer: "Yes — flow patterns are one-of-a-kind. We set realistic expectations with samples and past project photos." },
    { question: "Can you do metallic in a garage?", answer: "Yes for many residential garages; we discuss traffic, tire marking, and maintenance first." },
    { question: "How long does the gloss last?", answer: "A quality clear topcoat holds up well; maintenance depends on traffic and cleaning. We advise a care plan." },
    { question: "Can metallic go over existing epoxy?", answer: "Sometimes after proper prep — we assess adhesion and recommend recoat vs. full system." },
  ];

  const crossServices = [
    { icon: faWarehouse, title: "Garage Epoxy", body: "Durable solid and flake garage systems.", link: "/services/garage-epoxy" },
    { icon: faPaintRoller, title: "Flake Systems", body: "High-traction flake broadcasts for garages and shops.", link: "/services/flake-systems" },
    { icon: faWrench, title: "Floor Repair & Recoat", body: "Fix damaged decorative sections.", link: "/services/floor-repair-recoat" },
    { icon: faIndustry, title: "Commercial Epoxy", body: "Commercial-grade coatings for businesses.", link: "/services/commercial-epoxy" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Metallic Epoxy" },
      ]} />
      <SectionIntro
        title={"Metallic Epoxy in Waco, TX"}
        subtitle={"One-of-a-kind metallic epoxy floors with depth, movement, and high-gloss finish — for living spaces, showrooms, offices, and custom garages. Flat-rate design quotes, 5-Year Coating Warranty."}
      />
      <TrustBar headline={"Custom metallic floors that look like liquid metal — installed by PolyCoat"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Metallic Epoxy Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose PolyCoat for Metallic Epoxy"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/metallic-epoxy"} title={"Metallic Epoxy Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Metallic Epoxy FAQs"} /></div>
      <CTABanner
        headline={"Ready for Metallic Epoxy Done Right?"}
        subline="Free on-site quote. Flat-rate pricing. Certified coatings installers. 5-Year Coating Warranty · Slip-Resistant Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Metallic Epoxy Quote"}
          cityName="Waco"
          slug={"metallic-epoxy"}
          spot={"metallic-epoxy-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
