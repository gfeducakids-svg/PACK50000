import type { SVGProps } from "react";

export function MarketIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 .99c-3.33 2.89-6.66 5.78-10 8.67 0 3.33 1.33 6.67 4 9.33s6 4 9.33 4c3.33 0 6.67-1.33 9.33-4s4-6 4-9.33c-3.33-2.89-6.66-5.78-10-8.67zM12 20.99c-2-1.33-3.33-3.33-4-6 .67-1.33 2-3.33 4-6s3.33 4.67 4 6c-.67 2.67-2 4.67-4 6z"
        fill="hsl(var(--accent))"
      />
      <path
        d="M12 8.99c-2 2.67-3.33 4.67-4 6 .67 2.67 2 4.67 4 6s3.33-3.33 4-6c-.67-1.33-2-3.33-4-6z"
        fill="hsl(var(--accent) / 0.6)"
      />
    </svg>
  );
}
