<script lang="ts">
	let { children } = $props();

	// CSS
	import '../app.css';

	// Components
	import Sidebar from '$lib/sidebar.svelte';
</script>

<div class="relative flex min-h-dvh w-full flex-col">
	<Sidebar />
	<main class="relative grow lg:ml-[50%] lg:w-1/2">
		<svg class="absolute top-0 left-0 h-full w-2.5 lg:-left-3 lg:w-1.5" aria-hidden="true"
			><defs
				><pattern id=":S4:" width="6" height="8" patternUnits="userSpaceOnUse"
					><path d="M0 0H6M0 8H6" class="stroke-white/10" fill="none"></path></pattern
				></defs
			><rect width="100%" height="100%" fill="url(#:S4:)"></rect></svg
		>
		<div class="pt-18 lg:pt-56">
			{@render children()}
		</div>
	</main>
	<footer class="text-dark-gray mx-auto mb-12 w-full max-w-lg px-8 text-sm lg:hidden">
		&copy; <span class="noscript"
			>{new Date().getFullYear() > 2022 ? `2022-${new Date().getFullYear()}` : '2022'}</span
		><span class="noscripttext hidden">2022-Present</span> Mitch Saylor / All Rights Reserved.
	</footer>
</div>
