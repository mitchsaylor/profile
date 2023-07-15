<script lang="ts">
	export let blok: Blok,
		noMargin: boolean = false;

	// Types
	import type { Blok } from '$lib/types/bloks';

	// Components
	import RichTextRender from '$lib/components/richTextRender.svelte';
	import Container from '$lib/layout/container.svelte';
</script>

{#if blok.component === 'textContent'}
	<div
		class="{blok.darkBackground ? 'bg-gray-950 py-12 text-white' : ''} {noMargin ? '' : 'my-14'}"
	>
		<Container
			class="prose prose-sm prose-neutral {blok.stylizeFirstLine
				? 'first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-[3rem] first-letter:font-bold first-letter:leading-[3rem] first-line:uppercase first-line:tracking-widest'
				: ''} {blok.twoColumns ? 'md:columns-2 gap-x-8' : ''}"
		>
			{#if blok.body?.content?.length > 0}
				{#each blok.body?.content as section}
					<RichTextRender {section} darkBackground={blok.darkBackground} />
				{/each}
			{/if}
		</Container>
	</div>
{/if}
