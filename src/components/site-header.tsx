import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NavLink } from "@/components/nav-link";
import { IconGithub, IconLinkedin, IconX } from "@/components/icons";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
        <Link
          href="/#top"
          className="logo-tag shrink-0 font-mono text-xs text-cyan-400 transition sm:text-sm md:text-base"
        >
          {siteConfig.brand.logoTag}
        </Link>
        <nav
          className="flex min-w-0 max-w-[48%] flex-1 justify-center gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] sm:max-w-none sm:gap-1.5 md:gap-2 [&::-webkit-scrollbar]:hidden"
          aria-label="Main"
        >
          {siteConfig.nav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 text-zinc-400 sm:gap-2">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-header-btn"
            aria-label="GitHub"
          >
            <IconGithub className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-header-btn"
            aria-label="X"
          >
            <IconX className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-header-btn"
            aria-label="LinkedIn"
          >
            <IconLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
