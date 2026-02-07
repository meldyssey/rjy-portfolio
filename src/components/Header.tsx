"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollTo = (e: React.MouseEvent<HTMLDivElement>, part: string) => {
    e.preventDefault();
    document.getElementById(part)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
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
      className={`fixed left-0 right-0 z-50 bg-secondary backdrop-blur-sm ${isVisible ? "top-0" : "-top-20"}`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <Link href="/" className="text-xl font-bold text-neutral">
          RJY-Portfolio
        </Link>

        {/* 네비게이션 */}
        <nav className="flex gap-8">
          <div
            onClick={(e) => scrollTo(e, "skills")}
            className="text-md font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all cursor-pointer"
          >
            Skills
          </div>
          <div
            onClick={(e) => scrollTo(e, "experiences")}
            className="text-md font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            Experiences
          </div>
          <div
            onClick={(e) => scrollTo(e, "projects")}
            className="text-md font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            Projects
          </div>
        </nav>
      </div>
    </header>
  );
}
