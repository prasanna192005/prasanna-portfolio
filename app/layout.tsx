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
  title: "Prasanna Pandharikar | Software Developer Portfolio",
  description: "Explore Prasanna Pandharikar's software engineering portfolio, showcasing high-concurrency multiplayer typing games, AI observability watchdogs, and low-latency command consoles.",
  keywords: [
    "Prasanna Pandharikar Portfolio",
    "Prasanna Pandharikar",
    "Prasanna Pandharikar resume",
    "Prasanna",
    "Pandharikar",
    "Software Developer",
    "Frontend Engineer",
    "Creative Developer",
    "Problem Solver",
    "Sardar Patel Institute of Technology",
    "edept"
  ],
  alternates: {
    canonical: "https://prasanna19.xyz",
  },
  openGraph: {
    title: "Prasanna Pandharikar | Software Developer Portfolio",
    description: "Explore Prasanna Pandharikar's software engineering portfolio, showcasing high-concurrency multiplayer typing games, AI observability watchdogs, and low-latency command consoles.",
    siteName: "Prasanna Pandharikar Portfolio",
    type: "website",
    url: "https://prasanna19.xyz",
    images: [
      {
        url: "/profile.svg",
        width: 1200,
        height: 630,
        alt: "Prasanna Pandharikar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasanna Pandharikar | Software Developer Portfolio",
    description: "Explore Prasanna Pandharikar's software engineering portfolio, showcasing high-concurrency multiplayer typing games, AI observability watchdogs, and low-latency command consoles.",
    images: ["/profile.svg"],
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import RouteTracker from "@/components/RouteTracker";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Prasanna Pandharikar",
              "url": "https://prasanna19.xyz",
              "jobTitle": "Software Developer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Sardar Patel Institute of Technology"
              },
              "sameAs": [
                "https://github.com/prasanna192005",
                "https://linkedin.com/in/prasanna-pandharikar"
              ],
              "description": "Portfolio of Prasanna Pandharikar - Software Developer & Problem Solver. Specializing in high-concurrency multiplayer applications, low-latency architectures, and AI systems."
            }),
          }}
        />
        <SmoothScroll>
          <RouteTracker />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
