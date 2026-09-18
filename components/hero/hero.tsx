"use client";

import { MotionConfig, motion } from "motion/react";
import { HeroSystem } from "./hero-system";
import "./hero.css";

const stats = [
  { value: "30+", label: "AI systems shipped" },
  { value: "12+", label: "Enterprise clients" },
  { value: "100%", label: "Production focused" },
];

export function Hero() {
  const enter = (delay = 0, y = 14) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <MotionConfig reducedMotion="user">
      <section className="hero" id="hero" aria-labelledby="hero-title">
        <div className="hero__glow hero__glow--one" aria-hidden="true" />
        <div className="hero__glow hero__glow--two" aria-hidden="true" />

        <div className="hero__grid">
          <div className="hero__content">
            <motion.p className="hero__eyebrow" {...enter(0, 8)}>
              AI SYSTEMS FOR ENTERPRISE
            </motion.p>

            <motion.h1 id="hero-title" {...enter(0.08, 18)}>
              AI systems
              <br />
              built for the
              <br />
              <span>real world.</span>
            </motion.h1>

            <motion.p className="hero__description" {...enter(0.18, 12)}>
              We design, build and deploy production AI systems inside your
              organisation, aligned with your data, workflows and people.
            </motion.p>

            <motion.div className="hero__actions" {...enter(0.28, 10)}>
              <a href="#contact" className="hero__button">
                <span className="hero__button-text">Talk to an AI architect</span>
                <span className="hero__button-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </motion.div>

            <motion.dl
              className="hero__stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              aria-label="Company highlights"
            >
              {stats.map((stat, index) => (
                <motion.div
                  className="hero__stat"
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.08 }}
                >
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-label="Connected AI ecosystem illustration"
          >
            <HeroSystem />
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
 