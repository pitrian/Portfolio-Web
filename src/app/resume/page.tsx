import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/home-sections";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.brand.name}`,
  description: `${siteConfig.brand.name} — CV / resume (PDF).`,
};

export default function ResumePage() {
  const { resume, brand } = siteConfig;
  const pdf = resume.pdfPath;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <SiteHeader />
      <main className="flex-1">
        <div className="border-b border-zinc-800/80 bg-zinc-900/20">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6">
            <div>
              <p className="font-mono text-xs text-cyan-500/90">Resume</p>
              <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">{brand.name}</h1>
              <p className="mt-1 text-sm text-zinc-500">{resume.headline}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/#top"
                className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-200"
              >
                ← Home
              </Link>
              <a
                href={pdf}
                download
                className="btn-secondary px-4 py-2 text-sm"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          <p className="mb-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm text-amber-100/90">
            {resume.hint}
          </p>
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 shadow-xl ring-1 ring-white/5">
            <div className="aspect-[8.5/11] w-full min-h-[70vh] sm:min-h-[80vh]">
              <object
                data={pdf}
                type="application/pdf"
                className="h-full w-full"
                title={`${brand.name} resume PDF`}
              >
                <div className="flex h-full min-h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center">
                  <p className="text-zinc-400">
                    This browser cannot embed the PDF. Open the file directly:
                  </p>
                  <a href={pdf} className="btn-primary text-sm" target="_blank" rel="noopener noreferrer">
                    Open PDF
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
