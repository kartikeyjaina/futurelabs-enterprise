"use client";

import { useState } from "react";
import "./what-we-do.css";

type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  visual: string[];
};

const services: Service[] = [
  {
    id: "strategy",
    number: "01",
    title: "AI Strategy",
    description:
      "Clear AI strategies that connect business goals, technology and measurable outcomes.",
    features: [
      "AI opportunity mapping",
      "Use-case prioritisation",
      "AI roadmap",
      "Operating model",
      "Governance framework",
    ],
    visual: [
      "Discover",
      "Prioritise",
      "Plan",
      "Align",
      "Execute",
    ],
  },
  {
    id: "systems",
    number: "02",
    title: "AI Systems",
    description:
      "Intelligent systems that connect data, models and workflows into scalable AI infrastructure.",
    features: [
      "System architecture",
      "Data integration",
      "Model orchestration",
      "Knowledge systems",
      "Evaluation framework",
    ],
    visual: [
      "Data",
      "Models",
      "Knowledge",
      "Systems",
      "Output",
    ],
  },
  {
    id: "agents",
    number: "03",
    title: "AI Agents",
    description:
      "Autonomous systems that plan, reason, use tools and execute real workflows.",
    features: [
      "Workflow automation",
      "Tool integration",
      "Memory and context",
      "Human in the loop",
      "Evaluation and safety",
    ],
    visual: [
      "Plan",
      "Reason",
      "Use tools",
      "Execute",
      "Evaluate",
    ],
  },
  {
    id: "automation",
    number: "04",
    title: "Automation",
    description:
      "Automated workflows that reduce repetitive work and help teams operate more efficiently.",
    features: [
      "Workflow design",
      "Process automation",
      "System integration",
      "Event triggers",
      "Monitoring",
    ],
    visual: [
      "Trigger",
      "Process",
      "Automate",
      "Monitor",
      "Complete",
    ],
  },
  {
    id: "products",
    number: "05",
    title: "AI Products",
    description:
      "AI-powered products designed around real user needs, business value and continuous learning.",
    features: [
      "Product strategy",
      "AI UX design",
      "Rapid prototyping",
      "Production systems",
      "Product optimisation",
    ],
    visual: [
      "Insight",
      "Design",
      "Prototype",
      "Launch",
      "Learn",
    ],
  },
  {
    id: "cto",
    number: "06",
    title: "Fractional CTO",
    description:
      "Senior technology leadership for organisations building and scaling AI-powered products.",
    features: [
      "Technology leadership",
      "Architecture decisions",
      "Team strategy",
      "Technical roadmap",
      "Delivery oversight",
    ],
    visual: [
      "Assess",
      "Architect",
      "Lead",
      "Build",
      "Scale",
    ],
  },
];

function ServiceVisual({
  service,
}: {
  service: Service;
}) {
  return (
    <div
      className={`what-we-do__visual what-we-do__visual--${service.id}`}
    >
      <div className="what-we-do__orbit what-we-do__orbit--one" />
      <div className="what-we-do__orbit what-we-do__orbit--two" />

      <div className="what-we-do__visual-core">
        <span />
      </div>

      <div className="what-we-do__steps">
        {service.visual.map((step, index) => (
          <div
            key={step}
            className="what-we-do__step"
            style={
              {
                "--step-index": index,
              } as React.CSSProperties
            }
          >
            <span className="what-we-do__step-icon">
              {index + 1}
            </span>

            <span className="what-we-do__step-label">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhatWeDo() {
  const [activeServiceId, setActiveServiceId] =
    useState("agents");

  const activeService =
    services.find(
      (service) => service.id === activeServiceId,
    ) ?? services[2];

  return (
    <section id="capabilities" className="what-we-do">
      <div className="what-we-do__container">

        {/* HEADER */}

        <header className="what-we-do__header">
          <h2>WHAT WE DO</h2>
        </header>

        {/* MAIN PANEL */}

        <div className="what-we-do__panel">

          {/* LEFT MENU */}

          <nav className="what-we-do__menu">
            {services.map((service) => {
              const isActive =
                service.id === activeServiceId;

              return (
                <button
                  key={service.id}
                  type="button"
                  className={`what-we-do__menu-item ${
                    isActive
                      ? "what-we-do__menu-item--active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveServiceId(service.id)
                  }
                  onMouseEnter={() =>
                    setActiveServiceId(service.id)
                  }
                  aria-selected={isActive}
                >
                  <span>{service.title}</span>

                  <span className="what-we-do__menu-arrow">
                    →
                  </span>
                </button>
              );
            })}
          </nav>

          {/* ONLY ACTIVE SERVICE IS RENDERED */}

          <div className="what-we-do__active">
            <div
              key={activeService.id}
              className="what-we-do__content"
            >
              <h3>{activeService.title}</h3>

              <p>
                {activeService.description}
              </p>

              <div className="what-we-do__features">
                {activeService.features.map(
                  (feature, index) => (
                    <div
                      key={feature}
                      className="what-we-do__feature"
                      style={
                        {
                          "--feature-index": index,
                        } as React.CSSProperties
                      }
                    >
                      <span className="what-we-do__feature-icon">
                        {index + 1}
                      </span>

                      <span>{feature}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <ServiceVisual
              key={`visual-${activeService.id}`}
              service={activeService}
            />
          </div>
        </div>

        {/* FOOTER */}

        <div className="what-we-do__footer">
          <span>
            {activeService.number}
            <span>/06</span>
          </span>

          <span>
            SELECT A SERVICE TO EXPLORE
          </span>
        </div>

      </div>
    </section>
  );
}