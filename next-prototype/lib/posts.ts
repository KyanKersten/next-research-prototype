export type BlogPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
const RENDER_POST_COUNT = 5000;
const SOURCE_POST_COUNT = 100;

function normalizePostId(id: number): number {
  return ((id - 1) % SOURCE_POST_COUNT) + 1;
}

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

export function getClientPosts(options?: RequestInit) {
  return fetchPosts(options);
}

export async function getPostById(id: number): Promise<BlogPost> {
  const normalizedId = normalizePostId(id);

  const response = await fetch(`${POSTS_URL}/${normalizedId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch post ${id}: ${response.status}`);
  }

  const post = (await response.json()) as BlogPost;

  return {
    ...post,
    id,
  };
}

export async function getCommentsByPostId(id: number): Promise<PostComment[]> {
  const normalizedId = normalizePostId(id);

  const response = await fetch(`${COMMENTS_URL}?postId=${normalizedId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch comments for post ${id}: ${response.status}`);
  }

  const comments = (await response.json()) as PostComment[];

  return comments.map((comment) => ({
    ...comment,
    postId: id,
  }));
}
