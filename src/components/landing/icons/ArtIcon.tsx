import type { SVGProps } from "react";

export function ArtIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.25 21.1C8.214 21.1 4.9 17.786 4.9 13.75C4.9 9.914 7.63 6.8 11.2 6.5V2.5C5.814 2.5 1.4 6.914 1.4 12.3C1.4 18.086 5.914 22.6 11.7 22.6H12.25V21.1Z"
        fill="hsl(var(--primary))"
      />
      <circle cx="8.5" cy="11" r="1.5" fill="hsl(var(--accent))" />
      <circle cx="12.5" cy="8.5" r="1.5" fill="hsl(var(--secondary))" />
      <circle cx="16" cy="11" r="1.5" fill="hsl(var(--primary) / 0.7)" />
      <circle cx="15.5" cy="15" r="1.5" fill="#facc15" />
    </svg>
  );
}
