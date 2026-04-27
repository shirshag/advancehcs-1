"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { doctors, hospitals, specialitiesForHospital, getDoctor, getHospital, getSpeciality } from "@/data/site";

const slots = ["9:00 AM", "10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "5:00 PM"];

export function AppointmentWizard() {
  const params = useSearchParams();
  const initialDoctor = params.get("doctor") ?? "";
  const doctorHospital = initialDoctor ? getDoctor(initialDoctor)?.hospitalSlugs[0] ?? "" : "";
  const [step, setStep] = useState(0);
  const [hospital, setHospital] = useState(params.get("hospital") ?? doctorHospital);
  const [speciality, setSpeciality] = useState(initialDoctor ? getDoctor(initialDoctor)?.speciality ?? "" : "");
  const [doctor, setDoctor] = useState(initialDoctor);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [details, setDetails] = useState({ name: "", age: "", gender: "Female", phone: "", email: "", reason: "", patientType: "New", tpa: "No" });

  const availableSpecialities = useMemo(() => hospital ? specialitiesForHospital(hospital) : [], [hospital]);
  const availableDoctors = useMemo(() => doctors.filter((item) => {
    const hospitalMatch = hospital ? item.hospitalSlugs.includes(hospital) : false;
    const specialityMatch = speciality ? item.speciality === speciality : true;
    return hospitalMatch && specialityMatch;
  }), [hospital, speciality]);

  const steps = ["Hospital", "Speciality", "Doctor", "Date & Time", "Patient Details", "Confirmation"];
  const canContinue = [hospital, speciality, doctor, date && slot, details.name && details.phone, true][step];

  if (confirmed) {
    const appointmentId = `AHCS-${Date.now().toString().slice(-6)}`;
    return (
      <div className="success-panel">
        <h2>Appointment Confirmed</h2>
        <p>Your appointment ID is <strong>{appointmentId}</strong>.</p>
        <p>{details.name} with {getDoctor(doctor)?.name} at {getHospital(hospital)?.shortName} on {date} at {slot}.</p>
        <div className="button-row">
          <button className="btn btn-outline" type="button">Add to Calendar</button>
          <a className="btn btn-primary" href={`https://wa.me/91${details.phone}?text=Appointment%20${appointmentId}%20confirmed`}>WhatsApp Confirmation</a>
        </div>
      </div>
    );
  }

  return (
    <div className="wizard">
      <div className="wizard-progress" aria-label="Appointment booking progress">
        {steps.map((label, index) => (
          <button key={label} type="button" className={index <= step ? "active" : ""} onClick={() => index < step && setStep(index)}>
            <span>{index + 1}</span>{label}
          </button>
        ))}
      </div>

      {step === 0 && (
        <div className="picker-grid">
          {hospitals.map((item) => (
            <button key={item.slug} type="button" className={hospital === item.slug ? "picker-card selected" : "picker-card"} onClick={() => { setHospital(item.slug); setSpeciality(""); setDoctor(""); }}>
              <strong>{item.shortName}</strong>
              <span>{item.location}</span>
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="picker-grid">
          {availableSpecialities.map((item) => (
            <button key={item.slug} type="button" className={speciality === item.slug ? "picker-card selected" : "picker-card"} onClick={() => { setSpeciality(item.slug); setDoctor(""); }}>
              <strong>{item.name}</strong>
              <span>{item.description}</span>
            </button>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="picker-grid">
          {availableDoctors.map((item) => (
            <button key={item.slug} type="button" className={doctor === item.slug ? "picker-card selected" : "picker-card"} onClick={() => setDoctor(item.slug)}>
              <strong>{item.name}</strong>
              <span>{item.designation}</span>
            </button>
          ))}
        </div>
      )}

      {step === 3 && (
        <div className="form-grid">
          <label>
            Select date
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </label>
          <div className="slot-grid" role="group" aria-label="Available time slots">
            {slots.map((item, index) => (
              <button key={item} type="button" disabled={index === 2} className={slot === item ? "selected" : ""} onClick={() => setSlot(item)}>
                {item}
                <small>{index === 2 ? "Booked" : "Available"}</small>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="form-grid two">
          {(["name", "age", "phone", "email"] as const).map((field) => (
            <label key={field}>
              {field[0].toUpperCase() + field.slice(1)}
              <input value={details[field]} onChange={(event) => setDetails({ ...details, [field]: event.target.value })} />
            </label>
          ))}
          <label>
            Gender
            <select value={details.gender} onChange={(event) => setDetails({ ...details, gender: event.target.value })}>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Patient type
            <select value={details.patientType} onChange={(event) => setDetails({ ...details, patientType: event.target.value })}>
              <option>New</option>
              <option>Existing</option>
            </select>
          </label>
          <label>
            Insurance/TPA
            <select value={details.tpa} onChange={(event) => setDetails({ ...details, tpa: event.target.value })}>
              <option>No</option>
              <option>Yes</option>
            </select>
          </label>
          <label className="full">
            Reason for visit
            <textarea value={details.reason} onChange={(event) => setDetails({ ...details, reason: event.target.value })} rows={4} />
          </label>
        </div>
      )}

      {step === 5 && (
        <div className="summary-panel">
          <h2>Review Appointment</h2>
          <p><strong>Hospital:</strong> {getHospital(hospital)?.name}</p>
          <p><strong>Speciality:</strong> {getSpeciality(speciality)?.name}</p>
          <p><strong>Doctor:</strong> {getDoctor(doctor)?.name}</p>
          <p><strong>Date & Time:</strong> {date} at {slot}</p>
          <p><strong>Patient:</strong> {details.name}, {details.age} years, {details.phone}</p>
        </div>
      )}

      <div className="wizard-actions">
        <button className="btn btn-outline" type="button" disabled={step === 0} onClick={() => setStep(step - 1)}>Back</button>
        {step < 5 ? (
          <button className="btn btn-primary" type="button" disabled={!canContinue} onClick={() => setStep(step + 1)}>Continue</button>
        ) : (
          <button className="btn btn-primary" type="button" onClick={() => setConfirmed(true)}>Confirm Appointment</button>
        )}
      </div>
    </div>
  );
}
