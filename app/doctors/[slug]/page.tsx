import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors, getDoctor, getHospital, getSpeciality } from "@/data/site";
import { Icon } from "@/lib/icons";
import styles from "./DoctorProfile.module.css";

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
  const hospitals = doctor.hospitalSlugs.map((hospitalSlug) => getHospital(hospitalSlug)).filter(Boolean);
  const relatedDoctors = doctors
    .filter((item) => item.slug !== doctor.slug && item.speciality === doctor.speciality)
    .slice(0, 3);
  const qualification = doctor.qualifications[0] ?? "Qualification details are not available";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: speciality?.name,
    worksFor: hospitals.map((hospital) => hospital?.name)
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/doctors">Doctors</Link>
            <span>/</span>
            <span aria-current="page">{doctor.name}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.portraitFrame}>
              <Image
                src={doctor.image}
                alt={`${doctor.name} profile photo`}
                width={520}
                height={600}
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 1024px) 42vw, 420px"
              />
              <div className={styles.portraitCaption}>
                <Icon name="hospital" />
                <span>Consulting at {hospitals[0]?.shortName ?? "Advance HCS"}</span>
              </div>
            </div>

            <div className={styles.heroCopy}>
              <span className={styles.specialityLabel}>{speciality?.name ?? doctor.designation}</span>
              <h1>{doctor.name}</h1>
              <p className={styles.designation}>{doctor.designation}</p>
              <p className={styles.qualification}>{qualification}</p>

              <div className={styles.factRow} aria-label="Doctor information">
                <div>
                  <Icon name="stethoscope" />
                  <span>Speciality</span>
                  <strong>{speciality?.name ?? doctor.designation}</strong>
                </div>
                <div>
                  <Icon name="hospital" />
                  <span>Hospital</span>
                  <strong>{hospitals[0]?.shortName ?? "Advance HCS"}</strong>
                </div>
                {doctor.experience ? (
                  <div>
                    <Icon name="activity" />
                    <span>Experience</span>
                    <strong>{doctor.experience} years</strong>
                  </div>
                ) : null}
                {doctor.availability ? (
                  <div>
                    <Icon name="calendar" />
                    <span>Availability</span>
                    <strong>{doctor.availability}</strong>
                  </div>
                ) : null}
              </div>

              <div className={styles.heroActions}>
                <Link className={`btn btn-primary ${styles.primaryAction}`} href={`/book-appointment?doctor=${doctor.slug}`}>
                  <Icon name="calendar" />
                  Book Appointment
                </Link>
                <Link className={`btn btn-outline ${styles.secondaryAction}`} href="/doctors">
                  <Icon name="arrow" />
                  Find Another Doctor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={`container ${styles.contentGrid}`}>
          <article className={styles.mainContent}>
            <section className={styles.contentBlock}>
              <span className={styles.sectionLabel}>Doctor Profile</span>
              <h2>About {doctor.name}</h2>
              <p>
                {doctor.name} provides patient-centered {speciality?.name.toLowerCase() ?? "medical"} care with an
                emphasis on clear diagnosis, ethical treatment, and thoughtful follow-up guidance.
              </p>
            </section>

            <section className={styles.contentBlock}>
              <span className={styles.sectionLabel}>Credentials</span>
              <h2>Qualifications</h2>
              {doctor.qualifications.length ? (
                <ul className={styles.credentialList}>
                  {doctor.qualifications.map((item) => (
                    <li key={item}>
                      <Icon name="stethoscope" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Qualification details are not available.</p>
              )}
            </section>

            <section className={styles.contentBlock}>
              <span className={styles.sectionLabel}>Clinical Focus</span>
              <h2>Specialisation Areas</h2>
              <div className={styles.focusTags}>
                {doctor.specialisationAreas.map((item) => <span key={item}>{item}</span>)}
              </div>
              {doctor.conditions.length ? (
                <>
                  <h3>Conditions Treated</h3>
                  <ul className={styles.conditionList}>
                    {doctor.conditions.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </>
              ) : null}
            </section>
          </article>

          <aside className={styles.sidebar} aria-label="Appointment and hospital information">
            <div className={styles.bookingCard}>
              <span className={styles.sectionLabel}>Appointments</span>
              <h2>Plan your consultation</h2>
              <p>
                {doctor.availability
                  ? `Listed availability: ${doctor.availability}. Confirm the exact date and time through the appointment booking flow.`
                  : "Select a suitable date and time through the appointment booking flow."}
              </p>
              <Link className={`btn btn-primary ${styles.cardButton}`} href={`/book-appointment?doctor=${doctor.slug}`}>
                <Icon name="calendar" />
                Book Appointment
              </Link>
            </div>

            <div className={styles.hospitalCard}>
              <span className={styles.sectionLabel}>Available At</span>
              {hospitals.map((hospital) => hospital ? (
                <div className={styles.hospitalEntry} key={hospital.slug}>
                  <div className={styles.hospitalIcon}><Icon name="hospital" /></div>
                  <div>
                    <h3>{hospital.shortName}</h3>
                    <p>{hospital.location}</p>
                    <a href={`tel:${hospital.phone}`}><Icon name="phone" />{hospital.phone}</a>
                    <Link href={`/hospitals/${hospital.slug}`}>View hospital details <Icon name="arrow" /></Link>
                  </div>
                </div>
              ) : null)}
            </div>
          </aside>
        </div>
      </section>

      {relatedDoctors.length ? (
        <section className={styles.relatedSection}>
          <div className="container">
            <div className={styles.relatedHeading}>
              <div>
                <span className={styles.sectionLabel}>Care Team</span>
                <h2>More doctors in {speciality?.name}</h2>
              </div>
              <Link href={`/doctors?speciality=${doctor.speciality}`}>View all doctors <Icon name="arrow" /></Link>
            </div>
            <div className={styles.relatedGrid}>
              {relatedDoctors.map((item) => (
                <Link className={styles.relatedCard} href={`/doctors/${item.slug}`} key={item.slug}>
                  <Image src={item.image} alt={`${item.name} profile photo`} width={160} height={160} loading="lazy" />
                  <div>
                    <span>{speciality?.name}</span>
                    <h3>{item.name}</h3>
                    <p>{item.designation}</p>
                    <strong>View Profile <Icon name="arrow" /></strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Link className={styles.mobileBookCta} href={`/book-appointment?doctor=${doctor.slug}`}>
        <Icon name="calendar" />
        Book Appointment
      </Link>
    </>
  );
}
