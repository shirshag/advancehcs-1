import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDoctor, getHospital, getSpeciality, doctors } from "@/data/site";

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  return { title: doctor?.name ?? "Doctor", description: doctor?.designation };
}

export default async function DoctorProfilePage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const doctor = getDoctor(slug);
  if (!doctor) notFound();
  const speciality = getSpeciality(doctor.speciality);
  const jsonLd = { "@context": "https://schema.org", "@type": "Physician", name: doctor.name, medicalSpecialty: speciality?.name, worksFor: doctor.hospitalSlugs.map((slug) => getHospital(slug)?.name).filter(Boolean) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="page-banner"><div className="container"><span>Home / Doctors / {doctor.name}</span><h1>{doctor.name}</h1></div></section>
      <section className="section">
        <div className="container doctor-profile">
          <aside className="profile-panel">
            <Image src={doctor.image} alt={`${doctor.name} profile photo`} width={440} height={520} priority />
            <h2>{doctor.name}</h2>
            <p>{doctor.designation}</p>
            <span className="pill">{doctor.experience} years experience</span>
            <div className="tag-list">{doctor.hospitalSlugs.map((slug) => <span key={slug}>{getHospital(slug)?.shortName}</span>)}</div>
            <p><strong>Languages:</strong> {doctor.languages.join(", ")}</p>
            <Link className="btn btn-primary" href={`/book-appointment?doctor=${doctor.slug}`}>Book Appointment</Link>
          </aside>
          <div className="profile-main">
            <h2>About</h2>
            <p>{doctor.name} provides patient-centered {speciality?.name.toLowerCase()} care with an emphasis on clear diagnosis, ethical treatment, and follow-up guidance for families across West Bengal.</p>
            <h2>Qualifications</h2>
            <ul>{doctor.qualifications.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>Specialisation Areas</h2>
            <div className="tag-list">{doctor.specialisationAreas.map((item) => <span key={item}>{item}</span>)}</div>
            <h2>Conditions Treated</h2>
            <ul>{doctor.conditions.map((item) => <li key={item}>{item}</li>)}</ul>
            <h2>Available at</h2>
            <p>{doctor.hospitalSlugs.map((slug) => getHospital(slug)?.name).join(", ")}</p>
            <h2>Working Days & Hours</h2>
            <p>Mon-Sat, 10:00 AM-2:00 PM</p>
            <h2>Patient Reviews</h2>
            <div className="review-grid">
              {["Clear consultation and patient explanation.", "Very helpful during follow-up.", "The appointment team coordinated smoothly."].map((review) => (
                <article key={review} className="review-card"><strong>★★★★★</strong><p>{review}</p></article>
              ))}
            </div>
          </div>
        </div>
        <Link className="mobile-book-cta" href={`/book-appointment?doctor=${doctor.slug}`}>Book Appointment</Link>
      </section>
    </>
  );
}
