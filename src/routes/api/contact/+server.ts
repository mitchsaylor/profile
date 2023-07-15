// Svelte
import { error } from '@sveltejs/kit';

// Types
import type { RequestHandler } from './$types';
import type { FormFields } from '$lib/types';

// ENV
import { SLACK_HOOK_URL } from '$env/static/private';

export const POST = (async ({ request, fetch }) => {
	const data: FormFields = await request.json();
	const res: any = await fetch(`${SLACK_HOOK_URL}`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({
			text: `New website contact form submitted.\n- Name: ${
				data.fullName ?? 'unknown'
			}\n- Email address: ${data.emailAddress ?? 'unknown'}\n${
				data.organization ? `- Organization: ${data.organization}\n` : ``
			}${data.websiteUrl ? `- Website URL: ${data.websiteUrl}\n` : ``}- Message: ${
				data.message ?? 'unknown'
			}`
		})
	}).catch((err) => {
		throw error(500, `${JSON.stringify(err)}`);
	});

	return new Response(JSON.stringify(res));
}) satisfies RequestHandler;
