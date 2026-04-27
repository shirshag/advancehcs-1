"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { doctors, hospitals, specialities } from "@/data/site";
import { DoctorCard } from "@/components/Cards";

export function DoctorDirectory() {
  const params = useSearchParams();
  const [query, setQuery] = useState("");
  const [selectedSpecialities, setSelectedSpecialities] = useState<string[]>(params.get("speciality") ? [params.get("speciality") as string] : []);
  const [selectedHospitals, setSelectedHospitals] = useState<string[]>(params.get("hospital") ? [params.get("hospital") as string] : []);
  const [gender, setGender] = useState("All");
  const [limit, setLimit] = useState(9);

  const filtered = useMemo(() => {
    return doctors.filter((doctor) => {
      const q = query.trim().toLowerCase();
      const queryMatch = q ? doctor.name.toLowerCase().includes(q) || doctor.designation.toLowerCase().includes(q) : true;
      const specialityMatch = selectedSpecialities.length ? selectedSpecialities.includes(doctor.speciality) : true;
      const hospitalMatch = selectedHospitals.length ? doctor.hospitalSlugs.some((slug) => selectedHospitals.includes(slug)) : true;
      const genderMatch = gender === "All" ? true : doctor.gender === gender;
      return queryMatch && specialityMatch && hospitalMatch && genderMatch;
    });
  }, [query, selectedSpecialities, selectedHospitals, gender]);

  function toggle(value: string, list: string[], setter: (value: string[]) => void) {
    setter(list.includes(value) ? list.filter((item) => item !== value) : [...list, value]);
  }

  return (
    <div className="directory-layout">
      <aside className="filter-panel" aria-label="Doctor filters">
        <h2>Filters</h2>
        <label className="search-field">
          Search doctor name
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Type doctor name" />
        </label>
        <fieldset>
          <legend>By Speciality</legend>
          {specialities.map((item) => (
            <label key={item.slug} className="check-row">
              <input type="checkbox" checked={selectedSpecialities.includes(item.slug)} onChange={() => toggle(item.slug, selectedSpecialities, setSelectedSpecialities)} />
              {item.name}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>By Hospital</legend>
          {hospitals.map((item) => (
            <label key={item.slug} className="check-row">
              <input type="checkbox" checked={selectedHospitals.includes(item.slug)} onChange={() => toggle(item.slug, selectedHospitals, setSelectedHospitals)} />
              {item.shortName}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>By Gender</legend>
          {["All", "Male", "Female"].map((item) => (
            <label key={item} className="check-row">
              <input type="radio" name="gender" checked={gender === item} onChange={() => setGender(item)} />
              {item}
            </label>
          ))}
        </fieldset>
      </aside>
      <div>
        <p className="result-count">{filtered.length} doctors found</p>
        <div className="cards-grid doctors-grid">
          {filtered.slice(0, limit).map((doctor) => <DoctorCard key={doctor.slug} doctor={doctor} />)}
        </div>
        {limit < filtered.length ? (
          <button className="btn btn-outline load-more" onClick={() => setLimit(limit + 6)}>Load More</button>
        ) : null}
      </div>
    </div>
  );
}
