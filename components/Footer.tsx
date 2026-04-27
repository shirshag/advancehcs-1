import Link from "next/link";
import { company, hospitals } from "@/data/site";

const quickLinks = [
  ["Our Hospitals", "/hospitals"],
  ["Specialities", "/specialities"],
  ["Find a Doctor", "/doctors"],
  ["Company History", "/company-history"],
  ["Management Board", "/management-board"],
  ["Academics", "/academics"],
  ["Insurance & TPA", "/insurance-tpa"],
  ["Book Appointment", "/book-appointment"],
  ["Contact Us", "/contact"]
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <img src="../logo.jpg" alt="" />
            <span>
              <strong>{company.name}</strong>
              <small>{company.tagline}</small>
            </span>
          </Link>
          <p>{company.subTagline}</p>
          <p>West Bengal hospital network focused on rural and semi-urban care.</p>
          <p>
            <a href={`tel:${company.phone}`}>{company.phoneDisplay}</a>
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <div className="social-row" aria-label="Social links">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="X">X</a>
          </div>
          <div className="badge-row">
            <span>Google Play</span>
            <span>App Store</span>
          </div>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Our Hospitals</h2>
          <ul>
            {hospitals.map((hospital) => (
              <li key={hospital.slug}>
                <Link href={`/hospitals/${hospital.slug}`}>{hospital.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact Form</h2>
          <form className="footer-form">
            <label>
              Name
              <input aria-label="Name" type="text" />
            </label>
            <label>
              Email
              <input aria-label="Email" type="email" />
            </label>
            <label>
              Message
              <textarea aria-label="Message" rows={3} />
            </label>
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>{company.copyright}</span>
          <span>
            <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Use</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
