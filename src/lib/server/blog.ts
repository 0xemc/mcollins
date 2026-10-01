import matter from 'gray-matter';
import { marked } from 'marked';
import type { BlogPost, BlogPostSummary } from '$lib/blog.types';

const rawPosts = import.meta.glob('/src/lib/content/posts/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

const slugFromPath = (path: string) => path.split('/').pop()!.replace(/\.md$/, '');

const dateToIsoDay = (date: unknown): string =>
	date instanceof Date ? date.toISOString().slice(0, 10) : String(date ?? '');

const parsePost = (path: string, raw: string): BlogPost => {
	const { data, content } = matter(raw);
	return {
		slug: slugFromPath(path),
		title: data.title ?? slugFromPath(path),
		date: dateToIsoDay(data.date),
		description: data.description ?? '',
		html: marked.parse(content, { async: false })
	};
};

const posts = Object.entries(rawPosts)
	.map(([path, raw]) => parsePost(path, raw))
	.sort((a, b) => b.date.localeCompare(a.date));

export const getAllPosts = (): BlogPostSummary[] =>
	posts.map(({ html: _html, ...summary }) => summary);

export const getPostBySlug = (slug: string): BlogPost | undefined =>
	posts.find((post) => post.slug === slug);
