<script lang="ts">
	export let src: string,
		alt: string,
		sizes: ImageSize[],
		noRing: boolean = false;

	// Types
	import type { ImageSize } from '$lib/types';

	const formats: string[] = ['webp', 'jpeg'];
</script>

{#if (src?.startsWith('https://a.storyblok') || src?.startsWith('https://a-us.storyblok')) && (src?.slice(-4) === '.jpg' || src?.slice(-4) === '.png')}
	<picture>
		{#each formats as format}
			{#if sizes?.length > 0}
				{#each sizes.sort((a, b) => b.minScreenWidth - a.minScreenWidth) as size}
					<source
						srcset={`${src}/m/${size.imageWidth}x0/filters:format(${format})`}
						type={`image/${format}`}
						media={`(min-width: ${size.minScreenWidth}px)`}
					/>
				{/each}
			{/if}
		{/each}
		<img
			{alt}
			style="color:transparent"
			{src}
			class="bg-gray-50 {noRing ? '' : 'ring-1 ring-gray-500/50'} {$$props.class}"
		/>
	</picture>
{:else}
	<img {src} {alt} class="bg-gray-50 {noRing ? '' : 'ring-1 ring-gray-250'} {$$props.class}" />
{/if}
