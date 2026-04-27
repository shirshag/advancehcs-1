import type { Metadata } from "next";
import { company, insurancePartners } from "@/data/site";

export const metadata: Metadata = {
  title: "Insurance & TPA Partners",
  description: "Cashless treatment and insurance support at Advance HCS hospitals."
};

export default function InsurancePage() {
  return (
    <>
      <section className="page-banner"><div className="container"><span>Home / Insurance & TPA</span><h1>Insurance & TPA Partners</h1></div></section>
      <section className="section">
        <div className="container intro"><p>Cashless treatment support is available for eligible policies after document verification, insurer approval, and hospital-level pre-authorization.</p></div>
        <div className="container logo-grid">{insurancePartners.map((partner) => <span key={partner}>{partner}</span>)}</div>
      </section>
      <section className="section section-muted">
        <div className="container feature-grid">
          {["Show card", "Pre-auth", "Cashless discharge"].map((step, index) => <article key={step} className="feature-card"><strong>Step {index + 1}</strong><h2>{step}</h2><p>TPA desk validates documents and coordinates approval with the insurer.</p></article>)}
        </div>
        <div className="container detail-copy">
          <h2>Services covered under TPA</h2>
          <ul><li>Planned admissions subject to policy terms</li><li>Emergency admissions after insurer approval</li><li>Surgical packages and diagnostics as approved</li><li>Discharge documentation and claim coordination</li></ul>
          <p><strong>TPA queries:</strong> <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a> · <a href={`mailto:${company.email}`}>{company.email}</a></p>
        </div>
      </section>
    </>
  );
}
