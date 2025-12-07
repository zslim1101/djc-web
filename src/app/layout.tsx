import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr James Chess Academy - Master the Game",
  description:
    "Elite chess instruction from Dr. James, FIDE 2400+ rated. Expert coaching for all levels - from beginner fundamentals to grandmaster strategies. Transform your game with personalized training.",
  keywords:
    "chess academy, chess lessons, chess coaching, Dr James, FIDE master, chess instruction, beginner chess, advanced chess, tournament preparation",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
