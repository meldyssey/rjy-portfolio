import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function BackButton({
  href = "/",
  label = "Back to Main",
  className = "",
}: BackButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-neutral hover:text-primary transition-colors no-underline   ${className}`}
    >
      <ArrowLeft className="h-5 w-5 animate-pulse" />
      <span>{label}</span>
    </Link>
  );
}
