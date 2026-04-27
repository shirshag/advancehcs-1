import Image from "next/image";
import Link from "next/link";
import { Doctor, getHospital, getSpeciality, Hospital, Speciality } from "@/data/site";
import { Icon } from "@/lib/icons";

export function SpecialityTile({ speciality }: { speciality: Speciality }) {
  return (
    <Link className="speciality-tile" href={`/specialities/${speciality.slug}`} title={speciality.description}>
      <span className="icon-wrap"><Icon name={speciality.icon} /></span>
      <strong>{speciality.name}</strong>
      <small>{speciality.description}</small>
    </Link>
  );
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  const speciality = getSpeciality(doctor.speciality);
  const hospital = getHospital(doctor.hospitalSlugs[0]);
  return (
    <article className="doctor-card card">
      <Image src={doctor.image} alt={`${doctor.name}, ${doctor.designation}`} width={420} height={360} loading="lazy" />
      <div className="card-body">
        <span className="pill">{speciality?.name}</span>
        <h3>{doctor.name}</h3>
        <p>{doctor.designation}</p>
        <p className="muted">{hospital?.shortName} - {doctor.experience} years</p>
        <div className="button-row">
          <Link className="btn btn-outline" href={`/doctors/${doctor.slug}`}>View Profile</Link>
          <Link className="btn btn-primary" href={`/book-appointment?doctor=${doctor.slug}`}>Book Appointment</Link>
        </div>
      </div>
    </article>
  );
}

export function HospitalCard({ hospital }: { hospital: Hospital }) {
  return (
    <article className="hospital-card card" id={hospital.slug}>
      <Image src={hospital.image} alt={`${hospital.name} building`} width={620} height={380} loading="lazy" />
      <div className="card-body">
        <span className="pill">{hospital.type}</span>
        <h3>{hospital.name}</h3>
        <p>{hospital.location} - {hospital.district}</p>
        <p><strong>Email:</strong> <a href={`mailto:${hospital.email}`}>{hospital.email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${hospital.phone}`}>{hospital.phone}</a></p>
        <div className="tag-list">
          {hospital.specialities.slice(0, 5).map((slug) => (
            <span key={slug}>{getSpeciality(slug)?.name}</span>
          ))}
        </div>
        <div className="button-row">
          <Link className="btn btn-outline" href={`/hospitals/${hospital.slug}`}>View Details</Link>
          <Link className="btn btn-primary" href={`/book-appointment?hospital=${hospital.slug}`}>Book Here</Link>
        </div>
      </div>
    </article>
  );
}
