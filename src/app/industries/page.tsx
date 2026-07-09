// PolyCoat Floors — Industries Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb       from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro     from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar         from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs      from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline  from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics    from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials     from "#/PageComponents/Testimonials/Testimonials";
import FAQ              from "#/PageComponents/FAQ/FAQ";
import CTABanner        from "#/PageComponents/CTABanner/CTABanner";
import Variant4         from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faHardHat, faCar, faIndustry,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faShieldHalved, faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {
  const industries = [
    {
      icon: faHardHat,
      title: "Homebuilders",
      body: "Production and custom garage epoxy, flake systems, and decorative floors that hit install windows and protect closings.",
      link: "/industries/homebuilders",
    },
    {
      icon: faCar,
      title: "Auto Shops",
      body: "Chemical-resistant, easy-clean shop floors for service bays, detail areas, and automotive facilities.",
      link: "/industries/auto-shops",
    },
    {
      icon: faIndustry,
      title: "Warehouses",
      body: "Durable facility coatings for high-traffic aisles, storage floors, and phased warehouse installs.",
      link: "/industries/warehouses",
    },
  ];

  const whyFeatures = [
    { icon: faShieldHalved, title: "Bonded & Insured", description: "COIs and documentation ready for builders, shops, and facility managers." },
    { icon: faUsers, title: "Schedule-Driven Crews", description: "We protect openings, service hours, and production calendars." },
    { icon: faClock, title: "Clear Scopes", description: "Written scopes and flat-rate commercial quotes — not open-ended surprises." },
  ];

  const processSteps = [
    { number: 1, title: "Scope / Bid", description: "Site walk or plans review with written commercial pricing.", icon: faHeadset },
    { number: 2, title: "Schedule", description: "Lock install windows around your operations.", icon: faSearch },
    { number: 3, title: "Install", description: "Professional prep and multi-coat systems on schedule.", icon: faFileContract },
    { number: 4, title: "Closeout", description: "Walkthrough, warranty docs, invoice.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 600, label: "Commercial & production floors", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "On-schedule start rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 12, label: "Years serving Central Texas businesses", suffix: "+", duration: 2 },
  ];

  const faq = [
    { question: "Do you work with homebuilders?", answer: "Yes — production and custom garage coatings coordinated with construction schedules." },
    { question: "Can you coat active auto shops?", answer: "Yes — we plan access and phases so shops can keep limited operations when needed." },
    { question: "Do you provide COIs quickly?", answer: "Yes — insurance documentation is standard for commercial accounts." },
    { question: "What industries do you serve?", answer: "Homebuilders, auto shops, warehouses, and related commercial facilities across Central Texas." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]} />
      <SectionIntro
        title="Industries We Serve"
        subtitle="Epoxy flooring partner for homebuilders, auto shops, and warehouses across Waco and Central Texas."
      />
      <TrustBar headline="Certified coatings installers · Bonded & insured · Schedule-driven commercial work" />
      <div className={styles.section}><ServiceCardComponent heading="Who We Partner With" cards={industries} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Businesses Choose PolyCoat" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Industry FAQs" /></div>
      <CTABanner
        headline="Need a Reliable Floor Coatings Partner?"
        subline="Flat-rate commercial quotes. Certified installers. Call (254) 980-1919."
        primaryText="Call Us Now"
        primaryLink="tel:+12549801919"
        secondaryText="Request a Bid"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4
          title="Request a Commercial Bid"
          cityName="Waco"
          slug="industries"
          spot="industries-index"
          formVariant={4}
        />
      </div>
    </main>
  );
}
