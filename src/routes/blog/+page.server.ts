import { getAllPosts } from '$lib/server/blog';

export const load = () => ({
	posts: getAllPosts()
});
