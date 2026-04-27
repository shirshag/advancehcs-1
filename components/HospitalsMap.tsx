import Link from "next/link";
import { hospitals } from "@/data/site";

const pinPositions: Record<string, { x: number; y: number; labelX: "left" | "right" }> = {
  "aahil-hospitex-berhampore": { x: 218, y: 166, labelX: "right" },
  "glocal-krishnanagar": { x: 229, y: 258, labelX: "right" },
  "octave-healthcare-kalyani": { x: 214, y: 315, labelX: "right" },
  "glocal-sonamukhi": { x: 126, y: 383, labelX: "left" },
  "glocal-paschim-medinipur": { x: 110, y: 493, labelX: "left" }
};

export function HospitalsMap({ anchorLinks = false }: { anchorLinks?: boolean }) {
  return (
    <div className="wb-map" aria-label="West Bengal hospital locations">
      <div className="map-card">
        <div className="map-title">
          <span>West Bengal Network</span>
          <strong>5 hospitals and healthcare centres</strong>
        </div>
        <div className="map-canvas">
          <svg className="wb-svg" viewBox="0 0 360 620" role="img" aria-label="Map outline of West Bengal">
            <path
              className="wb-land"
              d="M210 20c-27 13-42 37-35 67 5 22 22 32 24 55 2 24-14 38-10 61 5 29 37 40 34 66-2 21-25 34-21 57 4 24 35 28 43 52 9 27-18 49-10 77 5 18 21 28 21 50 0 31-31 51-58 63-35 15-79 21-108 2-28-18-21-52 7-71 24-17 38-32 32-59-5-24-29-35-29-62 0-23 20-35 19-58-1-28-31-38-32-66-1-27 25-40 24-67-1-24-23-35-20-61 4-35 49-37 62-68 10-24-5-48 12-69 9-11 25-17 45-20Z"
            />
            <path className="wb-neck" d="M197 95c-22 42-12 75 10 105" />
            <path className="wb-neck" d="M119 276c41 8 79 2 112-19" />
            <path className="wb-neck" d="M128 428c35 9 69 6 105-7" />
            <path className="wb-coast" d="M189 558c25-18 43-38 51-64" />
            <text x="196" y="63" className="map-region">North Bengal</text>
            <text x="214" y="228" className="map-region">Central Bengal</text>
            <text x="94" y="458" className="map-region">South Bengal</text>
          </svg>
          <span className="map-compass" aria-hidden="true">N</span>
          {hospitals.map((hospital) => {
            const position = pinPositions[hospital.slug];
            const content = (
              <>
                <span className="pin-dot" />
                <span className={`pin-label ${position.labelX}`}>{hospital.shortName}</span>
              </>
            );
            return anchorLinks ? (
              <a
                key={hospital.slug}
                className="map-pin"
                style={{ left: `${(position.x / 360) * 100}%`, top: `${(position.y / 620) * 100}%` }}
                href={`#${hospital.slug}`}
                aria-label={`Jump to ${hospital.name}`}
              >
                {content}
              </a>
            ) : (
              <Link
                key={hospital.slug}
                className="map-pin"
                style={{ left: `${(position.x / 360) * 100}%`, top: `${(position.y / 620) * 100}%` }}
                href={`/hospitals/${hospital.slug}`}
                aria-label={`Open ${hospital.name}`}
              >
                {content}
              </Link>
            );
          })}
        </div>
        <div className="map-legend" aria-hidden="true">
          <span><i /> Advance HCS hospital</span>
          <span>Indicative district placement</span>
        </div>
      </div>
    </div>
  );
}
