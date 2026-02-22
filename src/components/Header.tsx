"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLDivElement>, part: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // 메뉴 클릭 시 모바일 메뉴 닫기
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
    <>
      {/* 상단 호버 확인 영역 */}
      <div
        className="fixed top-0 left-0 right-0 h-10 z-40"
        onMouseEnter={() => setIsVisible(true)}
      ></div>
      {/* 헤더 영역 */}
      <header
        className={`fixed left-0 right-0 z-50 bg-secondary backdrop-blur-sm transition-all duration-300 ${isVisible ? "top-0" : "-top-20"}`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
          {/* 로고 */}
          <Link href="/" className="text-xl font-bold text-neutral">
            RJY-Portfolio
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex gap-8">
            <div
              onClick={(e) => scrollTo(e, "skills")}
              className="text-md font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all cursor-pointer"
            >
              Skills
            </div>
            <div
              onClick={(e) => scrollTo(e, "experiences")}
              className="text-md font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all cursor-pointer"
            >
              Experiences
            </div>
            <div
              onClick={(e) => scrollTo(e, "projects")}
              className="text-md font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all cursor-pointer"
            >
              Projects
            </div>
          </nav>

          {/* 햄버거 버튼 (태블릿 이하) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col bg-secondary border-b border-gray-200">
            <div
              onClick={(e) => scrollTo(e, "skills")}
              className="px-6 py-3 text-md font-bold text-neutral hover:text-primary hover:bg-gray-50 transition-all cursor-pointer"
            >
              Skills
            </div>
            <div
              onClick={(e) => scrollTo(e, "experiences")}
              className="px-6 py-3 text-md font-bold text-neutral hover:text-primary hover:bg-gray-50 transition-all cursor-pointer"
            >
              Experiences
            </div>
            <div
              onClick={(e) => scrollTo(e, "projects")}
              className="px-6 py-3 text-md font-bold text-neutral hover:text-primary hover:bg-gray-50 transition-all cursor-pointer"
            >
              Projects
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
