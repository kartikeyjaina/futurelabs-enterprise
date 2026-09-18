"use client";

import { useEffect, useState } from "react";
import "./client-testimonials.css";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organisation: string;
  stats: {
    value: string;
    label: string;
  }[];
};

const testimonials: Testimonial[] = [
  {
    quote:
      "FutureLab didn’t just build a tool. They understood our business, our systems, and our constraints, and delivered something that actually works.",

    name: "Dr. Sarah Mitchell",

    role: "CTO",

    organisation:
      "Global Healthcare Organisation",

    stats: [
      {
        value: "63%",
        label: "Reduction in support resolution time",
      },
      {
        value: "14M",
        label: "Documents processed",
      },
      {
        value: "41%",
        label: "Lower inference costs",
      },
    ],
  },

  {
    quote:
      "The team helped us move from an unclear AI opportunity to a working system that our teams could actually use.",

    name: "James Carter",

    role: "Chief Digital Officer",

    organisation:
      "Enterprise Organisation",

    stats: [
      {
        value: "48%",
        label: "Faster workflow completion",
      },
      {
        value: "9M",
        label: "Records processed",
      },
      {
        value: "36%",
        label: "Reduction in operating effort",
      },
    ],
  },

  {
    quote:
      "What stood out was the focus on solving the actual problem rather than simply adding AI to an existing process.",

    name: "Priya Shah",

    role: "VP Product",

    organisation:
      "Technology Organisation",

    stats: [
      {
        value: "52%",
        label: "Faster product iteration",
      },
      {
        value: "7M",
        label: "Interactions analysed",
      },
      {
        value: "38%",
        label: "Lower processing costs",
      },
    ],
  },
];

export function ClientTestimonials() {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const active =
    testimonials[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1
          ? 0
          : current + 1,
      );
    }, 7000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="testimonials"
      className="client-testimonials"
    >
      <div className="client-testimonials__container">

        {/* HEADER */}

        <div className="client-testimonials__header">
          <span>09</span>

          <h2>CLIENT TESTIMONIALS</h2>
        </div>

        {/* TESTIMONIAL PANEL */}

        <div className="client-testimonials__panel">

          {/* QUOTE */}

          <div
            key={`quote-${activeIndex}`}
            className="client-testimonials__quote"
          >
            <span className="client-testimonials__quote-mark">
              “
            </span>

            <blockquote>
              {active.quote}
            </blockquote>

            <div className="client-testimonials__person">
              <div className="client-testimonials__person-marker">
                <span />
              </div>

              <div>
                <strong>
                  {active.name}
                </strong>

                <small>
                  {active.role},{" "}
                  {active.organisation}
                </small>
              </div>
            </div>
          </div>

          {/* STATS */}

          <div
            key={`stats-${activeIndex}`}
            className="client-testimonials__stats"
          >
            {active.stats.map(
              (stat, index) => (
                <div
                  key={stat.label}
                  className="client-testimonials__stat"
                  style={
                    {
                      "--stat-index": index,
                    } as React.CSSProperties
                  }
                >
                  <strong>
                    {stat.value}
                  </strong>

                  <span>
                    {stat.label}
                  </span>
                </div>
              ),
            )}
          </div>

          {/* BEHAVIOUR NOTES */}

          <div className="client-testimonials__notes">
            <span>
              • Quote fades in
            </span>

            <span>
              • Numbers count up
            </span>

            <span>
              • Client avatar omitted
            </span>

            <span>
              • Carousel of selected quotes
            </span>
          </div>

          {/* CONTROLS */}

          <div className="client-testimonials__controls">
            {testimonials.map(
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show testimonial ${
                    index + 1
                  }`}
                  aria-current={
                    index === activeIndex
                      ? "true"
                      : undefined
                  }
                  onClick={() =>
                    setActiveIndex(index)
                  }
                  className={
                    index === activeIndex
                      ? "is-active"
                      : ""
                  }
                />
              ),
            )}
          </div>

        </div>

      </div>
    </section>
  );
}