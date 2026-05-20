import Link from "next/link";

const navItems = ["Articles", "Research", "Studio", "About"];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/posts" className="flex items-center gap-3">
          <span className="text-2xl font-black tracking-tight text-[#0900ff]">
            webbio.
          </span>
          <span className="hidden h-6 w-px bg-slate-200 sm:block" />
          <span className="hidden leading-none sm:block">
            <span className="block text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
              Journal
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-900 lg:flex">
          {navItems.map((item) => (
            <Link key={item} href="/posts" className="transition hover:text-[#0900ff]">
              {item}
            </Link>
          ))}
        </div>

        <Link
          href="/posts"
          className="hidden rounded-full bg-[#0900ff] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0700d6] sm:inline-flex"
        >
          Start reading
        </Link>
      </nav>
    </header>
  );
}
