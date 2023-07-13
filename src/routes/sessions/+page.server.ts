import { readPosts } from '$lib/server/db';

export const load = (() => {
  const posts = readPosts();
  return { posts };
});

