"use client";
import styles from "./DoctorResults.module.css";

type Doctor = {
    slug: string;
    name: string;
    designation: string;
    experience?: number;
    image: string;
    hospitalSlugs: string[];
    speciality: string;
    qualifications: string[];
};

export function DoctorResults({ results }: { results: Doctor[] }) {
    if (!results || results.length === 0) return null;

    const isSingle = results.length === 1;

    return (
        <section className={styles.searchResults}>
            <div className="container">







                <div className={`${styles.grid} ${isSingle ? styles.single : ""}`}>
                    {results.map((item: Doctor) => (
                        <div key={item.slug} className={styles.cardWrapper}>
                            <div className={styles.doctorCard}>

                                <div className={styles.cardInner}>

                                    <div className={styles.imageWrap}>
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className={styles.content}>
                                        <h5>{item.name}</h5>
                                        <p className={styles.designation}>{item.designation}</p>
                                        <p className={styles.designation}>{item.qualifications[0] ?? "Qualification details not available"}</p>

                                        <div className={styles.meta}>
                                            {item.experience ? (
                                                <span className={styles.exp}>
                                                    {item.experience}+ yrs experience
                                                </span>
                                            ) : null}
                                            <span className={styles.speciality}>
                                                {item.speciality}
                                            </span>
                                        </div>

                                        <div className={styles.tags}>
                                            {item.hospitalSlugs.map((slug: string) => (
                                                <span key={slug}>{slug}</span>
                                            ))}
                                        </div>

                                        <div className={styles.actions}>
                                            <a className="btn btn-outline-primary" href={`/doctors/${item.slug}`}>
                                                View Profile
                                            </a>

                                            <a className="btn btn-primary" href={`/book-appointment?doctor=${item.slug}`}>
                                                Book Appointment
                                            </a>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
