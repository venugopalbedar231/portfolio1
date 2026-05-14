import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venugopal Bedar - Portfolio",
  description:
    "Full Stack Developer specializing in modern web experiences, AI integrations, and scalable systems. Available for internships and collaborations.",
  keywords: ["developer", "portfolio", "full stack", "react", "nextjs", "typescript"],
  authors: [{ name: "Venugopal Bedar" }],
  openGraph: {
    title: "Venugopal Bedar - Portfolio",
    description: "Building the future, one commit at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-bg antialiased">
        {children}
      </body>
    </html>
  );
}
