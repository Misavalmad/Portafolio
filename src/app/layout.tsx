import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Misael Valencia | Portfolio</title>
        <meta name="description" content="Portfolio showcasing my skills, projects, and experience in software and game development." />
      </head>
      <body>{children}</body>
    </html>
  );
}
