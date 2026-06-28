import { siteConfig } from "@/config/site";

const kw = "text-fuchsia-400";
const key = "text-cyan-400";
const str = "text-emerald-400";

export function HeroCodePanel() {
  const { codeCard: c } = siteConfig;
  return (
    <div className="card-interactive overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 shadow-xl shadow-cyan-950/20 ring-1 ring-white/5">
      <div className="flex items-center gap-2 border-b border-zinc-800/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/90" />
        <span className="h-3 w-3 rounded-full bg-amber-400/90" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/90" />
        <span className="ml-2 font-mono text-xs text-zinc-500">portfolio.ts</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed sm:text-sm">
        <code>
          <span className={kw}>const</span> developer = {"{"}
          {"\n"}
          {"  "}
          <span className={key}>name</span>: <span className={str}>&quot;{c.name}&quot;</span>,
          {"\n"}
          {"  "}
          <span className={key}>role</span>: <span className={str}>&quot;{c.role}&quot;</span>,
          {"\n"}
          {"  "}
          <span className={key}>skills</span>: [
          {"\n"}
          {c.skills.map((s) => (
            <span key={s}>
              {"    "}
              <span className={str}>&quot;{s}&quot;</span>,
              {"\n"}
            </span>
          ))}
          {"  "}],
          {"\n"}
          {"  "}
          <span className={key}>passion</span>:{" "}
          <span className={str}>&quot;{c.passion}&quot;</span>
          {"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}
