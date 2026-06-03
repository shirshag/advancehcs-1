import Link from "next/link";
import { hospitals } from "@/data/site";

export function HospitalsMap({ anchorLinks = false }: { anchorLinks?: boolean }) {
  return (
    <div className="wb-map" aria-label="Advance HCS hospital network across West Bengal">
      <div className="network-card">
        <div className="map-title">
          <span>West Bengal Network</span>
          <strong>{hospitals.length} hospitals and healthcare centres</strong>
        </div>

        <div className="network-stats" aria-label="Network coverage summary">
          <span>
            <strong>{hospitals.length}</strong>
            Hospitals
          </span>
          <span>
            <strong>5</strong>
            Districts
          </span>
          <span>
            <strong>WB</strong>
            Coverage
          </span>
        </div>

        <div className="network-rail">
          {hospitals.map((hospital, index) => {
            const href = anchorLinks ? `#${hospital.slug}` : `/hospitals/${hospital.slug}`;
            const label = anchorLinks ? `Jump to ${hospital.name}` : `Open ${hospital.name}`;

            return (
              <Link key={hospital.slug} className="network-node" href={href} aria-label={label}>
                <span className="network-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="network-node-copy">
                  <small>{hospital.district}</small>
                  <strong>{hospital.shortName}</strong>
                  <em>{hospital.location}</em>
                </span>
              </Link>
            );
          })}
        </div>

        <p className="network-note">
          Organized by operating location so patients can quickly find the nearest Advance HCS hospital.
        </p>
      </div>
    </div>
  );
}
