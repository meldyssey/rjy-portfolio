export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <a href="/" className="text-xl font-bold text-gray-900">
          RJY-Portfolio
        </a>

        {/* 네비게이션 */}
        <nav className="flex gap-8">
          <a
            href="#about"
            className="text-sm font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-sm font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-sm font-bold text-neutral hover:text-primary border-b-2 border-transparent hover:border-primary transition-all"
          >
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
