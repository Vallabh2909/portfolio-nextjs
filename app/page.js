/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TdQhKyNMaIc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import HeroSection from "@/components/component/hero-section";
import AboutSection from "@/components/component/aboutme-section";
import SkillsSection from "@/components/component/skills-section";
import ProjectSection from "@/components/component/project-section";
import ContactSection from "@/components/component/contact-section";
import BlogSection from "@/components/component/blog-section";

export default function Component() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <BlogSection/>
      <ContactSection />
    </main>
  );
}
