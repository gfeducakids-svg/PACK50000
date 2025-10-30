import type { SVGProps } from "react";

export function ConfidenceIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M10.0001 15.17L6.83008 12L5.41008 13.41L10.0001 18L18.0001 10L16.5901 8.59001L10.0001 15.17Z"
        fill="white"
      />
    </svg>
  );
}
