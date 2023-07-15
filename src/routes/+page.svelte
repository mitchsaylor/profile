<script lang="ts">
	export let data: { pageData: Page; pageName: string };

	// Types
	import type { Page } from '$lib/types';

	// ENV
	import { PUBLIC_PRIMARY_HOST } from '$env/static/public';

	// Svelte
	import { page } from '$app/stores';

	// Components
	import BlokRouter from '$lib/components/blokRouter.svelte';
</script>

<svelte:head>
	{#if data.pageData?.seoHidden || PUBLIC_PRIMARY_HOST !== $page.url.host}
		<meta name="robots" content="noindex, follow" />
	{:else}
		<meta name="robots" content="index, follow" />
	{/if}
	<title>
		{data.pageData?.seoTitle ?? `Mitch Saylor`}
	</title>
	<meta property="og:title" content={data.pageData?.seoTitle ?? `Mitch Saylor`} />
	<meta name="twitter:title" content={data.pageData?.seoTitle ?? `Mitch Saylor`} />
	{#if data.pageData?.seoDescription}
		<meta name="description" content={data.pageData?.seoDescription} />
		<meta property="og:description" content={data.pageData?.seoDescription} />
		<meta name="twitter:description" content={data.pageData?.seoDescription} />
	{/if}
	{#if data.pageData?.openGraphImage?.filename}
		<meta property="og:image" content={data.pageData?.openGraphImage?.filename} />
		<meta property="og:image:alt" content={data.pageData?.seoTitle ?? `Mitch Saylor`} />
		<meta name="twitter:image" content={data.pageData?.openGraphImage?.filename} />
		<meta name="twitter:image:alt" content={data.pageData?.seoTitle ?? `Mitch Saylor`} />
	{/if}
</svelte:head>

{#if data.pageData?.body?.length > 0}
	{#each data.pageData?.body as blok}
		<BlokRouter {blok} />
	{/each}
{/if}
