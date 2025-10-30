import type { SVGProps } from "react";

export function SpeedIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.151 1.373A1.5 1.5 0 0 1 12.33 3.01l-1.8 6.84h5.46a1.5 1.5 0 0 1 1.2 2.373l-8.91 10.92a1.5 1.5 0 0 1-2.48-1.636l1.8-6.84H2.14a1.5 1.5 0 0 1-1.2-2.373l8.91-10.92a1.5 1.5 0 0 1 .3-0.027Z"
        fill="#facc15"
      />
    </svg>
  );
}
