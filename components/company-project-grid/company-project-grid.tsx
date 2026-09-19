"use client";

import { useRef } from "react";
import "./company-project-grid.css";

type Project = {
  id: number;
  title: string;
  image: string;
  tags: string[];
  href: string;
  linkLabel: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "ChatEasy",
    image: "/projects/chat_easy.avif",
    tags: ["Knowledge and learning"],
    href: "https://futurelabstudios.com/products-for-enterprise/chateasy",
    linkLabel: "View product",
  },
  {
    id: 2,
    title: "ClientEasy",
    image: "/projects/company-02.jpg",
    tags: ["AI CRM", "Client Management", "Predictive Scoring"],
    href: "https://futurelabstudios.com/products-for-enterprise/clienteasy/",
    linkLabel: "View product",
  },
  {
    id: 3,
    title: "MarketEasy",
    image: "/projects/company-03.jpg",
    tags: ["Market Research", "Competitor Tracking", "Trend Forecasting"],
    href: "https://futurelabstudios.com/products-for-enterprise/marketeasy/",
    linkLabel: "View product",
  },
  {
    id: 4,
    title: "AI Voice Agents",
    image: "/projects/company-04.jpg",
    tags: ["Customer service", "Support", "Automation"],
    href: "https://futurelabstudios.com/our-work/",
    linkLabel: "Explore tools",
  },
  {
    id: 5,
    title: "Knowledge Chatbots",
    image: "/projects/company-05.jpg",
    tags: ["Knowledge base", "AI", "Enterprise"],
    href: "https://futurelabstudios.com/our-work/",
    linkLabel: "Explore tools",
  },
  {
    id: 6,
    title: "RAG-indexed Tools",
    image: "/projects/company-06.jpg",
    tags: ["RAG", "Organisation data", "Intelligence"],
    href: "https://futurelabstudios.com/our-work/",
    linkLabel: "Explore tools",
  },
  {
    id: 7,
    title: "Learning Management Systems",
    image: "/projects/company-07.jpg",
    tags: ["Learning", "Personalisation", "Adaptive paths"],
    href: "https://futurelabstudios.com/our-work/",
    linkLabel: "Explore tools",
  },
  {
    id: 8,
    title: "Sales Agents",
    image: "/projects/company-08.jpg",
    tags: ["Lead qualification", "Meetings", "Sales"],
    href: "https://futurelabstudios.com/our-work/",
    linkLabel: "Explore tools",
  },
  {
    id: 9,
    title: "AI Coach for Teams",
    image: "/projects/company-09.jpg",
    tags: ["Coaching", "Collaboration", "Productivity"],
    href: "https://futurelabstudios.com/our-work/",
    linkLabel: "Explore tools",
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
          {project.linkLabel}
          <span>→</span>
        </a>
      </div>
    </article>
  );
}

export function CompanyProjectGrid() {
  const railRef = useRef<HTMLDivElement>(null);

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
  };

  return (
    <section id="company-projects" className="company-project-grid">
      <div className="company-project-grid__container">
        <div className="company-project-grid__header">
          <div className="company-project-grid__title">
            <span>For Organizations</span>
            <h2>SELECTED WORK</h2>
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

        <div className="company-project-grid__content">
          <aside className="company-project-grid__info">
            <span className="company-project-grid__label">ENTERPRISE</span>

            <div className="company-project-grid__count">
              <strong>{projects.length}</strong>
              <span>AI solutions</span>
            </div>

            <p>
              AI products and custom-built tools for organisations, teams and
              real workflows.
            </p>

            <a
              href="https://futurelabstudios.com/our-work/"
              target="_blank"
              rel="noopener noreferrer"
              className="company-project-grid__view-all"
            >
              View all
              <span>→</span>
            </a>
          </aside>

          <div className="company-project-grid__rail-wrap">
            <div ref={railRef} className="company-project-grid__rail">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
