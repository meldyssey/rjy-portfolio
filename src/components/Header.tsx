export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <a href="/" className="text-xl font-bold text-black">
          RJY-Portfolio
        </a>

        {/* 네비게이션 */}
        <nav className="flex gap-8">
          <a href="#about" className="text-sm text-neutral hover:text-grey">
            About
          </a>
          <a
            href="#experience"
            className="text-sm text-neutral hover:text-grey"
          >
            Experience
          </a>
          <a href="#projects" className="text-sm text-neutral hover:text-grey">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
