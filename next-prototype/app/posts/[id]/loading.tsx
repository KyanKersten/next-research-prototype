export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 lg:px-8">
      <div className="h-10 w-40 animate-pulse rounded-full bg-slate-200" />

      <section className="mt-8 rounded-4xl border border-slate-200 bg-white p-8 sm:p-10">
        <div className="h-4 w-28 animate-pulse rounded bg-slate-200" />
        <div className="mt-4 h-10 w-4/5 animate-pulse rounded bg-slate-200" />
        <div className="mt-3 h-10 w-3/5 animate-pulse rounded bg-slate-200" />
        <div className="mt-8 h-5 w-full animate-pulse rounded bg-slate-200" />
        <div className="mt-2 h-5 w-11/12 animate-pulse rounded bg-slate-200" />
      </section>

      <section className="mt-10">
        <div className="h-8 w-44 animate-pulse rounded bg-slate-200" />
        <div className="mt-6 grid gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="h-5 w-1/2 animate-pulse rounded bg-slate-200" />
              <div className="mt-2 h-4 w-1/3 animate-pulse rounded bg-slate-200" />
              <div className="mt-4 h-4 w-full animate-pulse rounded bg-slate-200" />
              <div className="mt-2 h-4 w-10/12 animate-pulse rounded bg-slate-200" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
