import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={className} aria-label={`${SITE_CONFIG.name} — Home`}>
      <img src="/logo.svg" alt={SITE_CONFIG.name} className="h-9 w-auto" />
    </Link>
  );
}
