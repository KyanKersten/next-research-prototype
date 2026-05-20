import { PostsPageContent } from "@/components/posts-page-content";
import { getCachedPosts } from "@/lib/posts";

export default async function Page() {
  const posts = await getCachedPosts();

  return <PostsPageContent posts={posts} label="Cached / ISR · revalidate 60s" />;
}
