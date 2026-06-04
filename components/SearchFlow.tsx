"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { doctors, hospitals, specialities, specialitiesForHospital } from "@/data/site";
import { Icon } from "@/lib/icons";

export function SearchFlow({ compact = false, onSearch }: { compact?: boolean; onSearch: (data: any[]) => void; }) {
  const router = useRouter();
  const [hospital, setHospital] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [doctor, setDoctor] = useState("");

  const filteredSpecialities = useMemo(() => {
    return hospital ? specialitiesForHospital(hospital) : specialities;
  }, [hospital]);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((item) => {
      const hospitalMatch = hospital ? item.hospitalSlugs.includes(hospital) : true;
      const specialityMatch = speciality ? item.speciality === speciality : true;
      return hospitalMatch && specialityMatch;
    });
  }, [hospital, speciality]);

  function submitSearch() {
    if (!hospital && !speciality && !doctor) {
      onSearch([]);
      router.push("/doctors");
      return;
    }

    let filtered = doctors;

    if (hospital) {
      filtered = filtered.filter((d) =>
        d.hospitalSlugs.includes(hospital)
      );
    }

    if (speciality) {
      filtered = filtered.filter((d) =>
        d.speciality === speciality
      );
    }

    if (doctor) {
      filtered = filtered.filter((d) =>
        d.slug === doctor
      );
    }

    onSearch(filtered.slice(0, doctor ? 1 : 6)); 
  }

  // function submitSearch() {
  //   if (doctor) {
  //     router.push(`/doctors/${doctor}`);
  //     return;
  //   }
  //   const params = new URLSearchParams();
  //   if (hospital) params.set("hospital", hospital);
  //   if (speciality) params.set("speciality", speciality);
  //   router.push(`/doctors${params.size ? `?${params.toString()}` : ""}`);
  // }

  return (
    <div className={`search-flow ${compact ? "search-flow-compact" : ""}`} aria-label="Find care search">
      <label>
        <span>Select Hospital</span>
        <select
          value={hospital}
          onChange={(event) => {
            setHospital(event.target.value);
            setSpeciality("");
            setDoctor("");
          }}
        >
          <option value="">All Hospitals</option>
          {hospitals.map((item) => (
            <option value={item.slug} key={item.slug}>
              {item.shortName}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Select Speciality</span>
        <select
          value={speciality}
          onChange={(event) => {
            setSpeciality(event.target.value);
            setDoctor("");
          }}
        >
          <option value="">All Specialities</option>
          {filteredSpecialities.map((item) => (
            <option value={item.slug} key={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Select Doctor</span>
        <select value={doctor} onChange={(event) => setDoctor(event.target.value)}>
          <option value="">All Doctors</option>
          {filteredDoctors.map((item) => (
            <option value={item.slug} key={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <button type="button" className="btn btn-primary search-submit" onClick={submitSearch}>
        <Icon name="search" /> Search
      </button>
    </div>
  );
}
