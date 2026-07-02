// Lightweight inline-SVG icon set so the site has no external icon dependency.
const PATHS = {
  home: "M3 11.5 12 4l9 7.5M5 10v10h14V10M9.5 20v-6h5v6",
  building: "M4 21V6l8-4 8 4v15M4 21h16M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2",
  industry: "M3 21V10l5 3V10l5 3V10l5 3v8H3Z M3 21h18",
  road: "M10 3 6 21M14 3l4 18M12 7v2M12 12v2M12 17v2",
  tool: "M14.7 6.3a4 4 0 1 0-5.4 5.4l-6 6a2 2 0 0 0 2.8 2.8l6-6a4 4 0 0 0 5.4-5.4l-2.4-2.4-2.4 2.4Z",
  trending: "M3 17l6-6 4 4 8-8M16 7h5v5",
  check: "M5 13l4 4L19 7",
  shield: "M12 3l8 4v6c0 5-3.5 7.5-8 8-4.5-.5-8-3-8-8V7l8-4Z",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  arrowUpRight: "M7 17 17 7M9 7h8v8",
  menu: "M3 6h18M3 12h18M3 18h18",
  close: "M5 5l14 14M19 5 5 19",
  phone: "M5 4h4l2 5-3 2c1.5 3 3.5 5 6 6l2-3 5 2v4c0 1-1 2-2 2-9 0-16-7-16-16 0-1 1-2 2-2Z",
  mail: "M3 6h18v12H3Z M3 6l9 7 9-7",
  pin: "M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  quote: "M7 8c-2 1-3 3-3 5.5S5.5 18 8 18M16 8c-2 1-3 3-3 5.5s1.5 4.5 4 4.5",
  star: "M12 3l2.6 5.6 6.1.6-4.6 4.2 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.2 6.1-.6Z",
};

export default function Icon({ name, size = 24, strokeWidth = 1.7, className = "", color = "currentColor" }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
