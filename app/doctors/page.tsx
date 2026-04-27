import type { Metadata } from "next";
import { Suspense } from "react";
import { DoctorDirectory } from "@/components/DoctorDirectory";

export const metadata: Metadata = {
  title: "Find a Doctor",
  description: "Search Advance HCS doctors by name, speciality, hospital, and gender."
};

export default function DoctorsPage() {
  return (
    <>
      <section className="page-banner"><div className="container"><span>Home / Find a Doctor</span><h1>Find a Doctor</h1></div></section>
      <section className="section">
        <div className="container">
          <Suspense fallback={<p>Loading doctors...</p>}>
            <DoctorDirectory />
          </Suspense>
        </div>
      </section>
    </>
  );
}
