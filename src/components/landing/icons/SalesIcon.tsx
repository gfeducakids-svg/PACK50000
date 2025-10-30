import type { SVGProps } from "react";

export function SalesIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
        fill="hsl(var(--secondary))"
      />
      <path
        d="M12.68 15.44V8.5H11.18V9.82H10.1V11.2H11.18V12.7H9V14.08H11.18V15.44H12.68ZM14.9 14.08C15.54 14.08 16.06 13.75 16.06 13.06C16.06 12.37 15.54 12.04 14.9 12.04H13.8V14.08H14.9ZM14.79 10.99C15.39 10.99 15.86 10.66 15.86 10.02C15.86 9.42 15.39 9.05 14.79 9.05H13.8V10.99H14.79Z"
        fill="white"
      />
    </svg>
  );
}
