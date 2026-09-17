"use client";

import Image from "next/image";
import Link from "next/link";
import "./navbar.css";

const links = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">

        {/* BRAND */}
        <Link
          href="/"
          className="navbar__brand"
          aria-label="FutureLab"
        >
          <Image
            src="/branding/futurelab-logo.png"
            alt="FutureLab"
            width={150}
            height={42}
            priority
            className="navbar__logo"
          />
        </Link>

        {/* NAV */}
        <nav className="navbar__links">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="navbar__link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        
        {/* MOBILE */}
        <button
          className="navbar__mobile-toggle"
          type="button"
          aria-label="Open navigation"
        >
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}