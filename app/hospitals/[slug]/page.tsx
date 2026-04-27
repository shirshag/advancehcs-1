import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DoctorCard, SpecialityTile } from "@/components/Cards";
import { doctorsForHospital, getHospital, hospitals, specialitiesForHospital } from "@/data/site";

export function generateStaticParams() {
  return hospitals.map((hospital) => ({ slug: hospital.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params;
  const hospital = getHospital(slug);
  return { title: hospital?.name ?? "Hospital", description: `Details, doctors, and appointment booking for ${hospital?.name}.` };
}

export default async function HospitalDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const hospital = getHospital(slug);
  if (!hospital) notFound();
  const hospitalDoctors = doctorsForHospital(hospital.slug);
  const jsonLd = { "@context": "https://schema.org", "@type": "Hospital", name: hospital.name, telephone: hospital.phone, email: hospital.email, address: hospital.address };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="detail-hero">
        <Image src={hospital.image} alt={`${hospital.name} exterior`} fill priority />
        <div className="hero-overlay" />
        <div className="container">
          <span>Home / Hospitals / {hospital.shortName}</span>
          <h1>{hospital.name}</h1>
          <p>{hospital.type} · {hospital.location}</p>
        </div>
      </section>
      <section className="section">
        <div className="container stat-row">
          <span><strong>{hospital.beds}</strong>Beds</span>
          <span><strong>{hospital.doctors}</strong>Doctors</span>
          <span><strong>{hospital.specialities.length}</strong>Specialities</span>
          <span><strong>{hospital.established}</strong>Est. year</span>
        </div>
        <div className="container detail-copy">
          <h2>About this hospital</h2>
          <p>{hospital.name} provides accessible, multi-specialty care for patients across {hospital.district}. The hospital supports outpatient consultation, emergency stabilization, diagnostics, surgery coordination, and inpatient recovery pathways.</p>
          <p>Clinical teams work with clear triage, ethical treatment planning, and family-centered communication so patients can make informed decisions close to home.</p>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container section-head"><h2>Specialities Offered</h2></div>
        <div className="container speciality-grid">{specialitiesForHospital(hospital.slug).map((item) => <SpecialityTile key={item.slug} speciality={item} />)}</div>
      </section>
      <section className="section">
        <div className="container section-head"><h2>Doctors at this Hospital</h2></div>
        <div className="container cards-grid doctors-grid">{hospitalDoctors.map((doctor) => <DoctorCard key={doctor.slug} doctor={doctor} />)}</div>
      </section>
      <section className="section section-muted">
        <div className="container contact-grid">
          <div>
            <h2>Contact Info</h2>
            <p><strong>Address:</strong> {hospital.address}</p>
            <p><strong>Phone:</strong> <a href={`tel:${hospital.phone}`}>{hospital.phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${hospital.email}`}>{hospital.email}</a></p>
            <Link className="btn btn-primary" href={`/book-appointment?hospital=${hospital.slug}`}>Book Appointment at This Hospital</Link>
          </div>
          <iframe title={`${hospital.name} map`} src="https://www.openstreetmap.org/export/embed.html?bbox=87.8%2C22.3%2C88.8%2C24.4&layer=mapnik" loading="lazy" />
        </div>
        <div className="container gallery-grid">
          {[1, 2, 3].map((item) => <Image key={item} src={`https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=${720 + item}&q=80`} alt={`${hospital.shortName} gallery ${item}`} width={420} height={260} loading="lazy" />)}
        </div>
      </section>
    </>
  );
}
