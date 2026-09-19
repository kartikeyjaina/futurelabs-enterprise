`use client`;

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./navbar.css";

const links = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar${open ? " navbar--open" : ""}`}>
      <div className="navbar__inner">
        <Link href="/" className="navbar__brand" aria-label="FutureLab" onClick={() => setOpen(false)}>
          <Image
            src="/branding/futurelab-logo.png"
            alt="FutureLab"
            width={150}
            height={42}
            priority
            className="navbar__logo"
          />
        </Link>

        <nav className="navbar__links" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="navbar__mobile-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className="navbar__mobile-menu"
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              <span>0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
