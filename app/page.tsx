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

export default function Home() {
  useEffect(() => {
    fetch('/api/track', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ route: window.location.pathname })
    }).catch(console.error);
  }, []);

  return (
    <main className="min-h-screen w-full font-sans flex flex-col selection:bg-white selection:text-black scroll-smooth">
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
