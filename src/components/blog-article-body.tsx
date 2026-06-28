type BlogBlock =
  | { readonly type: "h2"; readonly text: string }
  | { readonly type: "p"; readonly text: string }
  | { readonly type: "ul"; readonly items: readonly string[] };

export function BlogArticleBody({ blocks }: { blocks: readonly BlogBlock[] }) {
  return (
    <div className="mt-10 border-t border-zinc-800/80 pt-10">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-10 scroll-mt-24 text-lg font-semibold tracking-tight text-white first:mt-0 sm:text-xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return (
            <p key={i} className="mt-4 text-base leading-[1.8] text-zinc-400">
              {block.text}
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="mt-5 space-y-3.5">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="relative border-l-2 border-cyan-500/25 pl-4 text-base leading-relaxed text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}
