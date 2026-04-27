import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Management Board",
  description: "Leadership team of Advance HCS Pvt. Ltd."
};

const leaders = [
  ["Arindam Mukherjee", "Managing Director"],
  ["Sutapa Sen", "Chief Operating Officer"],
  ["Rajesh Agarwal", "Director - Hospital Operations"],
  ["Madhurima Dey", "Chief Nursing Advisor"],
  ["Kaushik Basu", "Director - Finance"],
  ["Nasreen Khan", "Head - Patient Experience"],
  ["Debashis Roy", "Head - Digital Health"],
  ["Priya Chatterjee", "Head - Academics"]
];

export default function ManagementBoardPage() {
  return (
    <>
      <section className="page-banner"><div className="container"><span>Home / Management Board</span><h1>Leadership Team</h1></div></section>
      <section className="section">
        <div className="container cards-grid leader-grid">
          {leaders.map(([name, role], index) => (
            <article className="leader-card card" key={name}>
              <Image src={`https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=${500 + index}&q=80`} alt={`${name}, ${role}`} width={420} height={420} loading="lazy" />
              <div className="card-body">
                <h2>{name}</h2>
                <p>{role}</p>
                <p>Leads patient-first operations, governance, and service quality across the Advance HCS network.</p>
              </div>
            </article>
          ))}
        </div>
        <div className="container centered-cta">
          <h2>Join Our Team</h2>
          <p>Work with a healthcare network committed to access, quality, and rural service.</p>
          <Link className="btn btn-primary" href="#">Careers</Link>
        </div>
      </section>
    </>
  );
}
