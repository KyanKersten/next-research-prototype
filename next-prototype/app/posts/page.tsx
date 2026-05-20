import { PostsPageContent } from "@/components/posts-page-content";
import { getBaselinePosts } from "@/lib/posts";

export default async function Page() {
  const posts = await getBaselinePosts();

  return <PostsPageContent posts={posts} label="Baseline server fetch" />;
}