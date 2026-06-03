import type { Metadata } from "next";
import Image from "next/image";
import styles from "./ManagementBoard.module.css";

export const metadata: Metadata = {
  title: "Managing Director Speech",
  description: "Message from Md. Iftekeruddin, Managing Director cum Founder of Advance HCS Pvt. Ltd."
};

const speechParagraphs = [
  "First of all, I would like to thank every doctor, nurse, technician, management staff, and support member who continuously work with dedication for better patient care and healthcare service development.",
  "Healthcare is not only a profession; it is a responsibility toward humanity. A hospital runs successfully not because of infrastructure alone, but because of teamwork, discipline, compassion, and commitment toward patients.",
  "Our vision is very clear: to build a healthcare system where patients receive affordable, ethical, and quality treatment with dignity and respect. We are continuously trying to improve our clinical services, emergency management, nursing standards, diagnostics, patient communication, and overall hospital administration.",
  "I strongly believe that every member of the organization has equal importance. From housekeeping staff to senior consultants, everyone contributes to patient recovery and hospital growth. Therefore, professionalism, discipline, mutual respect, and accountability must always remain our core values.",
  "In today's healthcare environment, patients expect not only treatment but also trust, behavior, transparency, and emotional support. We must remember that patient satisfaction starts from our attitude and responsibility.",
  "I also want to encourage all departments to focus on continuous learning, skill development, and proper coordination. Growth comes only when we work together with honesty and dedication.",
  "Our goal is not just to run a hospital; our goal is to create a trusted healthcare institution for the people of our community.",
  "Thank you everyone for your hard work, support, and commitment.",
  "Let us move forward together with discipline, unity, and excellence in patient care."
];

const values = ["Affordable care", "Ethical treatment", "Patient dignity", "Team accountability"];

export default function ManagementBoardPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.copy}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <span>Home</span>
              <span>/</span>
              <span>Managing Director Speech</span>
            </nav>
            <span className={styles.eyebrow}>Founder Message</span>
            <h1>Managing Director Speech</h1>
            <p>
              A message from Md. Iftekeruddin on discipline, unity, ethical healthcare, and excellence in patient care.
            </p>
            <div className={styles.signatureBlock}>
              <strong>Md. Iftekeruddin</strong>
              <span>Managing Director cum Founder</span>
              <small>B.Sc in Radiology & Imaging Technology, MBA in Hospital Administration</small>
            </div>
          </div>

          <aside className={styles.portraitCard} aria-label="Managing Director profile">
            <Image src="/md1.jpeg" alt="Md. Iftekeruddin, Managing Director cum Founder" width={520} height={620} priority />
            <div>
              <span>Advance HCS Pvt. Ltd.</span>
              <strong>Leadership rooted in service</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={`container ${styles.valuesGrid}`}>
          {values.map((value) => (
            <article key={value}>
              <span>{value}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.messageSection}>
        <div className={`container ${styles.messageGrid}`}>
          <aside className={styles.quotePanel}>
            <span className={styles.eyebrow}>Core Thought</span>
            <blockquote>
              Healthcare is not only a profession; it is a responsibility toward humanity.
            </blockquote>
          </aside>

          <article className={styles.speechCard}>
            <span className={styles.eyebrow}>Message</span>
            <h2>Discipline, unity, and excellence in patient care</h2>
            <p className={styles.opening}>I am Md. Iftekeruddin, Managing Director cum Founder of Advance HCS Pvt. Ltd.</p>
            {speechParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className={styles.thankYou}>
              <strong>Thank You.</strong>
              <span>Let us continue to move forward together with compassion, accountability, and commitment to every patient we serve.</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
