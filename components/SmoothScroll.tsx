"use client";
import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface Props {
  children: ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.07 }}>
      {children}
    </ReactLenis>
  );
}
