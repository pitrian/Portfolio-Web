import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogArticleBody } from "@/components/blog-article-body";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/home-sections";

type PostWithSlug = (typeof siteConfig.posts)[number] & { slug: string };

function getPostBySlug(slug: string): PostWithSlug | null {
  const post = siteConfig.posts.find(
    (p): p is PostWithSlug => "slug" in p && p.slug === slug,
  );
  return post ?? null;
}

export function generateStaticParams() {
  return siteConfig.posts
    .filter((p): p is PostWithSlug => "slug" in p)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: `Post | ${siteConfig.brand.name}` };
  }
  return {
    title: `${post.title} | ${siteConfig.brand.name}`,
    description: "description" in post ? post.description : siteConfig.meta.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const description = "description" in post ? post.description : null;
  const tags = "tags" in post ? post.tags : [];
  const intro =
    "dek" in post && typeof post.dek === "string" && post.dek.length > 0
      ? post.dek
      : description;
  const body = "body" in post && Array.isArray(post.body) ? post.body : null;

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <SiteHeader />
      <main className="flex-1">
        <article className="relative border-b border-zinc-800/80 bg-gradient-to-b from-zinc-900/40 via-zinc-950 to-zinc-950">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent"
            aria-hidden
          />
          <div className="mx-auto max-w-[42rem] px-4 py-12 sm:px-6 sm:py-16">
            <p className="font-mono text-xs font-medium tracking-widest text-cyan-500/90">Blog</p>
            <time className="mt-3 block text-sm text-zinc-500">{post.date}</time>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-[2.125rem] sm:leading-tight">
              {post.title}
            </h1>
            {tags.length > 0 ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/[0.07] px-3 py-1 text-xs font-medium text-cyan-200/90"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
            {intro ? (
              <p className="mt-8 border-l-2 border-cyan-500/40 pl-4 text-lg font-light leading-relaxed text-zinc-300 sm:text-xl">
                {intro}
              </p>
            ) : null}
            {body && body.length > 0 ? <BlogArticleBody blocks={body} /> : null}
            <div className="mt-14 flex flex-wrap gap-3 border-t border-zinc-800/60 pt-10">
              <Link
                href="/#blog"
                className="inline-flex rounded-lg border border-zinc-600 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-100"
              >
                ← Back to posts
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
