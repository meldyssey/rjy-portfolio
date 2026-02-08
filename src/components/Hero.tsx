"use client";
import { ChevronDown, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("your@email.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <section className="h-screen flex flex-col justify-center items-start relative">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">
          안녕하세요, 저는 Frontend 개발자
        </h1>
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-gradient">
          류정윤입니다
        </h1>
        <p className="text-2xl text-neutral">
          체계적인 구조화로 협업의 효율을 높이고,
        </p>
        <p className="text-2xl text-neutral mb-8">
          기술로 사용자의 경험을 설계하는 개발자가 되고자 합니다.
        </p>

        <div className="flex items-center gap-2 text-lg text-neutral mb-6">
          <Mail className="w-5 h-5" />
          <button
            onClick={copyEmail}
            className="hover:text-primary transition-colors relative group"
          >
            your@email.com
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {isCopied ? "복사됨✓" : "클릭해서 복사"}
            </span>
          </button>
        </div>

        {/* 연락처 & SNS 링크 */}
        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={40}
              height={40}
              className="opacity-80 hover:opacity-100"
            />
          </a>
          <a
            href="https://velog.io/@your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="Velog"
          >
            <Image
              src="/icons/velog.svg"
              alt="Velog"
              width={40}
              height={40}
              className="opacity-80 hover:opacity-100"
            />
          </a>
        </div>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary cursor-pointer animate-bounce hover:scale-125 transition-transform"
        aria-label="Scroll to skills section"
      >
        <ChevronDown className="w-15 h-15" />
      </button>
    </section>
  );
}
