"use client";

import "./work-with-us.css";

export function WorkWithUs() {
  return (
    <section
      id="work-with-us"
      className="work-with-us"
    >
      <div className="work-with-us__container">

        {/* HEADER */}

        <div className="work-with-us__header">
          <span>11</span>
          <span>—</span>
          <span>WORK WITH US (ORGANISATIONS)</span>
        </div>

        {/* MAIN PANEL */}

        <div className="work-with-us__panel">

          {/* LEFT */}

          <div className="work-with-us__intro">
            <h2>
              Have a system
              <br />
              worth building?
            </h2>

            <p>
              Tell us a bit about what
              youre working on and
              well show you the next
              best step.
            </p>

            <a
              href="mailto:hello@futurelab.com"
              className="work-with-us__button"
            >
              <span>Start a conversation</span>
              <span>→</span>
            </a>
          </div>

          {/* RIGHT */}

          <div className="work-with-us__content">

            <div className="work-with-us__statement">
              <span className="work-with-us__statement-dot" />

              <p>
                Whether you are exploring an
                opportunity, building a new AI
                system, or looking to scale
                something already in production,
                we can help turn the idea into
                something real.
              </p>
            </div>

            <div className="work-with-us__points">
              <div>
                <span>01</span>
                <p>
                  Start with the problem,
                  not the technology.
                </p>
              </div>

              <div>
                <span>02</span>
                <p>
                  Understand what is
                  actually worth building.
                </p>
              </div>

              <div>
                <span>03</span>
                <p>
                  Move from idea to
                  working system.
                </p>
              </div>
            </div>

            <div className="work-with-us__visual">
              <div className="work-with-us__visual-line" />

              <span className="work-with-us__visual-dot work-with-us__visual-dot--one" />
              <span className="work-with-us__visual-dot work-with-us__visual-dot--two" />
              <span className="work-with-us__visual-dot work-with-us__visual-dot--three" />

              <div className="work-with-us__visual-core">
                <span />
              </div>
            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="work-with-us__footer">
          <span>
            LETS BUILD SOMETHING USEFUL
          </span>

          <span>
            HELLO@FUTURELAB.COM
          </span>
        </div>

      </div>
    </section>
  );
}