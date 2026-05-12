import Link from "next/link";
import { siteConfig } from "@/config/site";
import { HeroCodePanel } from "@/components/hero-code-panel";
import { SocialQuickLinks } from "@/components/social-quick-links";

export function HeroSection() {
  const { hero, brand } = siteConfig;
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-zinc-800/60"
    >
      <div className="hero-glow" aria-hidden />
      <div className="hero-glow-secondary" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="font-mono text-sm text-cyan-400">{hero.prompt}</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {brand.name}
            <span
              className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-cyan-400 align-[-0.15em]"
              aria-hidden
            />
          </h1>
          <p className="text-xl text-zinc-300 sm:text-2xl">
            <span className="font-semibold text-cyan-400">{hero.roleHighlight}</span>{" "}
            <span className="text-zinc-400">{hero.roleRest}</span>
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-zinc-400">{hero.bio}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </Link>
            <Link href={hero.tertiaryCta.href} className="btn-ghost">
              {hero.tertiaryCta.label}
            </Link>
          </div>
        </div>
        <HeroCodePanel />
      </div>
    </section>
  );
}

export function FeaturedSection() {
  const { featured } = siteConfig;
  return (
    <section
      id="projects"
      className="border-y border-zinc-800/80 bg-gradient-to-b from-zinc-950 to-zinc-900/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title mt-2">What I&apos;m building</h2>
        </div>
        <div className="card-interactive flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-inner ring-1 ring-white/5 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-zinc-950/80 text-2xl shadow-inner"
            aria-hidden
          >
            {siteConfig.featured.icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-semibold text-white">{featured.title}</h3>
            <p className="mt-2 text-zinc-400">{featured.description}</p>
          </div>
          <Link href={featured.cta.href} className="btn-primary shrink-0 px-5 py-2.5 text-sm">
            {featured.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LatestPostsSection() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-eyebrow">Blog</p>
          <h2 className="section-title mt-2">Latest posts</h2>
        </div>
        <Link
          href="/#blog"
          className="shrink-0 rounded-lg border border-transparent px-3 py-1.5 text-sm font-medium text-cyan-400 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.15)]"
        >
          View all →
        </Link>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {siteConfig.posts.map((post) => (
          <li key={post.title}>
            <Link
              href={post.href}
              className="card-interactive block rounded-xl border border-zinc-800 bg-zinc-900/30 p-5"
            >
              <time className="text-sm text-zinc-500">{post.date}</time>
              <p className="mt-2 text-lg font-semibold text-zinc-100">{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ResumeSection() {
  const { resume } = siteConfig;
  return (
    <section
      id="resume"
      className="border-t border-zinc-800/80 bg-gradient-to-b from-zinc-900/25 to-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 max-w-2xl">
          <p className="section-eyebrow">Resume</p>
          <h2 className="section-title mt-2">{resume.title}</h2>
          <p className="mt-3 text-lg text-zinc-400">{resume.headline}</p>
        </div>
        <div className="card-interactive flex flex-col gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6 ring-1 ring-white/5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="min-w-0">
            <p className="font-mono text-sm text-zinc-500">{resume.pdfPath}</p>
            <p className="mt-2 max-w-xl text-sm text-zinc-500">{resume.hint}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/resume" className="btn-primary px-5 py-2.5 text-sm">
              Open resume page
            </Link>
            <a
              href={resume.pdfPath}
              download
              className="btn-secondary px-5 py-2.5 text-sm"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { about } = siteConfig;
  const email = about.contactEmail?.trim();

  return (
    <section id={about.id} className="border-t border-zinc-800/80 bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="section-eyebrow">Profile</p>
          <h2 className="section-title mt-2">{about.title}</h2>
          <p className="mt-4 text-xl font-medium leading-relaxed text-zinc-300">{about.lead}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="card-interactive rounded-2xl border border-zinc-800 bg-zinc-900/25 p-6 ring-1 ring-white/5 lg:col-span-3">
            <div className="space-y-4 text-base leading-relaxed text-zinc-400">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {email ? (
              <a
                href={`mailto:${email}`}
                className="mt-6 inline-flex rounded-lg border border-cyan-500/40 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              >
                Email me
              </a>
            ) : null}
          </div>

          <aside className="lg:col-span-2">
            <div className="card-interactive h-full rounded-2xl border border-zinc-800 bg-gradient-to-br from-violet-950/30 to-zinc-900/40 p-6 ring-1 ring-violet-500/10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-violet-300/90">
                Focus areas
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.focus.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-cyan-500/25 bg-cyan-500/5 px-3 py-1.5 text-sm text-cyan-100/90 transition hover:border-cyan-400/50 hover:bg-cyan-500/15 hover:shadow-[0_0_14px_rgba(34,211,238,0.12)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="mb-8 text-center">
          <p className="section-eyebrow">Connect</p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Quick links</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
            GitHub, X, and LinkedIn — tap a card to open in a new tab.
          </p>
        </div>
        <SocialQuickLinks />
        <p className="mt-10 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} {siteConfig.brand.name}. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
