export type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const RENDER_POST_COUNT = 5000;

function expandPosts(posts: BlogPost[]): BlogPost[] {
  return Array.from({ length: RENDER_POST_COUNT }, (_, index) => {
    const post = posts[index % posts.length];

    return {
      ...post,
      id: index + 1,
    };
  });
}

async function fetchPosts(options?: RequestInit): Promise<BlogPost[]> {
  const response = await fetch(POSTS_URL, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  return expandPosts((await response.json()) as BlogPost[]);
}

export function getBaselinePosts() {
  return fetchPosts();
}

export function getCachedPosts() {
  return fetchPosts({
    next: {
      revalidate: 60,
    },
  });
}

export function getStreamingPosts() {
  return fetchPosts({
    cache: "no-store",
  });
}

export function getClientPosts() {
  return fetchPosts();
}
