<script lang="ts">
	export let blok: Blok;

	// Types
	import type { Blok } from '$lib/types/bloks';

	// Components
	import Container from '$lib/layout/container.svelte';
</script>

<Container class="my-12">
	<div
		class="text-[#C92020] rounded-2xl font-medium bg-black/5 ring-1 ring-black/10 px-5 py-2"
	>
		Unknown blok type: <span class="font-mono text-sm font-normal pl-1">{blok.component}</span>
	</div>
</Container>
