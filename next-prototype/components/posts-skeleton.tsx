export function PostsSkeleton() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 sm:py-16 lg:px-8">
      <div className="flex h-96 animate-pulse flex-col justify-end rounded-4xl bg-blue-100 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0900ff]">
          Loading posts
        </p>
        <p className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-slate-950">
          De posts worden opgehaald terwijl de pagina alvast zichtbaar is.
        </p>
      </div>

      <section>
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="h-4 w-40 animate-pulse rounded-full bg-blue-100" />
            <div className="mt-3 h-9 w-56 animate-pulse rounded-full bg-slate-200" />
          </div>
          <div className="h-4 w-44 animate-pulse rounded-full bg-slate-200" />
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-4"
            >
              <div className="h-48 animate-pulse rounded-[1.35rem] bg-blue-100" />
              <div className="px-2 pb-2 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="h-4 w-20 animate-pulse rounded-full bg-blue-100" />
                  <div className="h-4 w-24 animate-pulse rounded-full bg-slate-200" />
                </div>
                <div className="mt-5 h-7 w-full animate-pulse rounded-full bg-slate-200" />
                <div className="mt-3 h-7 w-4/5 animate-pulse rounded-full bg-slate-200" />
                <div className="mt-5 space-y-2">
                  <div className="h-3 w-full animate-pulse rounded-full bg-slate-200" />
                  <div className="h-3 w-11/12 animate-pulse rounded-full bg-slate-200" />
                  <div className="h-3 w-2/3 animate-pulse rounded-full bg-slate-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
