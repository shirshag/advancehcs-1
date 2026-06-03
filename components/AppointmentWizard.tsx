"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { company, doctors, hospitals, specialitiesForHospital, getDoctor, getHospital, getSpeciality } from "@/data/site";
import styles from "./AppointmentWizard.module.css";

export function AppointmentWizard() {
  const params = useSearchParams();
  const initialDoctor = params.get("doctor") ?? "";
  const initialDoctorRecord = initialDoctor ? getDoctor(initialDoctor) : undefined;
  const doctorHospital = initialDoctorRecord?.hospitalSlugs[0] ?? "";
  const [step, setStep] = useState(initialDoctorRecord ? 3 : 0);
  const [hospital, setHospital] = useState(params.get("hospital") ?? doctorHospital);
  const [speciality, setSpeciality] = useState(initialDoctorRecord?.speciality ?? "");
  const [doctor, setDoctor] = useState(initialDoctorRecord?.slug ?? "");

  const availableSpecialities = useMemo(() => hospital ? specialitiesForHospital(hospital) : [], [hospital]);
  const availableDoctors = useMemo(() => doctors.filter((item) => {
    const hospitalMatch = hospital ? item.hospitalSlugs.includes(hospital) : false;
    const specialityMatch = speciality ? item.speciality === speciality : true;
    return hospitalMatch && specialityMatch;
  }), [hospital, speciality]);

  const steps = ["Hospital", "Speciality", "Doctor", "Booking Number"];
  const canContinue = [hospital, speciality, doctor, false][step];
  const selectedDoctor = doctor ? getDoctor(doctor) : undefined;
  const selectedHospital = hospital ? getHospital(hospital) : undefined;
  const selectedSpeciality = speciality ? getSpeciality(speciality) : undefined;
  const bookingPhone = selectedHospital?.phone ?? company.phoneDisplay;
  const primaryPhone = bookingPhone.split(/[\/,]/)[0].replace(/[^\d+]/g, "");

  return (
    <div className={styles.wizard}>
      <div className={styles.wizardHeader}>
        <div>
          <span>Appointment Booking</span>
          <h2>{selectedDoctor ? `Call to book with ${selectedDoctor.name}` : "Choose your care team"}</h2>
          <p>{selectedDoctor ? "Your doctor is selected. Please call the booking desk to confirm availability and appointment timing." : "Select a hospital, speciality, and doctor to see the right booking number."}</p>
        </div>
        <div className={styles.currentStep}>
          <strong>{step + 1}</strong>
          <span>of {steps.length}</span>
        </div>
      </div>

      {(selectedDoctor || selectedHospital || selectedSpeciality) ? (
        <div className={styles.selectionSummary} aria-label="Selected appointment details">
          <div>
            <span>Hospital</span>
            <strong>{selectedHospital?.shortName ?? "Select hospital"}</strong>
          </div>
          <div>
            <span>Speciality</span>
            <strong>{selectedSpeciality?.name ?? "Select speciality"}</strong>
          </div>
          <div>
            <span>Doctor</span>
            <strong>{selectedDoctor?.name ?? "Select doctor"}</strong>
          </div>
        </div>
      ) : null}

      <div className={styles.wizardProgress} aria-label="Appointment booking progress">
        {steps.map((label, index) => (
          <button key={label} type="button" className={index <= step ? styles.active : ""} onClick={() => index < step && setStep(index)}>
            <span>{index + 1}</span>{label}
          </button>
        ))}
      </div>

      {step === 0 && (
        <div className={styles.pickerGrid}>
          {hospitals.map((item) => (
            <button key={item.slug} type="button" className={hospital === item.slug ? `${styles.pickerCard} ${styles.selected}` : styles.pickerCard} onClick={() => { setHospital(item.slug); setSpeciality(""); setDoctor(""); }}>
              <strong>{item.shortName}</strong>
              <span>{item.location}</span>
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className={styles.pickerGrid}>
          {availableSpecialities.map((item) => (
            <button key={item.slug} type="button" className={speciality === item.slug ? `${styles.pickerCard} ${styles.selected}` : styles.pickerCard} onClick={() => { setSpeciality(item.slug); setDoctor(""); }}>
              <strong>{item.name}</strong>
              <span>{item.description}</span>
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className={styles.pickerGrid}>
          {availableDoctors.map((item) => (
            <button key={item.slug} type="button" className={doctor === item.slug ? `${styles.pickerCard} ${styles.selected}` : styles.pickerCard} onClick={() => { setDoctor(item.slug); setStep(3); }}>
              <strong>{item.name}</strong>
              <span>{item.designation}</span>
              <small>{item.qualifications[0] ?? "Qualification details not available"}</small>
            </button>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className={styles.bookingNumberPanel}>
          <div>
            <span>Booking Number</span>
            <h2>{bookingPhone}</h2>
            <p>
              Call this number to book an appointment with <strong>{selectedDoctor?.name}</strong>
              {selectedHospital ? ` at ${selectedHospital.shortName}` : ""}.
            </p>
          </div>
          <div className={styles.bookingActions}>
            <a className="btn btn-primary" href={`tel:${primaryPhone}`}>Call Now</a>
            <a className="btn btn-outline" href={`https://wa.me/${primaryPhone.replace(/[^\d]/g, "")}?text=I%20want%20to%20book%20an%20appointment%20with%20${encodeURIComponent(selectedDoctor?.name ?? "a doctor")}`}>WhatsApp</a>
          </div>
        </div>
      )}

      <div className={styles.wizardActions}>
        <button className="btn btn-outline" type="button" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</button>
        {step < 3 ? (
          <button className="btn btn-primary" type="button" disabled={!canContinue} onClick={() => setStep(step + 1)}>Continue</button>
        ) : null}
      </div>
    </div>
  );
}
