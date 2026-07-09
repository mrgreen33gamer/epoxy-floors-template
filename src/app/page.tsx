// PolyCoat Floors — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faWarehouse, faGem, faPaintRoller, faIndustry, faWrench,
  faTrophy, faChartLine, faClock,
  faClipboardCheck, faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faWarehouse,
      title: "Garage Epoxy",
      body: "Durable garage floor coatings with diamond grind prep, moisture checks, and slip-resistant topcoats built for Central Texas heat and vehicles.",
      link: "/services/garage-epoxy",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faGem,
      title: "Metallic Epoxy",
      body: "One-of-a-kind metallic floors with depth and high-gloss finish for living spaces, showrooms, and custom garages.",
      link: "/services/metallic-epoxy",
      image: "/pages/home/services/service-2.jpg",
    },
    {
      icon: faPaintRoller,
      title: "Flake Systems",
      body: "Full-broadcast flake systems that hide stains, add traction, and stand up to daily garage and shop use.",
      link: "/services/flake-systems",
      image: "/pages/home/services/service-3.jpg",
    },
    {
      icon: faIndustry,
      title: "Commercial Epoxy",
      body: "High-traffic commercial and industrial coatings for warehouses, auto shops, and facilities.",
      link: "/services/commercial-epoxy",
      image: "/pages/home/services/service-4.jpg",
    },
    {
      icon: faGem,
      title: "Concrete Polish",
      body: "Polished concrete for modern homes and commercial spaces — refined sheen and easy maintenance.",
      link: "/services/concrete-polish",
      image: "/pages/home/services/service-1.jpg",
    },
    {
      icon: faWrench,
      title: "Floor Repair & Recoat",
      body: "Peeling epoxy repair, failed coating removal, and professional recoats with honest diagnosis.",
      link: "/services/floor-repair-recoat",
      image: "/pages/home/services/service-2.jpg",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 2400, label: "Floors coated across Central Texas",  suffix: "+", duration: 3 },
    { icon: faClock,     value: 12,   label: "Years of local coatings craftsmanship", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Free On-Site Quotes",
      description: "We measure on-site, check moisture and condition, and give you a written flat-rate quote before any grinding starts.",
    },
    {
      icon: faShieldHalved,
      title: "Certified Coatings Installers · Bonded & Insured",
      description: "Crews led by certified coatings installers with full bonding and insurance on every floor — documentation available on request.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2014",
      description: "We're not a franchise. PolyCoat was founded in Waco by Nina Park. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll confirm a free on-site quote that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "We Assess & Measure",
      description: "We measure square footage, check moisture and condition, and recommend the right system in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "You Get a Flat-Rate Quote",
      description: "Written price before grind day. You decide — zero pressure. The quote covers prep, coat, and topcoat.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Coat, Cure & Warranty",
      description: "Professional prep and install, clear cure guidance, and a 5-Year Coating Warranty with slip-resistant options.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    {
      icon: faSearch,
      title: "Honest System Recommendation",
      description: "We tell you when a recoat is enough and when a full strip-and-recoat makes sense — not what's most profitable to sell.",
    },
    {
      icon: faLayerGroup,
      title: "Surface Prep That Lasts",
      description: "Diamond grinding and repair so your coating bonds for years — not a thin roll-on over dirty concrete.",
    },
    {
      icon: faCheckCircle,
      title: "Upfront Flat-Rate Price",
      description: "Written quote before we start. The number doesn't change when the job runs long — that's our problem, not yours.",
    },
    {
      icon: faStar,
      title: "Clear Cure Guidance",
      description: "You'll know when you can walk and park — so you don't ruin a perfect finish by driving too early.",
    },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and commercial coverage.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway floors.", badge: "" },
    { town: "Temple",       benefit: "Bell County garage and commercial coatings.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with the same flat-rate standards.", badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
  ];

  const faq = [
    { question: "How much does garage epoxy cost in Waco?", answer: "Pricing depends on square footage, floor condition, system type (solid, flake, metallic, polyaspartic), and repair needs. We provide a free on-site assessment and a flat-rate written quote — no ballpark phone guesses that change later." },
    { question: "How long before I can park on new epoxy?", answer: "Light foot traffic is often fine the next day. Most passenger vehicles wait 48–72 hours depending on system and temperature. We give you a specific timeline for your install." },
    { question: "Are you licensed and insured?", answer: "Yes. PolyCoat Floors uses certified coatings installers and is bonded and insured. Proof of insurance is available for builders and facility managers." },
    { question: "Do you fix peeling epoxy?", answer: "Yes — we diagnose adhesion failures and recommend repair, recoat, or full strip when needed. See our Floor Repair & Recoat service." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "What warranty do you offer?", answer: "Every project is backed by our 5-Year Coating Warranty. Slip-resistant topcoat options available." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="4.9★ · 700+ reviews · 2,400+ floors coated across Central Texas" />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Epoxy Floor Services Built for Central Texas"
          subheading="Garage epoxy, metallic, flake systems, commercial coatings, polish, and repairs — flat-rate quotes and certified installers."
          cards={services}
        />
      </div>
      <CTABanner
        headline="Floors That Look Built-In Expensive."
        subline="Garage flake, metallic, and commercial epoxy systems with prep that actually sticks in Texas heat."
        primaryText="Call (254) 980-1919"
        primaryLink="tel:+12549801919"
        secondaryText="See Floor Options"
        secondaryLink="/contact"
      
        imageSrc="/pages/home/welcome/hero-main.jpg"
       />
      <div className={styles.section}>
        <ImpactMetrics metrics={metrics} cityName="Waco" title="12 Years, By the Numbers" />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Central Texas Chooses PolyCoat" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>
      <div className={styles.section}>
        <GuaranteeSection />
      </div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services" title="Serving Waco & Central Texas" />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What to Expect Working With Us" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Epoxy Flooring FAQs" />
      </div>
      <div className={styles.section}>
        <BlogPreviewGrid />
      </div>
      <div className={styles.section}>
        <Variant4
          title="Get Your Free Floor Coating Quote"
          cityName="Waco"
          slug="home"
          spot="homepage"
          formVariant={4}
        />
      </div>
    </main>
  );
}
