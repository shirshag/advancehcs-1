"use client";

import Image from "next/image";
import Link from "next/link";
import { DoctorCard, SpecialityTile } from "@/components/Cards";
import { HospitalsMap } from "@/components/HospitalsMap";
import { SearchFlow } from "@/components/SearchFlow";
import { StatCounters } from "@/components/StatCounters";
import { Testimonials } from "@/components/Testimonials";
import { articles, company, doctors, hospitals, insurancePartners, specialities } from "@/data/site";
import { Icon } from "@/lib/icons";
import { useState } from "react";
import { DoctorResults } from "@/components/DoctorResults";

export default function HomePage() {
  const [results, setResults] = useState<any[]>([]);

  const featuredDoctors = doctors.slice(0, 8);
  return (
    <>
      <section className="hero home-hero">
        <Image
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1800&q=80"
          alt="Hospital care team"
          fill
          priority
          className="hero-bg"
        />

        <div className="hero-overlay" />

        <div className="container hero-content">


          <div className="hero-text">
            <h1 className="fade-up">{company.tagline}</h1>
            <p className="fade-up delay-1">{company.subTagline}</p>
          </div>


          <div className="search-box fade-up delay-2">
            <SearchFlow onSearch={setResults} />
          </div>

          <div className="quick-actions fade-up delay-3">
            {[
              ["Book Appointment", "/book-appointment", "calendar"],
              ["Find a Doctor", "/doctors", "stethoscope"],
              ["Our Hospitals", "/hospitals", "hospital"],
              ["Insurance & TPA", "/insurance-tpa", "activity"]
            ].map(([label, href, icon]) => (
             <Link key={href} href={href} className="quick-btn">
                <Icon name={icon} /> {label}
              </Link>
            ))}
          </div>

        </div>
      </section> 

      <DoctorResults results={results} />
      <StatCounters />

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Centres of Excellence</span>
          <h2>Specialist care across every stage of treatment</h2>
          <Link href="/specialities">View All Specialities -</Link>
        </div>
        <div className="container speciality-grid">
          {specialities.map((speciality) => <SpecialityTile key={speciality.slug} speciality={speciality} />)}
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-head">
          <span className="eyebrow">Find a Doctor</span>
          <h2>Our Team of Experienced Doctors</h2>
          <Link href="/doctors">View All Doctors -</Link>
        </div>
        <div className="container tabs" role="tablist" aria-label="Doctor filters">
          {["All", "Gynaecology", "ENT", "Orthopaedics", "Cardiology"].map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="container cards-grid doctors-grid">
          {featuredDoctors.map((doctor) => <DoctorCard key={doctor.slug} doctor={doctor} />)}
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Our Network</span>
          <h2>Our Hospitals Across West Bengal</h2>
        </div>
        <div className="container hospitals-showcase">
          <HospitalsMap />
          <div className="hospital-summary-list">
            <p className="network-copy">
              Advance HCS operates multi-specialty care points across Nadia, Bankura, Paschim Medinipur, Murshidabad, and Kalyani, bringing hospital access closer to rural and semi-urban families.
            </p>
            {hospitals.map((hospital) => (
              <Link className="hospital-summary-item" href={`/hospitals/${hospital.slug}`} key={hospital.slug}>
                <span>{hospital.district}</span>
                <strong>{hospital.shortName}</strong>
                <small>{hospital.phone}</small>
              </Link>
            ))}
            <Link className="btn btn-primary" href="/hospitals">Explore All Hospitals</Link>
          </div>
        </div>
      </section>

      <section className="section about-strip section-muted">
        <div className="container about-grid">
          <div>
            <span className="eyebrow">About Advance HCS</span>
            <h2>Healthcare Without Boundaries</h2>
            <p>{company.about}</p>
            <div className="highlight-row">
              {["Est. 2010", "Rural West Bengal Focus", "Multi-Specialty", "Digital Dispensaries"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1100&q=80"
            alt="Hospital building exterior"
            width={650}
            height={470}
            loading="lazy"
          />
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Our Patient Speaks</span>
          <h2>Care that feels like family</h2>
          <p>At Glocal Hospital Krishnanagar, we believe every patient deserves to be treated like family, with dignity, clarity, and compassionate support.</p>
        </div>
        <div className="container">
          <Testimonials />
          <div className="video-grid">
            {[1, 2, 3].map((item) => (
              <article key={item} className="video-card">
                <Image src={`https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=${760 + item}&q=80`} alt="Patient video testimonial placeholder" width={500} height={280} loading="lazy" />
                <span>Video Testimonial</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container section-head">
          <span className="eyebrow">Insurance & TPA</span>
          <h2>Accepted Insurance & TPA Partners</h2>
          <Link href="/insurance-tpa">View All Partners -</Link>
        </div>
        <div className="container logo-grid">
          {insurancePartners.slice(0, 8).map((partner) => <span key={partner}>{partner}</span>)}
        </div>
      </section>

      <section className="section">
        <div className="container section-head">
          <span className="eyebrow">Health Tips & News</span>
          <h2>Practical guidance for everyday health</h2>
        </div>
        <div className="container cards-grid article-grid">
          {articles.map((title, index) => (
            <article className="article-card card" key={title}>
              <Image src={`https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=${700 + index}&q=80`} alt={title} width={420} height={260} loading="lazy" />
              <div className="card-body">
                <span className="pill">Health Tips</span>
                <h3>{title}</h3>
                <p>Apr {10 + index}, 2025</p>
                <Link href="#">Read More</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
