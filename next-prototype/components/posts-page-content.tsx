import { BlogCard } from "@/components/blog-card";
import { FeaturedPost } from "@/components/featured-post";
import type { BlogPost } from "@/lib/posts";

type PostsPageContentProps = {
  posts: BlogPost[];
  label: string;
};

export function PostsHero() {
  return (
    <section className="bg-[#0900ff]">
      <div className="mx-auto flex min-h-112 w-full max-w-7xl items-center px-6 py-16 lg:px-8">
        <div className="max-w-3xl text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">
            Webbio Journal
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">
            Clearer notes for building better digital products.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
            Essays on design, research, prototypes, and the small decisions
            that make product work feel more considered.
          </p>
        </div>
      </div>
    </section>
  );
}

export function PostsResults({ posts, label }: PostsPageContentProps) {
  const featuredPost = posts[0];
  const latestPosts = posts.slice(1);

  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-12 sm:py-16 lg:px-8">
      {featuredPost ? <FeaturedPost post={featuredPost} /> : null}

      <section>
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0900ff]">
              Recent writing
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              From the desk
            </h2>
          </div>
          <p className="text-sm text-slate-500">
            {label} · {posts.length} posts rendered · {latestPosts.length} shown below
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
            <div id={`post-${post.id}`} key={post.id}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export function PostsPageContent(props: PostsPageContentProps) {
  return (
    <main>
      <PostsHero />
      <PostsResults {...props} />
    </main>
  );
}
