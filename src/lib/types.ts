import type { Blok } from '$lib/types/bloks';

export type Page = {
	body: Blok[];
	seoTitle?: string;
	seoDescription?: string;
	seoHidden: boolean
	openGraphImage: StoryBlokImage
};
export type FormFields = {
	fullName: string
	emailAddress: string
	organization?: string
	websiteUrl?: string
	message: string
}
export type StoryBlokImage = {
	alt: string;
	filename: string;
	name: string;
	title: string;
};
export type StoryBlokLink = {
	cached_url: string;
	url: string;
	id: string;
	target: string | '_blank'
};
export type RichText = {
	type:
		| 'paragraph'
		| 'heading'
		| 'blockquote'
		| 'bullet_list'
		| 'ordered_list'
		| 'blok'
		| 'text'
		| 'emoji'
		| 'list_item'
		| 'image';
	attrs: {
		level: number;
		emoji: string;
		alt: string;
		src: string;
		title: string;
		body: Blok[];
	};
	content: RichText[];
	text: string;
	marks: RichTextMark[];
};
export type RichTextMark = {
	type:
		| 'anchor'
		| 'italic'
		| 'bold'
		| 'textStyle'
		| 'link'
		| 'superscript'
		| 'subscript'
		| 'strike'
		| 'underline'
		| 'highlight'
		| 'code';
	attrs: {
		color: string;
		href: string;
		linktype: string;
		target: string;
		id: string;
	};
};
export type ImageSize = {
	imageWidth: number;
	minScreenWidth: number;
};
