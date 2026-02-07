import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-sm text-neutral">
            © 2026. Ryu Jeong Yun. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="https://github.com/meldyssey"
              className="text-sm text-neutral hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="mailto:rjy115@gmail.com"
              className="text-sm text-neutral hover:text-primary transition-colors"
            >
              Email
            </Link>
            <Link
              href="https://velog.io/@melcoding"
              className="text-sm text-neutral hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
