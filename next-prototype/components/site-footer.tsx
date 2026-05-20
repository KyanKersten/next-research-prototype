import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Webbio Journal. Quiet notes for thoughtful teams.</p>
        <div className="flex gap-5 font-medium text-slate-900">
          <Link href="/posts" className="hover:text-[#0900ff]">
            Archive
          </Link>
          <Link href="/posts" className="hover:text-[#0900ff]">
            Authors
          </Link>
          <Link href="/posts" className="hover:text-[#0900ff]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
