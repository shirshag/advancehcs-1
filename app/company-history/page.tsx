import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutUs.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Advance HCS Pvt. Ltd., its mission, vision, quality policy, and guiding principles."
};

const aboutParagraphs = [
  "Advance HCS Pvt. Ltd. is a leading healthcare organization committed to operating and managing multiple hospitals across West Bengal. Our institutions proudly hold the distinction of being among the first superspeciality hospitals in regions such as Krishnanagar, Paschim Medinipur, Berhampore, Mohanpur, and Sonamukhi, bringing advanced medical care closer to underserved communities.",
  "At Glocal (AHCS), we stand united with an unwavering commitment to our shared vision of transforming healthcare delivery. Our mission is clear: to provide high-quality, accessible, and affordable healthcare services to all.",
  "We believe in healing with compassion, where cutting-edge medical technology meets a deeply human touch. Our approach ensures that every patient receives not only the best clinical care but also empathy, dignity, and respect.",
  "Together, we continue to build a future where healthcare knows no boundaries. We envision our hospitals as sanctuaries of hope, where wellness is not a privilege, but a fundamental right for every individual."
];

const principles = [
  {
    title: "Our Mission",
    text: "Our mission is to continuously enhance the quality across the entire spectrum of hospital services, striving to become one of the most trusted and reputed healthcare providers in the country. We are dedicated to excellence in patient care, clinical outcomes, and service delivery."
  },
  {
    title: "Our Vision",
    text: "To deliver world-class tertiary healthcare services that are accessible and affordable, ensuring that advanced medical treatment reaches every section of society without compromise."
  },
  {
    title: "Our Quality Policy",
    text: "At Glocal (AHCS), we are committed to delivering professional and patient-centric healthcare services by continuously improving our quality management systems. Through innovation, adherence to best practices, and a culture of excellence, we aim to consistently elevate the standards of care and patient satisfaction."
  }
];

const networkHighlights = ["Krishnanagar", "Paschim Medinipur", "Berhampore", "Mohanpur", "Sonamukhi"];

export default function CompanyHistoryPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </nav>
            <span className={styles.eyebrow}>Advance HCS Pvt. Ltd.</span>
            <h1>Healthcare that reaches beyond city limits</h1>
            <p>
              A West Bengal healthcare network built around advanced medical care, affordability, and human dignity.
            </p>
          </div>

          <div className={styles.heroImage}>
            <Image src="/interior-view-operating-room.jpg" alt="Modern hospital operating room" width={720} height={560} priority />
            <div className={styles.imageNote}>
              <strong>5 care regions</strong>
              <span>Superspeciality care closer to underserved communities.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.promiseStrip}>
        <div className={`container ${styles.promiseInner}`}>
          <span>Our Promise</span>
          <p>No one should be denied the right to quality healthcare due to financial constraints.</p>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={`container ${styles.storyGrid}`}>
          <aside className={styles.storyAside}>
            <span className={styles.eyebrow}>Where We Serve</span>
            <h2>Care points across West Bengal</h2>
            <div className={styles.locationList}>
              {networkHighlights.map((location) => <span key={location}>{location}</span>)}
            </div>
          </aside>

          <article className={styles.storyCard}>
            <span className={styles.eyebrow}>About Us</span>
            <h2>Compassionate care, clinical excellence, and practical access</h2>
            {aboutParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Guiding Principles</span>
            <h2>Mission, vision, and quality policy</h2>
          </div>
          <div className={styles.principlesGrid}>
            {principles.map((item) => (
              <article className={styles.principleCard} key={item.title}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
