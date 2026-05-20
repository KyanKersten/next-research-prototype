"use client";

import { useEffect, useState } from "react";
import { PostsHero, PostsResults } from "@/components/posts-page-content";
import { PostsSkeleton } from "@/components/posts-skeleton";
import { getClientPosts, type BlogPost } from "@/lib/posts";

export function ClientPostsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadPosts() {
      try {
        const nextPosts = await getClientPosts();

        if (isMounted) {
          setPosts(nextPosts);
        }
      } catch (caughtError) {
        if (isMounted) {
          setError(
            caughtError instanceof Error
              ? caughtError.message
              : "Failed to fetch posts",
          );
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main>
      <PostsHero />

      {isLoading ? <PostsSkeleton /> : null}

      {error ? (
        <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
          <div className="rounded-4xl border border-red-200 bg-white p-8 text-red-700">
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">
              Client fetch error
            </p>
            <p className="mt-3 text-lg">{error}</p>
          </div>
        </section>
      ) : null}

      {!isLoading && !error ? (
        <PostsResults posts={posts} label="Client-side render · browser fetch" />
      ) : null}
    </main>
  );
}
