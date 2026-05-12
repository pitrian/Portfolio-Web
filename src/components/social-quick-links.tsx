import { siteConfig } from "@/config/site";
import { IconGithub, IconLinkedin, IconX } from "@/components/icons";

const items = [
  {
    key: "github",
    label: "GitHub",
    description: "Code & contributions",
    href: siteConfig.social.github,
    Icon: IconGithub,
    accent: "from-zinc-700 to-zinc-900",
    ring: "hover:ring-violet-500/40",
  },
  {
    key: "x",
    label: "X",
    description: "Updates & thoughts",
    href: siteConfig.social.x,
    Icon: IconX,
    accent: "from-zinc-800 to-zinc-950",
    ring: "hover:ring-cyan-500/45",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    description: "Professional profile",
    href: siteConfig.social.linkedin,
    Icon: IconLinkedin,
    accent: "from-sky-950/80 to-zinc-950",
    ring: "hover:ring-sky-500/40",
  },
] as const;

export function SocialQuickLinks() {
  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
      {items.map(({ key, label, description, href, Icon, accent, ring }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-card group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-gradient-to-br ${accent} p-5 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/35 hover:shadow-cyan-500/10 ${ring} hover:ring-2`}
        >
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-zinc-100 transition group-hover:border-cyan-400/40 group-hover:text-cyan-300 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]">
              <Icon className="h-6 w-6" />
            </span>
            <div className="min-w-0 text-left">
              <p className="font-semibold text-white">{label}</p>
              <p className="mt-1 text-sm text-zinc-400">{description}</p>
              <p className="mt-3 font-mono text-xs text-cyan-400/90 transition group-hover:text-cyan-300">
                Open →
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
