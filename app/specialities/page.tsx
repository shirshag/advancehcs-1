import type { Metadata } from "next";
import { SpecialityTile } from "@/components/Cards";
import { specialities } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Specialities",
  description: "Explore Advance HCS centres of excellence and medical specialities."
};

export default function SpecialitiesPage() {
  return (
    <>
      <section className="page-banner"><div className="container"><span>Home / Specialities</span><h1>Our Specialities</h1></div></section>
      <section className="section">
        <div className="container speciality-grid">
          {specialities.map((speciality) => <SpecialityTile key={speciality.slug} speciality={speciality} />)}
        </div>
      </section>
    </>
  );
}
