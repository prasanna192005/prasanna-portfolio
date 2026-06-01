"use client";

import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ArtifactsSection from "@/components/sections/ArtifactsSection";
import ContactSection from "@/components/sections/ContactSection";
import VelocityMarquee from "@/components/VelocityMarquee";
import Navbar from "@/components/Navbar";
import ScrollChakra from "@/components/ScrollChakra";
import ContactSectionNew from "@/components/sections/ContactSectionNew";
import Preloader from "@/components/Preloader";

export default function Home() {
  useEffect(() => {
    // Custom console greeting
    console.log(
      `%cnamaste\n%c[ git-prasanna192005 ]\n\n%cHi there! Thanks for inspecting my portfolio.\n\nStack:\n- Next.js 16 + React 19\n- Tailwind CSS v4\n- Framer Motion\n\nCreated by Prasanna. Enjoy the stay!\n`,
      "font-family: Georgia, serif; font-size: 24px; font-weight: bold; color: #FF1F00;",
      "font-family: monospace; font-size: 11px; color: #666; font-style: italic;",
      "font-family: monospace; font-size: 13px; color: #121212;"
    );
  }, []);

  return (
    <main className="min-h-screen w-full font-sans flex flex-col selection:bg-white selection:text-black scroll-smooth">
      {/* <Preloader /> */}
      <Navbar />
      <ScrollChakra />
      {/* Hero Intro */}
      <HeroSection />

      {/* Technical Arsenal */}
      <SkillsSection />

      {/* Smooth Velocity Marquee */}
      <section className="w-full bg-[#FDFBF7] py-8 overflow-hidden relative border-y border-[#121212]/10">
        <VelocityMarquee />
      </section>

      {/* Featured Projects Grid */}
      <ProjectsSection />

      {/* About & Showcase */}
      <ShowcaseSection />

      {/* Career Lineage */}
      <ExperienceSection />

      {/* Human Artifacts */}
      <ArtifactsSection />

      {/* Final Dispatch */}
     
      <ContactSectionNew />
    </main>
  );
}
