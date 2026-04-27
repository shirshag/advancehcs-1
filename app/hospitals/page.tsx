import type { Metadata } from "next";
import { HospitalCard } from "@/components/Cards";
import { HospitalsMap } from "@/components/HospitalsMap";
import { hospitals } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Hospitals",
  description: "Explore Advance HCS hospitals across rural and semi-urban West Bengal."
};

export default function HospitalsPage() {
  const districts = ["All", "Nadia", "Bankura", "Paschim Medinipur", "Murshidabad", "Nadia (Kalyani)"];
  return (
    <>
      <PageBanner title="Our Hospitals" crumb="Home / Our Hospitals" />
      <section className="section">
        <div className="container intro">
          <p>Advance HCS Pvt. Ltd. operates five hospitals and healthcare centres across West Bengal, connecting underserved communities with multi-specialty clinical teams, emergency support, and accessible diagnostics.</p>
          <div className="tabs">{districts.map((district) => <span key={district}>{district}</span>)}</div>
        </div>
        <div className="container split-map">
          <HospitalsMap anchorLinks />
          <div className="cards-grid hospital-list">
            {hospitals.map((hospital) => <HospitalCard key={hospital.slug} hospital={hospital} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function PageBanner({ title, crumb }: { title: string; crumb: string }) {
  return <section className="page-banner"><div className="container"><span>{crumb}</span><h1>{title}</h1></div></section>;
}
