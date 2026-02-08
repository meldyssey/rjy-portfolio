"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export default function BackButton({
  label = "Back to Main",
  className = "",
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`inline-flex items-center gap-2 text-neutral hover:text-primary transition-colors no-underline ${className}`}
    >
      <ArrowLeft className="h-5 w-5 animate-pulse" />
      <span>{label}</span>
    </button>
  );
}
