"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company, hospitals } from "@/data/site";
import { Icon } from "@/lib/icons";

const navItems = [
  { label: "Our Hospitals", href: "/hospitals" },
  { label: "Specialities", href: "/specialities" },
  { label: "Find a Doctor", href: "/doctors" },
  { label: "Academics", href: "/academics" },
  { label: "Patient Care", href: "/patient-care" },
  { label: "About Us", href: "/company-history" },
  { label: "MD Speech", href: "/management-board" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${compact ? "compact" : ""}`}>
      <div className="utility-bar">
        <div className="container utility-inner">
              <Link className="brand" href="/" aria-label="Advance HCS home">
            <img src="../logo.jpg" alt="" />
            <span>
              <strong>{company.name}</strong>
              <small>{company.tagline}</small>
            </span>
          </Link>
          <div className="utility-links">
            <Link href="/insurance-tpa">Insurance & TPA</Link>
            <span aria-hidden="true">|</span>
            <Link href="/academics">Academics</Link>
          </div>
      
          <div className="utility-actions">
            <a href={`tel:${company.phone}`} className="phone-link">
              <Icon name="phone" /> {company.phoneDisplay}
            </a>
            <Link className="btn btn-primary small" href="/book-appointment">
              Book Appointment
            </Link>
            <a className="btn btn-emergency small" href={`tel:${company.phone}`}>
              Emergency
            </a>
          </div>
          <button
            className="menu-button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
      <nav className="main-nav" aria-label="Primary navigation">
        <div className="container nav-inner">
          <div className="nav-links">
            <div className="mega-wrap">
              <Link href="/hospitals">Our Hospitals</Link>
              <div className="mega-menu" role="menu">
                {hospitals.map((hospital) => (
                  <Link key={hospital.slug} href={`/hospitals/${hospital.slug}`}>
                    <strong>{hospital.shortName}</strong>
                    <span>{hospital.location}</span>
                  </Link>
                ))}
              </div>
            </div>
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link className="search-link" href="/doctors" aria-label="Search doctors">
            <Icon name="search" /> Search
          </Link>
        </div>
      </nav>
      <div className={`mobile-drawer ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="drawer-head">
          <Link className="brand" href="/" onClick={() => setOpen(false)}>
            <span className="brand-mark">A</span>
            <span>
              <strong>{company.name}</strong>
              <small>{company.tagline}</small>
            </span>
          </Link>
          <button className="menu-button" aria-label="Close navigation menu" onClick={() => setOpen(false)}>
            <Icon name="close" />
          </button>
        </div>
        <div className="drawer-links">
          {[...navItems, { label: "Academics", href: "/academics" }, { label: "Insurance & TPA", href: "/insurance-tpa" }, { label: "Contact Us", href: "/contact" }].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link className="btn btn-primary" href="/book-appointment" onClick={() => setOpen(false)}>
          Book Appointment
        </Link>
      </div>
      {open ? <button className="drawer-backdrop" aria-label="Close menu overlay" onClick={() => setOpen(false)} /> : null}
    </header>
  );
}
