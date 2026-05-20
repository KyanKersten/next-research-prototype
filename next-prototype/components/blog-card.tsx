import Link from "next/link";
import type { BlogPost } from "@/lib/posts";

export type { BlogPost };

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10">
      <div className="flex h-48 flex-col justify-between rounded-[1.35rem] bg-[#0900ff] p-6 text-white">
        <span className="w-fit rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#0900ff]">
          Post {post.id}
        </span>
        <p className="max-w-44 text-3xl font-semibold leading-none tracking-tight">
          #{post.id.toString().padStart(2, "0")}
        </p>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="font-semibold text-[#0900ff]">User {post.userId}</span>
          <span className="text-slate-500">Article #{post.id}</span>
        </div>

        <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-950 first-letter:uppercase">
          {post.title}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
          {post.body}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
          <span className="font-medium text-slate-800">From user {post.userId}</span>
          <Link
            href={`/posts#post-${post.id}`}
            className="text-sm font-semibold text-[#0900ff] underline decoration-blue-200 underline-offset-4 transition hover:decoration-[#0900ff]"
          >
            Read
          </Link>
        </div>
      </div>
    </article>
  );
}
