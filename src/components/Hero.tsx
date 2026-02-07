"use client";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="h-screen flex flex-col justify-center items-start relative">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-4">안녕하세요 👋</h1>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-gradient">
          저는 oo입니다
        </h2>
        <p className="text-2xl text-neutral">Frontend Developer</p>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 bg-primary rounded-full text-white cursor-pointer animate-bounce hover:scale-125 transition-transform"
        aria-label="Scroll to skills section"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
