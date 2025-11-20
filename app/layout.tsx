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
      <body>
        {/* Demo Notice Bar */}
        <div className="bg-gray-800 text-gray-100 py-2 px-4 text-center text-sm border-b border-gray-700">
          Demo only – example design for illustration, not a real clinic. Built by{" "}
          <a
            href="https://www.keyturn.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            Keyturn Studio
          </a>
          .
        </div>
        {children}
      </body>
    </html>
  );
}
