"use client";

import { motion } from "motion/react";
import { HeroSystem } from "./hero-system";
import "./hero.css";

const stats = [
  {
    value: "30+",
    label: "AI systems shipped",
  },
  {
    value: "12+",
    label: "Enterprise clients",
  },
  {
    value: "100%",
    label: "Production focused",
  },
];

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="hero__grid">
        <div className="hero__content">
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI SYSTEMS FOR ENTERPRISE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            AI systems
            <br />
            built for the
            <br />
            <span>real world.</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.18,
            }}
          >
            We design, build and deploy production AI systems inside
            your organisation, aligned with your data, workflows and
            people.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.28,
            }}
          >
            <a href="#contact" className="hero__button">
              Talk to an AI architect
              <span>→</span>
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                className="hero__stat"
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.08,
                }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          
        </div>

        <div className="hero__visual">
          <HeroSystem />
        </div>
      </div>
    </section>
  );
}