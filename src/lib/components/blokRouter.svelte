<script lang="ts">
	export let blok: Blok;

	// Types
	import type { Blok } from '$lib/types/bloks';

	// Bloks
	import NoBlok from '$lib/bloks/noBlok.svelte';
	import Hero from '$lib/bloks/hero.svelte';
	import TextContent from '$lib/bloks/textContent.svelte';
	import Footer from '$lib/bloks/footer.svelte';
	import ServiceList from '$lib/bloks/serviceList.svelte';
	import LogoCloud from '$lib/bloks/logoCloud.svelte';
	import ContactForm from '$lib/bloks/contactForm.svelte';

	const options = [
		{ name: 'hero', component: Hero },
		{ name: 'textContent', component: TextContent },
		{ name: 'footer', component: Footer },
		{ name: 'serviceList', component: ServiceList },
		{ name: 'logoCloud', component: LogoCloud },
		{ name: 'contactForm', component: ContactForm }
	];
</script>

{#key blok._uid}
	{#if options.filter((option) => option.name === blok.component)[0]?.component}
		<svelte:component
			this={options.filter((option) => option.name === blok.component)[0]?.component}
			{blok}
		/>
	{:else}
		<NoBlok {blok} />
	{/if}
{/key}
