import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company History",
  description: "The Advance HCS journey from 2010 to a five-hospital healthcare network."
};

const timeline = [
  ["2010", "Founded with a mission to bridge rural healthcare gaps."],
  ["2012", "First Glocal Hospital established in West Bengal."],
  ["2015", "Expanded to 3 hospitals."],
  ["2018", "Launched digital dispensaries in rural areas."],
  ["2020", "Built a 180+ doctors and care givers network."],
  ["2022", "Crossed the 18,000+ surgeries milestone."],
  ["2025", "Reached 5 hospitals and 5,950+ ICU cases."]
];

export default function CompanyHistoryPage() {
  return (
    <>
      <section className="page-banner"><div className="container"><span>Home / Company History</span><h1>Our Journey</h1></div></section>
      <section className="section">
        <div className="container timeline">
          {timeline.map(([year, text]) => (
            <article key={year}>
              <strong>{year}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-muted">
        <div className="container feature-grid">
          <article className="feature-card"><h2>Mission</h2><p>Make ethical, advanced, and affordable healthcare available to underserved communities.</p></article>
          <article className="feature-card"><h2>Vision</h2><p>Build a connected healthcare network where rural families can access specialist-led care close to home.</p></article>
        </div>
        <div className="container feature-grid four">
          {["Compassion", "Excellence", "Accessibility", "Innovation"].map((value) => <article className="feature-card" key={value}><h3>{value}</h3><p>Every decision is guided by patient dignity, clinical quality, and practical access.</p></article>)}
        </div>
      </section>
    </>
  );
}
