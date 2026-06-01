"use client";

import Link from "next/link";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 lg:px-8">
      <section className="rounded-4xl border border-red-200 bg-white p-8 text-red-700 sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em]">
          Failed to load post
        </p>
        <p className="mt-4 text-lg leading-8">{error.message}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Retry
          </button>
          <Link
            href="/posts"
            className="rounded-full border border-red-300 px-5 py-2.5 text-sm font-semibold text-red-700 transition hover:border-red-400"
          >
            Back to overview
          </Link>
        </div>
      </section>
    </main>
  );
}
