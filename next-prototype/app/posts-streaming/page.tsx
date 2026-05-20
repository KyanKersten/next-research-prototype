import { Suspense } from "react";
import { PostsHero, PostsResults } from "@/components/posts-page-content";
import { PostsSkeleton } from "@/components/posts-skeleton";
import { getStreamingPosts } from "@/lib/posts";

async function Posts() {
  const posts = await getStreamingPosts();

  return <PostsResults posts={posts} label="Streaming · no-store fetch" />;
}

export default function Page() {
  return (
    <main>
      <PostsHero />
      <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense>
    </main>
  );
}
