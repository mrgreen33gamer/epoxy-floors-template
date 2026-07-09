// PolyCoat Floors — Garage Epoxy Service Page
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
  faWarehouse, faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract, faTrophy, faChartLine, faPaintRoller, faIndustry, faWrench, faGem
} from "@fortawesome/free-solid-svg-icons";

export default function GarageEpoxyPage() {

  const expectations = [
    { icon: faSearch, title: "On-Site Floor Assessment", description: "We check moisture, cracks, oil staining, and access before quoting — no ballpark guesses from a photo." },
    { icon: faFileContract, title: "Flat-Rate Written Quote", description: "Prep, coating system, flakes or solid color, and topcoat are in the number. No surprise change orders mid-install." },
    { icon: faCheckCircle, title: "Proper Grind Prep", description: "Diamond grind and repair so the coating bonds for years — not a thin roll-on over dirty concrete." },
    { icon: faShieldHalved, title: "5-Year Coating Warranty", description: "Every garage epoxy install is backed by our 5-Year Coating Warranty with slip-resistant options." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Clear Install Timeline", description: "We give you a realistic install window and cure timeline so you know when you can park again." },
    { icon: faWarehouse, title: "Built for Texas Garages", description: "Systems selected for heat, tire marking resistance, and hot-tire pickup common in Central Texas." },
    { icon: faShieldHalved, title: "Certified Coatings Installers · Bonded & Insured", description: "Crews led by certified coatings installers. Fully bonded and insured on every floor." },
  ];

  const processSteps = [
    { number: 1, title: "Free Quote", description: "We measure, check moisture and condition, and recommend the right system.", icon: faHeadset },
    { number: 2, title: "Quote & Schedule", description: "You get a flat-rate quote. We schedule grind day and install day.", icon: faSearch },
    { number: 3, title: "Prep & Coat", description: "Diamond grind, repairs, epoxy base, optional flakes, and protective topcoat.", icon: faFileContract },
    { number: 4, title: "Cure & Warranty", description: "We walk you through cure care and back the work with our 5-year warranty.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1200, label: "Garage floors coated in Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 99, label: "On-schedule install rate", suffix: "%", duration: 2 },
    { icon: faClock,     value: 12, label: "Years coating Waco-area floors", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for garage epoxy.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full garage epoxy coverage throughout Hewitt.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway garage epoxy.", badge: "" },
    { town: "Temple",       benefit: "Bell County garage epoxy — scheduled installs.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage for larger garage and shop floors.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Diamond grind surface prep", us: "✅ Always", others: "❌ Often skipped" },
    { feature: "Flat-rate quote (prep + coat + topcoat)", us: "✅ Written", others: "❌ Hourly + extras" },
    { feature: "5-Year Coating Warranty", us: "✅ Every floor", others: "❌ Rare" },
    { feature: "Certified coatings installers", us: "✅ All crews", others: "❌ Varies" },
    { feature: "Moisture testing before coat", us: "✅ Standard", others: "❌ Guesswork" },
  ];

  const faq = [
    { question: "How much does garage epoxy cost in Waco?", answer: "Most residential garage floors are priced by square footage, condition, system type (solid, flake, polyaspartic), and repair needs. We provide a flat-rate written quote after an on-site assessment." },
    { question: "How long before I can park on new epoxy?", answer: "Light foot traffic is often fine the next day. Vehicles typically wait 48–72 hours depending on system and temperature. We give you a specific timeline for your install." },
    { question: "Do you fix cracks before coating?", answer: "Yes — crack repair and patching are assessed and included when needed so the coating has a sound base." },
    { question: "Solid color or flake system?", answer: "Flake systems hide stains and add traction; solid colors look clean and modern. We help you choose based on use and style." },
    { question: "Will hot tires peel the coating?", answer: "Proper prep and a quality topcoat resist hot-tire pickup. Cheap roll-ons fail here — our systems are selected for garage traffic." },
  ];

  const crossServices = [
    { icon: faGem, title: "Metallic Epoxy", body: "Showpiece metallic floors for living spaces, showrooms, and custom garages.", link: "/services/metallic-epoxy" },
    { icon: faPaintRoller, title: "Flake Systems", body: "Full-broadcast flake floors with durable topcoats for garages and shops.", link: "/services/flake-systems" },
    { icon: faIndustry, title: "Commercial Epoxy", body: "High-traffic commercial and industrial coating systems.", link: "/services/commercial-epoxy" },
    { icon: faWrench, title: "Floor Repair & Recoat", body: "Repair failed coatings and recoat worn floors.", link: "/services/floor-repair-recoat" },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Garage Epoxy" },
      ]} />
      <SectionIntro
        title={"Garage Epoxy in Waco, TX"}
        subtitle={"Durable garage floor coatings with professional grind prep, moisture checks, and slip-resistant topcoats built for Central Texas heat and vehicle traffic. Flat-rate quotes, 5-Year Coating Warranty."}
      />
      <TrustBar headline={"2,400+ floors coated across Central Texas by PolyCoat Floors"} />
      <div className={styles.section}><WhatToExpect sectionTitle={"What Happens on a Garage Epoxy Project"} expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title={"Why Homeowners Choose PolyCoat for Garage Epoxy"} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath={"services/garage-epoxy"} title={"Garage Epoxy Across Central Texas"} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title={"Garage Epoxy FAQs"} /></div>
      <CTABanner
        headline={"Ready for Garage Epoxy Done Right?"}
        subline="Free on-site quote. Flat-rate pricing. Certified coatings installers. 5-Year Coating Warranty · Slip-Resistant Options."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4
          title={"Get a Free Garage Epoxy Quote"}
          cityName="Waco"
          slug={"garage-epoxy"}
          spot={"garage-epoxy-page"}
          formVariant={4}
        />
      </div>
    </main>
  );
}
