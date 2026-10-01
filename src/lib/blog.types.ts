export type BlogPostSummary = {
	slug: string;
	title: string;
	date: string;
	description: string;
};

export type BlogPost = BlogPostSummary & {
	html: string;
};
