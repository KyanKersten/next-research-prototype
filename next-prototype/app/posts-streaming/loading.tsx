import { PostsHero } from "@/components/posts-page-content";
import { PostsSkeleton } from "@/components/posts-skeleton";

export default function Loading() {
  return (
    <main>
      <PostsHero />
      <PostsSkeleton />
    </main>
  );
}
