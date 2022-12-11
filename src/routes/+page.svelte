<script lang="ts">
	export let data: any;

	import Logo from '$lib/components/logo.svelte';
	import Intro from '$lib/components/intro.svelte';
	import Tools from '$lib/components/tools.svelte';
	import Social from '$lib/components/social.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Built from '$lib/components/built.svelte';
</script>

<svelte:head>
	<title>Mitch Saylor - Designer/Developer | Lititz, PA</title>
	<meta
		name="description"
		content="A small town guy who designs and builds modern serverless websites and applications that are both extremely performant and secure."
	/>
	<meta property="og:title" content="Mitch Saylor - Designer/Developer | Lititz, PA" />
	<meta
		property="og:description"
		content="A small town guy who designs and builds modern serverless websites and applications that are both extremely performant and secure."
	/>
	<meta name="robots" content="index,follow" />
</svelte:head>

<header
	class="flex flex-wrap items-start justify-between gap-x-6 text-accent/80 contrast-more:text-accent w-full"
>
	<address class="font-meno text-xl lowercase italic">
		<span class="sr-only">Mitch Saylor</span>
		Lititz, Pennsylvania
	</address>
	<Social />
</header>
<Logo />
<Intro />
<Tools webTools={data.webTools} />
<Built services={data.services} />
<Footer />
