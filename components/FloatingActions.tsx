"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { company } from "@/data/site";
import { Icon } from "@/lib/icons";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 450);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="whatsapp-float" href={company.whatsapp} aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" />
        <span>WhatsApp</span>
      </a>
      <button
        className={`back-top ${visible ? "show" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
      <Link className="side-tab" href="/book-appointment">
        Book Appointment
      </Link>
    </>
  );
}
