"use client";

import { useState } from "react";

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={item.question}>
          <button
            type="button"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {item.question}
            <span>{open === index ? "−" : "+"}</span>
          </button>
          <div className="accordion-panel" hidden={open !== index}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
