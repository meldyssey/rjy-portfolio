export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-sm text-neutral">
            © 2026. Ryu Jeong Yun. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/meldyssey"
              className="text-sm text-neutral hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:rjy115@gmail.com"
              className="text-sm text-neutral hover:text-primary transition-colors"
            >
              Email
            </a>
            <a
              href="https://velog.io/@melcoding"
              className="text-sm text-neutral hover:text-primary transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
