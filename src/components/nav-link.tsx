import Link from "next/link";
import type { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

/**
 * Hash links must be `/#id` so they work from routes like `/resume`.
 */
export function NavLink({ href, className = "", children }: NavLinkProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const combined = `nav-pill ${className}`.trim();

  if (isExternal) {
    return (
      <a href={href} className={combined} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
