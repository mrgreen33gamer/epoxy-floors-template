// src/app/blogs/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Flooring Tips for Waco & Central Texas | PolyCoat Floors",
  description: "Practical advice on hardwood, tile, LVP, carpet, and flooring care for Waco and Central Texas homeowners.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
