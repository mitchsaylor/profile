<script lang="ts">
	export let blok: Blok;

	// Types
	import type { Blok } from '$lib/types/bloks';

	// Components
	import ServiceCard from '$lib/bloks/serviceCard.svelte';
</script>

{#if blok.component === 'serviceList'}
	<ul class="mx-auto flex w-full max-w-3xl flex-col divide-y divide-gray-250 px-6 sm:px-12">
		{#if blok.body?.length > 0}
			{#each blok.body as subBlok}
				<ServiceCard blok={subBlok} />
			{/each}
		{/if}
	</ul>
{/if}
