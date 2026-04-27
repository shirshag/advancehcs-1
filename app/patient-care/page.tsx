import type { Metadata } from "next";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Patient Care",
  description: "Visitor information, patient rights, discharge process, and care FAQs."
};

const faqs = [
  ["What are visiting hours?", "General visiting is coordinated by each hospital desk. Critical areas follow stricter entry rules for safety."],
  ["How do I share feedback?", "Feedback forms are available at reception and through the contact form on this website."],
  ["What documents are needed for admission?", "Carry photo ID, previous reports, prescriptions, insurance card, and referral notes if available."],
  ["How does discharge work?", "The team prepares clinical clearance, billing, pharmacy reconciliation, and follow-up guidance."],
  ["Can attendants stay overnight?", "Attendant rules depend on ward category, clinical condition, and infection-control guidance."],
  ["Who handles grievances?", "The patient experience desk records grievances and routes them to hospital administration for closure."]
].map(([question, answer]) => ({ question, answer }));

export default function PatientCarePage() {
  return (
    <>
      <section className="page-banner"><div className="container"><span>Home / Patient Care</span><h1>Patient Care</h1></div></section>
      <section className="section">
        <div className="container feature-grid">
          {["Visitor information", "Patient rights & responsibilities", "Feedback mechanism", "Grievance redressal"].map((item) => <article className="feature-card" key={item}><h2>{item}</h2><p>Clear hospital processes help patients and families navigate care with dignity and confidence.</p></article>)}
        </div>
      </section>
      <section className="section section-muted">
        <div className="container detail-copy">
          <h2>Discharge Process</h2>
          <ol><li>Doctor confirms clinical fitness for discharge.</li><li>Nursing team completes medication and instruction handover.</li><li>Billing and TPA desk close financial documentation.</li><li>Patient receives follow-up plan and emergency guidance.</li></ol>
          <h2>FAQs</h2>
          <Accordion items={faqs} />
        </div>
      </section>
    </>
  );
}
