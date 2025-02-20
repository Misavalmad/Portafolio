import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "Misael Valencia | Portfolio",
  description: "Portfolio showcasing my skills, projects, and experience in software and game development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
