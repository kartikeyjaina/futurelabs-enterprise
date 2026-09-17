"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useRef } from "react";

const satellites = [
  {
    name: "AI Agents",
    description: "Automate work",
    icon: "✦",
    orbit: "orbit-one",
    position: "satellite-one",
  },
  {
    name: "AI Strategy",
    description: "Find opportunities",
    icon: "◎",
    orbit: "orbit-two",
    position: "satellite-two",
  },
  {
    name: "Fractional CTO",
    description: "Technical leadership",
    icon: "♙",
    orbit: "orbit-three",
    position: "satellite-three",
  },
  {
    name: "AI Products",
    description: "Turn ideas into tools",
    icon: "◇",
    orbit: "orbit-four",
    position: "satellite-four",
  },
  {
    name: "Integration",
    description: "Connect your stack",
    icon: "↗",
    orbit: "orbit-five",
    position: "satellite-five",
  },
  {
    name: "AI Systems",
    description: "Design and build",
    icon: "▱",
    orbit: "orbit-six",
    position: "satellite-six",
  },
];

export function HeroSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      mouseX.set(y * -5);
      mouseY.set(x * 5);
    };

    const handlePointerLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    element.addEventListener(
      "pointermove",
      handlePointerMove
    );

    element.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    return () => {
      element.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      element.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className="hero-system"
      style={{
        rotateX,
        rotateY,
      }}
    >
      {/* -------------------------------- */}
      {/* AMBIENT LIGHT */}
      {/* -------------------------------- */}

      <div className="planet-light planet-light--one" />
      <div className="planet-light planet-light--two" />

      {/* -------------------------------- */}
      {/* ORBIT FIELD */}
      {/* -------------------------------- */}

      <div className="orbit orbit--large" />
      <div className="orbit orbit--medium" />
      <div className="orbit orbit--small" />

      {/* -------------------------------- */}
      {/* MOVING ORBIT PARTICLES */}
      {/* -------------------------------- */}

      <div className="orbit-particle orbit-particle--one" />
      <div className="orbit-particle orbit-particle--two" />
      <div className="orbit-particle orbit-particle--three" />
      <div className="orbit-particle orbit-particle--four" />
      <div className="orbit-particle orbit-particle--five" />

      {/* -------------------------------- */}
      {/* CONNECTION LINES */}
      {/* -------------------------------- */}

      <svg
        className="orbit-connections"
        viewBox="0 0 760 760"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="orbitLine"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0"
              stopColor="#617cff"
              stopOpacity="0"
            />

            <stop
              offset="0.5"
              stopColor="#617cff"
              stopOpacity="0.55"
            />

            <stop
              offset="1"
              stopColor="#9c88ff"
              stopOpacity="0"
            />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur
              stdDeviation="4"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* outer orbital path */}

        <ellipse
          cx="380"
          cy="380"
          rx="300"
          ry="205"
          className="connection-orbit"
        />

        <ellipse
          cx="380"
          cy="380"
          rx="245"
          ry="175"
          className="connection-orbit connection-orbit--two"
        />

        <ellipse
          cx="380"
          cy="380"
          rx="190"
          ry="135"
          className="connection-orbit connection-orbit--three"
        />

        {/* satellite connection rays */}

        <path
          d="M380 380 L380 83"
          className="connection-line"
        />

        <path
          d="M380 380 L665 205"
          className="connection-line"
        />

        <path
          d="M380 380 L650 540"
          className="connection-line"
        />

        <path
          d="M380 380 L380 680"
          className="connection-line"
        />

        <path
          d="M380 380 L105 545"
          className="connection-line"
        />

        <path
          d="M380 380 L105 220"
          className="connection-line"
        />

        {/* connection points */}

        <circle
          cx="380"
          cy="83"
          r="3"
          className="connection-point"
        />

        <circle
          cx="665"
          cy="205"
          r="3"
          className="connection-point"
        />

        <circle
          cx="650"
          cy="540"
          r="3"
          className="connection-point"
        />

        <circle
          cx="380"
          cy="680"
          r="3"
          className="connection-point"
        />

        <circle
          cx="105"
          cy="545"
          r="3"
          className="connection-point"
        />

        <circle
          cx="105"
          cy="220"
          r="3"
          className="connection-point"
        />
      </svg>

      {/* -------------------------------- */}
      {/* PLANET */}
      {/* -------------------------------- */}

      <motion.div
        className="organisation-planet"
        animate={{
          rotateZ: [0, 2, -1, 0],
          scale: [1, 1.008, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="planet-atmosphere" />

        <div className="planet-surface">
          <div className="planet-grid" />

          <div className="planet-land planet-land--one" />
          <div className="planet-land planet-land--two" />
          <div className="planet-land planet-land--three" />
          <div className="planet-land planet-land--four" />

          <div className="planet-lights">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="planet-highlight" />

        <div className="planet-center">
          <div className="planet-center__icon">
            ♙
          </div>

          <strong>
            YOUR
            <br />
            ORGANISATION
          </strong>

          <span>
            Real people. Real data.
            <br />
            Real impact.
          </span>
        </div>
      </motion.div>

      {/* -------------------------------- */}
      {/* SATELLITES */}
      {/* -------------------------------- */}

      {satellites.map((satellite, index) => (
        <Satellite
          key={satellite.name}
          {...satellite}
          index={index}
        />
      ))}
      
      {/* -------------------------------- */}
      {/* LOWER CALLOUT */}
      {/* -------------------------------- */}

     
    </motion.div>
  );
}

interface SatelliteProps {
  name: string;
  description: string;
  icon: string;
  orbit: string;
  position: string;
  index: number;
}

function Satellite({
  name,
  description,
  icon,
  orbit,
  position,
  index,
}: SatelliteProps) {
  return (
    <div
      className={`satellite-orbit ${orbit}`}
    >
      <motion.div
        className={`satellite ${position}`}
        animate={{
          y: [0, index % 2 === 0 ? -4 : 4, 0],
        }}
        transition={{
          duration: 4 + index * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="satellite-core"
          animate={{
            boxShadow: [
              "0 0 0 rgba(92,117,255,0)",
              "0 0 28px rgba(92,117,255,.28)",
              "0 0 0 rgba(92,117,255,0)",
            ],
          }}
          transition={{
            duration: 3,
            delay: index * 0.4,
            repeat: Infinity,
          }}
        >
          <span>{icon}</span>

          <div className="satellite-ring satellite-ring--one" />
          <div className="satellite-ring satellite-ring--two" />
        </motion.div>

        <div className="satellite-copy">
          <strong>{name}</strong>
          <span>{description}</span>
        </div>
      </motion.div>
    </div>
  );
}