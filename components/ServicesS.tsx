"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ServiceBlockProps {
  title: string;
  description: string;
  points: string[];
  linkLabel: string;
  bgImage: string;

  imageLeft: boolean;
}

function ServiceBlock({
  title,
  description,
  points,
  bgImage,
  imageLeft,
}: ServiceBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const image = (
    <div
      className={`relative shrink-0 overflow-hidden w-full lg:max-w-[484px] hero-fade-in ${
        isVisible ? "hero-fade-in-visible" : ""
      } ${imageLeft ? "lg:order-1" : "lg:order-2"}`}
      style={{
        height: "492px",
        minHeight: "492px",
        borderRadius: "20px",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute flex flex-wrap gap-2"
        style={{
          bottom: "28px",
          left: "28px",
          right: "28px",
        }}
      ></div>
    </div>
  );

  const content = (
    <div
      className={`w-full lg:max-w-145.5 hero-fade-in ${
        isVisible ? "hero-fade-in-visible" : ""
      } ${imageLeft ? "lg:order-2 lg:pl-5" : "lg:order-1 lg:pr-5"}`}
    >
      <h2
        className="font-['DM_Serif_Display'] mt-3"
        style={{
          fontWeight: 400,
          fontSize: "40px",
          lineHeight: "44px",
          letterSpacing: "-0.8px",
        }}
      >
        {title}
      </h2>

      <p
        className="font-['DM_Serif_Display'] mt-4"
        style={{
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "25px",
          letterSpacing: "0px",
          color: "#6E6E6E",
        }}
      >
        {description}
      </p>

      <ul
        className="flex flex-col"
        style={{ gap: "10px", paddingTop: "32px", paddingBottom: "32px" }}
      >
        {points.map((point) => (
          <li key={point} className="flex items-center gap-3">
            <span
              className="shrink-0 block"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "9999px",
                background: "#1d1d1e",
              }}
            />
            <span
              className="font-['DM_Serif_Display']"
              style={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "22px",
                letterSpacing: "0px",
                color: "#505050",
              }}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-6xl w-full px-6 gap-10"
    >
      {content}
      {image}
    </div>
  );
}

const services = [
  {
    title:
      "Verify identities in real time with built in consent and traceability(TIVS).",
    description:
      "TIVS helps banks, fintechs, telecoms, and digital platforms validate identity data through a secure, consent-driven workflow with live response handling, audit trails, and direct validation routing.",
    points: [
      "Real-time identity and KYC validation",
      "Consent management for secure data access",
      "Request orchestration and response enrichment",
      "Tiered verification levels based on data access needs",
      "Audit logs, token security, and exception handling",
    ],
    linkLabel: "Talk to us about telecom",
    bgImage: "TIVSMockup.png",

    imageLeft: true,
  },
  {
    title: "Carrier-grade services that keep subscribers connected (AML).",
    description:
      "FAS is TechnoTrend's suite of value-added services — StarCall, Call Collect, and companion products — enabling mobile operators across Africa to drive engagement and revenue on any network.",
    points: [
      "StarCall — low-airtime callback notification",
      "Call Collect — automated call collection services",
      "Custom subscription and tariff models",
      "Graduated, volume, and flat-fee pricing",
      "Real-time delivery and reporting pipeline",
    ],
    linkLabel: "Talk to us about intelligence",
    bgImage: "Reveal.png",
    imageLeft: false,
  },
  {
    title: "Turn zero balance into revenue with telco-ready VAS products.",
    description:
      "Our VAS suite helps operators convert missed calls, reverse billing, IVR interactions, and airtime based services into real revenue while giving teams clear billing and reporting workflows.",
    points: [
      "Missed-call and callback services",
      "Reverse billed calling with CallCollect",
      "IVR-powered interaction flows",
      "Mini-loan support for subscriber credit",
      "Revenue tracking, billing integration, and settlement reporting",
    ],
    linkLabel: "Talk to us about digital",
    bgImage: "AirtelMockup.png",

    imageLeft: true,
  },
];

export default function ServicesS() {
  return (
    <section className="w-full py-24 flex flex-col gap-24">
      <style>{`
        .hero-fade-in {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 800ms ease-out, transform 1500ms ease-out;
        }
        .hero-fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      {services.map((service) => (
        <ServiceBlock key={service.title} {...service} />
      ))}
    </section>
  );
}