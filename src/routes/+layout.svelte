<script lang="ts">
	import '../app.postcss';
	import '@splidejs/svelte-splide/css/core';

	import { PUBLIC_MIXPANEL_TOKEN } from '$env/static/public';
	import { PUBLIC_DOMAIN } from '$env/static/public';

	import mixpanel from 'mixpanel-browser';

	import { page } from '$app/stores';
	import { dev } from '$app/environment';
	import { afterNavigate } from '$app/navigation';

	if (!dev) {
		mixpanel.init(`${PUBLIC_MIXPANEL_TOKEN}`);
		mixpanel.track('Page load');
		afterNavigate(({ from }) => {
			if (from) {
				mixpanel.track('Page load', { "$referrer": `${from}` }); // Must be "$referrer"
			}
		});
	}
</script>

<svelte:head>
	<link rel="canonical" href={`${PUBLIC_DOMAIN}${$page.url.pathname}`} />
</svelte:head>

<main class="flex grow flex-col py-8 px-[3%] w-full">
	<slot />
</main>
