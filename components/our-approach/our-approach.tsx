"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./our-approach.css";

type Step = {
  number: string;
  title: string;
  description: string;
  detail: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your goals",
    detail:
      "We identify the highest-value opportunities, constraints and outcomes before deciding what should be built.",
  },
  {
    number: "02",
    title: "Map",
    description: "Analyse data and systems",
    detail:
      "We map your workflows, data, systems and technical environment to understand what the solution needs to connect.",
  },
  {
    number: "03",
    title: "Design",
    description: "Architect the right solution",
    detail:
      "We design the product experience, system architecture and AI layer around real users and operational needs.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop and iterate",
    detail:
      "We build quickly, test continuously and refine the system through working releases rather than endless documentation.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Integrate, test and launch",
    detail:
      "We connect the product to your environment, validate production behaviour and prepare the system for real-world use.",
  },
  {
    number: "06",
    title: "Scale",
    description: "Monitor, optimise and grow",
    detail:
      "We monitor performance, improve reliability and extend the system as adoption and organisational requirements grow.",
  },
];

export function OurApproach() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const [activeStep, setActiveStep] =
    useState(0);

  const [progress, setProgress] =
    useState(0);

  useEffect(() => {
    const update = () => {
      const section =
        sectionRef.current;

      if (!section) return;

      const rect =
        section.getBoundingClientRect();

      const scrollable =
        section.offsetHeight -
        window.innerHeight;

      if (scrollable <= 0) return;

      const travelled =
        Math.min(
          Math.max(-rect.top, 0),
          scrollable,
        );

      const nextProgress =
        travelled / scrollable;

      const nextStep = Math.min(
        steps.length - 1,
        Math.floor(
          nextProgress * steps.length,
        ),
      );

      setProgress(nextProgress);
      setActiveStep(nextStep);
    };

    update();

    window.addEventListener(
      "scroll",
      update,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      update,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        update,
      );

      window.removeEventListener(
        "resize",
        update,
      );
    };
  }, []);

  const goToStep = (
    index: number,
  ) => {
    const section =
      sectionRef.current;

    if (!section) return;

    const sectionTop =
      window.scrollY +
      section.getBoundingClientRect().top;

    const scrollable =
      section.offsetHeight -
      window.innerHeight;

    const targetProgress =
      index /
      (steps.length - 1);

    window.scrollTo({
      top:
        sectionTop +
        scrollable *
          targetProgress,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="approach"
      className="our-approach"
    >
      <div className="our-approach__sticky">
        <div className="our-approach__panel">

          {/* SECTION LABEL */}

          <div className="our-approach__eyebrow">
            <span>07</span>
            <span>—</span>
            <span>OUR APPROACH</span>
          </div>

          <div className="our-approach__layout">

            {/* LEFT COLUMN */}

            <div className="our-approach__intro">
              <h2>
                From
                <br />
                discovery to
                <br />
                production.
              </h2>

              <p>
                A proven process to de-risk,
                accelerate and scale AI in
                your organisation.
              </p>

              <a
                href="#company-projects"
                className="our-approach__learn"
              >
                Learn more

                <span>→</span>
              </a>
            </div>

            {/* RIGHT SIDE */}

            <div className="our-approach__process">

              {/* BACKGROUND CURVE */}

              <div
                className="our-approach__curve"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 900 150"
                  preserveAspectRatio="none"
                >
                  <path
                    className="our-approach__curve-base"
                    d="
                      M0 90
                      C100 15,
                       170 20,
                       260 70
                      C350 120,
                       410 110,
                       500 50
                      C585 -5,
                       650 5,
                       720 60
                      C785 108,
                       835 83,
                       900 38
                    "
                  />

                  <path
                    className="our-approach__curve-active"
                    pathLength="1"
                    style={{
                      strokeDasharray: "1",
                      strokeDashoffset:
                        1 - progress,
                    }}
                    d="
                      M0 90
                      C100 15,
                       170 20,
                       260 70
                      C350 120,
                       410 110,
                       500 50
                      C585 -5,
                       650 5,
                       720 60
                      C785 108,
                       835 83,
                       900 38
                    "
                  />
                </svg>

                <span className="our-approach__curve-dot our-approach__curve-dot--1" />
                <span className="our-approach__curve-dot our-approach__curve-dot--2" />
                <span className="our-approach__curve-dot our-approach__curve-dot--3" />
              </div>

              {/* TIMELINE */}

              <div className="our-approach__timeline">

                <div className="our-approach__line">
                  <span
                    style={{
                      width: `${
                        progress * 100
                      }%`,
                    }}
                  />
                </div>

                <div className="our-approach__steps">
                  {steps.map(
                    (
                      step,
                      index,
                    ) => {
                      const isActive =
                        index ===
                        activeStep;

                      const isPast =
                        index <
                        activeStep;

                      return (
                        <button
                          key={
                            step.number
                          }
                          type="button"
                          onClick={() =>
                            goToStep(
                              index,
                            )
                          }
                          className={[
                            "our-approach__step",
                            isActive
                              ? "our-approach__step--active"
                              : "",
                            isPast
                              ? "our-approach__step--past"
                              : "",
                          ]
                            .filter(
                              Boolean,
                            )
                            .join(" ")}
                        >
                          <span className="our-approach__number">
                            {
                              step.number
                            }
                          </span>

                          <span className="our-approach__node">
                            <span />
                          </span>

                          <span className="our-approach__step-copy">
                            <strong>
                              {
                                step.title
                              }
                            </strong>

                            <small>
                              {
                                step.description
                              }
                            </small>
                          </span>
                        </button>
                      );
                    },
                  )}
                </div>
              </div>

              {/* ACTIVE DETAIL */}

              <div className="our-approach__detail-shell">
                <div
                  key={activeStep}
                  className="our-approach__detail"
                >
                  <div className="our-approach__detail-number">
                    {
                      steps[
                        activeStep
                      ].number
                    }
                  </div>

                  <div className="our-approach__detail-text">
                    <strong>
                      {
                        steps[
                          activeStep
                        ].title
                      }
                    </strong>

                    <p>
                      {
                        steps[
                          activeStep
                        ].detail
                      }
                    </p>
                  </div>

                  <div className="our-approach__detail-visual">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* BOTTOM PROGRESS */}

          <div className="our-approach__bottom">
            <span>
              {
                steps[activeStep]
                  .number
              }
              <small>/06</small>
            </span>

            <div className="our-approach__bottom-line">
              <span
                style={{
                  width: `${
                    progress * 100
                  }%`,
                }}
              />
            </div>

            <span>
              SCROLL TO EXPLORE
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}