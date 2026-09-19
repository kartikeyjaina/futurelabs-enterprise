"use client";

import Image from "next/image";
import Link from "next/link";

import "./footer.css";

const workLinks = [
  {
    label: "Organisations",
    href: "#company-projects",
  },
  {
    label: "Individuals",
    href: "#individual-projects",
  },
  {
    label: "Case studies",
    href: "#company-projects",
  },
];

const capabilityLinks = [
  {
    label: "AI Strategy",
    href: "#capabilities",
  },
  {
    label: "AI Systems",
    href: "#capabilities",
  },
  {
    label: "AI Agents",
    href: "#capabilities",
  },
  {
    label: "Automation",
    href: "#capabilities",
  },
  {
    label: "AI Products",
    href: "#capabilities",
  },
];

const companyLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Approach",
    href: "#approach",
  },
  {
    label: "Contact",
    href: "#work-with-us",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    label: "X",
    href: "https://x.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">

        {/* HEADER */}

        <div className="site-footer__header">
          <span>14</span>
          <span>—</span>
          <span>FOOTER</span>
        </div>

        {/* MAIN */}

        <div className="site-footer__main">

          {/* BRAND */}

          <div className="site-footer__brand">
            <Link
              href="/"
              className="site-footer__logo"
              aria-label="FutureLab home"
            >
              <Image
                src="/branding/futurelab-logo.png"
                alt="FutureLab"
                width={150}
                height={42}
              />
            </Link>

            <p>
              AI systems for a more
              capable world.
            </p>

            {/* SOCIALS */}

            <div className="site-footer__socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.label === "LinkedIn"
                    ? "in"
                    : social.label === "X"
                      ? "X"
                      : "◎"}
                </a>
              ))}
            </div>
          </div>

          {/* WORK */}

          <FooterColumn
            title="Work"
            links={workLinks}
          />

          {/* CAPABILITIES */}

          <FooterColumn
            title="Capabilities"
            links={capabilityLinks}
          />

          {/* COMPANY */}

          <FooterColumn
            title="Company"
            links={companyLinks}
          />

        </div>

        {/* BOTTOM */}

        <div className="site-footer__bottom">

          <span>
            © 2026 FutureLab Studio.
            All rights reserved.
          </span>

          <span>
            Built for what&apos;s next.
          </span>

        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div className="site-footer__column">
      <h3>{title}</h3>

      <nav aria-label={title}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}