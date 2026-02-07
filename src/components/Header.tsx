"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm ${isVisible ? "top-0" : "-top-20"}`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          RJY-Portfolio
        </Link>

        {/* 네비게이션 */}
        <nav className="flex gap-8">
          <div
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all cursor-pointer"
          >
            Skills
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("experiences")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            Experiences
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            Projects
          </div>
        </nav>
      </div>
    </header>
  );
}
