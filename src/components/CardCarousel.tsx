import { ReactNode } from "react";

// Only works with CustomerCard components
export default function CardCarousel({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
