import type { Metadata } from "next";
import { Suspense } from "react";
import { AppointmentWizard } from "@/components/AppointmentWizard";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: "Book a hospital, speciality, doctor, date, and time with Advance HCS."
};

export default function BookAppointmentPage() {
  return (
    <>
      <section className="page-banner"><div className="container"><span>Home / Book Appointment</span><h1>Book Appointment</h1></div></section>
      <section className="section">
        <div className="container">
          <Suspense fallback={<p>Loading appointment form...</p>}>
            <AppointmentWizard />
          </Suspense>
        </div>
      </section>
    </>
  );
}
