"use client";

import { useRef, useState } from "react";
import "./individual-project-grid.css";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Personal AI Assistant",
    category: "INDIVIDUAL",
    image: "/projects/individual-01.jpg",
    tags: ["AI", "Agents"],
    href: "https://example.com",
  },
  {
    id: 2,
    title: "Learning Companion",
    category: "EDUCATION",
    image: "/projects/individual-02.jpg",
    tags: ["AI", "Learning"],
    href: "https://example.com",
  },
  {
    id: 3,
    title: "Personal Finance Assistant",
    category: "FINANCE",
    image: "/projects/individual-03.jpg",
    tags: ["AI", "Finance"],
    href: "https://example.com",
  },
  {
    id: 4,
    title: "Creative Studio",
    category: "CREATIVE",
    image: "/projects/individual-04.jpg",
    tags: ["AI", "Creative"],
    href: "https://example.com",
  },
  {
    id: 5,
    title: "Health Companion",
    category: "WELLNESS",
    image: "/projects/individual-05.jpg",
    tags: ["AI", "Personal"],
    href: "https://example.com",
  },
  {
    id: 6,
    title: "Career Intelligence",
    category: "CAREER",
    image: "/projects/individual-06.jpg",
    tags: ["AI", "Career"],
    href: "https://example.com",
  },
  {
    id: 7,
    title: "Personal Knowledge Base",
    category: "KNOWLEDGE",
    image: "/projects/individual-07.jpg",
    tags: ["RAG", "Search"],
    href: "https://example.com",
  },
  {
    id: 8,
    title: "Smart Travel Planner",
    category: "TRAVEL",
    image: "/projects/individual-08.jpg",
    tags: ["AI", "Planning"],
    href: "https://example.com",
  },
  {
    id: 9,
    title: "Lifestyle Intelligence",
    category: "LIFESTYLE",
    image: "/projects/individual-09.jpg",
    tags: ["AI", "Insights"],
    href: "https://example.com",
  },
  {
    id: 10,
    title: "Personal Research Agent",
    category: "RESEARCH",
    image: "/projects/individual-10.jpg",
    tags: ["Agents", "Research"],
    href: "https://example.com",
  },
  {
    id: 11,
    title: "AI Writing Studio",
    category: "CREATIVE",
    image: "/projects/individual-11.jpg",
    tags: ["AI", "Writing"],
    href: "https://example.com",
  },
  {
    id: 12,
    title: "Study Intelligence",
    category: "EDUCATION",
    image: "/projects/individual-12.jpg",
    tags: ["AI", "Learning"],
    href: "https://example.com",
  },
  {
    id: 13,
    title: "Personal Productivity System",
    category: "PRODUCTIVITY",
    image: "/projects/individual-13.jpg",
    tags: ["AI", "Automation"],
    href: "https://example.com",
  },
  {
    id: 14,
    title: "Creator Intelligence",
    category: "CREATOR",
    image: "/projects/individual-14.jpg",
    tags: ["AI", "Analytics"],
    href: "https://example.com",
  },
  {
    id: 15,
    title: "Decision Assistant",
    category: "DECISION SUPPORT",
    image: "/projects/individual-15.jpg",
    tags: ["AI", "Insights"],
    href: "https://example.com",
  },
  {
    id: 16,
    title: "Personal Automation Hub",
    category: "AUTOMATION",
    image: "/projects/individual-16.jpg",
    tags: ["Agents", "Automation"],
    href: "https://example.com",
  },
  {
    id: 17,
    title: "Digital Memory",
    category: "KNOWLEDGE",
    image: "/projects/individual-17.jpg",
    tags: ["AI", "RAG"],
    href: "https://example.com",
  },
  {
    id: 18,
    title: "Personal Discovery Engine",
    category: "DISCOVERY",
    image: "/projects/individual-18.jpg",
    tags: ["AI", "Search"],
    href: "https://example.com",
  },
  {
    id: 19,
    title: "Life Operations Assistant",
    category: "PERSONAL AI",
    image: "/projects/individual-19.jpg",
    tags: ["Agents", "AI"],
    href: "https://example.com",
  },
  {
    id: 20,
    title: "Personal Intelligence Platform",
    category: "INTELLIGENCE",
    image: "/projects/individual-20.jpg",
    tags: ["AI", "Personal"],
    href: "https://example.com",
  },
];

function IndividualProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="individual-project-card">
      <div className="individual-project-card__preview">
        <img
          src={project.image}
          alt={project.title}
          className="individual-project-card__image"
          loading="lazy"
        />

        <div className="individual-project-card__preview-glow" />

        <span className="individual-project-card__number">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <div className="individual-project-card__body">
        <div className="individual-project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <h3>{project.title}</h3>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="individual-project-card__link"
        >
          View project
          <span>→</span>
        </a>
      </div>
    </article>
  );
}

export function IndividualProjectGrid() {
  const railRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(1);

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;

    if (!rail) return;

    const card = rail.querySelector(
      ".individual-project-card",
    ) as HTMLElement | null;

    if (!card) return;

    const gap = 14;
    const amount = card.offsetWidth + gap;

    rail.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });

    setCurrentIndex((current) => {
      if (direction === "right") {
        return Math.min(current + 1, projects.length);
      }

      return Math.max(current - 1, 1);
    });
  };

  return (
    <section
      id="individual-projects"
      className="individual-project-grid"
    >
      <div className="individual-project-grid__container">

        {/* HEADER */}

        <div className="individual-project-grid__header">
          <div className="individual-project-grid__section-number">
            05
          </div>

          <div className="individual-project-grid__title">
            <span>SELECTED WORK</span>

            <h2>
              INDIVIDUAL PROJECTS{" "}
              <small>(20 PROJECTS)</small>
            </h2>
          </div>

          <div className="individual-project-grid__controls">
            <button
              type="button"
              onClick={() => scrollRail("left")}
              aria-label="Previous projects"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollRail("right")}
              aria-label="Next projects"
            >
              →
            </button>
          </div>
        </div>

        {/* CONTENT */}

        <div className="individual-project-grid__content">

          {/* LEFT INFORMATION */}

          <aside className="individual-project-grid__info">
            <span className="individual-project-grid__label">
              INDIVIDUAL
            </span>

            <div className="individual-project-grid__count">
              <strong>20</strong>
              <span>Projects</span>
            </div>

            <p>
              AI products and experiences
              built for individuals.
            </p>

            <a
              href="/projects/individual"
              className="individual-project-grid__view-all"
            >
              View all
              <span>→</span>
            </a>
          </aside>

          {/* PROJECT RAIL */}

          <div className="individual-project-grid__rail-wrap">
            <div
              ref={railRef}
              className="individual-project-grid__rail"
            >
              {projects.map((project) => (
                <IndividualProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>

        </div>

        {/* PROGRESS */}

        <div className="individual-project-grid__footer">
          <span className="individual-project-grid__progress-count">
            {String(currentIndex).padStart(2, "0")}
            <span>/20</span>
          </span>

          <div className="individual-project-grid__progress">
            <span
              style={{
                width: `${(currentIndex / projects.length) * 100}%`,
              }}
            />
          </div>

          <span className="individual-project-grid__progress-label">
            SCROLL TO EXPLORE
          </span>
        </div>

      </div>
    </section>
  );
}