import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeeSection from "./FeeSection";
import styles from "./Academics.module.css";

export const metadata: Metadata = {
  title: "Academics Department",
  description: "Medical education, nursing education, and healthcare management training programs."
};

const hospitals = [
  {
    name: "Glocal Hospital - Krishnanagar",
    image: "/aca-mm1.jpg"
  },
  {
    name: "Glocal Hospital - Medinipur (Paschim)",
    image: "/aca-mm.jpg"
  }
];

const courses = [
  {
    title: "2 Year MBA",
    desc: "A management program designed for leadership, operational decision-making, and healthcare business readiness."
  },
  {
    title: "5 Year Integrated BBA-MBA",
    desc: "A long-format pathway for students who want early management grounding with advanced leadership progression."
  },
  {
    title: "4 Year BBA (Hons)",
    desc: "An undergraduate program focused on critical thinking, communication, and practical management exposure."
  },
  {
    title: "1 Year PG Diploma in Management",
    desc: "A focused program for graduates and professionals who want applied management capability."
  },
  {
    title: "1 Year PG Diploma in Nursing Administration",
    desc: "Focused on leadership, supervision, and administration in healthcare and nursing environments."
  },
  {
    title: "1 Year PG Diploma in Operation Management",
    desc: "Develop expertise in operations, logistics, workflow planning, and process optimization."
  },
  {
    title: "1 Year PG Diploma in Quality Management",
    desc: "Learn quality standards, audits, continuous improvement, and service excellence frameworks."
  }
];

const specializations = ["Finance", "Analytics", "Marketing", "Healthcare & Hospital", "Public Health", "Retail & Logistics"];

const chooseUs = [
  {
    title: "Professional Development",
    text: "Career growth with managerial skills including leadership, teamwork, negotiation, entrepreneurial ability, global credentials, and strong earning potential."
  },
  {
    title: "Personal Development",
    text: "Personality development, confidence building, communication, soft skills, domain knowledge, and real-world operational exposure."
  }
];

export default function AcademicsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Academics</span>
            </nav>
            <span className={styles.eyebrow}>HCS Paramedicial & Management Institute</span>
            <h1>Build leadership for the future of healthcare.</h1>
            <p>
              Academic and management programs designed around hospital operations, healthcare quality, and emerging technology.
            </p>
            <div className={styles.heroActions}>
              <Link className="btn btn-primary" href="#courses">Explore Courses</Link>
              <Link className="btn btn-outline" href="#fees">View Fee Structure</Link>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <Image src="/interior-view-operating-room.jpg" alt="Modern healthcare training environment" width={720} height={560} priority />
            <div className={styles.contactPanel}>
              <span>Admissions Contact</span>
              <strong>6294441651</strong>
              <strong>7003872294</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.hospitalsSection}>
        <div className={`container ${styles.hospitalGrid}`}>
          {hospitals.map((hospital) => (
            <article className={styles.hospitalCard} key={hospital.name}>
              <Image src={hospital.image} alt={hospital.name} width={560} height={320} />
              <div>
                <span>Academic Hospital</span>
                <h2>{hospital.name}</h2>
                <p>Premium healthcare facility supporting practical exposure and institutional learning.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.focusSection}>
        <div className={`container ${styles.focusGrid}`}>
          <aside className={styles.focusIntro}>
            <span className={styles.eyebrow}>Our Focus</span>
            <h2>Leadership education shaped by healthcare realities.</h2>
            <p>
              Emerging technologies are fast gaining prominence in healthcare, environment, and sustainable living. These fields are woven into higher education to enhance employability for young professionals.
            </p>
          </aside>

          <div className={styles.focusContent}>
            <p>
              HCS PARAMEDICIAL & MANAGEMENT INSTITUTE is introducing futuristic technologies such as Artificial Intelligence, Data Science, Machine Learning, IoT, Blockchain, Robotics, Simulation, 3D Printing, Nanotechnology, and Neuroscience.
            </p>
            <div className={styles.chooseGrid}>
              {chooseUs.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.directorSection}>
        <div className={`container ${styles.directorCard}`}>
          <Image src="/md1.jpeg" alt="Md. Iftekeruddin" width={440} height={440} />
          <div>
            <span className={styles.eyebrow}>Director Message</span>
            <h2>Md. Iftekeruddin</h2>
            <p className={styles.role}>Director</p>
            <p>
              Md. Iftekeruddin is a renowned entrepreneur and expert in healthcare management and radiodiagnostics, with over 18 years of experience across industry, research, business, and academia.
            </p>
            <p>
              He currently operates multispecialty hospitals across West Bengal, with a dedicated team of professionals, and actively contributes to the planning and operation of pharmacy chains and polyclinics across the state.
            </p>
            <blockquote>
              The secret of freedom is courage. HPMI is a place to build that courage, face new challenges, follow your passion, and stay hungry for life.
            </blockquote>
          </div>
        </div>
      </section>

      <section id="courses" className={styles.coursesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Our Courses</span>
            <h2>Programs for healthcare and management careers</h2>
          </div>
          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <article className={styles.courseCard} key={course.title}>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.specializationSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Specialization Areas</span>
            <h2>Career pathways with practical relevance</h2>
          </div>
          <div className={styles.specializationGrid}>
            {specializations.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <div id="fees">
        <FeeSection />
      </div>
    </>
  );
}
