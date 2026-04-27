type IconProps = {
  name: string;
  className?: string;
};

const paths: Record<string, string> = {
  stethoscope: "M11 2v6a4 4 0 0 1-8 0V2M5 2v6a2 2 0 0 0 4 0V2M7 14v2a5 5 0 0 0 10 0v-1M17 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  scalpel: "M14.5 3.5 20 9l-9.5 9.5a4 4 0 0 1-5.7 0l-.3-.3L14.5 3.5ZM12 6l6 6M3 21l5-5",
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z",
  bone: "M7 14a3 3 0 1 1-3-3 3 3 0 1 1 3-3l10 10a3 3 0 1 1 3 3 3 3 0 1 1-3 3L7 14Z",
  ear: "M6 8a6 6 0 1 1 10 4.5c-1.2 1.1-2 2.1-2 3.5a4 4 0 0 1-8 0M10 8a2 2 0 1 1 3.2 1.6",
  activity: "M3 12h4l2-7 4 14 2-7h6",
  baby: "M9 12h.01M15 12h.01M10 16c1.2 1 2.8 1 4 0M12 3a8 8 0 1 0 8 8c0-1.6-.5-3-1.3-4.3M9 3.6C10 2.5 12 2 14 3",
  brain: "M9 4a4 4 0 0 0-4 4 4 4 0 0 0 0 8 4 4 0 0 0 4 4M15 4a4 4 0 0 1 4 4 4 4 0 0 1 0 8 4 4 0 0 1-4 4M9 4v16M15 4v16M9 10h6M9 14h6",
  sparkles: "M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3ZM5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14ZM19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14Z",
  ambulance: "M3 7h11v10H3V7Zm11 3h4l3 3v4h-7v-7ZM6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7 9v4M5 11h4",
  scan: "M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2M7 12h10M12 7v10",
  scope: "M8 4h8v4H8V4Zm4 4v5a5 5 0 0 1-5 5H4M16 8v4a4 4 0 0 0 4 4",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z",
  search: "M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z",
  calendar: "M8 2v4M16 2v4M3 10h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z",
  hospital: "M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 21v-6h6v6M10 7h4M12 5v4M8 12h2M14 12h2",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M18 6 6 18M6 6l12 12",
  arrow: "M5 12h14M13 5l7 7-7 7"
};

export function Icon({ name, className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name] ?? paths.hospital} />
    </svg>
  );
}
