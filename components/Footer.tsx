import Link from "next/link";
import { company, hospitals } from "@/data/site";

const quickLinks = [
  ["Our Hospitals", "/hospitals"],
  ["Specialities", "/specialities"],
  ["Find a Doctor", "/doctors"],
  ["About Us", "/company-history"],
  ["MD Speech", "/management-board"],
  ["Academics", "/academics"],
  ["Insurance & TPA", "/insurance-tpa"],
  ["Book Appointment", "/book-appointment"],
  ["Contact Us", "/contact"]
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link className="brand footer-brand" href="/">
            <img src="/logo.jpg" alt="Advance HCS Pvt. Ltd. logo" />
            <span>
              <strong>{company.name}</strong>
              <small>{company.tagline}</small>
            </span>
          </Link>
          <p>West Bengal hospital network focused on accessible, affordable, and compassionate care across rural and semi-urban communities.</p>
          <div className="footer-contact-list">
            <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={company.whatsapp}>WhatsApp Support</a>
          </div>
        </div>
        <nav aria-label="Footer quick links">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer hospital links">
          <h2>Our Hospitals</h2>
          <ul>
            {hospitals.map((hospital) => (
              <li key={hospital.slug}>
                <Link href={`/hospitals/${hospital.slug}`}>{hospital.shortName}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="footer-contact-card">
          <h2>Send an Enquiry</h2>
          <p>Share your details and our coordination team will help you connect with the right hospital.</p>
          <form className="footer-form">
            <label>
              Name
              <input name="name" type="text" autoComplete="name" />
            </label>
            <label>
              Phone
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              Message
              <textarea name="message" rows={3} />
            </label>
            <button className="btn btn-primary" type="submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>{company.copyright}</span>
          <span>
            <Link href="/contact">Contact</Link> | <Link href="/book-appointment">Book Appointment</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
