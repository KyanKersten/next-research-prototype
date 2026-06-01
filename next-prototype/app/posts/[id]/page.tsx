import Link from "next/link";
import { notFound } from "next/navigation";
import { getCommentsByPostId, getPostById } from "@/lib/posts";

type PostDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  const postId = Number(id);

  if (!Number.isInteger(postId) || postId <= 0) {
    notFound();
  }

  const [post, comments] = await Promise.all([
    getPostById(postId),
    getCommentsByPostId(postId),
  ]);

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 lg:px-8">
      <Link
        href="/posts"
        className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
      >
        Back to overview
      </Link>

      <article className="mt-8 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0900ff]">
          Post {post.id}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 first-letter:uppercase sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">{post.body}</p>
      </article>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          Comments ({comments.length})
        </h2>
        <div className="mt-6 grid gap-4">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-3xl border border-slate-200 bg-white p-6"
            >
              <p className="text-base font-semibold text-slate-900 first-letter:uppercase">
                {comment.name}
              </p>
              <p className="mt-1 text-sm text-slate-500">{comment.email}</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">{comment.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
