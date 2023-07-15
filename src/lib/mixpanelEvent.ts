// Libraries
import mixpanel from 'mixpanel-browser';

// Svelte
import { dev } from '$app/environment';

/* Call this helper to create an event in Mixpanel */
export const mixpanelEvent = async (event: string, properties: any | undefined) => {
	if (!dev) {
		mixpanel.track(event, properties);
	}
};

/* Call this helper to track a link click in Mixpanel */
export const clickLink = async (title: string, url: string) => {
	if (!dev) {
		mixpanel.track('Click link', {
			'Link title': title,
			'Link url': url
		});
	}
};
