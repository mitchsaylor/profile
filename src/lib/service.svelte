<script lang="ts">
	let { children, title }: { children: Snippet; title: string } = $props();

	// Types
	import type { Snippet } from 'svelte';
</script>

<div class="relative mx-auto mb-24 w-full max-w-lg px-8 lg:mx-0 lg:max-w-2xl lg:px-20">
	<div class="absolute top-4 right-full h-px w-4 bg-white/50"></div>
	<h2 class="mb-4 text-2xl font-light">{title}</h2>
	{@render children()}
</div>
