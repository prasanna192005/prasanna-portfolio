"use client";

import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import VelocityMarquee from "@/components/VelocityMarquee";
import Navbar from "@/components/Navbar";
import ScrollChakra from "@/components/ScrollChakra";

export default function Home() {
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
    </main>
  );
}
