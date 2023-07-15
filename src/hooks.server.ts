// Svelte
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const response = await resolve(event);
	response.headers.set('Content-Security-Policy', 'frame-ancestors https://app.storyblok.com;');

	return response;
}) satisfies Handle;
