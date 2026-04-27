import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Accordion } from "@/components/Accordion";
import { DoctorCard, HospitalCard } from "@/components/Cards";
import { doctorsForSpeciality, getSpeciality, hospitals, specialities } from "@/data/site";

export function generateStaticParams() {
  return specialities.map((speciality) => ({ slug: speciality.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params;
  const speciality = getSpeciality(slug);
  return { title: speciality?.name ?? "Speciality", description: speciality?.description };
}

export default async function SpecialityDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const speciality = getSpeciality(slug);
  if (!speciality) notFound();
  const team = doctorsForSpeciality(speciality.slug);
  const availableHospitals = hospitals.filter((hospital) => hospital.specialities.includes(speciality.slug));
  const faqs = [
    { question: `When should I consult ${speciality.name}?`, answer: "Book a consultation when symptoms persist, recur, or affect daily life. Emergency symptoms should be handled immediately through hospital emergency services." },
    { question: "Do I need previous reports?", answer: "Carry prescriptions, diagnostic reports, discharge summaries, and current medication details when available." },
    { question: "Can I choose a hospital before booking?", answer: "Yes. The appointment flow lets you select a hospital first, then a matching speciality and doctor." },
    { question: "Is insurance support available?", answer: "TPA support depends on policy approval, hospital location, and documentation submitted during pre-authorization." }
  ];

  return (
    <>
      <section className="page-banner"><div className="container"><span>Home / Specialities / {speciality.name}</span><h1>{speciality.name}</h1></div></section>
      <section className="section">
        <div className="container detail-copy">
          <h2>Overview</h2>
          <p>{speciality.description} Our clinical teams focus on accurate diagnosis, practical treatment planning, and continuity of care across hospital and follow-up visits.</p>
          <p>Care pathways are designed for rural and semi-urban families who need specialist support without unnecessary travel or delay.</p>
          <h2>Conditions Treated</h2>
          <div className="tag-list">{speciality.conditions.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container section-head"><h2>Our Team</h2></div>
        <div className="container cards-grid doctors-grid">{team.map((doctor) => <DoctorCard key={doctor.slug} doctor={doctor} />)}</div>
      </section>
      <section className="section">
        <div className="container section-head"><h2>Available at these hospitals</h2></div>
        <div className="container cards-grid hospital-list">{availableHospitals.map((hospital) => <HospitalCard key={hospital.slug} hospital={hospital} />)}</div>
      </section>
      <section className="section section-muted">
        <div className="container feature-grid">
          {["Experienced specialist teams", "Accessible diagnostics", "Coordinated follow-up"].map((item) => <article key={item} className="feature-card"><h3>{item}</h3><p>Patient-first care with clear communication and practical treatment options.</p></article>)}
        </div>
        <div className="container faq-wrap">
          <h2>FAQs</h2>
          <Accordion items={faqs} />
          <Link className="btn btn-primary" href={`/book-appointment?speciality=${speciality.slug}`}>Book Appointment</Link>
        </div>
      </section>
    </>
  );
}
