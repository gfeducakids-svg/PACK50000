'use client';
import { cn } from "@/lib/utils";

export const GradientBackground = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, hsl(var(--background)) 40%, hsl(var(--primary)) 100%)",
          opacity: 0.1
        }}
      />
    </div>
  );
};
