import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          RJY-Portfolio
        </Link>

        {/* 네비게이션 */}
        <nav className="flex gap-8">
          <Link
            href="#skills"
            className="text-sm font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-sm font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
