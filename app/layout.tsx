import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightSpine Chiropractic - Pain Relief & Mobility",
  description: "Professional chiropractic care for back pain, neck pain, and mobility issues. Book your appointment today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
