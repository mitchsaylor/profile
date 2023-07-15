export const prerender = true

// ENV
import { STORYBLOK_API_TOKEN } from '$env/static/private';

// Types
import type { PageServerLoad } from './$types.js';

// Svelte
import { dev } from '$app/environment';

export const load = (async () => {
	const pageData: {
		data: { PageItem: { name: string; content: { body: any[] } } };
		errors: any;
	} = await fetch(`https://gapi-us.storyblok.com/v1/api`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Token: `${STORYBLOK_API_TOKEN}`,
			Version: dev ? 'draft' : 'published'
		},
		body: JSON.stringify({
			query: `query {
                    PageItem(language: "default", id: "home") {
                        name
                        content {
                            body
							seoTitle
							seoDescription
                        }
                    }
                }`
		})
	}).then((res) => res.json());

	return {
		pageData: pageData.data?.PageItem?.content,
		pageName: pageData.data?.PageItem?.name
	};
}) satisfies PageServerLoad;