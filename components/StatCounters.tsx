"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

export function StatCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true);
    }, { threshold: 0.3 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref} aria-label="Advance HCS impact statistics">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <Counter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} active={active} />
        ))}
      </div>
    </section>
  );
}

function Counter({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1000;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(value * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <div className="stat-card">
      <strong>{count.toLocaleString("en-IN")}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}
