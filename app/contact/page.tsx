import type { Metadata } from "next";
import { company, hospitals } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Advance HCS corporate desk and all five hospitals."
};

export default function ContactPage() {
  return (
    <>
      <section className="page-banner"><div className="container"><span>Home / Contact Us</span><h1>Contact Us</h1></div></section>
      <section className="section">
        <div className="container cards-grid hospital-list">
          {hospitals.map((hospital) => (
            <article className="contact-card card" key={hospital.slug}>
              <div className="card-body">
                <h2>{hospital.name}</h2>
                <p>{hospital.address}</p>
                <p><strong>Phone:</strong> <a href={`tel:${hospital.phone}`}>{hospital.phone}</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${hospital.email}`}>{hospital.email}</a></p>
                <iframe title={`${hospital.shortName} map`} src="https://www.openstreetmap.org/export/embed.html?bbox=87.8%2C22.3%2C88.8%2C24.4&layer=mapnik" loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-muted">
        <div className="container contact-grid">
          <div>
            <h2>Corporate Contact</h2>
            <p><strong>Phone:</strong> <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${company.email}`}>{company.email}</a></p>
            <a className="btn btn-primary" href={company.whatsapp}>WhatsApp</a>
          </div>
          <form className="contact-form">
            <h2>Send a Message</h2>
            <input placeholder="Name" aria-label="Name" />
            <input placeholder="Email" aria-label="Email" />
            <input placeholder="Phone" aria-label="Phone" />
            <input placeholder="Subject" aria-label="Subject" />
            <select aria-label="Hospital">
              {hospitals.map((hospital) => <option key={hospital.slug}>{hospital.shortName}</option>)}
            </select>
            <textarea placeholder="Message" aria-label="Message" rows={5} />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      </section>
    </>
  );
}
