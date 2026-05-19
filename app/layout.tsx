import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const pixelFont = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Prasanna Pandharikar | Software Developer",
  description: "Portfolio of Prasanna Pandharikar - Software Developer & Problem Solver. An exploration of Artisan-Tech, blending Sanskriti and Vigyanam.",
  keywords: ["Software Developer", "Frontend Engineer", "Portfolio", "Prasanna Pandharikar", "Creative Developer", "Artisan-Tech"],
  openGraph: {
    title: "Prasanna Pandharikar | Software Developer",
    description: "Portfolio of Prasanna Pandharikar - Software Developer & Problem Solver. An exploration of Artisan-Tech.",
    siteName: "Prasanna Pandharikar Portfolio",
    type: "website",
    url: "https://prasanna19.xyz", // Replace with your actual domain
    images: [
      {
        url: "/profile.svg", // Using profile.png as default
        width: 1200,
        height: 630,
        alt: "Prasanna Pandharikar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanna Pandharikar | Software Developer",
    description: "Portfolio of Prasanna Pandharikar - Software Developer & Problem Solver. An exploration of Artisan-Tech.",
    images: ["/profile.svg"],
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${pixelFont.variable} ${instrumentSerif.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
