const testimonials = [
  ["Madhumita S.", "Glocal Hospital Krishnanagar", "The nursing team explained each step clearly and treated my mother with warmth during recovery."],
  ["Ratan B.", "AAHIL HOSPITEX", "Emergency care started quickly, and the doctor coordinated tests without delay."],
  ["Soma P.", "Octave Healthcare Kalyani", "The appointment process was simple and the gynaecology team made us feel comfortable."],
  ["Arup M.", "Glocal Sonamukhi", "Affordable treatment close to home made a major difference for our family."]
];

export function Testimonials() {
  return (
    <div className="testimonial-carousel" aria-label="Patient testimonials">
      {testimonials.map(([name, hospital, quote]) => (
        <article className="testimonial-card" key={name}>
          <div className="stars" aria-label="Five star rating">★★★★★</div>
          <p>“{quote}”</p>
          <strong>{name}</strong>
          <span>{hospital}</span>
        </article>
      ))}
    </div>
  );
}
