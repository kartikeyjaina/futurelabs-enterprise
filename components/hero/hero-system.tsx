"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect, useId, useRef } from "react";

const satellites = [
  { name: "AI Agents", description: "Automate work", icon: "✦", position: "satellite-one" },
  { name: "AI Strategy", description: "Find opportunities", icon: "◎", position: "satellite-two" },
  { name: "Fractional CTO", description: "Technical leadership", icon: "♙", position: "satellite-three" },
  { name: "AI Products", description: "Turn ideas into tools", icon: "◇", position: "satellite-four" },
  { name: "Integration", description: "Connect your stack", icon: "↗", position: "satellite-five" },
  { name: "AI Systems", description: "Design and build", icon: "▱", position: "satellite-six" },
];

const networkPoints = [
  [380, 83],
  [665, 205],
  [650, 540],
  [380, 680],
  [105, 545],
  [105, 220],
] as const;

export function HeroSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientId = useId().replace(/:/g, "");
  const glowId = useId().replace(/:/g, "");

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 85, damping: 22, mass: 0.45 });
  const rotateY = useSpring(tiltY, { stiffness: 85, damping: 22, mass: 0.45 });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const onPointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      tiltX.set(y * -5);
      tiltY.set(x * 5);
    };

    const resetTilt = () => {
      tiltX.set(0);
      tiltY.set(0);
    };

    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerleave", resetTilt);

    return () => {
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerleave", resetTilt);
    };
  }, [tiltX, tiltY]);

  return (
    <motion.div
      ref={containerRef}
      className="hero-system"
      style={{ rotateX, rotateY }}
    >
      <div className="planet-light planet-light--one" aria-hidden="true" />
      <div className="planet-light planet-light--two" aria-hidden="true" />

      <div className="orbit orbit--large" aria-hidden="true" />
      <div className="orbit orbit--medium" aria-hidden="true" />
      <div className="orbit orbit--small" aria-hidden="true" />

      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`orbit-particle orbit-particle--${["one", "two", "three", "four", "five"][index]}`}
          aria-hidden="true"
        />
      ))}

      <svg className="orbit-connections" viewBox="0 0 760 760" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#617cff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#617cff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#9c88ff" stopOpacity="0" />
          </linearGradient>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="380" cy="380" rx="300" ry="205" className="connection-orbit" />
        <ellipse cx="380" cy="380" rx="245" ry="175" className="connection-orbit connection-orbit--two" />
        <ellipse cx="380" cy="380" rx="190" ry="135" className="connection-orbit connection-orbit--three" />

        {networkPoints.map(([x, y]) => (
          <path
            key={`line-${x}-${y}`}
            d={`M380 380 L${x} ${y}`}
            className="connection-line"
            style={{ stroke: `url(#${gradientId})` }}
          />
        ))}

        {networkPoints.map(([cx, cy]) => (
          <circle
            key={`point-${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3"
            className="connection-point"
            style={{ filter: `url(#${glowId})` }}
          />
        ))}
      </svg>

      <motion.div
        className="organisation-planet"
        animate={{ rotateZ: [0, 2, -1, 0], scale: [1, 1.008, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="planet-atmosphere" aria-hidden="true" />
        <div className="planet-surface" aria-hidden="true">
          <div className="planet-grid" />
          <div className="planet-land planet-land--one" />
          <div className="planet-land planet-land--two" />
          <div className="planet-land planet-land--three" />
          <div className="planet-land planet-land--four" />
          <div className="planet-lights">
            {Array.from({ length: 8 }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
        </div>
        <div className="planet-highlight" aria-hidden="true" />
        <div className="planet-center">
          <div className="planet-center__icon" aria-hidden="true">♙</div>
          <strong>YOUR<br />ORGANISATION</strong>
          <span>Real people. Real data.<br />Real impact.</span>
        </div>
      </motion.div>

      {satellites.map((satellite, index) => (
        <Satellite key={satellite.name} {...satellite} index={index} />
      ))}

      <div className="hero-system-label hero-system-label--left" aria-hidden="true">
        <span className="label-line" />
        <span>CONNECTED<br />AI ECOSYSTEM</span>
      </div>
    </motion.div>
  );
}

interface SatelliteProps {
  name: string;
  description: string;
  icon: string;
  position: string;
  index: number;
}

function Satellite({ name, description, icon, position, index }: SatelliteProps) {
  return (
    <motion.div
      className={`satellite ${position}`}
      animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
      transition={{ duration: 4 + index * 0.6, repeat: Infinity, ease: "easeInOut" }}
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
        transition={{ duration: 3, delay: index * 0.35, repeat: Infinity }}
      >
        <span aria-hidden="true">{icon}</span>
        <div className="satellite-ring satellite-ring--one" aria-hidden="true" />
        <div className="satellite-ring satellite-ring--two" aria-hidden="true" />
      </motion.div>

      <div className="satellite-copy">
        <strong>{name}</strong>
        <span>{description}</span>
      </div>
    </motion.div>
  );
}
