"use client";

import { useRef, useState } from "react";
import "./company-project-grid.css";

type Project = {
  id: number;
  title: string;
  image: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "ChatEasy",
    image: "/projects/chat_easy.avif",
    tags: ["Knowledge and learning"],
    href: "https://futurelabstudios.com/products-for-enterprise/chateasy",
  },
  {
    id: 2,
    title: "SearchEasy",
    image: "/projects/company-02.jpg",
    tags: ["Agents", "Automation"],
    href: "https://example.com",
  },
  {
    id: 3,
    title: "Manufacturing Operations AI",
    image: "/projects/company-03.jpg",
    tags: ["Computer Vision", "IoT"],
    href: "https://example.com",
  },
  {
    id: 4,
    title: "Enterprise Intelligence Platform",
    image: "/projects/company-04.jpg",
    tags: ["AI", "Analytics"],
    href: "https://example.com",
  },
  {
    id: 5,
    title: "Customer Experience Engine",
    image: "/projects/company-05.jpg",
    tags: ["AI", "CX"],
    href: "https://example.com",
  },
  {
    id: 6,
    title: "Supply Chain Intelligence",
    image: "/projects/company-06.jpg",
    tags: ["Prediction", "Automation"],
    href: "https://example.com",
  },
  {
    id: 7,
    title: "Enterprise Data Assistant",
    image: "/projects/company-07.jpg",
    tags: ["Agents", "RAG"],
    href: "https://example.com",
  },
  {
    id: 8,
    title: "Operations Command Centre",
    image: "/projects/company-08.jpg",
    tags: ["Analytics", "AI"],
    href: "https://example.com",
  },
  {
    id: 9,
    title: "Clinical Intelligence Platform",
    image: "/projects/company-09.jpg",
    tags: ["AI", "Security"],
    href: "https://example.com",
  },
  {
    id: 10,
    title: "Risk Intelligence System",
    image: "/projects/company-10.jpg",
    tags: ["AI", "Risk"],
    href: "https://example.com",
  },
  {
    id: 11,
    title: "Industrial Vision Platform",
    image: "/projects/company-11.jpg",
    tags: ["Computer Vision", "IoT"],
    href: "https://example.com",
  },
  {
    id: 12,
    title: "Enterprise Automation Suite",
    image: "/projects/company-12.jpg",
    tags: ["Automation", "Agents"],
    href: "https://example.com",
  },
  {
    id: 13,
    title: "Workforce Intelligence",
    image: "/projects/company-13.jpg",
    tags: ["Analytics", "AI"],
    href: "https://example.com",
  },
  {
    id: 14,
    title: "Digital Transformation Platform",
    image: "/projects/company-14.jpg",
    tags: ["Strategy", "AI"],
    href: "https://example.com",
  },
  {
    id: 15,
    title: "Intelligent Document System",
    image: "/projects/company-15.jpg",
    tags: ["RAG", "OCR"],
    href: "https://example.com",
  },
  {
    id: 16,
    title: "Predictive Operations",
    image: "/projects/company-16.jpg",
    tags: ["Prediction", "AI"],
    href: "https://example.com",
  },
  {
    id: 17,
    title: "Enterprise Search Platform",
    image: "/projects/company-17.jpg",
    tags: ["RAG", "Search"],
    href: "https://example.com",
  },
  {
    id: 18,
    title: "AI Decision Platform",
    image: "/projects/company-18.jpg",
    tags: ["AI", "Analytics"],
    href: "https://example.com",
  },
  {
    id: 19,
    title: "Intelligent Service Platform",
    image: "/projects/company-19.jpg",
    tags: ["Agents", "Automation"],
    href: "https://example.com",
  },
  {
    id: 20,
    title: "Enterprise AI Infrastructure",
    image: "/projects/company-20.jpg",
    tags: ["AI", "Infrastructure"],
    href: "https://example.com",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="company-project-card">
      <div className="company-project-card__preview">
        <img
          src={project.image}
          alt={project.title}
          className="company-project-card__image"
          loading="lazy"
        />

        <div className="company-project-card__preview-glow" />

        <span className="company-project-card__number">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <div className="company-project-card__body">
        <div className="company-project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <h3>{project.title}</h3>

        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="company-project-card__link"
        >
          View project
          <span>→</span>
        </a>
      </div>
    </article>
  );
}

export function CompanyProjectGrid() {
  const railRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(1);

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;

    if (!rail) return;

    const card = rail.querySelector(
      ".company-project-card",
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
      id="company-projects"
      className="company-project-grid"
    >
      <div className="company-project-grid__container">

        {/* HEADER */}

        <div className="company-project-grid__header">
          <div className="company-project-grid__section-number">
            04
          </div>

          <div className="company-project-grid__title">
            <span>For Organizations</span>
            <h2>
              SELECTED WORK{" "}
              
            </h2>
          </div>

          <div className="company-project-grid__controls">
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

        <div className="company-project-grid__content">

          {/* LEFT INFORMATION */}

          <aside className="company-project-grid__info">
            <span className="company-project-grid__label">
              ENTERPRISE
            </span>

            <div className="company-project-grid__count">
              <strong>20</strong>
              <span>Organisations</span>
            </div>

            <p>
              AI systems built for teams,
              operations and enterprises.
            </p>

            <a
              href="/projects"
              className="company-project-grid__view-all"
            >
              View all
              <span>→</span>
            </a>
          </aside>

          {/* PROJECT RAIL */}

          <div className="company-project-grid__rail-wrap">
            <div
              ref={railRef}
              className="company-project-grid__rail"
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </div>

        </div>

        {/* FOOTER / PROGRESS */}

        <div className="company-project-grid__footer">
          <span className="company-project-grid__progress-count">
            {String(currentIndex).padStart(2, "0")}
            <span>/20</span>
          </span>

          <div className="company-project-grid__progress">
            <span
              style={{
                width: `${(currentIndex / projects.length) * 100}%`,
              }}
            />
          </div>

          <span className="company-project-grid__progress-label">
            SCROLL TO EXPLORE
          </span>
        </div>

      </div>
    </section>
  );
}