import Link from "next/link";
import type { BlogPost } from "./blog-card";

type FeaturedPostProps = {
  post: BlogPost;
};

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <article
      id={`post-${post.id}`}
      className="grid overflow-hidden rounded-4xl bg-[#0900ff] text-white shadow-2xl shadow-blue-950/20 lg:grid-cols-[0.95fr_1.05fr]"
    >
      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-white px-4 py-2 font-semibold text-[#0900ff]">
            Featured post
          </span>
          <span className="text-blue-100">User {post.userId}</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-base leading-8 text-blue-50">{post.body}</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            href={`/posts/${post.id}`}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0900ff] transition hover:bg-blue-50"
          >
            Read the essay
          </Link>
          <div>
            <p className="font-medium text-white">Post #{post.id}</p>
            <p className="text-sm text-blue-100">Fetched from JSONPlaceholder</p>
          </div>
        </div>
      </div>
      <div className="flex min-h-80 items-end bg-blue-950 p-8 lg:min-h-120 lg:p-12">
        <p className="text-8xl font-semibold tracking-tight text-white/15 sm:text-9xl">
          #{post.id.toString().padStart(2, "0")}
        </p>
      </div>
    </article>
  );
}
