<script lang="ts">
	// CSS
	import '../app.css';

	// ENV
	import { PUBLIC_PRIMARY_HOST, PUBLIC_MIXPANEL_TOKEN } from '$env/static/public';

	// Svelte
	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';

	// Libraries
	import mixpanel from 'mixpanel-browser';

	if (!dev) {
		mixpanel.init(`${PUBLIC_MIXPANEL_TOKEN}`);
		mixpanel.track('Page load');
		afterNavigate(({ from }) => {
			if (from?.url) {
				mixpanel.track('Page load', { "$referrer": `${from.url}` }); /* Must be "$referrer" */
			}
		});
	}
</script>

<svelte:head>
	{#if !$page.error}
		<link rel="canonical" href={`https://${PUBLIC_PRIMARY_HOST}${$page.url.pathname}`} />
	{/if}
</svelte:head>

<main class="z-10 grow">
	<slot />
</main>
