import type { ReactNode } from "react";

export const metadata = {
  title: "Solutions Brochure",
  robots: { index: false, follow: false },
};

/** Hide site chrome so the page matches a clean screenshot/PDF capture. */
export default function BrochureLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        header, footer { display: none !important; }
      `}</style>
      {children}
    </>
  );
}
