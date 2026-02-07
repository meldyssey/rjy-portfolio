import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default async function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/*  Skills */}
      <Skills />

      {/* Experiences */}
      <Experiences />

      {/* Projects */}
      <Projects />
    </div>
  );
}
